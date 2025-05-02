'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import slideToleftI from 'assets/images/slide-arrow-1.svg';
import slideToRithI from 'assets/images/slide-arrow.svg';
import toast, { CheckmarkIcon } from 'react-hot-toast';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const FullProductCard = ({ productData }) => {
    const queryClient = useQueryClient();
    const {
        name,
        images = [],
        price = 0,
        discount = 0,
        id,
        _id,
        categories = [],
        brand = '',
        fullBrandList = '',
        variants = [],
    } = productData;

    const colors = variants?.length > 0 ? variants.map((v) => v.color) : [];

    const stock = variants.map((v) => v.stock);
    const size = variants.map((v) => v.size);

    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [count, setCount] = useState(1);

    const increase = () => setCount((prev) => prev + 1);
    const decrease = () => {
        if (count > 1) setCount((prev) => prev - 1); // جلوگیری از منفی شدن
    };

    const goNext = () => {
        const currentIndex = images.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
    };

    const goBack = () => {
        const currentIndex = images.indexOf(selectedImage);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
    };

    const handleCopy = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            toast.success('!کپی شد');
        });
    };

    const calculateDiscountPercent = () => {
        if (!price || !discount || discount <= 0) return 0;
        return Math.round((discount / price) * 100);
    };

    const handelAddToBasket = useMutation({
        mutationFn: async () => {
            try {
                const token = localStorage.getItem('token');

                if (!token) {
                    toast('لطفاً ابتدا وارد حساب کاربری خود شوید');
                    return;
                }

                await axios.post(
                    'https://back-production-22f1.up.railway.app/api/cart/add',
                    {
                        productId: _id,
                        quantity: 1,
                        color: selectedColor,
                        size: '2xl',
                    },
                    { headers: { Authorization: `Bearer ${token}` } }
                );

                toast.success('به سبد خرید شما اضافه شد');
            } catch (error) {
                toast.error('به سبد خرید شما اضافه نشد');
            }
        },
        onSuccess: () => {
            queryClient.refetchQueries(['basket-product']);
        },
    });

    const discountPercent = calculateDiscountPercent();
    const finalPrice = price - discount;

    const colorMap = {
        قرمز: '#FF0000',
        آبی: '#0000FF',
        سبز: '#00FF00',
        زرد: '#FFFF00',
        نارنجی: '#FFA500',
        بنفش: '#800080',
        صورتی: '#FFC0CB',
        مشکی: '#000000',
        سفید: '#FFFFFF',
        خاکستری: '#808080',
        قهوه‌ای: '#8B4513',
        طلایی: '#FFD700',
    };

    return (
        <div className=" w-full my-8 grid grid-cols-1 xl:[grid-template-columns:3.2fr_2.8fr_2.2fr] lg:[grid-template-columns:3.2fr_2.8fr]  gap-4 lg:h-[29.5rem]">
            <div className="flex flex-row gap-4">
                {/* ستون تصاویر کوچک */}
                <div className="flex flex-col gap-2 w-[100px]">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(img)}
                            className={`rounded-lg overflow-hidden border-2 w-[5rem] h-[5rem] cursor-pointer ${
                                selectedImage === img ? 'border-blue-200' : 'border-transparent'
                            }`}
                        >
                            <Image
                                src={img}
                                width={80}
                                height={80}
                                alt="mini-picture"
                                className="rounded-md w-[5rem] h-[5rem] object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* تصویر بزرگ */}
                <div className="w-[26rem] relative">
                    <button
                        onClick={goNext}
                        className="absolute right-2 top-1/2 z-10 bg-white p-3 rounded-lg shadow cursor-pointer"
                    >
                        <Image src={slideToRithI} alt="next" width={24} height={24} />
                    </button>
                    {selectedImage && (
                        <Image
                            src={selectedImage}
                            className="rounded-xl w-full min-h-[26rem] max-h-[28rem] object-cover"
                            alt="picture"
                            width={300}
                            height={300}
                        />
                    )}

                    {discount > 0 && (
                        <div className="bg-[#FD5504] absolute left-0 top-6 rounded-[0_0.5rem_0.5rem_0] w-[3rem] h-[2rem] text-center justify-center flex items-center text-white text-md">
                            {discountPercent}%
                        </div>
                    )}

                    <button
                        onClick={goBack}
                        className="absolute left-2 top-1/2 z-10 bg-white p-3 rounded-lg shadow cursor-pointer"
                    >
                        <Image src={slideToleftI} alt="back" width={24} height={24} />
                    </button>
                </div>
            </div>

            <div className="w-full">
                <div className="flex flex-row justify-between">
                    <h3 className="text-lg font-[800] mt-3">{name}</h3>
                    <div className="flex flex-row gap-3">
                        <button onClick={handleCopy} className="p-4 bg-[#F7F7F7] rounded-xl cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                            >
                                <path
                                    d="M12.72 4.6275C14.22 5.67 15.255 7.3275 15.465 9.24"
                                    stroke="#AFAFAF"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M2.61743 9.27749C2.81243 7.37249 3.83243 5.71499 5.31743 4.66499"
                                    stroke="#AFAFAF"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M6.14258 15.705C7.01258 16.1475 8.00258 16.395 9.04508 16.395C10.0501 16.395 10.9951 16.17 11.8426 15.7575"
                                    stroke="#AFAFAF"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M9.04496 5.775C10.1965 5.775 11.13 4.84151 11.13 3.69C11.13 2.53848 10.1965 1.605 9.04496 1.605C7.89345 1.605 6.95996 2.53848 6.95996 3.69C6.95996 4.84151 7.89345 5.775 9.04496 5.775Z"
                                    stroke="#AFAFAF"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M3.6226 14.94C4.77411 14.94 5.7076 14.0065 5.7076 12.855C5.7076 11.7035 4.77411 10.77 3.6226 10.77C2.47108 10.77 1.5376 11.7035 1.5376 12.855C1.5376 14.0065 2.47108 14.94 3.6226 14.94Z"
                                    stroke="#AFAFAF"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                                <path
                                    d="M14.3775 14.94C15.529 14.94 16.4625 14.0065 16.4625 12.855C16.4625 11.7035 15.529 10.77 14.3775 10.77C13.226 10.77 12.2925 11.7035 12.2925 12.855C12.2925 14.0065 13.226 14.94 14.3775 14.94Z"
                                    stroke="#AFAFAF"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </button>
                        <button className="p-4 bg-[#F7F7F7] rounded-xl cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                            >
                                <path
                                    d="M9.465 15.6075C9.21 15.6975 8.79 15.6975 8.535 15.6075C6.36 14.865 1.5 11.7675 1.5 6.5175C1.5 4.2 3.3675 2.325 5.67 2.325C7.035 2.325 8.2425 2.985 9 4.005C9.7575 2.985 10.9725 2.325 12.33 2.325C14.6325 2.325 16.5 4.2 16.5 6.5175C16.5 11.7675 11.64 14.865 9.465 15.6075Z"
                                    stroke="#AFAFAF"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div>
                    <div className="w-full rtl text-sm text-gray-500 space-y-2">
                        <div className="w-full  text-sm text-gray-500 space-y-2 mt-4 flex flex-row flex-wrap">
                            {id && (
                                <div className="flex items-center border-l-2 border-gray-200 pr-3">
                                    <span className="text-[#A2AABB] font-semibold">شناسه محصول:</span>
                                    <span className="ml-2 text-gray-600">{id}</span>
                                </div>
                            )}

                            {categories?.length > 0 && (
                                <div className="flex items-center border-l-2 border-gray-200 pr-3">
                                    <span className="text-[#A2AABB] font-semibold">دسته:</span>
                                    <span className="ml-2 text-gray-600">{categories.join(', ')}</span>
                                </div>
                            )}

                            {brand && (
                                <div className="flex items-center pr-3">
                                    <span className="text-[#A2AABB]font-semibold">برند:</span>
                                    <span className="ml-2 text-gray-600">{brand}</span>
                                </div>
                            )}
                            {size && (
                                <div className="flex items-center pr-3">
                                    <span className="text-[#A2AABB] font-semibold">سایز: </span>
                                    <span className="m-2 text-gray-600">{size}</span>
                                </div>
                            )}
                            <hr className="mt-2 border-t border-gray-200" />
                        </div>

                        {fullBrandList && (
                            <div className="text-gray-600 mt-8 mb-4 flex flex-row items-center gap-1">
                                <div className="w-1 h-1 bg-[#FD5504] rounded-full"></div>
                                <span className="font-semibold">برند:</span> {fullBrandList}
                            </div>
                        )}
                        <hr className="mt-2 border-t border-gray-200" />
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-sm mt-8">
                    <div className="text-gray-700">
                        رنگ: <span className="text-gray-500">({selectedColor || '-'})</span>
                    </div>
                    <div className="flex gap-3">
                        {colors.map((color) => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                                    selectedColor === color
                                        ? 'border-orange-500 text-orange-500'
                                        : 'border-gray-200 text-gray-600'
                                }`}
                            >
                                <span
                                    className="w-5 h-5 rounded-full"
                                    style={{ backgroundColor: colorMap[color] || '#ccc' }}
                                />
                                {color}
                                {selectedColor === color && (
                                    <CheckmarkIcon size={14} className="text-orange-500 ms-1" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mx-auto">
                <div className="w-[20.5rem] h-[14.5rem] bg-[#F7F7F7] rounded-xl p-3 ">
                    <div className="w-full rounded-xl p-3 bg-white mx-auto text-[#6E6E6E] flex flex-row gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                                stroke="#545454"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                            <path
                                d="M7.75 12L10.58 14.83L16.25 9.17"
                                stroke="#545454"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        <p>
                            <span>{stock} </span>عدد در انبار{' '}
                        </p>
                    </div>
                    <div className="flex flex-row gap-2 mt-5 justify-end">
                        {discountPercent > 0 ? (
                            <>
                                <p className="text-[#AAAAAA] line-through text-sm">{price.toLocaleString('fa-IR')}</p>
                                <span className="text-white text-sm bg-[#FD5504] rounded-md text-center px-1 py-[2px]">
                                    {discountPercent}%
                                </span>
                            </>
                        ) : (
                            <>
                                <p className="text-[#AAAAAA] line-through text-sm opacity-0 ">999999</p>
                                <span className="text-white text-sm bg-[#FD5504] rounded-md text-center px-1 py-[2px] opacity-0">
                                    99%
                                </span>
                            </>
                        )}
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="w-[7rem] h-[3rem] rounded-xl bg-[#E2E2E2] flex items-center justify-between px-2">
                            <button
                                onClick={increase}
                                className="w-[2.5rem] h-[2.5rem] bg-white rounded-lg flex items-center justify-center text-xl"
                            >
                                +
                            </button>
                            <p className="text-md w-[2rem] text-center">{count}</p>
                            <button
                                onClick={decrease}
                                className="w-[2.5rem] h-[2.5rem] bg-white rounded-lg flex items-center justify-center text-xl"
                            >
                                -
                            </button>
                        </div>

                        <h3 className="font-bold text-xl mt-4">{finalPrice.toLocaleString('fa-IR')}</h3>
                    </div>
                    <button
                        disabled={stock == 0}
                        onClick={() => handelAddToBasket.mutate()}
                        className={`w-full p-4 h-[3rem] ${
                            stock >= 1 ? 'bg-[#FD5504] ' : 'bg-[#FAA67D] '
                        } rounded-2xl mt-6 text-center text-white font-bold flex items-center justify-center cursor-pointer`}
                    >
                        {stock >= 1 ? 'افزودن به سبد خرید' : 'موجود نیست'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FullProductCard;
