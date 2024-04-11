import { useState, useEffect } from 'react';

// Components
import Form from '../../components/form/Form';

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
                <div className='tab-button-container'>
                    <button type='button' className='tab-button' onClick={() => { toggleActiveTab(true) }}>I have an account</button>
                    <button type='button' className='tab-button' onClick={() => { toggleActiveTab(false) }}>I am a new customer</button>
                </div>
                {
                    activeTab ?
                        // Login form
                        <Form
                            form='login'
                            formState={formState}
                            handleChange={handleChange}
                            handleClick={handleClick}
                            errorMessages={errorMessages}
                        />
                        :
                        // Registration form
                        <Form
                            form='registration'
                            formState={formState}
                            handleChange={handleChange}
                            handleClick={handleClick}
                            errorMessages={errorMessages}
                        />
                }
            </div>
        </main>
    )
}

export default LoginAndRegistration