'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const BasketBtn = ({ cls }) => {
    useEffect(() => {
        fetch('https://back-production-22f1.up.railway.app/api/cart/')
            .then((res) => res.json())
            .then((data) => console.log("mas data: ", data));
    });

    const openBasketModal = () => {
        toast(
            <div className="w-77 flex flex-col items-center justify-end gap-5">
                <div className="w-full pb-4 flex justify-between border-b border-b-zinc-500/30">
                    <span className="flex flex-row-reverse gap-1">
                        <span>۳</span> <span>مورد</span>
                    </span>
                    <span>سبد خرید من</span>
                </div>

                <div className="w-full h-[15rem] overflow-y-scroll">
                    <div className="w-full rounded-2xl flex items-center justify-between gap-3 cursor-pointer hover:bg-gradient-to-l from-black/5 to-transparent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 stroke-zinc-600/80 cursor-pointer shrink-0 active:scale-95"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        <div className="w-full flex flex-col items-end gap-2 font-bold text-zinc-700/80">
                            <p className="text-[0.9rem] line-clamp-1">پولوشرت آستین کوتاه مردانه</p>
                            <p className="flex gap-1 font-normal">
                                <span className="text-zinc-700/60">تومان</span>
                                <span className="text-zinc-700">۲,۵۰۰,۰۰۰</span>
                            </p>
                        </div>
                        <Image
                            src={
                                'https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/wool-blend-jumper-women-bright-orange-moncler3-1.png'
                            }
                            width={100}
                            height={100}
                            alt="product-Image"
                            className="size-20"
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col items-center gap-2 border-t !border-b-zinc-500/30">
                    <div className="w-full py-6 flex items-center justify-between">
                        <span className="flex flex-row-reverse gap-1">
                            <span className="font-bold">۱,۵۰۰,۰۰۰</span> <span>تومان</span>
                        </span>

                        <div className="flex items-center gap-1">
                            <span className="font-bold">:مجموع هزینه</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                                />
                            </svg>
                        </div>
                    </div>
                    <Link
                        href={'/basket'}
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full h-13 p-3 bg-orange-500 rounded-2xl flex items-center justify-center gap-4 cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6 stroke-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                            />
                        </svg>
                        <span className="text-xl text-white">تسویه حساب</span>
                    </Link>
                    <div
                        onClick={() => toast.dismiss(toast.id)}
                        className="w-full h-13 p-3 bg-rose-600 rounded-2xl flex items-center justify-center cursor-pointer"
                    >
                        <span className="text-xl text-white">بستن</span>
                    </div>
                </div>
            </div>,
            {
                id: 'basket-modal',
                duration: Infinity,
            }
        );
    };

    return (
        <div
            onClick={openBasketModal}
            className={`size-12.5 p-3 bg-orange-500 rounded-2xl items-center justify-center shrink-0 cursor-pointer ${cls}`}
        >
            <Image
                src="https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/mini-cart-button.svg"
                width={50}
                height={50}
                alt="buy-button"
            />
        </div>
    );
};

export default BasketBtn;
