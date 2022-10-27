import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init'
import { useState } from 'react';
import { useEffect } from 'react';


const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }

    const signInWithGitHub = ()=>{
        setLoading(true)
        return signInWithPopup(auth, GitHubProvider)
    }
 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('user inside state changed', currentUser);
            setUser(currentUser)

            setLoading(false)
        })

        return ()=>{
            unsubscribe();
        }
    },[])


    const authInfo = {
        user, 
        loading,
        setLoading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        signInWithGoogle,
        signInWithGitHub}
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;