import { useState } from 'react'

// Components
import Button from '../../components/button/Button'

// Style
import './login-and-registration.css'

const LoginAndRegistration = () => {
    const [activeTab, toggleActiveTab] = useState(true);

    // Handle login/create acoount button click
    function handleClick(e) {
        e.preventDefault();
        console.log('geklikt');
    }

    return (
        <main>
            <header>
                <h2>Login/registration</h2>
            </header>

            <div className='tabs-container'>
                <div className="tab-button-container">
                    <button type='button' className='tab-button' onClick={() => {toggleActiveTab(true)}}>I have an account</button>
                    <button type='button' className='tab-button' onClick={() => {toggleActiveTab(false)}}>I am a new customer</button>
                </div>
                {
                    activeTab ?
                        <form className='login-registration-form login' action=''>
                            <div className='form-item-container'>
                                <label htmlFor='username'>username</label>
                                <input type='text' name='username' id='username' />
                            </div>
                            <div className='form-item-container'>
                                <label htmlFor='password'>password</label>
                                <input type='password' name='password' id='password' />
                            </div>
                            <Button type='submit' buttonText='Login' onClick={handleClick} />
                        </form>
                        :
                        <form className='login-registration-form registration' action=''>
                            <div className='form-item-container'>
                                <label htmlFor='username'>username</label>
                                <input type='text' name='username' id='username' />
                            </div>
                            <div className='form-item-container'>
                                <label htmlFor='email'>email</label>
                                <input type='email' name='email' id='email' />
                            </div>
                            <div className='form-item-container'>
                                <label htmlFor='password'>password</label>
                                <input type='password' name='password' id='password' />
                            </div>
                            <label htmlFor='info'>my favorite quote</label>
                            <textarea id='info' name='info' rows='4' cols='100'>
                            </textarea>
                            <Button type='submit' buttonText='Create account' onClick={handleClick} />
                        </form>
                }
            </div>
        </main>
    )
}

export default LoginAndRegistration