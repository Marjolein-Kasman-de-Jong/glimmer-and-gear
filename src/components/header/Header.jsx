// Components
import Titlebar from '../titlebar/Titlebar';
import Navbar from '../navbar/Navbar';

// Style
import './header.css'

const Header = () => {
    return (
        <header>
            <Titlebar />
            <Navbar />
        </header>
    );
}

export default Header;