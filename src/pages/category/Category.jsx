import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Components
import SearchBar from '../../components/search-bar/SearchBar';
import SortOptionMenu from '../../components/sort-option-menu/SortOptionMenu';
import ProductCard from '../../components/product-card/ProductCard';

// Constants
import categories from '../../constants/categories';

// Style
import './category.css'

const Category = () => {
    const [productList, setProductList] = useState([]);
    const [sortOption, setSortOption] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // Get category 
    const { category } = useParams();

    // Get products in category
    const categoryData = categories.find((item) => {
        return item.category === category;
    });

    useEffect(() => {
        const controller = new AbortController();

        async function getProductList(url) {
            setLoading(true);
            try {
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

        categoryData && getProductList(categoryData.apiEndpoint);

        return function cleanup() {
            controller.abort();
        }
    }, []);

    // Re-render .products-container after sortOption change
    useEffect(() => {
        //  Copy productList because React doesn't detect that array is being changed in-place
        const sortedProductList = [...productList];

        // Sort products
        if (sortOption === 'price-l-h') {
            sortedProductList.sort((a, b) => {
                return a.price - b.price;
            })
        } else if (sortOption === 'price-h-l') {
            sortedProductList.sort((a, b) => {
                return b.price - a.price;
            })
        } else if (sortOption === 'rating') {
            sortedProductList.sort((a, b) => {
                return b.rating.rate - a.rating.rate;
            })
        }

        // Use setProductList with sorted copy of original array, so React detects that array has changed and re-renders .products-container
        setProductList(sortedProductList);
    }, [sortOption])

    return (
        <main>
            <SearchBar />
            <header className='category-page-header'>
                <h2>{categoryData.title}</h2>
                <SortOptionMenu sortOption={sortOption} setSortOption={setSortOption} />
            </header>
            {
                loading ?
                    <p>Loading...</p>
                    :
                    error ?
                        <p>No products found.</p>
                        :
                        <div className='category-page-products-container'>
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