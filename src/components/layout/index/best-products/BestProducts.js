'use client';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';

const products = [
    {
        id: 2,
        title: 'کاپشن دخترانه خزدار',
        image: '/assets/images/sample.png',
        price: 2300000,
        oldPrice: 2600000,
        discount: '۱۵٪',
    },
    {
        id: 1,
        title: 'پلیور زنانه یقه اسکی نارنجی',
        image: '/assets/images/sample-orange-shirt.png',
        price: 1500000,
    },
    {
        id: 3,
        title: 'بلوز آستین بلند بچگانه',
        image: '/assets/images/carousel-slide.png',
        price: 900000,
        oldPrice: 1050000,
        discount: '۱۰٪',
    },
    {
        id: 4,
        title: 'بلوز آستین بلند بچگانه',
        image: '/assets/images/sample-orange-shirt.png',
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
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-30 px-4">
            <div className="w-full lg:w-3/4 flex flex-col lg:flex-row items-center justify-between gap-4">
                <button onClick={handlePrev} className="size-11 bg-[#f7f7f7] rounded-2xl cursor-pointer">
                    <Image src="/assets/images/slide-arrow-1.svg" alt="slide-arrow" width={40} height={40} />
                </button>

                <Swiper
                    spaceBetween={12}
                    loop
                    grabCursor
                    ref={swiperRef}
                    slidesPerGroup={1}
                    centeredSlides={true}
                    className="w-full"
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        600: { slidesPerView: 2 },
                        1300: { slidesPerView: 3 },
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="w-full max-w-xs mx-auto h-[280px] rounded-2xl p-4 bg-[#f7f7f7] flex flex-col justify-between">
                                <div className="relative w-full h-[200px] flex justify-center items-center">
                                    <div className="absolute inset-0 bg-[url('/assets/images/hero-bg.svg')] bg-contain bg-no-repeat bg-center brightness-75" />
                                    <Image
                                        src={product.image}
                                        alt={product.title || 'محصول'}
                                        width={140}
                                        height={190}
                                        className="relative z-10 object-contain h-40"
                                    />
                                </div>

                                <div className="flex justify-between items-center" dir="rtl">
                                    <button className="bg-white p-2 rounded-xl shadow hover:bg-gray-100 transition cursor-pointer">
                                        <Image
                                            src="/assets/images/basket-48.png"
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

                <button onClick={handleNext} className="size-11 bg-[#f7f7f7] rounded-2xl cursor-pointer">
                    <Image src="/assets/images/slide-arrow.svg" alt="slide-arrow" width={40} height={40} />
                </button>
            </div>

            <div className="lg:w-1/4 mt-8 lg:mt-0 flex flex-col items-center">
                <div className="w-full text-2xl lg:text-[32px] leading-[150%] text-[#2B2727] flex flex-col items-center">
                    <span className="font-extrabold text-black text-center">پرفروش‌ ترین </span>
                    <span className="font-light">محصولات</span>
                </div>

                <div className="flex items-center w-full max-w-xs mx-auto">
                    <div className="flex-grow border-t border-gray-200" />
                    <span className="text-orange-500 text-3xl mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <path
                                d="M11.5 0C11.5 0 12.1345 5.92243 14.606 8.39396C17.0776 10.8655 23 11.5 23 11.5C23 11.5 17.0776 12.1345 14.606 14.606C12.1345 17.0776 11.5 23 11.5 23C11.5 23 10.8655 17.0776 8.39396 14.606C5.92243 12.1345 0 11.5 0 11.5C0 11.5 5.92243 10.8655 8.39396 8.39396C10.8655 5.92243 11.5 0 11.5 0Z"
                                fill="#FD5504"
                            ></path>
                        </svg>
                    </span>
                    <div className="flex-grow border-t border-gray-200" />
                </div>

                <div className="flex items-center justify-center gap-5 mt-5 mr-10">
                    <div className="text-right mb-6">
                        <h3 className="text-2xl font-extrabold text-[#514F4F]">+10</h3>
                        <p className="mt-2 text-sm text-[#979797]">تنوع محصولات</p>
                    </div>

                    <div className="relative flex h-full gap-0">
                        <Image
                            src="/assets/images/Ellipse-11.png"
                            className="w-[52px] z-10"
                            width={49}
                            height={49}
                            alt="تصویر ۱"
                        />
                        <Image
                            src="/assets/images/Ellipse-13.png"
                            className="w-[52px] absolute left-[30px] z-20"
                            width={49}
                            height={49}
                            alt="تصویر ۲"
                        />
                        <Image
                            src="/assets/images/Ellipse-12.png"
                            className="w-[52px] absolute left-[60px] z-30"
                            width={49}
                            height={49}
                            alt="تصویر ۳"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
