import { Link } from 'react-router-dom';

// Style
import './navlink.css';

const Navlink = ({ type, linkTo, onClick, children }) => {
    return (
        <li>
            <Link to={linkTo} className={type} onClick={() => screenWidth <= 600 && onClick(false)}>
                {children}
            </Link>
        </li>
    );
}

export default Navlink;
