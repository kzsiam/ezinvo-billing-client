import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import MyInvoice from './MyInvoice';
import { AuthContext } from '@/Contexts/AuthProvider';

const MyInvoices = () => {
    const { user } = useContext(AuthContext)
    
    const [invoiceList, setInvoiceList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchUsers = async () => {

            try {
                const response = await axios.get(`http://localhost:1000/invoiceCollections/${user?.email}`);
                setInvoiceList(response.data); // Set response data to state
                setLoading(false);      // Start loading
                setError(null);
            }
            catch (error) {
                console.error("Failed to fetch users:", error);
                setError(error.message)
            }
            finally {
                setLoading(false)
            }
        };
        if (user?.email) {
            fetchUsers()
        }
    }, [user?.email])

    if (loading) return <div className='mt-20'>
        <h1>loading....</h1>
    </div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div className='mt-20 p-6 my-20 max-w-4xl mx-auto space-y-6'>
            <h2 className="text-xl font-bold mb-4">My Invoices</h2>
            {invoiceList.length === 0 && (
                <p className="text-center text-gray-500 mt-4">No invoices found.</p>
            )}
            {
                invoiceList.map(invoiceData => <MyInvoice key={invoiceData} invoiceData={invoiceData}></MyInvoice>)
            }
        </div>
    );
};

export default MyInvoices;