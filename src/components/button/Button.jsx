// Style
import './button.css';

const Button = ({ buttonText }) => {
    return (
        <button type='button' className='regular-button'>
            {buttonText}
        </button>
    );
}

export default Button;