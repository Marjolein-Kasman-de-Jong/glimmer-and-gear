import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Context
import { CategoryContext } from '../../context/CategoryProvider';

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
    }, [])

    // Monitor amount of items
    const [amountOfItems, setAmountOfItems] = useState(0);

    // Get more items in this category
    const {category} = useContext(CategoryContext)
    
    useEffect(() => {
        console.log(category);
    }, [])
    
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
                    
                </div>
            </section>
        </main>
    )
}

export default Product;