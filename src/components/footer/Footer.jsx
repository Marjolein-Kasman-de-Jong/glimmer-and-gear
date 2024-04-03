// Components
import Sociallink from '../sociallink/Sociallink';

// Helpers
import getCurrentYear from '../../helpers/getCurrentYear';

// Images
import facebook from '../../assets/icon-facebook.svg';
import instagram from '../../assets/icon-instagram.svg';
import twitter from '../../assets/icon-twitter.svg';

// Style
import './footer.css';

const Footer = () => {
    const currentYear = getCurrentYear();

    return (
        <footer>
            <p>{`glimmer and gear ${currentYear}`}</p>
            <div className='socials'>
                <Sociallink href='https://www.facebook.com/' icon={facebook} alt='Facebook icon' />
                <Sociallink href='https://www.instagram.com/' icon={instagram} alt='Instagram icon' />
                <Sociallink href='https://twitter.com/' icon={twitter} alt='X/Twitter icon' />
            </div >
        </footer >
    );
}

export default Footer;