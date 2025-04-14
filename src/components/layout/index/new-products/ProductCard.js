'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function ProductCard({ data }) {
    const { id, name, images, price, discountPercent, finalPrice } = data;
    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div className="bg-[#F6F6F6] w-[16rem] min-w-[14rem] h-[30rem] rounded-3xl overflow-hidden border-1 border-transparent transition hover:border-[#FD5504] cursor-pointer">
            {/* images */}
            <div className="flex flex-col max-h-[24rem] rounded-xl border-2 border-gray-200 m-4 mb-0 overflow-hidden">
                <Link href={`http://localhost:3000/product/${id}`}>
                    <Image src={mainImage} alt="image" className="w-full h-[18.5rem]" width={80} height={80} />
                </Link>
                <div className="flex flex-row items-center justify-between w-full mx-auto">
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={name}
                            width={30}
                            height={30}
                            className="w-[2.5rem] h-[2.5rem] cursor-pointer object-fit-cover "
                            onClick={() => setMainImage(image)}
                        />
                    ))}
                </div>
            </div>
            {/* decription */}
            <h2 className="mt-2 mb-3 font-semibold text-center text-[#595959]">{name}</h2>
            <div className="flex flex-row w-full">
                <Link href={`http://localhost:3000/product/${id}`} className="w-full flex items-center mx-4">
                    <div className="bg-[#ffff] hover:bg-[#FD5504] p-3 rounded-2xl group">
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
                    </div>
                </Link>
                <div className="flex flex-col">
                    <div className="flex flex-row mx-4 font-light items-center gap-1">
                        <p className="text-[#AAAAAA] line-through">{price.toLocaleString('fa-IR')}</p>
                        <span className="text-slate-50 text-sm bg-[#FD5504] rounded-md text-center p-[2px]">
                            {discountPercent}%
                        </span>
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

export default ProductCard;
