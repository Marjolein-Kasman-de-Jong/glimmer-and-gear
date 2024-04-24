import { Link, useLocation } from 'react-router-dom';

// Icons
import { SlHome } from 'react-icons/sl';

// Style
import './breadcrumb.css';

const Breadcrumb = () => {
    let currentLink = '';

    // Get current location
    const location = useLocation(null);

    // Split current location into an array
    let crumbs = location.pathname.split('/');

    // Remove empty items from array
    crumbs = crumbs.filter((crumb) => {
        return crumb != '';
    });

    crumbs = crumbs.map((crumb) => {
        // Add array items to currentLink
        currentLink += `/${crumb}`;
        // Create crumbs
        if (crumb === 'category' || crumb === 'product') {
            // Return item without link for crumbs with no associated content
            return (
                <div
                    className='crumb'
                    key={crumb}
                >
                    {crumb}
                </div>
            );
        } else {
            // Return item with link for crumbs with associated content
            return (
                <div
                    className='crumb'
                    key={crumb}
                >
                    <Link to={currentLink}>
                        {crumb}
                    </Link>
                </div>
            );
        }
    });

    return (
        <div className='breadcrumbs'>
            <div className='crumb'>
                <Link to={'/'}>
                    <SlHome className='home-icon' />
                </Link>
            </div>
            {crumbs}
        </div>
    );
}

export default Breadcrumb;