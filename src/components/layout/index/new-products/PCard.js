'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function PCard({ data, deleteBtn = false }) {
    const { id, name, images, price, discount = 0 } = data;
    const [mainImage, setMainImage] = useState(images[0]);

    const finalPrice = price - discount;

    const calculateDiscountPercent = () => {
        if (!price || !discount || discount <= 0) return 0;
        return Math.round((discount / price) * 100);
    };

    const discountPercent = calculateDiscountPercent();

    return (
        <div dir='rtl' className="bg-[#F6F6F6] w-[16rem] min-w-[14rem] h-[30rem] rounded-3xl overflow-hidden border-1 border-transparent transition hover:border-[#FD5504] cursor-pointer">
            {/* images */}
            <div className="flex flex-col max-h-[24rem] rounded-xl border-2 border-gray-200 m-4 mb-0 overflow-hidden">
                <Link href={`products/${id}`}>
                    <img src={mainImage} alt="image" className="w-full h-[18.5rem]" />
                </Link>
                {images.length > 1 ? <div className="flex flex-row items-center justify-around w-full mx-auto">
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={name}
                            width={30}
                            height={30}
                            className="w-[2.5rem] h-[2.5rem] cursor-pointer  "
                            onClick={() => setMainImage(image)}
                        />
                    ))}
                </div> : <div className="w-[2.5rem] h-[2.5rem] object-fit-cover "></div>}
            </div>
            {/* decription */}
            <h2 className="mt-2 mb-3 font-semibold text-center text-[#595959]">{name}</h2>
            <div className="flex flex-row w-full">
                <div className="w-full flex items-center mx-4 gap-2">
                    {deleteBtn ? (
                        <div className="bg-rose-500 hover:bg-rose-600 p-2.5 rounded-2xl group duration-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 stroke-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                            </svg>
                        </div>
                    ) : null}
                    <Link
                        href={`/products/${id}`}
                        className={`bg-[#ffff] hover:bg-[#FD5504] ${deleteBtn ? 'p-2' : 'p-3'} rounded-2xl group`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            className="stroke-[#595959] group-hover:stroke-[#fff]" // رنگ پیش‌فرض و تغییر رنگ هنگام هاور
                        >
                            <path
                                d="M20 9.5L19.2896 6.89465C19.0157 5.89005 18.8787 5.38775 18.5978 5.00946C18.318 4.63273 17.9378 4.34234 17.5008 4.17152C17.0619 4 16.5413 4 15.5 4M5 9.5L5.7104 6.89465C5.98432 5.89005 6.12128 5.38775 6.40221 5.00946C6.68199 4.63273 7.06216 4.34234 7.49922 4.17152C7.93808 4 8.45872 4 9.5 4"
                                strokeWidth="1.5"
                            ></path>
                            <path
                                d="M9.5 4C9.5 3.44772 9.94772 3 10.5 3H14.5C15.0523 3 15.5 3.44772 15.5 4C15.5 4.55228 15.0523 5 14.5 5H10.5C9.94772 5 9.5 4.55228 9.5 4Z"
                                strokeWidth="1.5"
                            ></path>
                            <path d="M8.5 13V17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M16.5 13V17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M12.5 13V17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path
                                d="M4.36425 16.4552C4.90992 18.6379 5.18275 19.7292 5.99654 20.3646C6.81032 21 7.93525 21 10.1851 21H14.8158C17.0656 21 18.1906 21 19.0044 20.3646C19.8181 19.7292 20.091 18.6379 20.6366 16.4552C21.4946 13.0234 21.9236 11.3075 21.0227 10.1538C20.1219 9 18.3532 9 14.8158 9H10.1851C6.64769 9 4.87899 9 3.97816 10.1538C3.44937 10.831 3.37879 11.702 3.58422 13"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            ></path>
                        </svg>
                    </Link>
                </div>
                <div className="flex flex-col">

                    <div className="flex flex-row mx-4 font-light items-center gap-1">
                        {discountPercent > 1 &&
                            <>
                                <p className="text-[#AAAAAA] line-through">{price.toLocaleString('fa-IR')}</p>
                                <span className="text-slate-50 text-sm bg-[#FD5504] rounded-md text-center p-[2px]">
                                    {discountPercent}%
                                </span>
                            </>
                        }
                    </div>

                    <div className="font-bold flex flex-row mt-3 text-center items-center">
                        <h3 className="font-bold text-xl">{finalPrice.toLocaleString('fa-IR')}</h3>
                        <span className="text-[#AAAAAA] mx-2 text-xs">تومان</span> {/* اضافه کردن فاصله */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PCard;
