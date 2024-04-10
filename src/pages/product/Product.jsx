import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Components
import SearchBar from '../../components/search-bar/SearchBar';
import ChooseAmountMenu from '../../components/choose-amount-menu/ChooseAmountMenu';
import Button from '../../components/button/Button';

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

    return (
        <main>
            <SearchBar />
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
        </main>
    )
}

export default Product;