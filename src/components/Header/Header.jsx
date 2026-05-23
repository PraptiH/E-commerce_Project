import logo from '../../assets/logo-white.png'
import mobileLogo from '../../assets/mobile-logo-white.png'
import searchIcon from '../../assets/search-icon.png'
import cartIcon from '../../assets/cart-icon.png'
import { NavLink } from 'react-router'
import './Header.css'

function Header() {
    return (
        <>
            <div className="header">
                <div className="left-section">
                    <NavLink className="header-link" to="/">
                        <img className='logo' src={logo} />
                        <img className="mobile-logo" src={mobileLogo} />
                    </NavLink>
                </div>

                <div className='middle-section'>
                    <input className='search-bar' type="text" placeholder='Search' />
                    <button className='search-button'>
                        <img className='search-icon' src={searchIcon} alt="" />
                    </button>
                </div>

                <div className="right-section">
                    <NavLink
                        to='/order'
                        className={({ isActive }) => `orders-link header-link${isActive ? ' active' : ''}`}
                    >
                        <span className="orders-text">Orders</span>
                    </NavLink>

                    <NavLink to="/checkOut" className="cart-link">
                        <img className="cart-icon" src={cartIcon} alt="" />
                        <p className="cart-quantity">3</p>
                        <p className="cart-text">Cart</p>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Header