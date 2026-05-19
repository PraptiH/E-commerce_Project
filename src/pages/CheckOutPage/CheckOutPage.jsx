import logo from '../../assets/logo-green.png'
import mobileLogo from '../../assets/mobile-logo-green.png'
import checkOutIcon from '../../assets/checkout-lock-icon.png'
import cottonSocks from '../../assets/athletic-cotton-socks-6-pairs.jpg'
import basketBall from '../../assets/intermediate-composite-basketball.jpg'
import './CheckOutPage.css'

function CheckOutPage() {
    return (
        <>
            <div className="checkOutHeader">
                <img className='logo' src={logo} alt="" />
                <img className='mobile-logo' src={mobileLogo} alt="" />
                <p>CheckOut <span style={{ color: 'green' }}>(2 items)</span></p>
                <img className='checkOutIcon' src={checkOutIcon} alt="" />
            </div>

            <div className='order'>
                <h3>Reviw your order</h3>
                <div className='orderDetails'>

                    <div className='orderDetails2'>
                        <div className='orderInfo'>
                            <h4 className='deliveryDate'>Delivery date : Wednesday, May 27</h4>
                            <div className='orderInfo2'>

                                <img src={cottonSocks} alt="" />

                                <div className='productInfo'>
                                    <p className='productName'>Black and Gray Athletic Cotton Socks - 6 Pairs</p>
                                    <p className='productPrice'>$10.90</p>
                                    <p className='productQuantity'>Quantity: 2 <span> Update Delete</span></p>
                                </div>

                                <div className='radio-group'>
                                    <p className='option'>Choose a delivery option:</p>
                                    <label>
                                        <input className='radio-input' type="radio" name='options' />Wednesday, May 27
                                        <p className='shippingCost'>FREE Shipping</p>
                                    </label>
                                    <label>
                                        <input className='radio-input' type="radio" name='options' />Thursday, May 21
                                        <p className='shippingCost'>$4.99 - Shipping</p>
                                    </label>
                                    <label>
                                        <input className='radio-input' type="radio" name='options' />Tuesday, May 19
                                        <p className='shippingCost'>$4.99 - Shipping</p>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='orderInfo'>
                            <h4 className='deliveryDate'>Delivery date : Wednesday, May 27</h4>
                            <div className='orderInfo2'>

                                <img src={basketBall} alt="" />

                                <div className='productInfo'>
                                    <p className='productName'>Intermediate Size Basketball</p>
                                    <p className='productPrice'>$20.95</p>
                                    <p className='productQuantity'>Quantity: 2 <span> Update Delete</span></p>
                                </div>

                                <div className='radio-group'>
                                    <p className='option'>Choose a delivery option:</p>
                                    <label>
                                        <input className='radio-input' type="radio" name='options' />Wednesday, May 27
                                        <p className='shippingCost'>FREE Shipping</p>
                                    </label>
                                    <label>
                                        <input className='radio-input' type="radio" name='options' />Thursday, May 21
                                        <p className='shippingCost'>$4.99 - Shipping</p>
                                    </label>
                                    <label>
                                        <input className='radio-input' type="radio" name='options' />Tuesday, May 19
                                        <p className='shippingCost'>$4.99 - Shipping</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>      

                    <div className='paymentDetails'>
                        <h4>Payment Summary</h4>
                        <p className='itemPrice'>Items(2): <span >$31.85</span></p>
                        <p className='itemPrice'>Shipping & handling: <span>$0.00</span> </p>
                        <hr style={{marginLeft:"85%"}} />
                        <p className='itemPrice'>Total before tax: <span>31.85</span></p>
                        <p className='itemPrice'>Estimated tax (10%): <span>3.19</span></p>
                        <hr />
                        <p className='totalOrder'>Order total: <span>$35.04</span></p>
                        <button className='button-primary'>Place your order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOutPage