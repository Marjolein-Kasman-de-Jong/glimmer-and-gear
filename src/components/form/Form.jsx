// Components
import FormItem from '../form-item/FormItem';
import Button from '../button/Button';

// Style
import './form.css';

const Form = ({ form, formState, handleChange, handleClick, errorMessages, responseMessage }) => {
    const loginItems = ['username', 'password']; // Verplaatsen naar constants
    const registrationItems = ['username', 'email', 'password', 'info'];

    return (
        <form className={`login-registration-form ${form}`} action=''>
            {
                form === 'login' ?
                    // Login form
                    loginItems.map((loginItem) => {
                        return <FormItem key={loginItem} item={loginItem} type={loginItem} formState={formState} handleChange={handleChange} errorMessages={errorMessages} />
                    })
                    :
                    // Registration form
                    <>
                        {responseMessage && <p className='response-message'>{responseMessage}</p>}
                        {
                            registrationItems.map((registrationItem) => {
                                return <FormItem key={registrationItem} item={registrationItem} type={registrationItem} formState={formState} handleChange={handleChange} errorMessages={errorMessages} />
                            })
                        }
                    </>
            }
            <Button type='submit' buttonText={form} onClick={(e) => handleClick(e, form)} />
        </form>
    );
}

export default Form;