import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Components
import SearchBar from '../../components/search-bar/SearchBar';
import ProductCard from '../../components/product-card/ProductCard';

// Constants
import categories from '../../constants/categories';

// Style
import './category.css'

const Category = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // Get category data
    const { category } = useParams();
    const categoryData = categories.find((item) => {
        return item.category === category;
    });

    // Get products in category
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

        getProductList(categoryData.apiEndpoint);

        return function cleanup() {
            controller.abort();
        }
    }, []);

    return (
        <main>
            <SearchBar />
            <header className='category-page-header'>
                <h2>{categoryData.title}</h2>
                <div>Sorteerding</div>
            </header>
            {loading && <p>Loading...</p>}
            {
                error ?
                    <p>No products found.</p>
                    :
                    <div className='products-container'>
                        {
                            productList?.map((product) => {
                                return <ProductCard key={product.id} product={product} />
                            })
                        }
                    </div>
            }
        </main>
    );
}

export default Category;