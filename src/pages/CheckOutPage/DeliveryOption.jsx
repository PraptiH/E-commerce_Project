import axios from "axios"
import formateMoney from "../../utilities/money"
import dayjs from "dayjs"

function DeliveryOption({ cartItem, loadCartData, deliveryOptions }) {

    const updateDeliveryOption = async (deliveryOptionId) => {
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
            deliveryOptionId
        })
        await loadCartData()
    }

    return (
        <div className='radio-group'>
            <p className='option'>Choose a delivery option:</p>

            {deliveryOptions.map((deliveryOption) => {
                let shippingPrice = 'FREE Shipping'
                if (deliveryOption.priceCents > 0) {
                    shippingPrice = `${formateMoney(deliveryOption.priceCents)} - shipping`
                }

                return (
                    <label key={deliveryOption.id}>
                        <input
                            onChange={() => updateDeliveryOption(deliveryOption.id)}
                            className='radio-input' type="radio"
                            checked={deliveryOption.id === cartItem.deliveryOptionId}
                            name={`Delivery-option-${cartItem.productId}`} />
                        {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                        <p className='shippingCost'>{shippingPrice}</p>
                    </label>
                )
            })}
        </div>
    )
}

export default DeliveryOption