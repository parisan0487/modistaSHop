'use client';
import React, { useEffect, useState } from 'react';
import SideBar from './sideBar';
import Image from 'next/image';
import toast from 'react-hot-toast';

const categories = [
    {
        title: 'پوشاک مردانه',
        subcategories: [
            {
                title: 'پیراهن مردانه',
                items: ['پیراهن رسمی', 'پیراهن اسپرت', 'پیراهن آستین کوتاه', 'پیراهن آستین بلند'],
            },
            {
                title: 'شلوار مردانه',
                items: ['شلوار پارچه ای', 'شلوار جین', 'شلوار راحتی'],
            },
        ],
    },
    {
        title: 'پوشاک زنانه',
        subcategories: [
            {
                title: 'پیراهن زنانه',
                items: ['پیراهن رسمی', 'پیراهن روزمره', 'پیراهن بلند'],
            },
            {
                title: 'شلوار زنانه',
                items: ['شلوار جین', 'شلوار پارچه ای', 'شلوار راحتی'],
            },
        ],
    },
    {
        title: 'پوشاک بچگانه',
        subcategories: [
            {
                title: 'پیراهن بچگانه',
                items: ['پیراهن بچه گانه اسپرت', 'پیراهن بچه گانه رسمی'],
            },
            {
                title: 'شلوار بچگانه',
                items: ['شلوار بچه گانه جین', 'شلوار بچه گانه پارچه ای'],
            },
        ],
    },
    {
        title: 'پوشاک ورزشی',
        subcategories: [
            {
                title: 'پیراهن ورزشی',
                items: ['پیراهن فوتبالی', 'پیراهن باشگاهی'],
            },
            {
                title: 'شلوار ورزشی',
                items: ['شلوار ورزشی فوتبال', 'شلوار ورزشی بدنسازی'],
            },
        ],
    },
];

