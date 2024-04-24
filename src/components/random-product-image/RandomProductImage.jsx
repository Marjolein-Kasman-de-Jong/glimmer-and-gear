// Style
import './random-product-image.css';

const RandomProductImage = ({ src }) => {
    return (
        <div className='random-product-image-wrapper'>
            <img
                src={`../../src/assets/${src.image}`}
                alt='Random product image'
            />
        </div>
    );
}

export default RandomProductImage;