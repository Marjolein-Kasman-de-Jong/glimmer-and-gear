import { useEffect, useState } from 'react';

// Components
import HamburgerMenuIcon from '../hamburger-menu-icon/HamburgerMenuIcon';
import Navlink from '../navlink/NavLink';

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
            {/* Hamburger menu icon */}
            <HamburgerMenuIcon onClick={toggleLeftMenu} />
            {/* Left menu */}
            {
                leftMenuItems &&
                <ul className='left-menu'>
                    <li className='dropdown' onMouseEnter={() => toggleDropdownContent(true)} onMouseLeave={() => toggleDropdownContent(false)}>
                        <button type='button' className='link' onClick={toggleDropdownMenu}>
                            Categories
                        </button>
                        {/* Dropdown menu */}
                        {
                            dropdownContent &&
                            <ul className="dropdown-content">
                                <Navlink type='category-link' linkTo='/mens-clothing' screenWidth={screenWidth} onClick={toggleLeftMenuItems}>Men's clothing</Navlink>
                                <Navlink type='category-link' linkTo='/womens-clothing' screenWidth={screenWidth} onClick={toggleLeftMenuItems}>Women's clothing</Navlink>
                                <Navlink type='category-link' linkTo='/electronics' screenWidth={screenWidth} onClick={toggleLeftMenuItems}>Electronics</Navlink>
                                <Navlink type='category-link' linkTo='/jewelry' screenWidth={screenWidth} onClick={toggleLeftMenuItems}>Jewelry</Navlink>
                            </ul>
                        }
                    </li>
                    <Navlink type='link' linkTo='/faq' screenWidth={screenWidth} onClick={toggleLeftMenuItems}>FAQs</Navlink>
                    <Navlink type='link' linkTo='/contact' screenWidth={screenWidth} onClick={toggleLeftMenuItems}>Contact</Navlink>
                </ul>
            }
            {/* Right menu */}
            <ul className='right-menu'>
                <Navlink type='link' linkTo='/login-and-registration' screenWidth={screenWidth} onClick={toggleLeftMenuItems}>Login</Navlink>
                <Navlink type='link' linkTo='/shopping-cart' screenWidth={screenWidth} onClick={toggleLeftMenuItems}><img src={shoppingCart} alt='Shopping cart icon' /></Navlink>
            </ul>
        </nav>
    );
}

export default Navbar;