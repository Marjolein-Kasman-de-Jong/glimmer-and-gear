// Style
import './sociallink.css';

const Sociallink = ({ href, icon, alt }) => {
    return (
        <a href={href} target='_blank'>
            <div className='icon-container'>
                <img src={icon} alt={alt} />
            </div>
        </a>
    );
}

export default Sociallink;