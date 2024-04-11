// Style
import './button.css';

const Button = ({ type, buttonText, onClick }) => {
    return (
        <button type={type} className='regular-button' onClick={onClick}>
            {buttonText}
        </button>
    );
}

export default Button;