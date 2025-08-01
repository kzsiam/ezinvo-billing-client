import { AuthContext } from '@/Contexts/AuthProvider';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { RiseLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation()
    if(loader){
        return <div className=' mt-60 flex justify-center items-center'>
        {/* <h1>loading....</h1> */}
        <RiseLoader />
    </div>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to={"/auth/login"} state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;