import { children, createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (user) => {
        setUser(user);
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>

    )
}

// custom hook / we can call AuthContext instead
export const useAuth = () => {
    return useContext(AuthContext);
}