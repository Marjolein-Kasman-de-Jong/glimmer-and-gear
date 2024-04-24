// Components
import FormItem from '../form-item/FormItem';
import Button from '../button/Button';

// Constants
import loginItems from '../../constants/loginItems';
import registrationItems from '../../constants/registrationItems';
import profileItems from '../../constants/profileItems';

// Style
import './form.css';

const Form = ({ form, formState, handleChange, handleClick, errorMessages, statusCode, statusMessage }) => {
    // const profileItems = ['username', 'email', 'info'];

    return (
        <form className={`login-registration-form ${form}`} action=''>
            {
                form === 'login' ?
                    // Login form
                    <>
                        {
                            statusMessage &&
                            <p className={`statusCode-${statusCode}`}>
                                {statusMessage}
                            </p>
                        }
                        {
                            loginItems.map((loginItem) => {
                                return <FormItem
                                    key={loginItem}
                                    item={loginItem}
                                    type={loginItem}
                                    formState={formState}
                                    handleChange={handleChange}
                                    errorMessages={errorMessages}
                                />;
                            })
                        }
                    </>
                    :
                    form === 'registration' ?
                        // Registration form
                        <>
                            {
                                statusMessage &&
                                <p className={`statusCode-${statusCode}`}>
                                    {statusMessage}
                                </p>
                            }
                            {
                                registrationItems.map((registrationItem) => {
                                    return <FormItem
                                        key={registrationItem}
                                        item={registrationItem}
                                        type={registrationItem}
                                        formState={formState}
                                        handleChange={handleChange}
                                        errorMessages={errorMessages}
                                    />;
                                })
                            }
                        </>
                        :
                        // Profile form
                        <>
                            {
                                profileItems.map((profileItem) => {
                                    return <FormItem
                                        key={profileItem}
                                        item={profileItem}
                                        type={profileItem}
                                        formState={formState}
                                        handleChange={handleChange}
                                        errorMessages={errorMessages}
                                    />;
                                })
                            }
                        </>
            }
            {/* Login/registration button */}
            {
                form === 'profile' ?
                    <div className='profile-button-container'>
                        <Button
                            type='button'
                            buttonText={'Confirm changes'}
                            onClick={(e) => handleClick(e, form)}
                        />
                        <Button
                            type='submit'
                            buttonText={'Discard changes'}
                            onClick={(e) => handleClick(e, form)}
                        />
                    </div>
                    :
                    <Button
                        type='submit'
                        buttonText={form === 'login' ? 'Login' : 'Create account'}
                        onClick={(e) => handleClick(e, form)}
                    />
            }
        </form>
    );
}

export default Form;