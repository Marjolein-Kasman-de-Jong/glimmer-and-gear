import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

// Components
import SearchBar from '../../components/search-bar/SearchBar';
import ChooseAmountMenu from '../../components/choose-amount-menu/ChooseAmountMenu';
import Button from '../../components/button/Button';
import ProductCard from '../../components/product-card/ProductCard';

// Constants
import categories from '../../constants/categories';

// Icons
import { TiStar } from 'react-icons/ti';

// Style
import './product.css';

const Product = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // Get product id
    const { id } = useParams();

    // Get product data
    const [productData, setProductData] = useState({});

    useEffect(() => {
        const controller = new AbortController();

        async function getProductData() {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`, {
                    signal: controller.signal,
                });
                setProductData(response);
            } catch (error) {
                console.log(error);
            }
        }

        getProductData();

        return function cleanup() {
            controller.abort();
        }
    }, [id])

    // Monitor amount of items
    const [amountOfItems, setAmountOfItems] = useState(0);

    // Get category
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');

    // Get more items in category
    const [productList, setProductList] = useState([]);

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
                // Create array of all items in category minus item already shown
                const filteredProductList = [];
                for (let i = 0; i < response.data.length; i++) {
                    const item = response.data[i];
                    if (item.id != id) {
                        filteredProductList.push(item);
                    }
                }
                // Set productList
                setProductList(filteredProductList);
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
    }, [id]);


    return (
        <main>
            <SearchBar />
            {/* Single product section */}
            <section className='single-product-section'>
                <h2>{productData?.data?.title}</h2>
                <article className='single-product'>
                    <div className='single-product-image-container'>
                        <img src={productData?.data?.image} alt={productData?.data?.title} />
                        <p>{productData?.data?.price}</p>
                        <TiStar className='rating-star' />
                        <p className='rating'>{productData?.data?.rating?.rate}</p>
                    </div>
                    <div className='single-product-text-container'>
                        <p>{productData?.data?.description}</p>
                        <div className='add-to-cart-container'>
                            <ChooseAmountMenu setAmountOfItems={setAmountOfItems} />
                            <Button buttonText='Add to cart' />
                        </div>
                    </div>
                </article>
            </section>
            {/* More in this category section */}
            <section className='more-in-this-category-section'>
                <h3 className='more-in-this-category-title'>More in this category</h3>
                <div className='more-products-container'>
                    {
                        productList?.map((product) => {
                            console.log(product)
                            return <ProductCard key={product.id} category={category} product={product} />
                        })
                    }
                </div>
            </section>
        </main>
    )
}

export default Product;