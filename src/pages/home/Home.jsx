// Components
import SearchBar from '../../components/search-bar/SearchBar';
import RandomProductImage from '../../components/random-product-image/RandomProductImage';
import Usp from '../../components/usp/Usp';

// Constants
import usps from '../../constants/usps';

// Images
import randomProductImage1 from '../../assets/random-product-1.jpeg';
import randomProductImage2 from '../../assets/random-product-2.jpeg';

// Style
import './home.css';

const Home = () => {
    return (
        <main>
            <SearchBar />
            <section className='image-section'>
                <RandomProductImage src={randomProductImage1} />
                <RandomProductImage src={randomProductImage2} />
            </section>
            <section className='usp-section'>
                {
                    usps.map((usp) => {
                        return <Usp text={usp}/>
                    })
                }
            </section>
            <section className='category-section'>categories</section>
            <section className="review-section">reviews</section>
        </main>
    );
}

export default Home;