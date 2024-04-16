// Components
import FormItem from '../form-item/FormItem';
import Button from '../button/Button';

// Style
import './form.css';

const Form = ({ form, formState, handleChange, handleClick, errorMessages, statusCode, statusMessage }) => {
    const loginItems = ['username', 'password']; // Verplaatsen naar constants
    const registrationItems = ['username', 'email', 'password', 'info'];

    return (
        <form className={`login-registration-form ${form}`} action=''>
            {
                form === 'login' ?
                    // Login form
                    <>
                        {statusMessage && <p className={`statusCode-${statusCode}`}>{statusMessage}</p>}
                        {
                            loginItems.map((loginItem) => {
                                return <FormItem
                                    key={loginItem}
                                    item={loginItem}
                                    type={loginItem}
                                    formState={formState}
                                    handleChange={handleChange}
                                    errorMessages={errorMessages}
                                />
                            })
                        }
                    </>
                    :
                    // Registration form
                    <>
                        {statusMessage && <p className={`statusCode-${statusCode}`}>{statusMessage}</p>}
                        {
                            registrationItems.map((registrationItem) => {
                                return <FormItem
                                    key={registrationItem}
                                    item={registrationItem}
                                    type={registrationItem}
                                    formState={formState}
                                    handleChange={handleChange}
                                    errorMessages={errorMessages}
                                />
                            })
                        }
                    </>
            }
            {/* Login/registration button */}
            {<Button type='submit' buttonText={form === 'login' ? 'Login' : 'Create account'} onClick={(e) => handleClick(e, form)} />}
        </form>
    );
}

export default Form;