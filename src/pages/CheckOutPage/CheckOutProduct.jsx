import dayjs from "dayjs"
import formateMoney from "../../utilities/money"
import { useEffect, useState } from "react"
import axios from "axios"
import DeliveryOption from "./DeliveryOption"
import UpdateQuantity from "./UpdateQuantity"

function CheckOutProduct({ cart, loadCartData }) {

    const [deliveryOptions, setDeliveryOptions] = useState([])

    const saveUpdatedQuantity = () => {
        setIsEditing(false)
    }

    useEffect(() => {
        const fetchDeliveryOptionData = async () => {
            const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            setDeliveryOptions(response.data)
        }

        fetchDeliveryOptionData()
    }, [])

    return (
        <div className='checkOutDetails2'>
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                    return deliveryOption.id === cartItem.deliveryOptionId
                })

                const deleteCartItem = async () => {
                    await axios.delete(`/api/cart-items/${cartItem.productId}`)
                    await loadCartData()
                }



                return (
                    <div key={cartItem.productId} className='checkOutInfo'>
                        {selectedDeliveryOption && (
                            <h4 className='deliveryDate'>Delivery Date :
                                {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </h4>
                        )}
                        <div className='checkOutInfo2'>

                            <div className='checkOutInfo2-leftside'>

                                <img src={cartItem.product.image} alt="" />

                                <div className='productInfo'>
                                    <p className='productName'>{cartItem.product.name}</p>
                                    <p className='productPrice'>{formateMoney(cartItem.product.priceCents)}</p>
                                    <p className='productQuantity'>Quantity : 
                                        <UpdateQuantity cartItem={cartItem} loadCartData={loadCartData} />
                                        <span onClick={deleteCartItem}> Delete</span></p>
                                </div>
                            </div>

                            <DeliveryOption
                                cartItem={cartItem}
                                loadCartData={loadCartData}
                                deliveryOptions={deliveryOptions}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CheckOutProduct

