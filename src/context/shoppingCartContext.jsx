import { useState, useEffect, createContext } from 'react';

export const ShoppingCartContext = createContext(null);

function shoppingCartContextProvider({ children }) {
    const [shoppingCart, setShoppingCart] = useState([]);

    // Used to check current state of shopping Cart
    useEffect(() => { // Nog verwijderen
        console.log(shoppingCart) // Nog verwijderen
    }, [shoppingCart]) // Nog verwijderen

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

    return (
        <ShoppingCartContext.Provider value={{
            shoppingCart,
            addToCart,
            updateCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default shoppingCartContextProvider;