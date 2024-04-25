import { NavLink } from 'react-router-dom';

// Components
import ChooseAmountMenu from '../choose-amount-menu/ChooseAmountMenu';
import Button from '../button/Button';

// Icons
import { TiStar } from 'react-icons/ti';
import { SlTrash } from 'react-icons/sl';

// Style
import './product-card.css';

const ProductCard = ({ category, page, product, amountOfItems, setAmountOfItems, setAmountOfItemsAndId, handleClick }) => {
    const { id, rating, title, price } = product;
    const icon = <SlTrash className='trash' />;

    return (
        <article className={`product-card ${page}`}>
            {/* Product card image container */}
            <NavLink
                className='product-card-navlink product-card-image-container'
                to={`/product/${id}?category=${category}`}
            >
                {
                    rating &&
                    <TiStar className='product-card-rating-star' />
                }
                {
                    rating &&
                    <p className='product-card-product-rating'>
                        {rating.rate}
                    </p>
                }
                <img
                    className='product-card-product-image'
                    src={product?.image}
                    alt={title}
                />
            </NavLink>
            {/* Product card text container */}
            <div className='product-card-text-container'>
            <NavLink
                className='product-card-navlink'
                to={`/product/${id}?category=${category}`}
            >
                <header>
                    <h3 className='product-card-product-name'>
                        {title}
                    </h3>
                </header>
                <p className='product-card-price'>
                    {price.toFixed(2)}
                </p>
                </NavLink>
                {
                    page === 'shopping-cart' &&
                    <div className='amount-and-trash-container'>
                        <ChooseAmountMenu
                            amountOfItems={amountOfItems}
                            setAmountOfItemsAndId={setAmountOfItemsAndId}
                            id={id}
                        />
                        <Button
                            type='button'
                            icon={icon}
                            onClick={handleClick}
                            id={id}
                        />
                    </div>
                }
            </div>
        </article>
    );
}

export default ProductCard;