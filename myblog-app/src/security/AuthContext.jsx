import { createContext, useContext, useEffect, useState } from "react";
import { executeJwtAuthenticationService, getUserId } from "../api/BlogPostApiService";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
    const [isAuthenticated, setisAuthenticated] = useState(false);
    const [token, setToken] = useState(sessionStorage.getItem('token') || null);
    const [userId, setuserId] = useState(sessionStorage.getItem('userId') || null);
    const [username, setUsername] = useState(sessionStorage.getItem('username') || null);

    useEffect(() => {
        if (token) {
            setisAuthenticated(true);
        }
    }, [token]);

    async function authenticate(credentials) {
        try {
            const response = await executeJwtAuthenticationService(credentials.email, credentials.password)
            
            if (response.status === 200) {
                const jwtToken = 'Bearer ' + response.data.token;
                setToken(jwtToken)
                sessionStorage.setItem('token', jwtToken);

                apiClient.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization = jwtToken
                        return config
                    }
                )
                setisAuthenticated(true);
                setUsername(credentials.email);
                sessionStorage.setItem('username', credentials.email);
                
                getUserId(credentials.email)
                    .then((resp) => {
                        setuserId(resp.data.id);
                        sessionStorage.setItem('userId', resp.data.id);
                    })
                    .catch(error => console.log(error))
                return true
            }else {
                logout()
                return false
            }
        } catch (error) {
            logout()
            return false
        }
    }

    const logout = () => {
        setisAuthenticated(false)
        setToken(false)
        setUsername(null)
        setuserId(null)
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('userId');
    }
    function setCurrentUserId() {
        getUserId(username)
            .then((resp) => setuserId(resp.data.id))
            .catch(error => console.log(error))
            .finally(console.log("user id Ceanup"))
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, authenticate, logout, userId, setCurrentUserId, token }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider