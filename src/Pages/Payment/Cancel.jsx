import useTitle from '@/hooks/useTitle';
import React from 'react';

const Cancel = () => {
    useTitle('Payment')
    return (
        <div className='text-center'>
            <h1>❌ Payment cancel</h1>
            <p>Thank you for your payment. Your invoice has been marked as paid.</p>
        </div>
    );
};

export default Cancel;