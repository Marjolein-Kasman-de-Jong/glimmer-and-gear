// Images
import logo from '../../assets/logo.jpeg'

// Style
import './titlebar.css'

const Titlebar = () => {
    return (
        <div className='titlebar'>
            {/* Logo */}
            <div className='logo-wrapper'>
                <img src={logo} alt="Glimmer & Gear logo" />
            </div>
            {/* Shop name and tagline */}
            <hgroup>
                <h1>Glimmer & Gear</h1>
                <p>Shine with style, thrive with tech</p>
            </hgroup>
        </div>
    )
}

export default Titlebar