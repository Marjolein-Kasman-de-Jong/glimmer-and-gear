import { NavLink } from 'react-router-dom';

// Icons
import { TiStar } from 'react-icons/ti';

// Style
import './product-card.css';

const ProductCard = ({ category, product }) => {
    const { id, rating, title, price } = product;

    return (
        <NavLink className='product-card-navlink' to={`/product/${id}?category=${category}`}>
            <article className='product-card'>
                {/* Product card image container */}
                <div className='product-card-image-container'>
                    <TiStar className='product-card-rating-star' />
                    <p className='product-card-product-rating'>{rating.rate}</p>
                    <img className='product-card-product-image' src={product?.image} alt={title} />
                </div>
                {/* Product card text container */}
                <div className='product-card-text-container'>
                    <h3 className='product-card-product-name'>{title}</h3>
                    <p className='product-card-price'>{price}</p>
                </div>
            </article>
        </NavLink>
    );
}

export default ProductCard;