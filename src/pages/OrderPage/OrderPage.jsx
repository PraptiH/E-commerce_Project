import logo from '../../assets/logo-white.png'
import mobileLogo from '../../assets/mobile-logo-white.png'
import searchIcon from '../../assets/search-icon.png'
import cartIcon from '../../assets/cart-icon.png'
import socks from '../../assets/athletic-cotton-socks-6-pairs.jpg'
import basketball from '../../assets/intermediate-composite-basketball.jpg'
import './OrderPage.css'
import Header from '../../components/Header/Header'


function OrderPage() {
    return (
        <>
            <title>Order Page</title>
            
            <Header/>

            <div className='orderPage'>
                <h2>Your orders</h2>
                <div className='orderInfo'>
                    <div className='orderInfo-leftSide'>
                        <h5 className='orderInfo-heading'>Order placed : <span>May 21</span></h5>
                        <h5 className='orderInfo-heading'>Total : <span>$35.02</span></h5>
                    </div>
                    <h5 className='orderInfo-heading'>Order Id : <span>27cba69d-4c3d-4098-b42d-ac7fa62b7664</span></h5>
                </div>

                    <div className='orderCard'>
                        <div className='orderCardDetail'>
                            <div className='orderCard-leftside'>
                                <img className='productImg' src={socks} alt="" />
                                <div className='productDetail'>
                                    <p className='productName'>Black and Gray Athletic Cotton Socks - 6 Pairs</p>
                                    <p>Arriving on: May 26</p>
                                    <p>Quantity: 1</p>
                                    <button className='btn-primary'>
                                        <img className="cart-icon" src={cartIcon} alt="" />
                                        <p>Add to cart</p>
                                    </button>
                                </div>
                            </div>
                            <button className='trackBtn'>Track Package</button>
                        </div>

                        <div className='orderCardDetail'>
                            <div className='orderCard-leftside'>
                                <img className='productImg' src={basketball} alt="" />
                                <div className='productDetail'>
                                    <p className='productName'>Black and Gray Athletic Cotton Socks - 6 Pairs</p>
                                    <p>Arriving on: May 26</p>
                                    <p>Quantity: 1</p>
                                    <button className='btn-primary'>
                                        <img className="cart-icon" src={cartIcon} alt="" />
                                        <p>Add to cart</p>
                                    </button>
                                </div>
                            </div>
                            <button className='trackBtn'>Track Package</button>
                        </div>
                    </div>
                
            </div>
        </>
    )
}

export default OrderPage