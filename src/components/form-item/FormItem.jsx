// Style
import './form-item.css';

const FormItem = ({ item, type, formState, handleChange, errorMessages }) => {
    const error = `${item}Error`;

    return (
        <div className='form-item-wrapper'>
            <div className='form-item-container'>
                <label htmlFor={item}>
                    {item}
                </label>
                {
                    item === 'info' ?
                        <textarea
                            type={type}
                            name={item}
                            id={item}
                            value={formState[item]}
                            onChange={handleChange}
                        >
                        </textarea>
                        :
                        <input
                            type={type}
                            name={item}
                            id={item}
                            value={formState[item]}
                            onChange={handleChange}
                        />
                }
            </div>
            {
                errorMessages[error] &&
                <p className='error-message'>
                    {errorMessages[error]}
                </p>
            }
        </div>
    );
}

export default FormItem;