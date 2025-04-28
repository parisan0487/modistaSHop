'use client';

import { PropagateLoader } from 'react-spinners';

export default function Loading({ className = '' }) {
    return (
        <div className={`flex flex-col justify-center items-center min-h-screen bg-white gap-4 ${className}`}>
            <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 font-semibold animate-bounce">
                لطفاً صبر کنید
            </p>
            <p className="text-lg text-black opacity-75">در حال بارگذاری اطلاعات مورد نظر</p>
            <PropagateLoader color="#FF6000" size={10} margin={0} speedMultiplier={0.8} className="mr-2.5" />
        </div>
    );
}
