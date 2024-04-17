import { useState, useEffect, useContext, } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

// Context
import { AuthContext } from '../../context/AuthContext';

// Components
import SearchBar from '../../components/search-bar/SearchBar';
import ProfileItem from '../../components/profile-item/ProfileItem';
import Button from '../../components/button/Button';
import Form from '../../components/form/Form';

// Helpers
import validateForm from '../../helpers/validateForm';

// Icons
import { SlPencil } from "react-icons/sl";

// Style
import './profile.css'

const Profile = () => {
    //const { authState, setAuthState } = useContext(AuthContext);
    const { username, email, password, info, toggleNeedsUpdate } = useContext(AuthContext);
    const [errorMessages, setErrorMessages] = useState({});
    const [statusCode, setStatusCode] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [edit, toggleEdit] = useState(false);
    const [formState, setFormState] = useState({
        username,
        email,
        password,
        info,
    })
    const icon = <SlPencil />;

    // Handle input change
    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    // Update user profile

    const storedToken = localStorage.getItem('token');
    let decodedStoredToken;

    async function updateUserProfile() {
        try {
            if (storedToken) {
                decodedStoredToken = jwtDecode(storedToken);
            }
            const response = await axios.put(`https://api.datavortex.nl/glimmerandgear/users/${decodedStoredToken.sub}`, formState, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${storedToken}`,
                },
            });
            toggleNeedsUpdate(true)
        } catch (error) {
            console.log(error);
        }
    }

    // Handle button click
    function handleClick(e, form) {
        e.preventDefault();
        // Validate form and set error messages
        setErrorMessages(validateForm(formState, form));
        // Discard changes
        if (e.target.textContent === 'Discard changes') {
            toggleEdit(!edit);
        // Update user profile
        } else {
            updateUserProfile()
            toggleEdit(!edit);
        }
    }

    return (
        <main>
            <SearchBar />
            <header>
                <h2>User profile</h2>
            </header>
            {
                edit ?
                    <Form form='profile' formState={formState} handleChange={handleChange} handleClick={handleClick} errorMessages={errorMessages} statusCode={statusCode} statusMessage={statusMessage} />
                    :
                    <article className='profile-container'>
                        <header className='profile-title'>
                            <h3>{username}</h3>
                            <Button type='button' buttonText='edit' icon={icon} onClick={() => toggleEdit(!edit)} />
                        </header>
                        <ProfileItem item={{ email: email }} />
                        <ProfileItem item={{ info: info }} />
                    </article>
            }
        </main>
    );

}

export default Profile;

