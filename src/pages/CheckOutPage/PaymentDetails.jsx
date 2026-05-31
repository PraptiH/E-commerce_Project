import axios from "axios"
import { useEffect, useState } from "react"
import formateMoney from "../../utilities/money"
import { useNavigate } from "react-router"

function PaymentDetails({cart, loadCartData}) {

    const [paymentSummary, setPaymentSummary] = useState(null)
    const navigate= useNavigate()

    const placeOrder = async()=>{
        await axios.post('/api/orders')
        await loadCartData()
        navigate('/order')
    }

    useEffect(() => {

        const fetchPaymentSummaryData = async () => {
            const response = await axios.get('/api/payment-summary')
            setPaymentSummary(response.data)
        }
        fetchPaymentSummaryData()

    }, [cart])
    return (
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
                        <button onClick={placeOrder} className='button-primary'>Place your order</button>
                    </>
                )
            }
        </div>
    )
}

export default PaymentDetails