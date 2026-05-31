import axios from "axios"
import { useState } from "react"

function UpdateQuantity({ cartItem, loadCartData }) {

    const [quantity, setQuantity] = useState(cartItem.quantity)
    const [isEditing, setIsEditing] = useState(false)

    const updateCartItem = async () => {
        await axios.put(`/api/cart-items/${cartItem.productId}`, {

            quantity: Number(quantity)
        })
        setIsEditing(false)
        await loadCartData()
    }

    return (
        <>
            {isEditing ? (
                <>
                    <input className="updateQuantity"
                        type="number"
                        min="1"
                        max="10"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <span onClick={updateCartItem}> Save</span>
                </>
            ) : (
                <>
                    <span className="quantityNumber">{quantity}</span>
                    <span onClick={() => setIsEditing(true)}> Update</span>
                </>
            )}
        </>
    )
}

export default UpdateQuantity