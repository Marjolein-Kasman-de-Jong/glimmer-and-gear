import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
    const [authState, setAuthState] = useState({
        isLoggedIn: false,
        username: '',
        email: '',
        info: '',
        status: 'pending',
    });

    // Check for stored token and decode if present
    const storedToken = localStorage.getItem('token');
    let decodedStoredToken;
    if (storedToken) {
        decodedStoredToken = jwtDecode(storedToken);
    }

    // Create data object
    const data = {
        ...authState,
        login,
        logout,
    };

    // Get user data
    async function getUserData(decodedToken, storedToken, setAuthState) {
        try {
            let response;
            if (decodedToken) {
                response = await axios.get(`https://api.datavortex.nl/glimmerandgear/users/${decodedToken.sub}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${storedToken}`,
                    }
                })
            };
            if (response) {
                setAuthState({
                    isLoggedIn: true,
                    username: response.data.username,
                    email: response.data.email,
                    info: response.data.info,
                    status: 'done',
                })
            };
        } catch (error) {
            setAuthState({
                isLoggedIn: false,
                username: '',
                email: '',
                info: '',
                status: 'done',
            });
            console.log(error);
        }
    }

    // Call getUserData on first render and login user is a token is already present 
    useEffect(() => {
        getUserData(decodedStoredToken, storedToken, setAuthState);
    }, []);

    // Login user when login button is clicked
    async function login(formState) {
        try {
            // Get token
            const response = await axios.post('https://api.datavortex.nl/glimmerandgear/users/authenticate', {
                'username': formState.username,
                'password': formState.password,
            });
            localStorage.setItem('token', response.data.jwt);
            // Decode token
            const decodedToken = jwtDecode(response.data.jwt);
            // Get user data
            getUserData(decodedToken, response.data.jwt, setAuthState);
        } catch (error) {
            console.log(error);
        }
    }

    function logout() {
        // Clear local storage
        localStorage.clear();
        // Clear authState
        setAuthState({
            isLoggedIn: false,
            username: '',
            email: '',
            info: '',
            status: 'pending',
        });

    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;