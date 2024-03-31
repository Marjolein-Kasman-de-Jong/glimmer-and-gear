import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Images
import shoppingCart from '../../assets/icon-shopping-cart.jpeg';

// Style
import './navbar.css';

const Navbar = () => {
    const [leftMenuItems, toggleLeftMenuItems] = useState(false);
    const [dropdownContent, toggleDropdownContent] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Monitor screen width
    const handleChange = () => {
        setScreenWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleChange);
    }, [])

    useEffect(() => {
        // Always show left menu items on larger screens
        if (screenWidth > 600) {
            toggleLeftMenuItems(true);
        }
        // Initially hide left menu items on smaller screens
        if (screenWidth <= 600) {
            toggleLeftMenuItems(false);
        }
    }, [screenWidth])

    // Show/hide left menu items when hamburger menu is clicked
    function toggleLeftMenu() {
        toggleLeftMenuItems(!leftMenuItems);
    }

    // Toggle dropdown menu
    function toggleDropdownMenu() {
        toggleDropdownContent(!dropdownContent);
    }

    return (
        <nav>
            {/* Hamburger menu */}
            <button type='button' className='hamburger-menu' onClick={toggleLeftMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </button>
            {/* Left menu */}
            {
                leftMenuItems &&
                <ul className='left-menu'>
                    <li className='dropdown' onMouseEnter={() => toggleDropdownContent(true)} onMouseLeave={() => toggleDropdownContent(false)}>
                        <button type='button' className='link' onClick={toggleDropdownMenu}>
                            Categories
                        </button>
                        {
                        dropdownContent &&
                        <ul className="dropdown-content">
                            <li>
                                <Link to='/mens-clothing' className='category-link' onClick={() => screenWidth <= 600 && toggleLeftMenuItems(false)}>
                                    Men's clothing
                                </Link>
                            </li>
                            <li>
                                <Link to='/womens-clothing' className='category-link' onClick={() => screenWidth <= 600 && toggleLeftMenuItems(false)}>
                                    Women's clothing
                                </Link>
                            </li>
                            <li>
                                <Link to='/electronics' className='category-link' onClick={() => screenWidth <= 600 && toggleLeftMenuItems(false)}>
                                    Electronics
                                </Link>
                            </li>
                            <li>
                                <Link to='/jewelry' className='category-link' onClick={() => screenWidth <= 600 && toggleLeftMenuItems(false)}>
                                    Jewelry
                                </Link>
                            </li>
                        </ul>
}
                    </li>
                    <li>
                        <Link to='/faq' className='link' onClick={() => screenWidth <= 600 && toggleLeftMenuItems(false)}>
                            FAQs
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact' className='link' onClick={() => screenWidth <= 600 && toggleLeftMenuItems(false)}>
                            Contact
                        </Link>
                    </li>
                </ul>
            }
            {/* Right menu */}
            <ul className='right-menu'>
                <li>
                    <Link to='/login-and-registration' className='link' onClick={() => screenWidth <= 600 && toggleLeftMenuItems(false)}>
                        Login
                    </Link>
                </li>
                <li>
                    <Link to='/shopping-cart' onClick={() => screenWidth <= 600 && toggleLeftMenuItems(false)}>
                        <img src={shoppingCart} alt='Shopping cart icon' />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;