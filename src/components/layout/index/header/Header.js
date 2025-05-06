'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className="w-full flex flex-col max-[540px]:items-center gap-10 mt-20">
            <div className="w-full flex flex-col items-end max-[540px]:items-center gap-5 z-10 max-[540px]:mb-70 max-[480px]:mb-50 max-[440px]:mb-35 max-[380px]:mb-15">
                <p className="text-4xl font-extrabold text-right max-[540px]:text-center">
                    جدیدترین کالکشن لباس‌هـــــای <span className="text-orange-500">برنــــــــــــد</span>
                </p>
                <p className="text-zinc-500 mb-2 text-right max-[540px]:text-center">
                .مدیسا انتخاب خاص خوش‌پوشان؛ جایی که استایل و کیفیت باهم معنا پیدا می‌کنند
                </p>
                <div className="flex gap-3">
                    <Link href={'/about-us'} className="p-3 h-13 w-36 border-2 border-orange-500 rounded-2xl flex items-center justify-center text-orange-500 font-bold cursor-pointer">
                        درباره ما
                    </Link>
                    <Link href={'/shop'} className="p-3 h-13 bg-orange-500 rounded-2xl flex items-center justify-center gap-2 shrink-0 text-white font-bold cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g id="9">
                                <path
                                    id="Union"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.5713 3.42859H6.857V3.42882L6.857 3.42881L3.50628 6.79171L8.42978 11.6974L3.69217 15.5605V20.5714H8.43942V11.707L17.1937 20.4295L20.5444 17.0666L11.6213 8.17584H20.5713V3.42859Z"
                                    fill="white"
                                ></path>
                            </g>p-3 h-13 w-36 border-2 border-orange-500 rounded-2xl flex items-center justify-center text-orange-500 font-bold cursor-pointer
                        </svg>
                        <span>کالکشن جدید</span>
                    </Link>
                </div>
            </div>

            <div className="w-full flex max-[540px]:flex-col items-center justify-between">
                <div className="relative w-1/2 max-[540px]:w-full h-90 rounded-4xl bg-gradient-to-r from-orange-600 to-orange-500 rounded-br-none flex justify-center">
                    <Image
                        src="https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/hero-user.png"
                        width={300}
                        height={500}
                        alt="model-photo"
                        priority
                        className="absolute w-[30rem] bottom-0"
                    />
                </div>
                <div className="w-1/2 max-[540px]:w-full h-90 rounded-4xl bg-orange-500 rounded-bl-none flex flex-col  max-[540px]:mt-2">
                    <div className="relative -top-1 w-full h-30  bg-[url('/assets/images/hreo-off-bg.jpg')] bg-cover rounded-4xl border-8 border-white ring-white">
                        <div className="w-full h-full p-5 flex items-center justify-end gap-2 max-[575px]:p-1 max-[540px]:p-4">
                            <span className="text-3xl max-[600px]:text-2xl font-extrabold text-right">حراج بزرگ در راه است</span>
                            <span className="flex items-center font-extrabold text-[3rem] text-orange-500">
                                50
                                <span className="flex flex-col items-center gap-1">
                                    <span className="text-xl">%</span>
                                    <span className="text-xl">off</span>
                                </span>
                            </span>
                        </div>
                        <div className="w-full h-64 p-6 flex max-[1024px]:flex-col items-center justify-end">
                            <div className="text-[5rem] max-[1024px]:text-[3rem] text-white font-semibold flex items-center gap-3 z-10">
                                <span>2.5K</span>
                                <div className="size-12 rounded-full ring-2 ring-white flex items-center justify-center bg-zinc-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="!size-7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative hidden max-[1024px]:flex h-full gap-12">
                                <Image
                                    src="/assets/images/Ellipse-32.png"
                                    className="w-[52px] absolute left-[30px] z-20"
                                    width={49}
                                    height={49}
                                    alt="تصویر ۲"
                                />
                                <Image
                                    src="/assets/images/Ellipse-34.png"
                                    className="w-[52px] z-10"
                                    width={49}
                                    height={49}
                                    alt="تصویر ۱"
                                />
                                <Image
                                    src="/assets/images/Ellipse-35.png"
                                    className="w-[52px] absolute left-[60px] z-30"
                                    width={49}
                                    height={49}
                                    alt="تصویر ۳"
                                />
                                <Image
                                    src="/assets/images/Ellipse-36.png"
                                    className="w-[52px] z-10"
                                    width={49}
                                    height={49}
                                    alt="تصویر ۱"
                                />
                            </div>
                            <div className="flex flex-col items-center z-10">
                                <div className="text-[5rem] max-[1024px]:text-[3rem] text-white font-semibold flex items-center gap-3 ">
                                    <span>5.8K</span>
                                    <div className="size-12 rounded-full ring-2 ring-white flex items-center justify-center bg-zinc-700">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="!size-7"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <span className="text-white text-xl text-center w-96">
                                    تنــــوع محصـــولات فروشگــــــاه
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
