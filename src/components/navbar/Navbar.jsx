// Images
import magnifyingGlass from '../../assets/magnifying-glass-solid.svg';
import shoppingCart from '../../assets/icon-shopping-cart.jpeg';

// Style
import './navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <ul>
                    <li>Categories</li>
                    <li>FAQs</li>
                    <li>Contact</li>
                </ul>
                <div className='search-field-wrapper'>
                    <input type='text' />
                    <img src={magnifyingGlass} alt='Magnifying glass icon' className='magnifying-glass'/>
                </div>
                <ul>
                    <li>Login</li>
                    <li>
                        <img src={shoppingCart} alt='Shopping cart icon' className='shopping-cart'/>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;