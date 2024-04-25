import { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext(null);

function shoppingCartContextProvider({ children }) {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);
    const [productsTotal, setProductsTotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

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

    // Calculate products total
    useEffect(() => {
        let total = 0;
        shoppingCart.map((item) => {
            total += item.price * item.amount;
        })
        setProductsTotal(total);
    }, [shoppingCart])

    // Calculate shipping
    useEffect(() => {
        productsTotal > 20 ? setShipping(0) : setShipping(9.99);
    }, [productsTotal])

    // Calculate grand total
    useEffect(() => {
        setGrandTotal(productsTotal + shipping);
    }, [productsTotal, shipping])

    return (
        <ShoppingCartContext.Provider value={{
            shoppingCart,
            itemsInCart,
            productsTotal,
            shipping,
            grandTotal,
            addToCart,
            updateCart,
            removeItem
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default shoppingCartContextProvider;