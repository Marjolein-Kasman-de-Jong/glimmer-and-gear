// Icons
import { TiStar } from 'react-icons/ti';

// Style
import './product-card.css';

const ProductCard = ({ product }) => {
    return (
        <article className='product-card'>
            <TiStar className='rating-star' />
            <p className='product-rating'>{product?.rating.rate}</p>
            <img src={product?.image} alt={product?.title} />
            <h3>{product?.title}</h3>
            <p>{product?.price}</p>
        </article>
    );
}

export default ProductCard;