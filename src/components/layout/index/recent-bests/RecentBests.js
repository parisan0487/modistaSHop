// app/components/BestSellersSection.jsx

'use client';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { useState } from 'react'
import slideToleftI from 'assets/images/slide-arrow-1.svg';
import slideToRithI from 'assets/images/slide-arrow.svg';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';


const categories = [
    'بچگانه',
    'زنانه',
    'مردانه',
]

const products = [
    {
        id: '1',
        name: 'کفش پیاده‌روی نایک',
        images: [
            '/assets/images/pic5.jpg',

        ],
        price: 820000,
        discount: 20000,

    },
    {
        id: '8',
        name: 'lll پیاده‌روی نایک',
        images: [
            '/assets/images/pic5.jpg',
            '/assets/images/pic2.jpg',

        ],
        price: 820000,
        discount: 15,

    },
    {
        id: '9',
        name: 'ttttt پیاده‌روی نایک',
        images: [
            '/assets/images/pic5.jpg',
            '/assets/images/pic2.jpg',

        ],
        price: 820000,

    },
    {
        id: '2',
        name: 'هدفون بی‌سیم سونی',
        images: [
            '/assets/images/pic2.jpg',
            '/assets/images/pic1.jpg',
            '/assets/images/pic3.jpg',

        ],
        price: 2150000,
        discount: 15000,
    },
    {
        id: '3',
        name: 'ژاکت',
        images: [
            '/assets/images/pic3.jpg',

        ],
        price: 250000,
        discount: 240000,
    },
    {
        id: '4',
        name: 'کاپشن زمستانی مردانه',
        images: [
            '/assets/images/pic4.jpg',

        ],
        price: 950000,

    },
    {
        id: '5',
        name: 'کیف چرمی دست‌دوز',
        images: [
            '/assets/images/pic1.jpg',
            '/assets/images/pic2.jpg',

        ],
        price: 1240000,
        discount: 2400
    },
];
const toPersianDigits = (num) => {
    return num.toString().replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)])
        .replace(/\B(?=(\d{3})+(?!\d))/g, '٬');
};

export default function BestSellersSection() {
    const [selected, setSelected] = useState(categories[0])
    const swiperRef = useRef(null);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <section className="w-full px-2  py-16 flex flex-col md:flex-col gap-2">
            <div className="flex items-center justify-between flex-row gap-2 px-8 md:px-16">
                <div className="flex items-center gap-2">
                    <div className=" gap-3 hidden lg:flex">
                        <button onClick={handleNext} className="w-12 h-12 cursor-pointer bg-gray-100 rounded-md flex items-center justify-center text-gray-500 hover:bg-gray-200">
                            <Image src={slideToleftI} alt="prev" width={34} height={34} />
                        </button>
                        <button onClick={handlePrev} className="w-12 h-12 cursor-pointer bg-gray-100 rounded-md flex items-center justify-center text-gray-500 hover:bg-gray-200">
                            <Image src={slideToRithI} alt="next" width={34} height={34} />
                        </button>
                    </div>
                    <Link href={""} className="text-sm hidden md:block border rounded-xl px-3 text-nowrap py-3 text-[#BABABA] font-bold cursor-pointer">
                        مشاهدهٔ همه
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row-reverse items-center gap-4  ">
                    <div className="flex flex-1 items-center gap-1">
                        <span className='text-xl'>اخیر</span>
                        <h3 className='text-2xl font-bold'>پرفروش‌ترین‌های</h3>
                        <span className="text-orange-500"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <path
                                d="M11.5 0C11.5 0 12.1345 5.92243 14.606 8.39396C17.0776 10.8655 23 11.5 23 11.5C23 11.5 17.0776 12.1345 14.606 14.606C12.1345 17.0776 11.5 23 11.5 23C11.5 23 10.8655 17.0776 8.39396 14.606C5.92243 12.1345 0 11.5 0 11.5C0 11.5 5.92243 10.8655 8.39396 8.39396C10.8655 5.92243 11.5 0 11.5 0Z"
                                fill="#FD5504"
                            ></path>
                        </svg></span>
                    </div>
                    <div className="flex flex-1 gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelected(cat)}
                                className={`rounded-xl px-6 py-3 text-sm border transition-all font-bold cursor-pointer  ${selected === cat
                                    ? 'bg-orange-500 text-white border-orange-500'
                                    : 'text-[#BABABA] border-gray-300 hover:border-orange-400'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {/* ///////////// */}
            <div className="w-full py-10 mx-auto max-w-[82rem]">
                <div className="relative flex items-center justify-between gap-3">
                    <Swiper
                        loop={true}
                        grabCursor={true}
                        ref={swiperRef}
                        spaceBetween={10}
                        slidesPerGroup={1}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.5,
                                spaceBetween: 2,
                            },
                            768: {
                                slidesPerView: 2.5,
                                spaceBetween: 8,
                            },
                            930: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 12,
                            },
                            1224: {
                                slidesPerView: 4.5,
                                spaceBetween: 12,
                            },
                            1400: {
                                slidesPerView: 5.5,
                                spaceBetween: 12,
                            },
                        }}
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard data={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* ///////////// */}
            <Link href={""} className="text-sm block md:hidden border rounded-xl text-center mx-32 py-3 text-[#BABABA] font-[400] cursor-pointer">
                مشاهدهٔ همه
            </Link>
        </section>
    )
}
