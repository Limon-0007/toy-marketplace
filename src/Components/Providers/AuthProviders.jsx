import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState(null)

    const authInfo = {
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;