// import React, { useContext } from 'react';
// import UseAdmin from '@/SharedPages/UseAdmin/UseAdmin';
// import { AuthContext } from '@/Contexts/AuthProvider';
// import { Navigate, useLocation } from 'react-router';

// const AdminRoute = ({children}) => {
//     const location = useLocation()
//     const {user,loader} = useContext(AuthContext)

//     const [isAdmin,isAdminLoading] = UseAdmin(user?.email)

//     if(loader || isAdminLoading){
//         return <div className='mx-auto'>
//         <span className="loading loading-bars loading-xs"></span>
//         <span className="loading loading-bars loading-sm"></span>
//         <span className="loading loading-bars loading-md"></span>
//         <span className="loading loading-bars loading-lg"></span>
//     </div>
//     }
//     if(user && isAdmin){
//         return children;
//     }
//     return (
//         <Navigate to={'/auth/login'} state={{ from: location }} replace></Navigate>
//     );
// };

// export default AdminRoute;