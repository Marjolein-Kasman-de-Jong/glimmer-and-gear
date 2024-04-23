import { useState, useEffect, useContext } from 'react';

// Context
import { ShoppingCartContext } from '../../context/shoppingCartContext';

// Components
import SearchBar from '../../components/search-bar/SearchBar';
import ProductCard from '../../components/product-card/ProductCard';

// Style
import './shopping-cart.css';

const ShoppingCart = () => {
    const { shoppingCart, updateCart, removeItem } = useContext(ShoppingCartContext);

    const [amountOfItems, setAmountOfItems] = useState(0);
    const [itemToUpdate, setItemToUpdate] = useState(0);

    let productsTotal = 0;

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
                            const price = item.price * item.amount;
                            productsTotal += price;
                            
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
                                        price: price,
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
                                <p>{productsTotal}</p>
                            </div>
                            <div className='shipping'>
                                <p>Shipping</p>
                                <p>{productsTotal >= 20 ? 0 : 9.99}</p>
                            </div>
                        </div>
                        <div className='total'>
                            <p>Total</p>
                            <p>{productsTotal + (productsTotal >= 20 ? 0 : 9.99)}</p>
                        </div>
                        <footer>
                            <p>Checkout</p>
                        </footer>
                </article>
            </div>
        </main>
    );
}

export default ShoppingCart;