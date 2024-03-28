// Images
import magnifyingGlass from '../../assets/icon-magnifying-glass.svg';
import shoppingCart from '../../assets/icon-shopping-cart.jpeg';

// Style
import './navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                {/* Menu 1 */}
                <ul>
                    <li>Categories</li>
                    <li>FAQs</li>
                    <li>Contact</li>
                </ul>
                {/* Search bar */}
                <div className='search-field-wrapper'>
                    <input type='text' placeholder='What are you looking for?' />
                    <img src={magnifyingGlass} alt='Magnifying glass icon' className='magnifying-glass'/>
                </div>
                {/* Menu 2 */}
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