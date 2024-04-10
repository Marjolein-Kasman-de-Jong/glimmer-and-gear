// Components
import Button from '../../components/button/Button';

// Images
import notFoundImage from '../../assets/page-not-found.jpeg';

// Style
import './page-not-found.css'

const PageNotFound = () => {
    return (
        <main className='not-found-container'>
            <article className='not-found-text-container'>
                <header>
                    <h2>So sorry!</h2>
                </header>
                <p>The page you are looking for cannot be found.</p>
                <Button buttonText='Take me home' to='/' />
            </article>
            <div className="not-found-image-container">
                <img src={notFoundImage} alt='Man that is lost' />
            </div>
        </main>
    )
}

export default PageNotFound