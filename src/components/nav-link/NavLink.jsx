import { Link } from 'react-router-dom';

// Style
import './nav-link.css';

const NavLink = ({ type, linkTo, onClick, children }) => {
    return (
        <li>
            {/* <Link to={linkTo} className={type} onClick={() => screenWidth <= 600 && onClick(false)}> */}
            <Link to={linkTo} className={type} onClick={onClick}>
                {children}
            </Link>
        </li>
    );
}

export default NavLink;
