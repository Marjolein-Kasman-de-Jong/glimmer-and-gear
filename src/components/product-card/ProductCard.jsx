import { NavLink } from 'react-router-dom';

// Components
import ChooseAmountMenu from '../choose-amount-menu/ChooseAmountMenu';

// Icons
import { TiStar } from 'react-icons/ti';

// Style
import './product-card.css';

const ProductCard = ({ category, page, product, amountOfItems, setAmountOfItems, setAmountOfItemsAndId }) => {
    const { id, rating, title, price } = product;
    
    return (
        <NavLink className='product-card-navlink' to={page==='shopping-cart' ? '/shopping-cart' : `/product/${id}?category=${category}`}>
            <article className={`product-card ${page}`}>
                {/* Product card image container */}
                <div className='product-card-image-container'>
                    {
                        rating && <TiStar className='product-card-rating-star' />
                    }
                    {
                        rating && <p className='product-card-product-rating'>{rating.rate}</p>
                    }
                    <img className='product-card-product-image' src={product?.image} alt={title} />
                </div>
                {/* Product card text container */}
                <div className='product-card-text-container'>
                    <h3 className='product-card-product-name'>{title}</h3>
                    <p className='product-card-price'>{price}</p>
                    <div className='amount-and-trash-container'>
                        {
                            page && <ChooseAmountMenu amountOfItems={amountOfItems} setAmountOfItemsAndId={setAmountOfItemsAndId} id={id} /> // hele container moet niet weergegeven als age false is
                        }
                    </div>
                </div>

            </article>
        </NavLink>
    );
}

export default ProductCard;