import PaymentFailed from '@/components/layout/basket/orderCompletion/PaymentFailed';
import PaymentSuccess from '@/components/layout/basket/orderCompletion/PaymentSuccess';
import React from 'react';

const page = () => {
    const isSuccess = true;

    return (
        <div className="w-full pt-10 pb-20 flex items-center justify-center">
            {isSuccess ? <PaymentSuccess /> : <PaymentFailed />}
        </div>
    );
};

export default page;
