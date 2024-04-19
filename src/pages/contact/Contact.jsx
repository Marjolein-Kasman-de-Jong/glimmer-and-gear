// Components
import SearchBar from '../../components/search-bar/SearchBar'

// Style
import './contact.css'

const Contact = () => {
    return (
        <main>
            <SearchBar />
            <header>
                <h2>Contact us</h2>
            </header>
            <div className='contact-information-container'>
                <div className='socials-container'>
                    <div className='socials'>socials</div>
                    <div className='contact-image-wrapper'>image</div>
                </div>
                <div className='email-container'>
                    <div className='contact-image-wrapper'>image</div>
                    <div className='email'>email</div>
                </div>
            </div>
        </main>
    )
}

export default Contact