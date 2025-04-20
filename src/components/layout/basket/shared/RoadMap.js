'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

const RoadMap = () => {
    const segment = useSelectedLayoutSegment();

    return (
        <div className="w-full h-4 flex items-center justify-evenly gap-10 bg-[#F7F7F7] !my-10 rounded-full">
            <Link
                href={'/orderCompletion'}
                className={`${
                    segment === 'orderCompletion' ? 'bg-orange-500' : 'bg-[#F7F7F7]'
                } w-37 max-[600px]:size-13 h-13 rounded-2xl flex items-center justify-center gap-2`}
            >
                <span
                    className={`max-[600px]:hidden ${segment === 'orderCompletion' ? 'text-white' : 'text-zinc-800'}`}
                >
                    تکمیل سفارش
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`size-6 ${segment === 'orderCompletion' && 'stroke-white'}`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                </svg>
            </Link>
            <Link
                href={'paymentDetails'}
                className={`${
                    ['paymentDetails', 'orderCompletion'].includes(segment) ? 'bg-orange-500' : 'bg-[#F7F7F7]'
                } w-37 max-[600px]:size-13 h-13 rounded-2xl flex items-center justify-center gap-2`}
            >
                <span
                    className={`max-[600px]:hidden ${
                        ['paymentDetails', 'orderCompletion'].includes(segment) ? 'text-white' : 'text-zinc-800'
                    }`}
                >
                    جزئیات پرداخت
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`size-6 ${['paymentDetails', 'orderCompletion'].includes(segment) && 'stroke-white'}`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    />
                </svg>
            </Link>
            <Link
                href={'basket'}
                className={`${
                    ['basket', 'paymentDetails', 'orderCompletion'].includes(segment) ? 'bg-orange-500' : 'bg-[#F7F7F7]'
                } w-37 max-[600px]:size-13 h-13 rounded-2xl flex items-center justify-center gap-2`}
            >
                <span
                    className={`max-[600px]:hidden ${
                        ['basket', 'paymentDetails', 'orderCompletion'].includes(segment)
                            ? 'text-white'
                            : 'text-zinc-800'
                    }`}
                >
                    سبدخرید
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`size-6 ${
                        ['basket', 'paymentDetails', 'orderCompletion'].includes(segment) && 'stroke-white'
                    }`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                </svg>
            </Link>
        </div>
    );
};

export default RoadMap;
