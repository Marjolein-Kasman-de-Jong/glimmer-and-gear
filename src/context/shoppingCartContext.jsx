import { useState, createContext } from 'react';

export const ShoppingCartContext = createContext(null);

function shoppingCartContextProvider({ children }) {
    const [shoppingCart, setShoppingCart] = useState([]);
    // console.log(shoppingCart);

    function addToCart(order) {
        const updatedCart = [...shoppingCart, order];
        setShoppingCart(updatedCart);
    }

return (
    <ShoppingCartContext.Provider value={{
        shoppingCart,
        addToCart
    }}>
        {children}
    </ShoppingCartContext.Provider>
);
}

export default shoppingCartContextProvider;