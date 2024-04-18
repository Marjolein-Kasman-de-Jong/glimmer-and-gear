import { useState, useEffect } from 'react';
import NavLink from '../nav-link/NavLink';
import axios from 'axios';

// Icons
import { SlMagnifier } from 'react-icons/sl';

// Style
import './search-bar.css';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [allProducts, setAllProducts] = useState([]);
    const [showSearchResults, toggleShowSearchResults] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function getAllProducts() {
            try {
                const response = await axios.get('https://fakestoreapi.com/products', {
                    signal: controller.signal,
                });
                setAllProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getAllProducts();

        return function cleanup() {
            controller.abort();
        }
    }, [])

    useEffect(() => {
        // Check if there are search results
        const searchResults = allProducts.some(product =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        // Toggle showSearchResults based on query length and existence of search results
        if (query.length > 0 && !searchResults) {
            toggleShowSearchResults(false);
        } else if (query.length > 0 && searchResults) {
            toggleShowSearchResults(true);
        }
    }, [query, allProducts])

    useEffect(() => {
        const elementToIgnore = document.getElementsByClassName('search-results');
        document.body.addEventListener('click', (e) => {
            if (e.target != elementToIgnore) {
                setQuery('');
                toggleShowSearchResults(false);
            }
        })
    }, [])

    return (
        <aside className='search-bar'>
            <form action='#'>
                <input type='text' name='search-field' id='search-field' placeholder='What are you looking for?' value={query} onChange={(e) => setQuery(e.target.value)} />
                <SlMagnifier className='search-icon' />
            </form>
            {
                showSearchResults &&
                <ul className='search-results'>
                    {
                        allProducts && (
                            allProducts.map((product) => {
                                if (product.title.toLowerCase().includes(query.toLowerCase())) {
                                    return (
                                        <NavLink key={product.id} type='search-result' linkTo={`/product/${product.id}?category=${product.category}`} onClick={() => { setQuery('') }}>
                                            {product.title}
                                        </NavLink>
                                    )
                                }
                            })
                        )
                    }
                </ul>
            }
        </aside>
    );
}

export default SearchBar;

