// Components
import Titlebar from '../titlebar/Titlebar';
import Navbar from '../navbar/Navbar';
import Breadcrumb from '../breadcrumb/Breadcrumb';

// Style
import './page-header.css';

const PageHeader = () => {
    return (
        <header className='page-header'>
            <Titlebar />
            <Navbar />
            <Breadcrumb />
        </header>
    );
}

export default PageHeader;