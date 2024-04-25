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

    const [needsUpdate, toggleNeedsUpdate] = useState(true)

    const data = {
        ...authState,
        login,
        logout,
        toggleNeedsUpdate,
    };

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
            console.error(error);
        }
    }

    // Auto login/refresh user data
    useEffect(() => {
        if (needsUpdate) {
            // Check for stored token and decode if present
            const storedToken = localStorage.getItem('token');
            let decodedStoredToken;
            if (storedToken) {
                decodedStoredToken = jwtDecode(storedToken);
            }
            // Call getUserData and login if a token is already present 
            storedToken && getUserData(decodedStoredToken, storedToken, setAuthState);
        }
        toggleNeedsUpdate(false);
    }, [needsUpdate]);

    // Login
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
            // Set status code
            setStatusCode('error');
            console.error(error);
        }
    }

    // Logout
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
        // Set status code
        setStatusCode('');
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;