const SideBarBtn = () => {
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (category) {
            openCategoryModal();
        }
    }, [category]);

    const openTemplateModal = () => {
        toast.dismiss();

        toast(
            (t) => (
                <ul className="w-37 flex flex-col items-center gap-2">
                    <li className="text-[1.1rem] font-bold !text-zinc-600 cursor-pointer hover:!text-black">فروشگاه</li>
                    <li className="text-[1.1rem] font-bold !text-zinc-600 cursor-pointer hover:!text-black">
                        تکی مقاله
                    </li>
                    <li className="text-[1.1rem] font-bold !text-zinc-600 cursor-pointer hover:!text-black">
                        تکی محصول
                    </li>
                    <li className="text-[1.1rem] font-bold !text-zinc-600 cursor-pointer hover:!text-black">
                        حساب کاربری
                    </li>
                    <li className="text-[1.1rem] font-bold !text-zinc-600 cursor-pointer hover:!text-black">
                        سبد خرید
                    </li>
                    <li className="text-[1.1rem] font-bold !text-zinc-600 cursor-pointer hover:!text-black">404</li>
                    <div
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full h-10 rounded-2xl bg-orange-500 text-xl !text-white font-bold flex items-center justify-center"
                    >
                        بستن
                    </div>
                </ul>
            ),
            {
                duration: Infinity,
            }
        );
    };

    const openCategoryModal = () => {
        toast.dismiss();

        toast(
            (t) => (
                <div className="w-[18rem] flex flex-col items-center justify-between gap-4 pt-6">
                    <div className="w-full flex flex-wrap justify-center gap-8 mb-6">
                        {categories
                            .filter((item) => item.title === category)[0]
                            .subcategories.map((cate, index) => (
                                <ul key={index} className="flex flex-col gap-1">
                                    <li className="text-[1.1rem] font-bold flex gap-1 items-center mb-2">
                                        <div className="w-2 h-5 rounded-2xl bg-orange-500"></div>
                                        {cate.title}
                                    </li>
                                    {cate.items.map((item, index) => (
                                        <li
                                            key={index}
                                            className="text-[1rem] !text-zinc-500 font-bold text-right hover:!text-orange-500 cursor-pointer"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            ))}
                    </div>
                    <div className="w-full flex flex-col items-center gap-4">
                        <div className="w-full py-4 border-t border-zinc-500/30 flex items-center justify-center gap-6">
                            <span
                                onClick={() => setCategory('پوشاک مردانه')}
                                className={`${category === 'پوشاک مردانه' && 'p-2 bg-gray-500/10 rounded-2xl'}`}
                            >
                                مردانه
                            </span>
                            <span
                                onClick={() => setCategory('پوشاک زنانه')}
                                className={`${category === 'پوشاک زنانه' && 'p-2 bg-gray-500/10 rounded-2xl'}`}
                            >
                                زنانه
                            </span>
                            <span
                                onClick={() => setCategory('پوشاک بچگانه')}
                                className={`${category === 'پوشاک بچگانه' && 'p-2 bg-gray-500/10 rounded-2xl'}`}
                            >
                                بچگانه
                            </span>
                            <span
                                onClick={() => setCategory('پوشاک ورزشی')}
                                className={`${category === 'پوشاک ورزشی' && 'p-2 bg-gray-500/10 rounded-2xl'}`}
                            >
                                ورزشی
                            </span>
                        </div>
                        <div
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full h-10 rounded-2xl bg-orange-500 text-xl !text-white font-bold flex items-center justify-center"
                        >
                            بستن
                        </div>
                    </div>
                </div>
            ),
            {
                duration: Infinity,
            }
        );
        setCategory('');
    };

    return (
        <SideBar sideBarName="main-sidebar" cls="min-[1000px]:hidden">
            <div className="w-full h-full bg-white flex flex-col justify-between">
                <div className="w-full h-full flex flex-col justify-between p-4">
                    <ul className="flex flex-col gap-5 items-end">
                        <li onClick={openTemplateModal} className="relative flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 stroke-gray-700"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            <span className="!text-black/60 text-[1.1rem]">صفحات قالب</span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="Broken / Money / Tag">
                                    <path
                                        id="Vector 132"
                                        d="M22 12L19 8L8.5 19.5L10 21.5L13.5 22L21 15L22 12Z"
                                        fill="#F4694C"
                                    ></path>
                                    <path
                                        id="Vector"
                                        d="M16.1369 4.72848C14.5914 3.18295 13.8186 2.41018 12.816 2.12264C11.8134 1.83509 10.7485 2.08083 8.61875 2.57231L7.39057 2.85574C5.59881 3.26922 4.70292 3.47597 4.08944 4.08944C3.47597 4.70292 3.26922 5.59881 2.85574 7.39057L2.57231 8.61875C2.08083 10.7485 1.83509 11.8134 2.12264 12.816C2.41018 13.8186 3.18295 14.5914 4.72848 16.1369L6.55812 17.9665C9.24711 20.6555 10.5916 22 12.2623 22C13.933 22 15.2775 20.6555 17.9665 17.9665C20.6555 15.2775 22 13.933 22 12.2623C22 10.9198 21.1319 9.788 19.3957 8"
                                        stroke="#3B3B3B"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                    <path
                                        id="Vector_2"
                                        d="M8.60742 10.8789C9.71199 10.8789 10.6074 9.98348 10.6074 8.87891C10.6074 7.77434 9.71199 6.87891 8.60742 6.87891C7.50285 6.87891 6.60742 7.77434 6.60742 8.87891"
                                        stroke="#3B3B3B"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                    <path
                                        id="Vector_3"
                                        d="M11.5411 18.4998L12.5411 17.4998M18.5201 11.5205L14.9994 15.0413"
                                        stroke="#3B3B3B"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                </g>
                            </svg>
                        </li>

                        <li className="flex gap-1">
                            <span className="!text-black/60 text-[1.1rem]">حراج استایل</span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="Broken / Money / Tag">
                                    <path
                                        id="Vector 132"
                                        d="M22 12L19 8L8.5 19.5L10 21.5L13.5 22L21 15L22 12Z"
                                        fill="#F4694C"
                                    ></path>
                                    <path
                                        id="Vector"
                                        d="M16.1369 4.72848C14.5914 3.18295 13.8186 2.41018 12.816 2.12264C11.8134 1.83509 10.7485 2.08083 8.61875 2.57231L7.39057 2.85574C5.59881 3.26922 4.70292 3.47597 4.08944 4.08944C3.47597 4.70292 3.26922 5.59881 2.85574 7.39057L2.57231 8.61875C2.08083 10.7485 1.83509 11.8134 2.12264 12.816C2.41018 13.8186 3.18295 14.5914 4.72848 16.1369L6.55812 17.9665C9.24711 20.6555 10.5916 22 12.2623 22C13.933 22 15.2775 20.6555 17.9665 17.9665C20.6555 15.2775 22 13.933 22 12.2623C22 10.9198 21.1319 9.788 19.3957 8"
                                        stroke="#3B3B3B"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                    <path
                                        id="Vector_2"
                                        d="M8.60742 10.8789C9.71199 10.8789 10.6074 9.98348 10.6074 8.87891C10.6074 7.77434 9.71199 6.87891 8.60742 6.87891C7.50285 6.87891 6.60742 7.77434 6.60742 8.87891"
                                        stroke="#3B3B3B"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                    <path
                                        id="Vector_3"
                                        d="M11.5411 18.4998L12.5411 17.4998M18.5201 11.5205L14.9994 15.0413"
                                        stroke="#3B3B3B"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                </g>
                            </svg>
                        </li>
                        <li className="flex gap-1">
                            <span className="!text-black/60 text-[1.1rem]">تماس با ما</span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="Broken / Nature, Travel / Fire Minimalistic">
                                    <path
                                        id="Vector 131"
                                        d="M16.5 20L4.5 10H4L3.5 13.5L5 17L8 20L12.5 21L16 20H16.5Z"
                                        fill="#F4694C"
                                    ></path>
                                    <path
                                        id="Vector"
                                        d="M16 19.9972C14.8233 20.635 13.4571 21 12 21C7.58172 21 4 17.6439 4 13.504C4 12.3727 4.14916 11.3124 4.40527 10.3284M19.1761 16.8211C19.7036 15.8211 20 14.695 20 13.504C20 9.76257 17.9654 6.83811 16.562 5.44436C16.3017 5.18584 15.8683 5.30006 15.7212 5.63288C14.9742 7.3229 13.4178 9.75607 11.4286 9.75607C10.1975 9.92086 8.31688 8.86844 9.83483 3.64868C9.97151 3.17868 9.46972 2.80113 9.08645 3.11539C8.09335 3.92966 6.95052 5.1206 6 6.64741"
                                        stroke="#3B3B3B"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                </g>
                            </svg>
                        </li>
                        <li className="flex gap-1">
                            <span className="!text-black/60 text-[1.1rem]">درباره ما</span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="Broken / Nature, Travel / Fire Minimalistic">
                                    <path
                                        id="Vector 131"
                                        d="M16.5 20L4.5 10H4L3.5 13.5L5 17L8 20L12.5 21L16 20H16.5Z"
                                        fill="#F4694C"
                                    ></path>
                                    <path
                                        id="Vector"
                                        d="M16 19.9972C14.8233 20.635 13.4571 21 12 21C7.58172 21 4 17.6439 4 13.504C4 12.3727 4.14916 11.3124 4.40527 10.3284M19.1761 16.8211C19.7036 15.8211 20 14.695 20 13.504C20 9.76257 17.9654 6.83811 16.562 5.44436C16.3017 5.18584 15.8683 5.30006 15.7212 5.63288C14.9742 7.3229 13.4178 9.75607 11.4286 9.75607C10.1975 9.92086 8.31688 8.86844 9.83483 3.64868C9.97151 3.17868 9.46972 2.80113 9.08645 3.11539C8.09335 3.92966 6.95052 5.1206 6 6.64741"
                                        stroke="#3B3B3B"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                </g>
                            </svg>
                        </li>
                        <li onClick={() => setCategory('پوشاک مردانه')} className="flex gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 stroke-gray-700"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            <span className="!text-black/60 text-[1.1rem]">دسته بندی</span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="Broken / Settings, Fine Tuning / Widget 5">
                                    <path
                                        id="Vector 130"
                                        d="M10 21L10.5 15L10 3L4.5 2.5L2.5 4V13V20.5L6 21.5L10 21Z"
                                        fill="#F4694C"
                                    ></path>
                                    <path
                                        id="Rectangle 1880"
                                        d="M2.5 13V17.5C2.5 19.3856 2.5 20.3284 3.08579 20.9142C3.67157 21.5 4.61438 21.5 6.5 21.5C8.38562 21.5 9.32843 21.5 9.91421 20.9142C10.5 20.3284 10.5 19.3856 10.5 17.5V6.5C10.5 4.61438 10.5 3.67157 9.91421 3.08579C9.32843 2.5 8.38562 2.5 6.5 2.5C4.61438 2.5 3.67157 2.5 3.08579 3.08579C2.5 3.67157 2.5 4.61438 2.5 6.5V9"
                                        stroke="#3C3C3C"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                    <path
                                        id="Rectangle 1884"
                                        d="M21.4995 18C21.495 19.5572 21.4458 20.3827 20.9142 20.9142C20.3284 21.5 19.3856 21.5 17.5 21.5C15.6144 21.5 14.6716 21.5 14.0858 20.9142C13.5 20.3284 13.5 19.3856 13.5 17.5V15.5C13.5 13.6144 13.5 12.6716 14.0858 12.0858C14.6716 11.5 15.6144 11.5 17.5 11.5C19.3856 11.5 20.3284 11.5 20.9142 12.0858C21.3183 12.4899 21.4436 13.0638 21.4825 14"
                                        stroke="#3C3C3C"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                    <path
                                        id="Rectangle 1881"
                                        d="M13.5 5.5C13.5 4.56812 13.5 4.10218 13.6522 3.73463C13.8552 3.24458 14.2446 2.85523 14.7346 2.65224C15.1022 2.5 15.5681 2.5 16.5 2.5H18.5C19.4319 2.5 19.8978 2.5 20.2654 2.65224C20.7554 2.85523 21.1448 3.24458 21.3478 3.73463C21.5 4.10218 21.5 4.56812 21.5 5.5C21.5 6.43188 21.5 6.89782 21.3478 7.26537C21.1448 7.75542 20.7554 8.14477 20.2654 8.34776C19.8978 8.5 19.4319 8.5 18.5 8.5H16.5C15.5681 8.5 15.1022 8.5 14.7346 8.34776C14.2446 8.14477 13.8552 7.75542 13.6522 7.26537C13.5 6.89782 13.5 6.43188 13.5 5.5Z"
                                        stroke="#3C3C3C"
                                        strokeWidth="1.5"
                                    ></path>
                                </g>
                            </svg>
                        </li>
                    </ul>

                    <div className="w-full flex flex-col gap-2">
                        <div className="p-3 h-13 border-2 border-orange-500 rounded-2xl flex items-center justify-center gap-2 shrink-0">
                            <span className="!text-orange-500 font-extrabold">ورود / ثبت نام </span>
                            <Image
                                src="https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/login-user.svg"
                                width={50}
                                height={50}
                                alt="buy-button"
                                className="size-6"
                            />
                        </div>
                        <div className="w-full h-13 p-3 bg-orange-500 rounded-2xl flex items-center justify-center gap-2 shrink-0">
                            <span className="!text-white font-bold">سبد خرید</span>

                            <Image
                                src="https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/mini-cart-button.svg"
                                width={50}
                                height={50}
                                alt="buy-button"
                                className="size-6"
                            />
                        </div>

                        <div className="p-3 rounded-2xl border border-black/20 flex items-center justify-center gap-2">
                            <span className="!text-black/60 font-extrabold">دانلود اپلیکیشن</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <g id="Linear / Files / File Download">
                                    <path
                                        id="Vector"
                                        d="M15.3929 4.05365L14.8912 4.61112L15.3929 4.05365ZM19.3517 7.61654L18.85 8.17402L19.3517 7.61654ZM21.654 10.1541L20.9689 10.4592V10.4592L21.654 10.1541ZM3.17157 20.8284L3.7019 20.2981H3.7019L3.17157 20.8284ZM20.8284 20.8284L20.2981 20.2981L20.2981 20.2981L20.8284 20.8284ZM14 21.25H10V22.75H14V21.25ZM2.75 14V10H1.25V14H2.75ZM21.25 13.5629V14H22.75V13.5629H21.25ZM14.8912 4.61112L18.85 8.17402L19.8534 7.05907L15.8947 3.49618L14.8912 4.61112ZM22.75 13.5629C22.75 11.8745 22.7651 10.8055 22.3391 9.84897L20.9689 10.4592C21.2349 11.0565 21.25 11.742 21.25 13.5629H22.75ZM18.85 8.17402C20.2034 9.3921 20.7029 9.86199 20.9689 10.4592L22.3391 9.84897C21.9131 8.89241 21.1084 8.18853 19.8534 7.05907L18.85 8.17402ZM10.0298 2.75C11.6116 2.75 12.2085 2.76158 12.7405 2.96573L13.2779 1.5653C12.4261 1.23842 11.498 1.25 10.0298 1.25V2.75ZM15.8947 3.49618C14.8087 2.51878 14.1297 1.89214 13.2779 1.5653L12.7405 2.96573C13.2727 3.16993 13.7215 3.55836 14.8912 4.61112L15.8947 3.49618ZM10 21.25C8.09318 21.25 6.73851 21.2484 5.71085 21.1102C4.70476 20.975 4.12511 20.7213 3.7019 20.2981L2.64124 21.3588C3.38961 22.1071 4.33855 22.4392 5.51098 22.5969C6.66182 22.7516 8.13558 22.75 10 22.75V21.25ZM1.25 14C1.25 15.8644 1.24841 17.3382 1.40313 18.489C1.56076 19.6614 1.89288 20.6104 2.64124 21.3588L3.7019 20.2981C3.27869 19.8749 3.02502 19.2952 2.88976 18.2892C2.75159 17.2615 2.75 15.9068 2.75 14H1.25ZM14 22.75C15.8644 22.75 17.3382 22.7516 18.489 22.5969C19.6614 22.4392 20.6104 22.1071 21.3588 21.3588L20.2981 20.2981C19.8749 20.7213 19.2952 20.975 18.2892 21.1102C17.2615 21.2484 15.9068 21.25 14 21.25V22.75ZM21.25 14C21.25 15.9068 21.2484 17.2615 21.1102 18.2892C20.975 19.2952 20.7213 19.8749 20.2981 20.2981L21.3588 21.3588C22.1071 20.6104 22.4392 19.6614 22.5969 18.489C22.7516 17.3382 22.75 15.8644 22.75 14H21.25ZM2.75 10C2.75 8.09318 2.75159 6.73851 2.88976 5.71085C3.02502 4.70476 3.27869 4.12511 3.7019 3.7019L2.64124 2.64124C1.89288 3.38961 1.56076 4.33855 1.40313 5.51098C1.24841 6.66182 1.25 8.13558 1.25 10H2.75ZM10.0298 1.25C8.15538 1.25 6.67442 1.24842 5.51887 1.40307C4.34232 1.56054 3.39019 1.8923 2.64124 2.64124L3.7019 3.7019C4.12453 3.27928 4.70596 3.02525 5.71785 2.88982C6.75075 2.75158 8.11311 2.75 10.0298 2.75V1.25Z"
                                        fill="#989898"
                                    ></path>
                                    <path
                                        id="Vector_2"
                                        d="M13 2.5V5C13 7.35702 13 8.53553 13.7322 9.26777C14.4645 10 15.643 10 18 10H22"
                                        stroke="#989898"
                                        strokeWidth="1.5"
                                    ></path>
                                    <path
                                        id="Vector_3"
                                        d="M8.5 13.5L8.5 18.5M8.5 18.5L10.5 16.625M8.5 18.5L6.5 16.625"
                                        stroke="#989898"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <div className="p-3 rounded-2xl bg-[#ECECEC] flex items-center justify-center gap-2">
                            <span className="font-extrabold !text-[#989898]">اینستاگرام مُدیستا</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <g id="vuesax/outline/instagram">
                                    <g id="instagram">
                                        <path
                                            id="Vector"
                                            d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                                            fill="#989898"
                                        ></path>
                                        <path
                                            id="Vector_2"
                                            d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z"
                                            fill="#989898"
                                        ></path>
                                        <path
                                            id="Vector_3"
                                            d="M17 7.5C16.87 7.5 16.74 7.47 16.62 7.42C16.5 7.37 16.39 7.3 16.29 7.21C16.2 7.11 16.12 7 16.07 6.88C16.02 6.76 16 6.63 16 6.5C16 6.37 16.02 6.24 16.07 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.34 5.75 16.39 5.7 16.44 5.67C16.5 5.63 16.56 5.6 16.62 5.58C16.68 5.55 16.74 5.53 16.81 5.52C17.13 5.45 17.47 5.56 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5Z"
                                            fill="#989898"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full p-2 !text-orange-500 border-t text-[14px] border-black/10 text-center">
                    +98 911 318 5137
                </div>
            </div>
        </SideBar>
    );
};

export default SideBarBtn;
