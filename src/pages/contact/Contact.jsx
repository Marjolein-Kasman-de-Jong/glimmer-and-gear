// Components
import SearchBar from '../../components/search-bar/SearchBar';

// Style
import './contact.css';

// Images
import socials from '../../assets/contact-us-socials.jpeg';
import email from '../../assets/contact-us-email.jpeg';

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
                    <div className='contact-image-wrapper'>
                        <img src={socials} alt='Social media logos' />
                    </div>
                </div>
                <div className='email-container'>
                    <div className='contact-image-wrapper'>
                        <img src={email} alt='Woman working on a laptop computer' />
                    </div>
                    <div className='email'>
                        <p>customerservice@glimmerandgear.com</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact;