import { useState, useEffect, useContext } from 'react';

// Context
import { ShoppingCartContext } from '../../context/shoppingCartContext';

// Components
import SearchBar from '../../components/search-bar/SearchBar';
import ProductCard from '../../components/product-card/ProductCard';

// Style
import './shopping-cart.css';

const ShoppingCart = () => {
    const { shoppingCart, updateCart } = useContext(ShoppingCartContext);

    const [amountOfItems, setAmountOfItems] = useState(0);
    const [itemToUpdate, setItemToUpdate] = useState(0);

    // Set amountOfItems and itemToUpdate
    function setAmountOfItemsAndId(id, amountOfItems) {
        setAmountOfItems(amountOfItems);
        setItemToUpdate(id);
    }

    // Update shoppingCart if amount of items to order changes
    useEffect(() => {
        const index = shoppingCart.findIndex(item => item.itemId === itemToUpdate)
        const update = {
            ...shoppingCart[index],
            amount: amountOfItems
        };
        index != -1 && updateCart(index, update); // Update shoppingCart, but do not add an empty object
    }, [amountOfItems])

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
                                    page='shopping-cart'
                                    product={{
                                        id: item.itemId,
                                        title: item.itemName,
                                        price: item.price,
                                        image: item.image,
                                        amount: item.amount
                                    }}
                                />
                            );
                        })
                    }
                </div>
                <div className='summary-container'>
                        {/* Summary toevoegen */}
                </div>
            </div>
        </main>
    );
}

export default ShoppingCart;