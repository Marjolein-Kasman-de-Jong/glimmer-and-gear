import { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import SearchBar from '../../components/search-bar/SearchBar';

// Icons
import { TiStarFullOutline } from "react-icons/ti";

// Style
import './category.css'

const Category = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function getProductList(url) {
            try {
                setLoading(true);
                const response = await axios.get(url, {
                    signal: controller.signal,
                });
                setProductList(response.data);
                setError(false);
            } catch (error) {
                console.log(error);
                setError(true);
            }
            setLoading(false);
        }        

        getProductList('https://fakestoreapi.com/products/category/men\'s%20clothing');

        return function cleanup() {
            controller.abort();
        }
    }, []);

    console.log(loading);
    console.log(error);
    console.log(productList);

    return (
        <main>
            <SearchBar />
            <header className='category-page-header'>
                <h2>Men's clothing</h2>
                <div>Sorteerding</div>
            </header>
            {
                <article className='product-card'>
                    <TiStarFullOutline className='rating-star' />
                    <p className='product-rating'>{productList[1]?.rating.rate}</p>
                    <img src={productList[1]?.image} alt="" />
                    <h3>{productList[1]?.title}</h3>
                    <p>{productList[1]?.price}</p>
                </article>
            }
        </main>
    );
}

export default Category;

