'use client';

const PaymentSuccess = () => {
    return (
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto px-4 sm:px-6 py-6 sm:py-8 bg-white rounded-3xl shadow-lg text-center animate-fade-in transition-all duration-300">
            <div className="flex justify-center items-center mb-4">
                <div className="bg-green-100 rounded-full p-3 sm:p-4 animate-bounce-slow">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-12 h-12 sm:w-16 sm:h-16 text-green-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                </div>
            </div>

            <p dir="rtl" className="text-xl sm:text-2xl font-extrabold text-green-600">
                پرداخت با موفقیت انجام شد!
            </p>
            <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed px-2 sm:px-4">
                سفارش شما با موفقیت ثبت گردید. اجناس خریداری‌شده در اسرع وقت به دست‌تان می‌رسد
            </p>

            <button
                onClick={() => (window.location.href = '/')}
                className="mt-6 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition-all duration-200 cursor-pointer"
            >
                بازگشت به خانه
            </button>
        </div>
    );
};

export default PaymentSuccess;
