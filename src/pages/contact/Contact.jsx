// Components
import SearchBar from '../../components/search-bar/SearchBar';
import SocialLink from '../../components/social-link/SocialLink';

// Images
import socials from '../../assets/contact-us-socials.jpeg';
import email from '../../assets/contact-us-email.jpeg';

// Icons
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

// Style
import './contact.css';

const Contact = () => {
    return (
        <main>
            <SearchBar />
            <header>
                <h2>Contact us</h2>
            </header>
            <div className='contact-information-container'>
                <div className='socials-container'>
                    <div className='socials'>
                        <SocialLink href='https://www.facebook.com/' alt='Facebook icon'>
                            <div className='social-item-wrapper'> {/* Needed to allow both children to be rendered, not just one */}
                                <TiSocialFacebook className='social-link-icon' />
                                <p>Facebook</p>
                            </div>
                        </SocialLink>
                        <SocialLink href='https://www.instagram.com/' alt='Instagram icon'>
                            <div className='social-item-wrapper'> {/* Needed to allow both children to be rendered, not just one */}
                                <TiSocialInstagram className='social-link-icon' />
                                <p>Instagram</p>
                            </div>
                        </SocialLink>
                        <SocialLink href='https://twitter.com/' alt='X/Twitter icon'>
                            <div className='social-item-wrapper'> {/* Needed to allow both children to be rendered, not just one */}
                                <TiSocialTwitter className='social-link-icon' />
                                <p>Twitter</p>
                            </div>
                        </SocialLink>
                    </div>
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