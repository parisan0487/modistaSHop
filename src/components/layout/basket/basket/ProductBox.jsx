'use client';
import { BasketContext } from '@/context/BasketContext';
import Image from 'next/image';
import { useContext, useState } from 'react';

const ProductBox = ({ id, title, price, image, quantity }) => {
    const { updateQuantity } = useContext(BasketContext);

    return (
        <div
            dir="rtl"
            className={`w-full p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between shadow-md bg-white gap-4 ${
                !quantity && 'hidden'
            }`}
        >
            <div className="w-full flex max-[640px]:flex-row-reverse items-center max-[640px]:justify-between gap-4 max-[450px]:flex-col">
                <Image
                    src={image}
                    width={80}
                    height={80}
                    alt="product-image"
                    className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="max-[450px]:flex max-[450px]:flex-col max-[450px]:items-center max-[450px]:gap-2">
                    <h4 className="font-semibold">{title}</h4>
                    <p className="text-gray-500">{price.toLocaleString()} تومان</p>
                    <p className="text-sm text-gray-600">تعداد: {quantity}</p>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={() => updateQuantity(id, -1)}
                    disabled={quantity < 1}
                    className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                >
                    -
                </button>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-semibold">
                    {quantity}
                </div>
                <button
                    onClick={() => updateQuantity(id, 1)}
                    disabled={quantity < 1}
                    className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default ProductBox;
