// import useTitle from '@/hooks/useTitle';
// import axios from 'axios';
// import React, { useEffect } from 'react';
// import toast from 'react-hot-toast';
// import { useSearchParams } from 'react-router';

// const Success = () => {

//      useTitle('Payment')

//     const [params] = useSearchParams();
//     const invoiceId = params.get('invoiceId');

//     useEffect(() => {
//         if (invoiceId) {
//             axios.post(`http://localhost:1000/api/invoice/mark-paid/${invoiceId}`)
//                 .then(() => {
//                     toast.success("MARK as Paid")
//                 })
//                 .catch(err => toast.error('Update failed', err));
//         }
//     }, [invoiceId]);
//     return (
//         <div className='text-center mt-40'>
//             <h1>✅ Payment Successful</h1>
//             <p>Thank you for your payment. Your invoice has been marked as paid.</p>
//         </div>
//     );
// };

// export default Success;