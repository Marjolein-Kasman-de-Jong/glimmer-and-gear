// Style
import './hamburger-menu.css';

const HamburgerMenuIcon = ({ onClick }) => {
    return (
        <button type='button' className='hamburger-menu-button' onClick={onClick}>
            <span className='hamburger-menu-bar'></span>
            <span className='hamburger-menu-bar'></span>
            <span className='hamburger-menu-bar'></span>
        </button>
    );
}

export default HamburgerMenuIcon;