import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();
// const auth = getAuth();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const logout = () => {
        return signOut(auth);
    };

    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currUser => {
            console.log(currUser);
            setUser(currUser);
        });
        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ createUser, user, logout, signIn }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {

    return useContext(UserContext);
}