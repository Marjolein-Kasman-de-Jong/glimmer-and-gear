// Components
import SearchBar from '../../components/search-bar/SearchBar';
import RandomProductImage from '../../components/random-product-image/RandomProductImage';
import Usp from '../../components/usp/Usp';
import CategoryTile from '../../components/category-tile/CategoryTile';
import Review from '../../components/review/Review';

// Constants
import randomImages from '../../constants/randomImages';
import usps from '../../constants/usps';
import categories from '../../constants/categories';
import reviews from '../../constants/reviews';

// Style
import './home.css';

const Home = () => {
    return (
        <main>
            <SearchBar />
            <section className='image-section'>
                {
                    randomImages.map((randomImage) => {
                        return <RandomProductImage
                            key={randomImage.id}
                            src={randomImage}
                        />;
                    })
                }
            </section>
            <section className='usp-section'>
                {
                    usps.map((usp) => {
                        return <Usp
                            key={usp}
                            text={usp}
                        />;
                    })
                }
            </section>
            <section className='category-section'>
                {
                    categories.map((category) => {
                        return <CategoryTile
                            key={category.title}
                            category={category}
                        />;
                    })
                }
            </section>
            <section className="review-section">
                {
                    reviews.map((review) => {
                        return <Review
                            key={review.id}
                            review={review}
                        />;
                    })
                }
            </section>
        </main>
    );
}

export default Home;