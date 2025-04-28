'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function ProductCard({ data, thumbnails = true }) {

    const { id, name, images = [], price = 0, discount = 0 } = data;
    const [mainImage, setMainImage] = useState(images[0] || '/fallback.png');


    const finalPrice = price - discount;

    const calculateDiscountPercent = () => {
        if (!price || !discount || discount <= 0) return 0;
        return Math.round((discount / price) * 100);
    };

    const discountPercent = calculateDiscountPercent();

    return (
        <div className={`bg-[#F6F6F6] w-[14rem] min-w-[12rem] h-[27rem] rounded-3xl overflow-hidden border border-transparent transition hover:border-[#FD5504] cursor-pointer`}>
            {/* image */}
            <div className="flex flex-col max-h-[24rem] rounded-xl border-2 border-gray-200 m-4 mb-0 overflow-hidden">
                <Link href={`/products/${id}`}>
                    <img
                        src={mainImage}
                        alt={name}
                        className="w-full h-[16.5rem] rounded-md"
                        width={80}
                        height={80}
                    />
                </Link>
            </div>
            {/* title */}
            <h2 className="mt-2 font-semibold text-center text-[#595959]">{name}</h2>
            {/** thumbnails */}
            <div className="flex justify-center gap-2 my-2 min-h-[1.5rem]">
                {thumbnails == true ? (
                    images.map((img, index) => (
                        <div
                            key={index}
                            className={`w-6 h-6 rounded-full overflow-hidden border-2 cursor-pointer ${mainImage === img ? 'border-[#FD5504]' : 'border-gray-300'}`}
                            onClick={() => setMainImage(img)}
                        >
                            <img
                                src={img}
                                alt={`image-${index}`}
                                width={32}
                                height={32}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))
                ) : (
                    <div className="h-6"></div>
                )}
            </div>
            {/** price & discount */}
            <div className="flex flex-row w-full ">
                <Link href={`/product/${id}`} className="w-full flex items-center mx-4">
                    <div className="flex flex-col">
                        <div className="flex flex-row mx-4 font-light items-center gap-1 min-h-[1.5rem]">
                            {discountPercent > 0 ? (
                                <>
                                    <span className="text-white text-sm bg-[#FD5504] rounded-md text-center px-1 py-[2px]">
                                        {discountPercent}%
                                    </span>
                                    <p className="text-[#AAAAAA] line-through text-sm">{price.toLocaleString('fa-IR')}</p>
                                </>
                            ) : (
                                <>
                                    <span className="text-white text-sm bg-[#FD5504] rounded-md text-center px-1 py-[2px] opacity-0">
                                        99%
                                    </span>
                                    <p className="text-[#AAAAAA] line-through text-sm opacity-0">999999</p>
                                </>

                            )}
                        </div>

                        <div className="font-bold flex flex-row  text-center items-center mb-6">
                            <span className="text-[#AAAAAA] mx-2 text-xs">تومان</span>
                            <h3 className="font-bold text-xl">{finalPrice.toLocaleString('fa-IR')}</h3>
                        </div>
                    </div>

                    <div className="bg-white hover:bg-[#FD5504] p-3 rounded-2xl group ml-6">
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
            </div>
        </div>
    );
}

export default ProductCard;
