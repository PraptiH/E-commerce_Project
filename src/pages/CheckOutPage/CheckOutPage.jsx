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

    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((response) => {
                setDeliveryOptions(response.data)
            })
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
                        {deliveryOptions.length>0 && cart.map((cartItem) => {

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
                        <h4>Payment Summary</h4>
                        <p className='itemPrice'>Items(2): <span >$31.85</span></p>
                        <p className='itemPrice'>Shipping & handling: <span>$0.00</span> </p>
                        <hr style={{ marginLeft: "85%" }} />
                        <p className='itemPrice'>Total before tax: <span>31.85</span></p>
                        <p className='itemPrice'>Estimated tax (10%): <span>3.19</span></p>
                        <hr />
                        <p className='totalOrder'>checkOut total: <span>$35.04</span></p>
                        <button className='button-primary'>Place your order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOutPage