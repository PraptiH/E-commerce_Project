import logo from '../assets/logo-white.png'
import mobileLogo from '../assets/mobile-logo-white.png'
import searchIcon from '../assets/search-icon.png'
import cartIcon from '../assets/cart-icon.png'
import './HomePage.css'

function HomePage() {
    return (
        <>
            <div className="header">
                <div className="left-section">
                    <a className="header-link" href="">
                        <img className='logo' src={logo} />
                        <img className="mobile-logo" src={mobileLogo} />
                    </a>
                </div>

                <div className='middle-section'>
                    <input className='search-bar' type="text" placeholder='Search' />
                    <button className='search-button'>
                        <img className='search-icon' src={searchIcon} alt="" />
                    </button>
                </div>

                <div className="right-section">
                    <a className="orders-link header-link">
                        <span className="orders-text">Orders</span>
                    </a>

                    <a href="" className="cart-link">
                        <img className="cart-icon" src={cartIcon} alt="" />
                        <div className="cart-quantity">3</div>
                        <div className="cart-text">Cart</div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default HomePage;