// Components
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import SearchBar from '../../components/search-bar/SearchBar';

// Style
import './shopping-cart.css'

const ShoppingCart = () => {
    return (
        <main>
            <Breadcrumb page={'shopping-cart'} />
            <SearchBar />
            <h2>Shopping Cart</h2>
        </main>
    );
}

export default ShoppingCart;