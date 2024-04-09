// Style
import './social-link.css';

const SocialLink = ({ href, children }) => {
    return (
        <a className='social-link' href={href} target='_blank'>
            <div className='social-link-icon-container'>
                {children}
            </div>
        </a>
    );
}

export default SocialLink;