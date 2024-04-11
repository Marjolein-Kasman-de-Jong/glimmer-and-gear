import { useState, useEffect } from 'react';

// Components
import FormItem from '../../components/form-item/FormItem';
import Button from '../../components/button/Button';

// Helpers
import validateForm from '../../helpers/validateForm';

// Style
import './login-and-registration.css';

const LoginAndRegistration = () => {
    // Monitor component load
    const [isComponentLoaded, setComponentLoaded] = useState(false);

    // Monitor active tab
    const [activeTab, toggleActiveTab] = useState(true);

    // Monitor user input
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        info: ''
    });

    // Monitor error messages
    const [errorMessages, setErrorMessages] = useState({});

    // Handle input change
    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    // Handle login/create account button click
    function handleClick(e, form) {
        e.preventDefault();
        // Validate form and set error messages
        setErrorMessages(validateForm(formState, form));
    }

    // Prevent data being sent to backend on component load, when errorMessages is still empty
    useEffect(() => {
        setComponentLoaded(true);
        return () => {
            setComponentLoaded(false);
        };
    }, []);

    // Send data to backend if isComponentLoaded === true AND errorMessages is empty
    useEffect(() => {
        if (isComponentLoaded && Object.keys(errorMessages).length === 0) {
            console.log('verstuur data');
            // Error en succes messages toevoegen 
        } else {
            console.log('oeps');
            // Error messages toevoegen
        }
    }, [errorMessages]);

    return (
        <main>
            <header>
                <h2>Login/registration</h2>
            </header>

            <div className='tabs-container'>
                <div className="tab-button-container">
                    <button type='button' className='tab-button' onClick={() => { toggleActiveTab(true) }}>I have an account</button>
                    <button type='button' className='tab-button' onClick={() => { toggleActiveTab(false) }}>I am a new customer</button>
                </div>
                {
                    activeTab ?
                        <form className='login-registration-form login' action=''>
                            <FormItem item='username' type='text' formState={formState} handleChange={handleChange} errorMessages={errorMessages} />
                            <FormItem item='password' type='password' formState={formState} handleChange={handleChange} errorMessages={errorMessages} />
                            <Button type='submit' buttonText='Login' onClick={handleClick} />
                        </form>
                        :
                        <form className='login-registration-form registration' action=''>
                            <FormItem item='username' type='text' formState={formState} handleChange={handleChange} errorMessages={errorMessages} />
                            <FormItem item='email' type='email' formState={formState} handleChange={handleChange} errorMessages={errorMessages} />
                            <FormItem item='password' type='password' formState={formState} handleChange={handleChange} errorMessages={errorMessages} />
                            <FormItem item='info' type='text' formState={formState} handleChange={handleChange} errorMessages={errorMessages} />
                            <Button type='submit' buttonText='Create account' onClick={(e) => handleClick(e, 'registration')} />
                        </form>
                }
            </div>
        </main>
    )
}

export default LoginAndRegistration