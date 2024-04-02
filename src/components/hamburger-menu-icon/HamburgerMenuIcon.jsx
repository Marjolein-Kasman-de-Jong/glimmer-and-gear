// Style
import './hamburger-menu-icon.css';

const HamburgerMenuIcon = ({ onClick }) => {
    return (
        <button type='button' className='hamburger-menu-icon' onClick={onClick}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </button>
    );
}

export default HamburgerMenuIcon;