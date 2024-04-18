import { useState, useEffect, useContext } from 'react';

// Context
import { AuthContext } from '../../context/AuthContext';

// Components
import Form from '../../components/form/Form';

// Helpers
import validateForm from '../../helpers/validateForm';
import createUser from '../../helpers/createUser';

// Style
import './login-and-registration.css';

const LoginAndRegistration = () => {
    const [activeTab, toggleActiveTab] = useState(true); 
    const [errorMessages, setErrorMessages] = useState({}); 
    const [statusCode, setStatusCode] = useState(''); 
    const [statusMessage, setStatusMessage] = useState('');  
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        info: ''
    });

    const { login } = useContext(AuthContext);

    console.log(errorMessages)

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
        const errors = validateForm(formState, form);
        setErrorMessages(errors);
        // Login
        if (activeTab) {
            login(formState, setStatusCode);
        // Create account
        } else if (Object.keys(errors).length === 0) {
            createUser(formState, setStatusCode);
        }
    }

    // Set status message
    useEffect(() => {
        switch (statusCode) {
            case '':
                setStatusMessage('');
                break;
            case 200:
                activeTab ? setStatusMessage('Login successful') : setStatusMessage('Registration successful');
                break;
            case 'error':
                activeTab ? setStatusMessage('Login failed') : setStatusMessage('Registration failed');
                break
        }
    }, [activeTab, statusCode]);

    // Clear formState, statusCode and errorMessages when activeTab changes
    useEffect(() => {
        setFormState({
            username: '',
            email: '',
            password: '',
            info: '',
        });
        setStatusCode('');
        setErrorMessages({});
    }, [activeTab]);

    return (
        <main>
            <header>
                <h2>Login/registration</h2>
            </header>

            <div className='tabs-container'>
                {/* Tab titles */}
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
                            statusCode={statusCode}
                            statusMessage={statusMessage}
                        />
                        :
                        // Registration form
                        <Form
                            form='registration'
                            formState={formState}
                            handleChange={handleChange}
                            handleClick={handleClick}
                            errorMessages={errorMessages}
                            statusCode={statusCode}
                            statusMessage={statusMessage}
                        />
                }
            </div>
        </main>
    );
}

export default LoginAndRegistration;