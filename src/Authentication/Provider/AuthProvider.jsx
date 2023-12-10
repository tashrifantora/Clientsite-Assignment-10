import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../../Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)





    // Create user by Email Password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }



    // SignIn/LogIN User

    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    /* ============================
          Sign in with Google (Next)
     ==============================
    */
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }





    // User SignOut 
    const userSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }



    // Manage User
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
        });
        return () => {
            return unSubscribe();
        }
    }, [])

    const contextValue = {
        user,
        createUser,
        userSignIn,
        signInWithGoogle,
        userSignOut,
        loading
    }


    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;