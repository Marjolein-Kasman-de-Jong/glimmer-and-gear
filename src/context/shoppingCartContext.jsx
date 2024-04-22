import { useState, createContext } from 'react';

export const ShoppingCartContext = createContext(null);

function shoppingCartContextProvider({ children }) {
    const [shoppingCart, setShoppingCart] = useState([]);

    function addToCart(itemId, itemName, amount, price) {
        shoppingCart.push({
            itemId,
            itemName,
            amount,
            price
        });
    }

    return (
        <ShoppingCartContext.Provider value={{
            addToCart
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default shoppingCartContextProvider;