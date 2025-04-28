'use client';

import React, { useEffect, useRef, useState } from 'react';
import PCard from './PCard';
import { Swiper, SwiperSlide } from 'swiper/react';

const NewProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


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


    const swiperRef = useRef(null);



    return (
        <div className="flex flex-col items-center justify-center text-[#2D2929] w-full mt-2 mb-24">
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
                        <SwiperSlide key={product._id}>
                            <PCard key={product.id} data={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </div>
    );
};

export default NewProducts;
