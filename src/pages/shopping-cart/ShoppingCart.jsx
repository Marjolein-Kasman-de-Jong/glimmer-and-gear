import { useState, useEffect, useContext } from 'react';

// Context
import { ShoppingCartContext } from '../../context/shoppingCartContext';

// Components
import SearchBar from '../../components/search-bar/SearchBar';
import ProductCard from '../../components/product-card/ProductCard';

// Style
import './shopping-cart.css'


const ShoppingCart = () => {
    const { shoppingCart, updateCart } = useContext(ShoppingCartContext)
    console.log(shoppingCart)
    // Monitor amount of items to order
    const [amountOfItems, setAmountOfItems] = useState(0);
    const [itemToUpdate, setItemToUpdate] = useState(0);
//setAmountOfItemskrijgt id

    // useEffect(() => {
    //     setAmountOfItems(shoppingCart[0]?.amount)
    // }, []) // deze laten luisteren naar veranderingen in shoppingcart, zodat chooseamountmenu meeveradert

    useEffect(() => {
        // Find index of item to update
        const index = shoppingCart.findIndex(item => item.itemId === itemToUpdate)
        const update = {
            ...shoppingCart[index],
            amount: amountOfItems
        }

        // Update shoppingCart, but do not add an empty object
        index != -1 && updateCart(index, update)
    }, [amountOfItems]) 

    function setAmountOfItemsAndId (id, amountOfItems) {
        setAmountOfItems(amountOfItems)
        setItemToUpdate(id)
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
                                <ProductCard key={item.itemId} amountOfItems={item.amount} setAmountOfItemsAndId={setAmountOfItemsAndId} page='shopping-cart' product={{
                                    id: item.itemId,
                                    title: item.itemName,
                                    price: item.price,
                                    image: item.image,
                                    amount: item.amount
                                }}/>
                            )
                        })
                    }
                </div>
                <div className='summary-container'>

                </div>
            </div>
        </main>
    );
}

export default ShoppingCart;

// const { id, rating, title, price } = product;