// Components
import Sociallink from '../sociallink/Sociallink';

// Helpers
import getCurrentYear from '../../helpers/getCurrentYear';

// Icons
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

// Style
import './footer.css';

const Footer = () => {
    const currentYear = getCurrentYear();

    return (
        <footer>
            <p>{`glimmer and gear ${currentYear}`}</p>
            <div className='socials'>
                <Sociallink href='https://www.facebook.com/' alt='Facebook icon'>
                    <TiSocialFacebook className='social-icon' />
                </Sociallink>
                <Sociallink href='https://www.instagram.com/' alt='Instagram icon'>
                    <TiSocialInstagram className='social-icon' />
                </Sociallink>
                <Sociallink href='https://twitter.com/' alt='X/Twitter icon'>
                    <TiSocialTwitter className='social-icon' />
                </Sociallink>
            </div >
        </footer >
    );
}

export default Footer;