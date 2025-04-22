'use client';

const PaymentFailed = () => {
    return (
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto px-4 sm:px-6 py-6 sm:py-8 bg-white rounded-3xl shadow-lg text-center animate-fade-in transition-all duration-300">
            <div className="flex justify-center items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 sm:p-4 animate-bounce-slow">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-12 h-12 sm:w-16 sm:h-16 text-red-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                </div>
            </div>

            <p dir="rtl" className="text-xl sm:text-2xl font-extrabold text-red-600">
                پرداخت ناموفق بود.
            </p>
            <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed px-2 sm:px-4">
                متأسفیم! عملیات پرداخت با مشکل مواجه شد. لطفاً اتصال اینترنت خود را بررسی کرده و دوباره تلاش کنید
            </p>

            <button
                onClick={() => (window.location.href = '/')}
                className="mt-6 w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition-all duration-200"
            >
                بازگشت به صفحهٔ اصلی
            </button>
        </div>
    );
};

export default PaymentFailed;
