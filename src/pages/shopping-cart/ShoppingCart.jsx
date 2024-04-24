import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Context
import { ShoppingCartContext } from '../../context/shoppingCartContext';

// Components
import SearchBar from '../../components/search-bar/SearchBar';
import ProductCard from '../../components/product-card/ProductCard';
import Button from '../../components/button/Button';

// Style
import './shopping-cart.css';

const ShoppingCart = () => {
    const { shoppingCart, productsTotal, shipping, grandTotal, updateCart, removeItem } = useContext(ShoppingCartContext);

    const [amountOfItems, setAmountOfItems] = useState(0);
    const [itemToUpdate, setItemToUpdate] = useState(0);

    const navigate = useNavigate();

    // Set amountOfItems and itemToUpdate
    function setAmountOfItemsAndId(id, amountOfItems) {
        setAmountOfItems(amountOfItems);
        setItemToUpdate(id);
    }

    // Update shoppingCart if amount of items to order changes
    useEffect(() => {
        const index = shoppingCart.findIndex(item => item.itemId === itemToUpdate);
        const update = {
            ...shoppingCart[index],
            amount: amountOfItems
        };
        index != -1 && updateCart(index, update); // Update shoppingCart, but do not add an empty object
    }, [amountOfItems])

    // Remove item from shoppingCart
    function handleClick(itemToRemove) {
        const index = shoppingCart.findIndex(item => item.itemId === itemToRemove);
        removeItem(index);
    }

    return (
        <main>
            <SearchBar />
            <h2>Shopping Cart</h2>
            <div className='shopping-cart-container'>
                <div className='item-container'>
                    {
                        shoppingCart.map((item) => {
                            return (
                                <ProductCard
                                    key={item.itemId}
                                    amountOfItems={item.amount}
                                    setAmountOfItemsAndId={setAmountOfItemsAndId}
                                    handleClick={handleClick}
                                    page='shopping-cart'
                                    product={{
                                        id: item.itemId,
                                        title: item.itemName,
                                        price: item.price * item.amount,
                                        image: item.image,
                                        amount: item.amount
                                    }}
                                />
                            );
                        })
                    }
                </div>
                <article className='summary-container'>
                    <header>
                        <h3>Summary</h3>
                    </header>
                    <div className='products-and-shipping'>
                        <div className='products'>
                            <p>Products</p>
                            <p>
                                {productsTotal}
                            </p>
                        </div>
                        <div className='shipping'>
                            <p>Shipping</p>
                            <p>
                                {shipping}
                            </p>
                        </div>
                    </div>
                    <div className='total'>
                        <p>Total</p>
                        <p>
                            {grandTotal}
                        </p>
                    </div>
                    <footer>
                        <Button
                            type='button'
                            buttonText='Proceed to checkout'
                            onClick={() => navigate('/checkout')}
                        />
                    </footer>
                </article>
            </div>
        </main>
    );
}

export default ShoppingCart;