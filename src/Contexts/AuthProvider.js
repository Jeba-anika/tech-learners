import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.init'
import { useState } from 'react';
import { useEffect } from 'react';


const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logOut = ()=>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('user inside state changed', currentUser);
            setUser(currentUser)
        })

        return ()=>{
            unsubscribe();
        }
    },[])


    const authInfo = {
        user, 
        createUser,
        signIn,
        logOut}
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;