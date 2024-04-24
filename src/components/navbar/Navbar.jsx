import { useEffect, useState, useContext } from 'react';

// Context
import { AuthContext } from '../../context/AuthContext';
import { ShoppingCartContext } from '../../context/shoppingCartContext';

// Components
import HamburgerMenu from '../hamburger-menu/HamburgerMenu';
import NavLink from '../nav-link/NavLink';

// Constants
import categories from '../../constants/categories';

// Icons
import { TiShoppingCart } from 'react-icons/ti';

// Style
import './navbar.css';

const Navbar = () => {
    const { itemsInCart } = useContext(ShoppingCartContext);
    const { isLoggedIn, logout } = useContext(AuthContext);

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

    // Only trigger onMouseEnter and onMouseLeave if screenWidth > 600
    function hideAndShowDropdownContent(value) {
        if (screenWidth > 600) {
            toggleDropdownContent(value);
        }
    }

    // Handle click on navbar item
    function handleNavBarItemClick(e) {
        if (e.target.className === 'hamburger-menu-bar') {
            toggleLeftMenuItems(!leftMenuItems);
        } else if (screenWidth <= 600) {
            toggleLeftMenuItems(false);
        }
        toggleDropdownContent(false);
    }

    // Handle click on menu item
    function handleMenuItemClick(e) {
        if (e.target.textContent === 'Categories') {
            toggleDropdownContent(!dropdownContent);
        } else {
            toggleDropdownContent(false);
        }
        if (e.target.textContent != 'Categories' && screenWidth <= 600) {
            toggleLeftMenuItems(false);
        }
    }

    return (
        <nav>
            {/* Hamburger menu */}
            <HamburgerMenu onClick={(e) => handleNavBarItemClick(e)} />
            {/* Left menu */}
            {
                leftMenuItems &&
                <ul className='left-menu'>
                    <li className='dropdown' onMouseEnter={() => hideAndShowDropdownContent(true)} onMouseLeave={() => hideAndShowDropdownContent(false)}>
                        <button type='button' className='link' onClick={(e) => handleMenuItemClick(e)}>
                            Categories
                        </button>
                        {/* Dropdown menu */}
                        {
                            dropdownContent &&
                            <ul className="dropdown-content">
                                {
                                    categories.map((item) => {
                                        return (
                                            <NavLink key={item.category} type='category-link' linkTo={`/category/${item.category}`} screenWidth={screenWidth} onClick={(e) => handleMenuItemClick(e)}>{item.title}</NavLink>
                                        );
                                    })
                                }
                            </ul>
                        }
                    </li>
                    <NavLink type='link' linkTo='/faq' screenWidth={screenWidth} onClick={(e) => handleMenuItemClick(e)}>FAQs</NavLink>
                    <NavLink type='link' linkTo='/contact' screenWidth={screenWidth} onClick={(e) => handleMenuItemClick(e)}>Contact</NavLink>
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
                    <NavLink type='link' linkTo='/login-and-registration' screenWidth={screenWidth} onClick={(e) => handleNavBarItemClick(e)}>Login</NavLink>}
                <NavLink type='link' linkTo='/shopping-cart' screenWidth={screenWidth} onClick={(e) => handleNavBarItemClick(e)}>
                    <TiShoppingCart />
                    {
                        itemsInCart > 0 &&
                        <div className='shopping-cart-badge'>
                            {itemsInCart}
                        </div>
                    }
                </NavLink>
            </ul>
        </nav>
    );
}

export default Navbar;