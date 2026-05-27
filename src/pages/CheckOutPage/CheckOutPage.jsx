import logo from '../../assets/logo-green.png'
import mobileLogo from '../../assets/mobile-logo-green.png'
import checkOutIcon from '../../assets/checkout-lock-icon.png'
import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import formateMoney from '../../utilities/money'
import './CheckOutPage.css'


function CheckOutPage({ cart }) {

    const [deliveryOptions, setDeliveryOptions] = useState([])
    const [paymentSummary, setPaymentSummary] = useState(null)

    useEffect(() => {

        const fetchDeliveryOptionData = async () => {
            const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            setDeliveryOptions(response.data)
        }
        fetchDeliveryOptionData()

        const fetchPaymentSummaryData = async () => {
            const response = await axios.get('/api/payment-summary')
            setPaymentSummary(response.data)
        }
        fetchPaymentSummaryData()

    }, [])

    return (
        <>
            <div className="checkOutHeader">
                <Link to="/">
                    <img className='logo' src={logo} alt="" />
                    <img className='mobile-logo' src={mobileLogo} alt="" />
                </Link>
                <p>CheckOut <span style={{ color: 'green' }}>(2 items)</span></p>
                <img className='checkOutIcon' src={checkOutIcon} alt="" />
            </div>

            <div className='checkOutPage'>
                <h3>Review your checkOut</h3>
                <div className='checkOutDetails'>

                    <div className='checkOutDetails2'>
                        {deliveryOptions.length > 0 && cart.map((cartItem) => {

                            const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                                return deliveryOption.id === cartItem.deliveryOptionId
                            })

                            return (
                                <div key={cartItem.productId} className='checkOutInfo'>
                                    <h4 className='deliveryDate'>{dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd,  MMMM D')}</h4>
                                    <div className='checkOutInfo2'>

                                        <div className='checkOutInfo2-leftside'>
                                            <img src={cartItem.product.image} alt="" />

                                            <div className='productInfo'>
                                                <p className='productName'>{cartItem.product.name}</p>
                                                <p className='productPrice'>{formateMoney(cartItem.product.priceCents)}</p>
                                                <p className='productQuantity'>Quantity: {cartItem.quantity}<span> Update Delete</span></p>
                                            </div>
                                        </div>

                                        <div className='radio-group'>
                                            <p className='option'>Choose a delivery option:</p>

                                            {deliveryOptions.map((deliveryOption) => {
                                                let shippingPrice = 'FREE Shipping'
                                                if (deliveryOption.priceCents > 0) {
                                                    shippingPrice = `${formateMoney(deliveryOption.priceCents)} - shipping`
                                                }
                                                return (
                                                    <label key={deliveryOption.id}>
                                                        <input className='radio-input' type="radio" checked={deliveryOption.id === cartItem.deliveryOptionId} name={`Delivery-option-${cartItem.productId}`} />{dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                                                        <p className='shippingCost'>{shippingPrice}</p>
                                                    </label>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className='paymentDetails'>
                        {
                            paymentSummary && (
                                <>
                                    <h4>Payment Summary</h4>
                                    <p className='itemPrice'>Items({paymentSummary.totalItems}): <span >{formateMoney(paymentSummary.productCostCents)}</span></p>
                                    <p className='itemPrice'>Shipping & handling: <span>{formateMoney(paymentSummary.shippingCostCents)}</span> </p>
                                    <hr style={{ marginLeft: "85%" }} />
                                    <p className='itemPrice'>Total before tax: <span>{formateMoney(paymentSummary.totalCostBeforeTaxCents)}</span></p>
                                    <p className='itemPrice'>Estimated tax (10%): <span>{formateMoney(paymentSummary.taxCents)}</span></p>
                                    <hr />
                                    <p className='totalOrder'>checkOut total: <span>{formateMoney(paymentSummary.totalCostCents)}</span></p>
                                    <button className='button-primary'>Place your order</button>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOutPage