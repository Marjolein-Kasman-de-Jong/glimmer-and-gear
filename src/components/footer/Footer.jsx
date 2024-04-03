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
                <a href='https://www.facebook.com/' target='_blank'>
                    <div className='icon-container'>
                        <img src={facebook} alt='Facebook icon' />
                    </div>
                </a>
                <a href='https://www.instagram.com/' target='_blank'>
                    <div className='icon-container'>
                        <img src={instagram} alt='Instagram icon' />
                    </div>
                </a>
                <a href='https://twitter.com/' target='_blank'>
                    <div className='icon-container'>
                        <img src={twitter} alt='X/Twitter icon' />
                    </div>
                </a>
            </div >
        </footer >
    );
}

export default Footer;