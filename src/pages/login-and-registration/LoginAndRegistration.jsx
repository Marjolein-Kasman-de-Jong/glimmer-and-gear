import { useState, useEffect } from 'react';
import axios from 'axios';

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

    // Prevent data being sent to backend on component load (when errorMessages is still empty)
    useEffect(() => {
        setComponentLoaded(true);
        return () => {
            setComponentLoaded(false);
        };
    }, []);

    // Send data to backend if isComponentLoaded === true AND errorMessages is empty
    const [responseMessage, setResponseMessage] = useState('');

    useEffect(() => {
        // User registration
        async function createUser() {
            try {
                const response = await axios.post('https://api.datavortex.nl/glimmerandgear/users', {
                    "username": formState.username,
                    "email": formState.email,
                    "password": formState.password,
                    "info": formState.info,
                    "authorities": [
                        {
                            "authority": "USER"
                        },
                    ]
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key': 'glimmerandgear:60TTS2GBNi8Hyhi22dtu',
                    },
                });
                setResponseMessage('User registration succesful'); // Nog verwijderen als automatische inlog is toegevoegd
            } catch (error) {
                console.log(error);
                setResponseMessage('User registration failed. ' + error.response.data + '.');
            }
        }

        if (!activeTab && isComponentLoaded && Object.keys(errorMessages).length === 0) {
            createUser();
        }

        // User login
        async function authenticateUser() {
            try {
                const response = await axios.post('https://api.datavortex.nl/glimmerandgear/users/authenticate', {
                    'username': formState.username,
                    'password': formState.password,
                });
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

        if (activeTab && isComponentLoaded && Object.keys(errorMessages).length === 0) {
            authenticateUser();
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
                                responseMessage={responseMessage}
                            />
                }
            </div>
        </main>
    );
}

export default LoginAndRegistration;