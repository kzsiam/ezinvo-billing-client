import app from '@/firebase/firebase.init';
import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signOut, updateProfile} from 'firebase/auth'



export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)


    const createUser = (email,password) =>{
        
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

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)

        })

        return (() =>{
            return unsubscribe()
        })
    },[])

    const logout = () =>{
        
        return signOut(auth)
    }

    const authInfo = {
        updateUserInfo,
        createUser,
        user,
        logout,
        emailReset,
        emailVerification
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