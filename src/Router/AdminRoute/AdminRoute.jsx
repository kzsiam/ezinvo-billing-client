import React, { useContext } from 'react';
import UseAdmin from '@/SharedPages/UseAdmin/UseAdmin';
import { AuthContext } from '@/Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import { RiseLoader } from 'react-spinners';

const AdminRoute = ({ children }) => {
    const location = useLocation()
    const { user, loader } = useContext(AuthContext)

    const [isAdmin, isAdminLoading] = UseAdmin(user?.email)

    if (loader || isAdminLoading) {
        return <div className=' mt-60 flex justify-center items-center'>
            
            <RiseLoader />
        </div>


    }
    if (user && isAdmin) {
        return children;
    }
    return (
        <Navigate to={'/auth/login'} state={{ from: location }} replace></Navigate>
    );
};

export default AdminRoute;