import { useState, useEffect, createContext } from 'react';

export const ShoppingCartContext = createContext(null);

function shoppingCartContextProvider({ children }) {
    const [shoppingCart, setShoppingCart] = useState([]);
    // console.log(shoppingCart)

    useEffect(() => {
        console.log(shoppingCart)
    }, [shoppingCart])
    

    function addToCart(order) {
        const updatedCart = [...shoppingCart, order];
        setShoppingCart(updatedCart);
    }

    function updateCart(index, update) {
        // Maak een kopie van de bestaande shoppingCart array
    const updatedCart = [...shoppingCart];
    
    // Vervang het object op de opgegeven index met de nieuwe update
    updatedCart[index] = update;
    
    // Stel de bijgewerkte shoppingCart array in met setShoppingCart
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