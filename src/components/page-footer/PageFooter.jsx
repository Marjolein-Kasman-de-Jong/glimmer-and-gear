// Components
import SocialLink from '../social-link/SocialLink';

// Helpers
import getCurrentYear from '../../helpers/getCurrentYear';

// Icons
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

// Style
import './page-footer.css';

const PageFooter = () => {
    const currentYear = getCurrentYear();

    return (
        <footer className='page-footer'>
            {/* Copyright */}
            <p>{`glimmer and gear ${currentYear}`}</p>
            {/* Social links */}
            <div className='social-link-container'>
                <SocialLink href='https://www.facebook.com/' alt='Facebook icon'>
                    <TiSocialFacebook className='social-link-icon' />
                </SocialLink>
                <SocialLink href='https://www.instagram.com/' alt='Instagram icon'>
                    <TiSocialInstagram className='social-link-icon' />
                </SocialLink>
                <SocialLink href='https://twitter.com/' alt='X/Twitter icon'>
                    <TiSocialTwitter className='social-link-icon' />
                </SocialLink>
            </div >
        </footer >
    );
}

export default PageFooter;