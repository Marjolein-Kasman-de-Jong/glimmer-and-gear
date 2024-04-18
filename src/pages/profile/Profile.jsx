import { useState, useEffect, useContext, } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

// Context
import { AuthContext } from '../../context/AuthContext';

// Components
import SearchBar from '../../components/search-bar/SearchBar';
import Form from '../../components/form/Form';
import UserProfile from '../../components/user-profile/UserProfile';

// Helpers
import validateForm from '../../helpers/validateForm';

// Style
import './profile.css'

const Profile = () => {
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
            setStatusCode(response.status);
            // Trigger authState refresh so updated user data is shown on profile page
            toggleNeedsUpdate(true);
        } catch (error) {
            setStatusCode('error');
            console.log(error);
        }
    }

    // Handle button click
    function handleClick(e, form) {
        e.preventDefault();
        // Validate form and set error messages
        const errors = validateForm(formState, form);
        setErrorMessages(errors);
        // Discard changes
        if (e.target.textContent === 'Discard changes') {
            toggleEdit(!edit);
        // Update user profile
        } else if (Object.keys(errors).length === 0) {
            updateUserProfile();
            toggleEdit(!edit);
        }
    }

    // Set status message
    useEffect(() => {
        switch (statusCode) {
            case '':
                setStatusMessage('');
                break;
            case 204:
                setStatusMessage('User profile updated');
                break;
            case 'error':
                setStatusMessage('User profile update failed');
                break
        }
    }, [statusCode])

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
                    <UserProfile statusCode={statusCode} statusMessage={statusMessage} username={username} email={email} info={info} edit={edit} toggleEdit={toggleEdit} />
            }
        </main>
    );
}

export default Profile;

