import logo from '../../assets/logo-green.png'
import mobileLogo from '../../assets/mobile-logo-green.png'
import checkOutIcon from '../../assets/checkout-lock-icon.png'
import { Link } from 'react-router'
import './CheckOutPage.css'
import CheckOutProduct from './CheckOutProduct'
import PaymentDetails from './PaymentDetails'


function CheckOutPage({ cart, loadCartData }) {

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

                    <CheckOutProduct cart={cart} loadCartData={loadCartData}/>

                    <PaymentDetails cart={cart}/>
                </div>
            </div>
        </>
    )
}

export default CheckOutPage