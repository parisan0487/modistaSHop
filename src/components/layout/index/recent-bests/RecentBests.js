// app/components/BestSellersSection.jsx

'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { useState } from 'react'
import slideToleftI from 'assets/images/slide-arrow-1.svg';
import slideToRithI from 'assets/images/slide-arrow.svg';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';


const categories = [
    'زنانه',
    'مردانه',
]



export default function BestSellersSection() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState(categories[0])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('https://back-production-22f1.up.railway.app/api/products/');
                const data = await res.json();
                setProducts(data);
                setLoading(false);

            } catch (error) {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);


    const categoryKeywords = {
        'زنانه': ['زنانه', 'لباس زنانه'],
        'مردانه': ['مردانه', 'لباس مردانه'],
    };

    const filteredProducts = products.filter(product =>
        product.categories.some(cat =>
            categoryKeywords[selected]?.includes(cat)
        )
    );



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

                            },
                            768: {
                                slidesPerView: 2.5,

                            },
                            930: {
                                slidesPerView: 3,

                            },
                            1024: {
                                slidesPerView: 4,

                            },
                            1224: {
                                slidesPerView: 4.5,
                                spaceBetween: 12,
                            },
                            1400: {
                                slidesPerView: 5,

                            },
                        }}
                    >
                        {filteredProducts.map((product) => (
                            <SwiperSlide key={product._id}>
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
