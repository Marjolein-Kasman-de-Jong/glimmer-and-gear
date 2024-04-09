import { useParams } from 'react-router-dom';

// Components
import SearchBar from '../../components/search-bar/SearchBar';

// Style
import './product.css';

const Product = () => {
    const { id } = useParams();

    return (
        <main>
            <SearchBar />
            <h2>Product page</h2>
            <p>{id}</p>
        </main>
    )
}

export default Product;