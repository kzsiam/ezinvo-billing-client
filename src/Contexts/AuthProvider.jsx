import app from '@/firebase/firebase.init';
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'



export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loader,setLoader] = useState(true)


    const createUser = (email,password) =>{
        setLoader(true)
       return  createUserWithEmailAndPassword(auth,email,password)
    }
    

    const updateUserInfo = (profile) =>{
        return updateProfile(auth.currentUser,profile)
    }

    const emailReset = (email) =>{
        return sendPasswordResetEmail(auth,email)
    }

    const emailVerification = ( ) =>{
        return sendEmailVerification(auth.currentUser)
    }

    const signInEmail = async(email,password) =>{
        setLoader(true)
        const signUser = await signInWithEmailAndPassword(auth,email,password)
        console.log(signUser)
        return signUser
    //    return  signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setLoader(false)
            setUser(currentUser)

        })

        return (() =>{
            return unsubscribe()
        })
    },[])

    const logout = () =>{
        setLoader(true)
        return signOut(auth)
    }

    const authInfo = {
        updateUserInfo,
        createUser,
        user,
        logout,
        emailReset,
        emailVerification,
        signInEmail,
        loader
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;