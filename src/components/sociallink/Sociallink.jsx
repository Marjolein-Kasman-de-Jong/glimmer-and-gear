// Style
import './sociallink.css';

const Sociallink = ({ href, children }) => {
    return (
        <a href={href} target='_blank'>
            <div className='icon-container'>
                {children}
            </div>
        </a>
    );
}

export default Sociallink;