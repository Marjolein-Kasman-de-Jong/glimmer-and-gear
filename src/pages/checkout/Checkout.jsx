import { useState, useEffect, useContext } from 'react';

// Context
import { AuthContext } from '../../context/AuthContext';
import { ShoppingCartContext } from '../../context/shoppingCartContext';

// Style
import './checkout.css';

const Checkout = () => {
    const { username } = useContext(AuthContext);
    const { shoppingCart, shipping, grandTotal } = useContext(ShoppingCartContext);

    return (
        <main>
            <header>
                <h2>Checkout page</h2>
            </header>
            <div className='checkout-container'>
                <article className='shipping-address-container'>
                    <header>
                        <h3>Shipping address</h3>
                    </header>
                    <div className='shipping-address'>
                        <div className='name'>
                            <p>Name</p>
                            <p>{username}</p>
                        </div>
                        <div className='address'>
                            <p>Address</p>
                            <p>Backend doesn't allow storing this data.</p>
                        </div>
                    </div>
                </article>
                <article className='order-container'>
                    <header>
                        <h3>Order</h3>
                    </header>
                    <div className='order'>
                        {
                            shoppingCart.map((item) => {
                                const price = item.price * item.amount;

                                return (
                                    <div className='ordered-item'>
                                        <p>{item.itemName}</p>
                                        <p>{item.amount}</p>
                                        <p>{item.amount * item.price}</p>
                                    </div>
                                );
                            })
                        }
                        <div className='shipping'>
                            <p>Shipping</p>
                            <p>{shipping}</p>
                        </div>
                        <div className='total'>
                            <p>Total</p>
                            <p>{grandTotal}</p>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}

export default Checkout;