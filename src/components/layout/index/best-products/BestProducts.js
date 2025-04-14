'use client';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';

const products = [
    {
        id: 2,
        title: 'کاپشن دخترانه خزدار',
        image: '/images/sample.png',
        price: 2300000,
        oldPrice: 2600000,
        discount: '۱۵٪',
    },
    {
        id: 1,
        title: 'پلیور زنانه یقه اسکی نارنجی',
        image: '/images/sample-orange-shirt.png',
        price: 1500000,
    },
    {
        id: 3,
        title: 'بلوز آستین بلند بچگانه',
        image: '/images/carousel-slide.png',
        price: 900000,
        oldPrice: 1050000,
        discount: '۱۰٪',
    },
    {
        id: 4,
        title: 'بلوز آستین بلند بچگانه',
        image: '/images/sample-orange-shirt.png',
        price: 900000,
        oldPrice: 1050000,
        discount: '۱۰٪',
    },
];

const toPersianDigits = (num) => {
    return num
        .toString()
        .replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)])
        .replace(/\B(?=(\d{3})+(?!\d))/g, '٬');
};

export default function BestProducts() {
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
        <div className="w-full max-w-7xl mx-auto px-6 py-10 ml-10">
            <div className="relative flex items-center justify-between gap-20">
                <button onClick={handlePrev} className="absolute -left-20 w-11 h-11 bg-[#f7f7f7] rounded-2xl mb-[41px]">
                    <Image src="/images/slide-arrow-1.svg" alt="slide-arrow" width={40} height={40} />
                </button>

                <Swiper spaceBetween={1} slidesPerView={3} loop grabCursor ref={swiperRef} slidesPerGroup={1}>
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="w-56 h-[280px] rounded-2xl p-4 bg-[#f7f7f7] flex flex-col justify-between">
                                <div className="relative w-full h-[200px] flex justify-center items-center">
                                    <div className="absolute inset-0 bg-[url('/images/hero-bg.svg')] bg-contain bg-no-repeat bg-center brightness-75" />
                                    <Image
                                        src={product.image}
                                        alt={product.title || 'محصول'}
                                        width={140}
                                        height={190}
                                        className="relative z-10 object-contain h-40"
                                    />
                                </div>

                                <div className="flex justify-between items-center" dir="rtl">
                                    <button className="bg-white p-2 rounded-xl shadow hover:bg-gray-100 transition">
                                        <Image
                                            src="/images/basket-48.png"
                                            alt="افزودن به سبد"
                                            width={20}
                                            height={20}
                                            className="w-5 h-5 text-gray-600"
                                        />
                                    </button>

                                    <div className="flex flex-col items-end">
                                        {product.oldPrice && (
                                            <div className="flex items-center gap-1 mb-1">
                                                <span className="text-xs text-gray-400 line-through">
                                                    {toPersianDigits(product.oldPrice)}
                                                </span>
                                                {product.discount && (
                                                    <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded">
                                                        {product.discount}
                                                    </span>
                                                )}
                                            </div>
                                        )}

                                        <div className="flex items-baseline gap-1">
                                            <span className="text-lg font-semibold text-black">
                                                {toPersianDigits(product.price)}
                                            </span>
                                            <span className="text-sm text-gray-500">تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button onClick={handleNext} className="absolute right-96 w-11 h-11 bg-[#f7f7f7] rounded-2xl mb-[41px]">
                    <Image src="/images/slide-arrow.svg" alt="slide-arrow" width={40} height={40} />
                </button>

                <div className="flex justify-end items-center mb-6 w-72 ml-12">
                    <div className="text-end">
                        <h2 className="text-[32px] leading-[200%] text-[#2B2727]">
                            <span className="font-extrabold text-black">پرفروش‌ترین</span>{' '}
                            <span className="font-light">محصولات</span>
                        </h2>

                        <div className="flex flex-col items-end leading-tight">
                            <div className="flex items-center w-[305px] mx-auto">
                                <div className="flex-grow border-t border-[#F7F7F7]" />
                                <span className="text-orange-500 text-3xl mx-2">★</span>
                                <div className="flex-grow border-t border-[#F7F7F7]" />
                            </div>

                            <div className="flex items-center gap-5 mt-5">
                                <div className="text-right mb-12">
                                    <h3 className="text-[32px] font-extrabold leading-[24px] text-[#514F4F] mb-0">
                                        +10
                                    </h3>
                                    <p className="mt-3 text-[14px] text-[#979797] font-normal">تنوع محصولات</p>
                                </div>

                                <div className="relative flex h-full gap-0 mb-16 mr-28">
                                    <Image
                                        src="/images/Ellipse-11.png"
                                        className="w-[52px] z-10"
                                        width={49}
                                        height={49}
                                        alt="تصویر ۱"
                                    />
                                    <Image
                                        src="/images/Ellipse-13.png"
                                        className="w-[52px] absolute left-[30px] z-20"
                                        width={49}
                                        height={49}
                                        alt="تصویر ۲"
                                    />
                                    <Image
                                        src="/images/Ellipse-12.png"
                                        className="w-[52px] absolute left-[60px] z-30"
                                        width={49}
                                        height={49}
                                        alt="تصویر ۳"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
