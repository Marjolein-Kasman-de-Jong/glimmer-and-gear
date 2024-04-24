import { NavLink } from 'react-router-dom';

// Images
import logo from '../../assets/logo.jpeg';

// Style
import './titlebar.css';

const Titlebar = () => {
    return (
        <div className='titlebar'>
            {/* Logo */}
            <NavLink to='/'>
                <img
                    src={logo}
                    alt='Glimmer & Gear logo'
                />
            </NavLink>
            {/* Shop name and tagline */}
            <NavLink to='/'>
                <hgroup>
                    <h1>
                        glimmer & gear
                    </h1>
                    <p className='titlebar-p'>
                        shine with style, thrive with tech
                    </p>
                </hgroup>
            </NavLink>
        </div>
    );
}

export default Titlebar;