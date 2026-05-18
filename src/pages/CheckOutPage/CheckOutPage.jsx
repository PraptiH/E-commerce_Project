import logo from '../../assets/logo-green.png'
import mobileLogo from '../../assets/mobile-logo-green.png'
import checkOutIcon from '../../assets/checkout-lock-icon.png'
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
        </>
    )
}

export default CheckOutPage