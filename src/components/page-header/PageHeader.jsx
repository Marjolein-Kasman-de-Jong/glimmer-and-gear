// Components
import Titlebar from '../titlebar/Titlebar';
import Navbar from '../navbar/Navbar';

// Style
import './page-header.css';

const PageHeader = () => {
    return (
        <header className='page-header'>
            <Titlebar />
            <Navbar />
        </header>
    );
}

export default PageHeader;