import { NavLink } from 'react-router-dom';

// Icons
import { TiStar } from 'react-icons/ti';

// Style
import './product-card.css';

const ProductCard = ({ product }) => {
    const {id, rating, title, price} = product;

    return (
        <NavLink to={`/product/${id}`}>
            <article className='product-card'>
                <div className='image-container'>
                    <TiStar className='rating-star' />
                    <p className='product-rating'>{rating.rate}</p>
                    <img src={product?.image} alt={title} />
                </div>
                <div className='text-container'>
                    <h3>{title}</h3>
                    <p>{price}</p>
                </div>
            </article>
        </NavLink>
    );
}

export default ProductCard;