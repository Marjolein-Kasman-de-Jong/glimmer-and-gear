import { useState } from 'react';

// Components
import Button from '../../components/button/Button';

// Helpers
import validateForm from '../../helpers/validateForm';

// Style
import './login-and-registration.css';

const LoginAndRegistration = () => {
    const [activeTab, toggleActiveTab] = useState(true);
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        info: ''
    });

    // Handle input change
    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    // Handle login/create acoount button click
    function handleClick(e) {
        e.preventDefault();
        const errorMessages = validateForm(formState);
        console.log(errorMessages);
    }

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
                            <div className='form-item-container'>
                                <label htmlFor='username'>username</label>
                                <input type='text' name='username' id='username' value={formState.username} onChange={handleChange} />
                            </div>
                            <div className='form-item-container'>
                                <label htmlFor='password'>password</label>
                                <input type='password' name='password' id='password' value={formState.password} onChange={handleChange} />
                            </div>
                            <Button type='submit' buttonText='Login' onClick={handleClick} />
                        </form>
                        :
                        <form className='login-registration-form registration' action=''>
                            <div className='form-item-container'>
                                <label htmlFor='username'>username</label>
                                <input type='text' name='username' id='username' value={formState.username} onChange={handleChange} />
                            </div>
                            <div className='form-item-container'>
                                <label htmlFor='email'>email</label>
                                <input type='email' name='email' id='email' value={formState.email} onChange={handleChange} />
                            </div>
                            <div className='form-item-container'>
                                <label htmlFor='password'>password</label>
                                <input type='password' name='password' id='password' value={formState.password} onChange={handleChange} />
                            </div>
                            <div className='form-item-container'>
                                <label htmlFor='info'>about me</label>
                                <textarea id='info' name='info' value={formState.info} onChange={handleChange} >
                                </textarea>
                            </div>
                            <Button type='submit' buttonText='Create account' onClick={handleClick} />
                        </form>
                }
            </div>
        </main>
    )
}

export default LoginAndRegistration