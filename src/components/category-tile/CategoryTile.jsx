// Style
import './category-tile.css';

const CategoryTile = ({ category }) => {
    return (
        <figure className='category-tile'>
            <img src={`../../src/assets/${category.image}`} alt={category.title} />
            <figcaption className='category-tile-title'>
                <h3>{category.title}</h3>
            </figcaption>
        </figure>
    );
}

export default CategoryTile;