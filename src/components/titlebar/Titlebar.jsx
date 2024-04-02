// Images
import logo from '../../assets/logo.jpeg';

// Style
import './titlebar.css';

const Titlebar = () => {
    return (
        <div className='titlebar'>
            {/* Logo */}
            <img src={logo} alt='Glimmer & Gear logo' />
            {/* Shop name and tagline */}
            <hgroup>
                <h1>glimmer & gear</h1>
                <p>shine with style, thrive with tech</p>
            </hgroup>
        </div>
    );
}

export default Titlebar;