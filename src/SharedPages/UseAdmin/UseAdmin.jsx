// import React, { useEffect, useState } from 'react';

// const UseAdmin = (email) => {
//     const [isAdmin, setIsAdmin] = useState(false)
//         const [isAdminLoading, setIsAdminLoading] = useState(true)
//      useEffect(() =>{
//             if(email){
//                 fetch(`http://localhost:1000/usersCollection/admin/${email}`)
//                 .then(res=> res.json())
//                 .then(data =>{
//                     console.log(data)
//                     setIsAdmin(data.isAdmin)
//                     setIsAdminLoading(false)
//                 })
//             }
//         },[email])
//         return (
//             [isAdmin,isAdminLoading]
//         );
// };

// export default UseAdmin;