'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import 'swiper/css';
import ImageSlider from './ImageSlider';
import slideToleftI from 'assets/images/slide-arrow-1.svg';
import slideToRithI from 'assets/images/slide-arrow.svg';

const NewSets = () => {
    const [centerIndex, setCenterIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('https://back-production-22f1.up.railway.app/api/products/');
                const data = await res.json();

                // فقط محصولاتی که category شامل "ست" هست رو نگه می‌داریم
                const filtered = data.filter(product =>
                    product.categories.includes('ست')
                );

                setProducts(filtered);
                setLoading(false);
            } catch (error) {
                console.error("خطا در گرفتن محصولات:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 968);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const goPrev = () => {
        setCenterIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCenterIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    };

    const getVisibleItems = () => {
        const range = isMobile ? 1 : 2;
        const result = [];
        for (let i = -range; i <= range; i++) {
            const index = (centerIndex + i + products.length) % products.length;
            result.push({ ...products[index], isCenter: i === 0 });
        }
        return result;
    };

    const visibleItems = getVisibleItems();

    if (loading) return <div className="text-center py-10">در حال بارگذاری محصولات...</div>;
    if (products.length === 0) return <div className="text-center py-10">محصولی یافت نشد.</div>;

    return (
        <div className="flex flex-col items-center py-10 bg-[#F7F7F7] text-[#2D2929] w-full">

            <h2 className="text-2xl mt-8">
                <span className="font-black">جدیدترین</span> ست‌ها
            </h2>
            <div className="flex items-center justify-center w-1/3 my-2">
                <span className="h-px flex-grow bg-gray-200"></span>
                <span className="mx-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <path
                            d="M11.5 0C11.5 0 12.1345 5.92243 14.606 8.39396C17.0776 10.8655 23 11.5 23 11.5C23 11.5 17.0776 12.1345 14.606 14.606C12.1345 17.0776 11.5 23 11.5 23C11.5 23 10.8655 17.0776 8.39396 14.606C5.92243 12.1345 0 11.5 0 11.5C0 11.5 5.92243 10.8655 8.39396 8.39396C10.8655 5.92243 11.5 0 11.5 0Z"
                            fill="#FD5504"
                        ></path>
                    </svg>
                </span>
                <span className="h-px flex-grow bg-gray-200"></span>
            </div>

            <div className="relative w-full max-w-[1300px] flex items-center justify-center mt-12">
                <button
                    onClick={goPrev}
                    className="absolute left-2 z-10 bg-white p-2 rounded-xl shadow cursor-pointer"
                >
                    <Image src={slideToleftI} alt="prev" width={24} height={24} />
                </button>

                <div className="flex gap-6 items-center overflow-hidden">
                    {visibleItems.map((item) => (
                        <div
                            key={item.id}
                            className={`transition-all duration-400 ${item.isCenter ? 'md:w-[400px]' : 'w-[20rem]'
                                }`}
                        >
                            {item.isCenter ? (
                                <ImageSlider items={item} />
                            ) : (
                                <Image
                                    src={item.images[0]}
                                    alt={item.name}
                                    width={100}
                                    height={140}
                                    className="object-cover rounded-xl w-[20rem] h-[27rem] md:h-[34rem]"
                                />
                            )}
                        </div>
                    ))}
                </div>

                <button
                    onClick={goNext}
                    className="absolute right-2 z-10 bg-white p-2 rounded-xl shadow cursor-pointer"
                >
                    <Image src={slideToRithI} alt="next" width={24} height={24} />
                </button>
            </div>
        </div>
    );
};

export default NewSets;