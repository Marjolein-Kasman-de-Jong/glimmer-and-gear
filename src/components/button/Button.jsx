// Style
import './button.css';

const Button = ({ buttonText }) => {
    return (
        <button type='button' className='action-button'>
            {buttonText}
        </button>
    );
}

export default Button;