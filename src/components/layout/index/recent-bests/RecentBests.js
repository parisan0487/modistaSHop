'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import ProductsSlider from '../shared/ProductsSlider';
import useGetRecentBestProducts from '@/hooks/fetchers-hook/useGetRecentBestProducts';

const categories = ['زنانه', 'مردانه'];

export default function BestSellersSection() {
    const [selected, setSelected] = useState(categories[0]);

    const { data } = useGetRecentBestProducts();

    const categoryKeywords = {
        زنانه: ['زنانه', 'لباس زنانه'],
        مردانه: ['مردانه', 'لباس مردانه'],
    };

    const filteredProducts = data?.filter((product) =>
        product.categories.some((cat) => categoryKeywords[selected]?.includes(cat))
    );

    return (
        <section className="w-full py-16 flex flex-col md:flex-col md:items-center gap-2">
            <div className="w-full flex max-[600px]:flex-col-reverse items-center justify-between gap-2 max-[600px]:gap-6 mb-8">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelected(cat)}
                                className={`rounded-xl px-6 py-3 text-sm border  font-bold cursor-pointer  ${
                                    selected === cat
                                        ? 'bg-orange-500 text-white border-orange-500'
                                        : 'text-[#BABABA] border-gray-300 hover:border-orange-400'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                        <Link href={'/shop'}>
                            <div className="text-sm border border-gray-300 rounded-xl text-center p-3 text-[#BABABA] cursor-pointer">
                                مشاهدهٔ همه
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse items-center gap-4  ">
                    <div className="flex flex-1 items-center gap-1">
                        <span className="text-xl">اخیر</span>
                        <h3 className="text-2xl font-bold">پرفروش‌ترین‌های</h3>
                        <span className="text-orange-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="23"
                                height="23"
                                viewBox="0 0 23 23"
                                fill="none"
                            >
                                <path
                                    d="M11.5 0C11.5 0 12.1345 5.92243 14.606 8.39396C17.0776 10.8655 23 11.5 23 11.5C23 11.5 17.0776 12.1345 14.606 14.606C12.1345 17.0776 11.5 23 11.5 23C11.5 23 10.8655 17.0776 8.39396 14.606C5.92243 12.1345 0 11.5 0 11.5C0 11.5 5.92243 10.8655 8.39396 8.39396C10.8655 5.92243 11.5 0 11.5 0Z"
                                    fill="#FD5504"
                                ></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>

            <ProductsSlider products={filteredProducts} />
        </section>
    );
}
