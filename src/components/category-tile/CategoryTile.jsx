import { NavLink } from 'react-router-dom';

// Style
import './category-tile.css';

const CategoryTile = ({ category }) => {
    return (
        <NavLink to={`/category/${category.category}`}>
            <figure className='category-tile'>
                <img
                    src={`../../src/assets/${category.image}`}
                    alt={category.title}
                />
                <figcaption className='category-tile-title'>
                    <h3>
                        {category.title}
                    </h3>
                </figcaption>
            </figure>
        </NavLink>
    );
}

export default CategoryTile;