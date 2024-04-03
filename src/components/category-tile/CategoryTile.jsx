// Style
import './category-tile.css';

const CategoryTile = ({ category }) => {
    return (
        <figure>
            <img src={`../../src/assets/${category.image}`} alt={category.title} />
            <figcaption>
                <h3>{category.title}</h3>
            </figcaption>
        </figure>
    );
}

export default CategoryTile;