import { useContext } from 'react';

// Context
import { AuthContext } from '../../context/AuthContext';
import { ShoppingCartContext } from '../../context/shoppingCartContext';

// Components
import Button from '../../components/button/Button';

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
                                return (
                                    <div className='ordered-item'>
                                        <p>{item.itemName}</p>
                                        <p>{item.amount}</p>
                                        <p>{(item.price * item.amount).toFixed(2)}</p>
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
                            <p>{grandTotal.toFixed(2)}</p>
                        </div>
                    </div>
                </article>
                <Button type='button' buttonText='Confirm order and choose payment option' onClick={() => alert('We haven\'t learned how to add payment options yet. ;-))')}/>
            </div>
        </main>
    );
}

export default Checkout;