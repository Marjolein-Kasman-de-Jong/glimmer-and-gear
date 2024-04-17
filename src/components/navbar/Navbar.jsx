import { useEffect, useState, useContext } from 'react';

// Context
import { AuthContext } from '../../context/AuthContext';

// Components
import HamburgerMenu from '../hamburger-menu/HamburgerMenu';
import NavLink from '../nav-link/NavLink';

// Icons
import { TiShoppingCart } from 'react-icons/ti';

// Style
import './navbar.css';

const Navbar = () => {
    const [leftMenuItems, toggleLeftMenuItems] = useState(false);
    const [dropdownContent, toggleDropdownContent] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const { isLoggedIn, logout } = useContext(AuthContext);

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
            <HamburgerMenu onClick={toggleLeftMenu} />
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
                                <NavLink type='category-link' linkTo='/category/mens-clothing' screenWidth={screenWidth} onClick={toggleLeftMenuItems}>Men's clothing</NavLink>
                                <NavLink type='category-link' linkTo='/category/womens-clothing' screenWidth={screenWidth} onClick={toggleLeftMenuItems}>Women's clothing</NavLink>
                                <NavLink type='category-link' linkTo='/category/electronics' screenWidth={screenWidth} onClick={toggleLeftMenuItems}>Electronics</NavLink>
                                <NavLink type='category-link' linkTo='/category/jewelry' screenWidth={screenWidth} onClick={toggleLeftMenuItems}>Jewelry</NavLink>
                            </ul>
                        }
                    </li>
                    <NavLink type='link' linkTo='/faq' screenWidth={screenWidth} onClick={toggleLeftMenuItems}>FAQs</NavLink>
                    <NavLink type='link' linkTo='/contact' screenWidth={screenWidth} onClick={toggleLeftMenuItems}>Contact</NavLink>
                </ul>
            }
            {/* Right menu */}
            <ul className='right-menu'>
                {isLoggedIn ?
                    <>
                        <NavLink type='link' linkTo='/profile' screenWidth={screenWidth}>User profile</NavLink>
                        <NavLink type='link' linkTo='/login-and-registration' screenWidth={screenWidth} onClick={logout}>Logout</NavLink>
                    </>
                    :
                    <NavLink type='link' linkTo='/login-and-registration' screenWidth={screenWidth} onClick={toggleLeftMenuItems}>Login</NavLink>}
                <NavLink type='link' linkTo='/shopping-cart' screenWidth={screenWidth} onClick={toggleLeftMenuItems}><TiShoppingCart /></NavLink>
            </ul>
        </nav>
    );
}

export default Navbar;