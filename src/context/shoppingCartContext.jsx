import { useState, createContext, useEffect } from 'react';

export const ShoppingCartContext = createContext(null);

function shoppingCartContextProvider({ children }) {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);

    // Keep track of number of items in cart
    useEffect(() => {
        setItemsInCart(shoppingCart.length);
    }, [shoppingCart])

    // Add new product to shoppingCart
    function addToCart(order) {
        const updatedCart = [...shoppingCart, order];
        setShoppingCart(updatedCart);
    }

    // Update product already in shoppingCart
    function updateCart(index, update) {
        const updatedCart = [...shoppingCart];
        updatedCart[index] = update;
        setShoppingCart(updatedCart);
    }

    // Remove item from shopping cart
    function removeItem(index) {
        const updatedCart = [...shoppingCart];
        updatedCart.splice(index, 1);
        setShoppingCart(updatedCart);
    }

    return (
        <ShoppingCartContext.Provider value={{
            shoppingCart,
            itemsInCart,
            addToCart,
            updateCart,
            removeItem
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default shoppingCartContextProvider;