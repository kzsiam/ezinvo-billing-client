import { AuthContext } from '@/Contexts/AuthProvider';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()
    if(loader){
        return <h1>loading......</h1>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to={"/auth/login"} state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;