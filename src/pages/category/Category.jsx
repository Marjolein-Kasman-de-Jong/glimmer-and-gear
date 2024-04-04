import { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import SearchBar from '../../components/search-bar/SearchBar';
import ProductCard from '../../components/product-card/ProductCard';



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

    return (
        <main>
            <SearchBar />
            <header className='category-page-header'>
                <h2>Men's clothing</h2>
                <div>Sorteerding</div>
            </header>
            <div className='products-container'>
                {
                    productList?.map((product) => {
                        return <ProductCard key={product.id} product={product} />
                    })
                }
            </div>
        </main>
    );
}

export default Category;

