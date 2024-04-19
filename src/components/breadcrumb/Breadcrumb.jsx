import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';


// Icons
import { SlHome } from "react-icons/sl";

// Style
import './breadcrumb.css';

const Breadcrumb = ({ page, category, product, id }) => {
    // let currentLink = ''; // nog nodig?

    // // Get current location
    // const location = useLocation();

    // // Split current location into an array
    // let crumbs = location.pathname.split('/');

    // // Remove empty items from array
    // crumbs = crumbs.filter((crumb) => { //later doen
    //     return crumb != '';
    // });

    // crumbs = crumbs.map((crumb) => {
    //     currentLink += `/${crumb}`;
    //     // Return element without link for crumbs that are not associated with any content
    //     if (crumb === 'category' || crumb === 'product') {
    //         return (
    //             <div className="crumb" key={crumb}>
    //                 {crumb}
    //             </div>
    //         )
    //         // Return element with link for other crumbs
    //     } else {
    //         return (
    //             <div className="crumb" key={crumb}>
    //                 <Link to={currentLink}>{crumb}</Link>
    //             </div>
    //         )
    //     }
    // })

    return (
        <div className='breadcrumb'>
            {/* Home */}
            <Link to='/' className='crumb'>
                <SlHome className='home-icon' />
            </Link>
            {/* Category */}
            {
                category &&
                <Link to={`/category/${category}`} className='crumb'>
                    {category}
                </Link>
            }
            {/* Product title */}
            {
                id &&
                <Link to={`/product/${id}`} className='crumb'>
                    {product}
                </Link>
            }
            {/* Page */}
            {
                page &&
                <Link to={`/${page}`} className='crumb'>
                    {page}
                </Link>
            }
        </div>
    );

}

export default Breadcrumb;

