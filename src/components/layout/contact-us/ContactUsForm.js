import React from 'react';

function ContactUsForm() {
    return (
        <div className="space-y-4" dir="rtl">
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                        <path
                            id="Star 1"
                            d="M11.5 0C11.5 0 12.1345 5.92243 14.606 8.39396C17.0776 10.8655 23 11.5 23 11.5C23 11.5 17.0776 12.1345 14.606 14.606C12.1345 17.0776 11.5 23 11.5 23C11.5 23 10.8655 17.0776 8.39396 14.606C5.92243 12.1345 0 11.5 0 11.5C0 11.5 5.92243 10.8655 8.39396 8.39396C10.8655 5.92243 11.5 0 11.5 0Z"
                            fill="#FD5504"
                        />
                    </svg>
                    <h3 className="font-bold text-2xl text-gray-800">ارتباط با ما</h3>
                </div>
                <p className="text-gray-600">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،</p>
            </div>
            <form className="space-y-4">
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="name" className="text-gray-500">
                        نام
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="نام وارد شود"
                        className="py-2.5 px-3 bg-zinc-100 rounded-lg border border-gray-100 focus:border-gray-200 outline-none transition-all"
                    />
                </div>
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="family" className="text-gray-500">
                        نام خانوادگی
                    </label>
                    <input
                        id="family"
                        type="text"
                        placeholder="نام خانوادگی وارد شود"
                        className="py-2.5 px-3 bg-gray-100 rounded-lg border border-gray-100 focus:border-gray-200 outline-none transition-all"
                    />
                </div>
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="phone" className="text-gray-500">
                        شماره تماس
                    </label>
                    <input
                        id="phone"
                        type="text"
                        placeholder="شماره تماس وارد شود"
                        className="py-2.5 px-3 bg-gray-100 rounded-lg border border-gray-100 focus:border-gray-200 outline-none transition-all"
                    />
                </div>
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="email" className="text-gray-500">
                        ایمیل
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="ایمیل وارد کنید"
                        className="py-2.5 px-3 bg-gray-100 rounded-lg border border-gray-100 focus:border-gray-200 outline-none transition-all"
                    />
                </div>
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="email" className="text-gray-500">
                        توضیحات{' '}
                    </label>
                    <textarea
                        id="email"
                        type="email"
                        rows={3}
                        placeholder="توضیحات وارد کنید"
                        className="py-2.5 px-3 bg-gray-100 rounded-lg border border-gray-100 focus:border-gray-200 outline-none transition-all"
                    ></textarea>
                </div>
                <button className="w-full text-lg bg-orange-500 text-white font-medium py-2.5 px-4 rounded-xl">
                    ارسال درخواست
                </button>
            </form>
        </div>
    );
}

export default ContactUsForm;
