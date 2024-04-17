// Style
import './button.css';

const Button = ({ type, buttonText, icon, onClick }) => {

    return (
        <button type={type} className='regular-button' onClick={onClick}>
            {buttonText}
            {icon}
        </button>
    );
}

export default Button;