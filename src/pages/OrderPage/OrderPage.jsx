import cartIcon from '../../assets/cart-icon.png'
import checkMark from '../../assets/checkmark-white.png'
import Header from '../../components/Header/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import './OrderPage.css'
import formateMoney from '../../utilities/money'


function OrderPage({ cart, loadCartData }) {

    const [orders, setOrders] = useState([])
    const [addedProductId, setAddedProductId] = useState(null)

    const addToCart = async (productId) => {
        await axios.post('/api/cart-items', {
            productId,
            quantity: 1
        })
        await loadCartData()
        setAddedProductId(productId)
        setTimeout(() => setAddedProductId(null), 2000)
    }

    useEffect(() => {
        const fetchOrderData = async () => {

            const response = await axios.get('/api/orders?expand=products')
            setOrders(response.data)
        }
        fetchOrderData()

    }, [])

    return (
        <>
            <title>Order Page</title>

            <Header cart={cart} />

            <div className='orderPage'>
                <h2>Your orders</h2>
                {
                    orders.map((order) => {
                        return (
                            <>
                                <div key={order.id} className='orderInfo'>
                                    <div className='orderInfo-leftSide'>
                                        <h5 className='orderInfo-heading'>Order placed : <span>{dayjs(order.orderTimeMs).format('dddd, MMMM D')}</span></h5>
                                        <h5 className='orderInfo-heading'>Total : <span>{formateMoney(order.totalCostCents)}</span></h5>
                                    </div>
                                    <h5 className='orderInfo-heading'>Order Id : <span>{order.id}</span></h5>
                                </div>

                                <div className='orderCard'>
                                    {order.products.map((orderProduct) => {
                                        return (
                                            <>
                                                <div key={orderProduct.product.id} className='orderCardDetail'>
                                                    <div className='orderCard-leftside'>
                                                        <img className='productImg' src={`/${orderProduct.product.image}`} alt={orderProduct.product.name} />
                                                        <div className='productDetail'>
                                                            <p className='productName'>{orderProduct.product.name}</p>
                                                            <p>Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}</p>
                                                            <p>Quantity: {orderProduct.quantity}</p>
                                                            <button onClick={() => addToCart(orderProduct.product.id)} className='btn-primary'
                                                                disabled={addedProductId === orderProduct.product.id}>
                                                                {
                                                                    addedProductId === orderProduct.product.id ? (
                                                                        <>
                                                                            <img className='cart-icon' src={checkMark} alt="" />
                                                                            <p>Added</p>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <img className='cart-icon' src={cartIcon} alt="" />
                                                                            <p>Add to Cart</p>
                                                                        </>
                                                                    )
                                                                }
                                                                
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <button className='trackBtn'>Track Package</button>
                                                </div>
                                            </>
                                        )
                                    })}


                                </div>
                            </>
                        )
                    })
                }

            </div>
        </>
    )
}

export default OrderPage