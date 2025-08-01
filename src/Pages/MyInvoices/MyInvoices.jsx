// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react';
// import MyInvoice from './MyInvoice';
// import { AuthContext } from '@/Contexts/AuthProvider';
// import { Input } from '@/components/ui/input';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { Button } from '@/components/ui/button';
// import { RiseLoader } from 'react-spinners';
// import useTitle from '@/hooks/useTitle';

// const MyInvoices = () => {
//     const { user } = useContext(AuthContext)
//     useTitle("My Invoice")
//     const [invoiceList, setInvoiceList] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)

    
//     const fetchUsers = async () => {

//         try {
//             const response = await axios.get(`http://localhost:1000/invoiceCollections/${user?.email}`, { withCredentials: true });
//             setInvoiceList(response.data); // Set response data to state
//             setLoading(false);      // Start loading
//             setError(null);
//         }
//         catch (error) {
//             console.error("Failed to fetch users:", error);
//             setError(error.message)
//         }
//         finally {
//             setLoading(false)
//         }
//     };

//     useEffect(() => {
//         if (user?.email) {
//             fetchUsers()
//         }
//     }, [user?.email])
//     if (loading) return <div className=' mt-60 flex justify-center items-center'>
//         {/* <h1>loading....</h1> */}
//         <RiseLoader />
//     </div>;
//     if (error) return <div>Error: {error}</div>;
//     return (
//         <div>
//             <div className=" text-black p-6 lg:mx-62 mt-10 rounded-lg space-y-4">
//                 <h1 className=' mt-10'>My Invoices</h1>


//                 {
//                     invoiceList.length === 0 ?
//                         <p className="text-center text-gray-500 mt-4">No invoices found.</p> : <>
//                             <div className="flex justify-start items-center gap-2">
//                                 <Input
//                                     placeholder="Filter emails..."
//                                     className="w-64  border-zinc-700  placeholder:text-zinc-400"
//                                 />
//                                 <Button className="cursor-pointer">Search</Button>
//                             </div>
//                             <Table className="border  rounded-lg">
//                                 <TableHeader>
//                                     <TableRow>
//                                         <TableHead >
//                                             <h1 className="mx-5">#</h1>
//                                         </TableHead>
//                                         <TableHead>Name</TableHead>
//                                         <TableHead className="cursor-pointer">Email ⬍</TableHead>
//                                         <TableHead className="cursor-pointer">Status</TableHead>
//                                         <TableHead>Invoice</TableHead>
//                                         <TableHead />
//                                     </TableRow>
//                                 </TableHeader>
//                                 <TableBody>
//                                     {invoiceList.map((invoiceData, i) => (
//                                         <MyInvoice invoiceData={invoiceData} refetch={fetchUsers} i={i} key={invoiceData._id}></MyInvoice>
//                                     ))}
//                                 </TableBody>
//                             </Table>

//                             <div className="flex justify-end text-sm  pt-2">
//                                 <div className="space-x-2">
//                                     <Button variant="ghost" size="sm" className="cursor-pointer">Previous</Button>
//                                     <Button variant="ghost" size="sm" className="cursor-pointer">Next</Button>
//                                 </div>
//                             </div>
//                         </>

//                 }


//             </div>
//         </div>
//     );
// };

// export default MyInvoices;