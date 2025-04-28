"use client"

import ProductCard from '@/components/ui/ProductCard'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


const timer = [
    { label: 'ثانیه', value: 23 },
    { label: 'دقیقه', value: 28 },
    { label: 'ساعت', value: 13 },
    { label: 'روز', value: 15 },
]
const DiscountProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('https://back-production-22f1.up.railway.app/api/products/');
                const data = await res.json();
                const discounted = data.filter(product => product.discount); // فقط اونایی که تخفیف دارن
                setProducts(discounted);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);



    const [timeLeft, setTimeLeft] = useState(() => {
        const totalSeconds = (15 * 24 * 60 * 60) + (13 * 60 * 60) + (28 * 60) + 23;
        return totalSeconds;
    });
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    const swiperRef = useRef(null);

    const formatTime = (seconds) => {
        const days = Math.floor(seconds / (24 * 60 * 60));
        const hours = Math.floor((seconds % (24 * 60 * 60)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return [
            { label: 'ثانیه', value: secs },
            { label: 'دقیقه', value: minutes },
            { label: 'ساعت', value: hours },
            { label: 'روز', value: days },
        ];
    };
    const timer = formatTime(timeLeft);

    if (loading) return <div className="text-center py-10">در حال بارگذاری محصولات...</div>;
    if (products.length === 0) return <div className="text-center py-10">محصولی یافت نشد.</div>;

    return (
        <>
            {/* //////////////// */}
            < div className="relative flex-col items-center justify-center flex md:hidden w-full mx-2" >
                <Image
                    src="/assets/images/hero-bg.svg"
                    alt="Hero background"
                    objectFit="cover"
                    quality={100}
                    width={38}
                    height={38}
                    className="z-0 w-[15rem] h-[15rem] absolute  top-0"

                />
                <div className="z-10 flex flex-col items-center justify-center">
                    <h3 className='text-[#FD5504] text-2xl md:text-3xl font-[800] mt-10 mx-5'>تخفیف های شگفت انگیز</h3>
                </div>
            </ div>
            <div className="rounded-3xl py-6 mb-[12rem] mt-8 w-full flex flex-col-reverse md:flex-row ">
                <div className='w-full md:w-9/12 bg-[#FD5504] h-[18rem] rounded-[0_0_2rem_2rem] md:rounded-[2rem_0_2rem_2rem] '>

                    <div className="relative w-full  p-3">
                        <Swiper
                            loop={true}
                            grabCursor={true}
                            ref={swiperRef}
                            slidesPerGroup={1}
                            centeredSlides={false}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.1,
                                    spaceBetween: 2
                                },
                                360: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 2
                                },
                                768: {
                                    slidesPerView: 2.3,
                                    spaceBetween: 3
                                },
                                930: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 3
                                },

                                1224: {
                                    slidesPerView: 2.7,
                                    spaceBetween: 3
                                },

                                1350: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 3
                                },
                                1550: {
                                    slidesPerView: 4,
                                    spaceBetween: 3
                                },

                            }}
                        >
                            {products.map((product) => (
                                <SwiperSlide key={product._id} >
                                    <ProductCard data={product} key={product.id} thumbnails={false} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className='w-full md:w-3/12 '>
                    <div className='h-[9rem] bg-[#FD5504] rounded-[2rem_2rem_0_0] md:rounded-[0_2rem_2rem_0]'>
                        <div className="flex justify-center items-center gap-2  p-4 rounded-xl w-full">
                            {timer.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col justify-center items-center bg-[#FF6A1F] text-white rounded-[1rem] w-[60px] h-[5rem] text-center py-4"
                                >
                                    <div className="text-xl font-bold border-b border-[#FD5504] pb-1 w-full">
                                        {item.value}
                                    </div>
                                    <div className="text-sm p-2 text-[#FFD6BA]">{item.label}</div>
                                </div>
                            ))}
                        </div>

                    </div>
                    {/* ////////// */}
                    <div className='hidden md:block absolute rotate-90 translate-x-[-1px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 40 38" fill="#FD5504"><g clipPath="url(#clip0_263_127)"><path d="M-648 -51C-648 -73.0914 -630.091 -91 -608 -91H-40C-17.9086 -91 0 -73.0914 0 -51V-2C0 20.0914 17.9086 38 40 38H608C630.091 38 648 55.9086 648 78V206C648 228.091 630.091 246 608 246H-608C-630.091 246 -648 228.091 -648 206V-51Z" fill="var(--mi-color-secondary)"></path></g><defs><clipPath id="clip0_263_127"><rect x="-648" y="-91" width="1296" height="337" rx="32" fill="none"></rect></clipPath></defs></svg>

                    </div>
                    {/* //////////////// */}
                    <div className="relative  flex-col items-center justify-center hidden md:flex">
                        <Image
                            src="/assets/images/hero-bg.svg"
                            alt="Hero background"
                            objectFit="cover"
                            quality={100}
                            width={38}
                            height={38}
                            className="z-0 w-[14rem] h-[14rem] absolute  top-0"

                        />
                        <div className="z-10 flex flex-col items-center justify-center">
                            <h3 className='text-[#FD5504] text-2xl font-[800] mt-10 mx-5'>تخفیف های شگفت انگیز</h3>
                            <Link href={""} className="text-md text-nowrap  border rounded-2xl text-center px-6  py-3 mt-3 text-[#BABABA] font-[500] cursor-pointer">
                                مشاهدهٔ همه
                            </Link>
                        </div>
                    </div>
                </div>
            </ div>
            <Link href={""} className="text-md block md:hidden text-nowrap  border rounded-2xl text-center px-6  py-3 mt-3 mb-12 text-[#BABABA] font-[500] cursor-pointer">
                مشاهدهٔ همه
            </Link>
        </>
    )
}

export default DiscountProducts