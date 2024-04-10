// Icons
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

// Style
import './faq-component.css';

const FaqComponent = ({ faq, isActive, onClick }) => {
    return (
        <div className='faq-component'>
            {/* Question */}
            <button
                className='question'
                onClick={onClick}>
                <h3>{faq.question}</h3>
                {isActive ? <SlArrowUp className='arrow' /> : <SlArrowDown className='arrow'/>}
            </button>
            {/* Answer */}
            {isActive &&
                <div className='answer'>
                    <p className='answer-p'>{faq.answer}</p>
                </div>
            }
        </div>
    );
}

export default FaqComponent;
