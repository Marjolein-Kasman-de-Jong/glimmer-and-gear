import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

export const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
    const [authState, setAuthState] = useState({
        isLoggedIn: false,
        username: '',
        email: '',
        info: '',
        status: 'pending',
    });

    // Create data object
    const data = {
        ...authState,
        login,
        logout,
    };

    // Check for stored token and decode if present
    const storedToken = localStorage.getItem('token');
    let decodedStoredToken;
    if (storedToken) {
        decodedStoredToken = jwtDecode(storedToken);
    }

    // Get user data
    async function getUserData(decodedToken, storedToken, setAuthState, setStatusCode) {
        try {
            let response;
            if (decodedToken) {
                // Get user data
                response = await axios.get(`https://api.datavortex.nl/glimmerandgear/users/${decodedToken.sub}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${storedToken}`,
                    }
                })
            };
            if (response) {
                // Set authState
                setAuthState({
                    isLoggedIn: true,
                    username: response.data.username,
                    email: response.data.email,
                    info: response.data.info,
                    status: 'done',
                });
                // Set status code
                setStatusCode && setStatusCode(response.status);
            };
        } catch (error) {
            console.log(error);
        }
    }

    // Call getUserData on component render and login user if a token is already present 
    useEffect(() => {
        getUserData(decodedStoredToken, storedToken, setAuthState);
    }, []);

    // Login user
    async function login(formState, setStatusCode) {
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
            getUserData(decodedToken, response.data.jwt, setAuthState, setStatusCode);
        } catch (error) {
            // Clear authState
            setAuthState({
                isLoggedIn: false,
                username: '',
                email: '',
                info: '',
                status: 'done',
            });
            setStatusCode('error');
            console.log(error);
        }
    }

    // Logout user
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
        setStatusCode('');
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;