import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

// Context
import { ShoppingCartContext } from '../../context/ShoppingCartContext';

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
    const { shoppingCart, addToCart } = useContext(ShoppingCartContext);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [productData, setProductData] = useState({});
    const [productList, setProductList] = useState([]);
    const [category, setCategory] = useState('');
    const [amountOfItems, setAmountOfItems] = useState(0);
    const [alreadyInCart, toggleAlreadyInCart] = useState(false);

    // Get product id
    const { id } = useParams();

    // Get right category name from categories.js
    function getCorrectCategoryName(query) {
        const categoryData = categories.find((item) => {
            return item.title.toLowerCase() === query.toLowerCase();
        });
        return categoryData.category;
    }

    // Get product data
    useEffect(() => {
        const controller = new AbortController();
        async function getProductData() {
            setLoading(true);
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`, {
                    signal: controller.signal,
                });
                setProductData(response);
                setCategory(getCorrectCategoryName(response.data.category));
                setError(false);
            } catch (error) {
                console.log(error);
                setError(false);
            }
            setLoading(false);
        }
        getProductData();
        return function cleanup() {
            controller.abort();
        }
    }, [id])

    // Check if item is already in shoppingCart
    useEffect(() => {
        function checkIfItemIsAlreadyInCart() {
            const check = shoppingCart.find((item) => {
                const idToCheck = Number(id);
                return item?.itemId === idToCheck;
            });
            if (check) {
                toggleAlreadyInCart(true);
            } else {
                toggleAlreadyInCart(false);
            }
        }
        checkIfItemIsAlreadyInCart();
    }, [shoppingCart, productData])

    // Handle button click
    function handleClick() {
        const order = {
            itemId: productData.data.id,
            itemName: productData.data.title,
            amount: amountOfItems,
            price: productData.data.price,
            image: productData.data.image
        }
        addToCart(order);
    }

    // Get more items in category
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
                setProductList(filteredProductList);
                setError(false);
            } catch (error) {
                console.error(error);
                setError(true);
            }
            setLoading(false);
        }
        // Find apiEndpoint for this category
        const categoryData = categories.find((item) => {
            return item.category === category;
        });
        getProductList(categoryData?.apiEndpoint);
        return function cleanup() {
            controller.abort();
        }
    }, [id, category]);

    return (
        <main>
            <SearchBar />
            {/* Single product section */}
            <section className='single-product-section'>
                <header>
                    <h2>
                        {productData?.data?.title}
                    </h2>
                </header>
                {
                    loading ?
                        <p>
                            Loading...
                        </p>
                        :
                        error ?
                            <p>
                                Product not found.
                            </p>
                            :
                            <article className='single-product'>
                                <div className='single-product-image-container'>
                                    <img
                                        src={productData?.data?.image}
                                        alt={productData?.data?.title}
                                    />
                                    <p>
                                        {(productData?.data?.price)?.toFixed(2)}
                                    </p>
                                    <TiStar className='rating-star' />
                                    <p className='rating'>
                                        {productData?.data?.rating?.rate}
                                    </p>
                                </div>
                                <div className='single-product-text-container'>
                                    <p>
                                        {productData?.data?.description}
                                    </p>
                                    {
                                        alreadyInCart ?
                                            <div className='go-to-cart-container'>
                                                <p>
                                                    This item is in your shopping cart.
                                                </p>
                                                <Link to='/shopping-cart'>
                                                    {`>> See shopping cart`}
                                                </Link>
                                            </div>
                                            :
                                            <div className='add-to-cart-container'>
                                                <ChooseAmountMenu setAmountOfItems={setAmountOfItems} />
                                                <Button
                                                    type='button'
                                                    buttonText='Add to cart'
                                                    onClick={() => handleClick()}
                                                />
                                            </div>
                                    }
                                </div>
                            </article>
                }
            </section>
            {/* More in this category section */}
            <section className='more-in-this-category-section'>
                <header>
                    <h3 className='more-in-this-category-title'>
                        More in this category
                    </h3>
                </header>
                {
                    loading ?
                        <p>
                            Loading...
                        </p>
                        :
                        error ?
                            <p>
                                No products found.
                            </p>
                            :
                            <div className='more-products-container'>
                                {
                                    productList?.map((product) => {
                                        return <ProductCard
                                            key={product.id}
                                            category={category}
                                            product={product}
                                        />;
                                    })
                                }
                            </div>
                }
            </section>
        </main>
    );
}

export default Product;