// Style
import './hamburger-menu-icon.css';

const HamburgerMenu = ({ onClick }) => {
    return (
        <button type='button' className='hamburger-menu' onClick={onClick}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </button>
    );
}

export default HamburgerMenu;