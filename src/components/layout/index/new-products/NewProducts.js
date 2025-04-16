'use client';

import React, { useRef } from 'react';
import PCard from './PCard';
import { Swiper, SwiperSlide } from 'swiper/react';

const products = [
    {
        id: '1',
        name: ' کیف وزشی مدل مارتن',
        images: [
            '/assets/images/bag-1.jpg',
            '/assets/images/bag-2.jpg',
            '/assets/images/bag-3.jpg',
            '/assets/images/bag-2.jpg',
            '/assets/images/pic3.jpg',
        ],
        price: 820000,
        discountPercent: 15,
        finalPrice: 697000,
    },
    {
        id: '2',
        name: ' ست بلوز و شلوار زنانه',
        images: [
            '/assets/images/bloz-1.jpg',
            '/assets/images/bloz-2.jpg',
            '/assets/images/bloz-3.jpg',
            '/assets/images/bloz-4.jpg',
            '/assets/images/bloz-1.jpg',
        ],
        price: 2150000,
        discountPercent: 10,
        finalPrice: 1935000,
    },
    {
        id: '3',
        name: 'کاپشن زنانه مدل کاد',
        images: [
            '/assets/images/capshan-1.jpg',
            '/assets/images/capshan-2.jpg',
            '/assets/images/capshan-3.jpg',
            '/assets/images/capshan-4.jpg',
            '/assets/images/capshan-5.jpg',
        ],
        price: 1790000,
        discountPercent: 20,
        finalPrice: 1432000,
    },
    {
        id: '4',
        name: 'کاپشن زمستانی مدل تالای',
        images: [
            '/assets/images/talay-3.jpg',
            '/assets/images/talay-2.jpg',
            '/assets/images/talay-1.jpg',
            '/assets/images/talay-4.jpg',
            '/assets/images/talay-1.jpg',
        ],
        price: 950000,
        discountPercent: 25,
        finalPrice: 712000,
    },
    {
        id: '5',
        name: 'کفش ورزشی  ',
        images: [
            '/assets/images/shoe-4.webp',
            '/assets/images/shoe-2.jpg',
            '/assets/images/shoe-1.jpg',
            '/assets/images/shoe-3.jpg',
            '/assets/images/shoe-5.jpg',
        ],
        price: 1240000,
        discountPercent: 5,
        finalPrice: 1178000,
    },
];

const NewProducts = () => {
    const swiperRef = useRef(null);
    return (
        <div className="flex flex-col items-center justify-center text-[#2D2929] w-full my-2 ">
            <h2 className="text-2xl">
                <span className="font-black">جدیدترین</span> محصولات{' '}
            </h2>

            <div className="flex items-center justify-center w-1/3 my-6">
                <span className="h-px flex-grow bg-gray-200"></span>
                <span className="mx-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <path
                            id="Star 1"
                            d="M11.5 0C11.5 0 12.1345 5.92243 14.606 8.39396C17.0776 10.8655 23 11.5 23 11.5C23 11.5 17.0776 12.1345 14.606 14.606C12.1345 17.0776 11.5 23 11.5 23C11.5 23 10.8655 17.0776 8.39396 14.606C5.92243 12.1345 0 11.5 0 11.5C0 11.5 5.92243 10.8655 8.39396 8.39396C10.8655 5.92243 11.5 0 11.5 0Z"
                            fill="#FD5504"
                        ></path>
                    </svg>
                </span>
                <span className="h-px flex-grow bg-gray-200"></span>
            </div>
            <div className="flex flex-row items-center justify-center  gap-3 w-full">

                <Swiper
                    spaceBetween={12}
                    loop
                    grabCursor
                    ref={swiperRef}
                    slidesPerGroup={1}
                    className="w-full"
                    breakpoints={{
                        0: { slidesPerView: 1.5 },
                        600: { slidesPerView: 2.3 },
                        900: { slidesPerView: 3.2 },
                        1200: { slidesPerView: 3.8 },
                        1400: { slidesPerView: 5 },
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <PCard key={product.id} data={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </div>
    );
};

export default NewProducts;
