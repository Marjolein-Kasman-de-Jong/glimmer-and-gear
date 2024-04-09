import { NavLink } from 'react-router-dom';

// Icons
import { TiStar } from 'react-icons/ti';

// Style
import './product-card.css';

const ProductCard = ({ product }) => {
    return (
        <NavLink to={`/product/${product.id}`}>
            <article className='product-card'>
                <div className='image-container'>
                    <TiStar className='rating-star' />
                    <p className='product-rating'>{product?.rating.rate}</p>
                    <img src={product?.image} alt={product?.title} />
                </div>
                <div className='text-container'>
                    <h3>{product?.title}</h3>
                    <p>{product?.price}</p>
                </div>
            </article>
        </NavLink>
    );
}

export default ProductCard;