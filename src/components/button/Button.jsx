import { useNavigate } from 'react-router-dom';

// Style
import './button.css';

const Button = ({ buttonText, to }) => {
    const navigate = useNavigate()
    return (
        <button type='button' className='regular-button' onClick={() => navigate(to)}>
            {buttonText}
        </button>
    );
}

export default Button;