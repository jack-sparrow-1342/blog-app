import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext); 

function AuthProvider({children}) {
    const [isAuthenticated, setisAuthenticated] = useState(false);

    const authenticate = (usercredentials) => {
        if (usercredentials.email === 'Admin' & usercredentials.password === '12345') {
            setisAuthenticated(true);
            return true;
        }

        else {
            setisAuthenticated(false);
            return false;
        }
    }

    const logout = () =>{
        setisAuthenticated(false)
    }

  return (
    <AuthContext.Provider value={{isAuthenticated, authenticate, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider