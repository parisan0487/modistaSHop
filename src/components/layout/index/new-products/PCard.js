'use client';
import Fetch from '@/utils/Fetch';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { HashLoader } from 'react-spinners';

function PCard({ _id, id, name, images, price, discount, deleteBtn = false, favorites = [] }) {
    const queryClient = useQueryClient();
    const [mainImage, setMainImage] = useState(images[0] || '/fallback.png');
    const [isLike, setIsLike] = useState(false);

    useEffect(() => {
        if (favorites?.products?.length) {
            setIsLike(favorites.products.some((item) => item._id === _id));
        }
    }, [favorites, _id]);

    const finalPrice = !!discount ? price - discount : price;

    const calculateDiscountPercent = () => {
        if (!price || !discount || discount <= 0) return 0;
        return Math.round((discount / price) * 100);
    };

    const discountPercent = calculateDiscountPercent();

    const { mutate: addFavoriteProduct, isPending: isAddFavoriteProduct } = useMutation({
        mutationFn: async () => {
            try {
                if (isLike) {
                    return toast.error('قبلا اضافه کردید');
                }
                setIsLike(true);
                await Fetch.post(`https://modistaback.onrender.com/api/wishlist/add`, {
                    token: true,
                    productId: _id,
                });

                toast.success('اضافه شد');
            } catch (error) {
                if (error.status === 400) {
                    toast.error('قبلا اضافه کردید');
                } else if (error.status === 401) {
                    setIsLike(false);
                    toast.error('ابتدا در سایت ثبت نام کنید');
                } else {
                    setIsLike(false);
                    toast.error('اینترنت خود را بررسی کنید');
                }
            }
        },
        onSuccess: () => {
            queryClient.refetchQueries(['favorite-product']);
        },
    });

    const { mutate: deleteFavoriteProduct, isPending: isDeleteFavoriteProduct } = useMutation({
        mutationFn: async () => {
            try {
                await Fetch.delete(`https://modistaback.onrender.com/api/wishlist/remove/${_id}`, {
                    token: true,
                });

                toast.success('حذف شد');
            } catch (error) {
                if (error.status === 401) {
                    toast.error('ابتدا در سایت ثبت نام کنید');
                } else {
                    toast.error('اینترنت خود را بررسی کنید');
                }
            }
        },
        onMutate: async () => {
            await queryClient.cancelQueries(['favorite-product']);
            const perviousData = queryClient.getQueriesData(['favorite-product']);

            queryClient.setQueryData(['favorite-product'], (old) => {
                return {
                    ...old,
                    products: old.products.filter((item) => item._id !== _id),
                };
            });

            return { perviousData };
        },
        onError: (err, variables, context) => {
            queryClient.setQueryData(['favorite-product'], context.perviousData);
        },
        onSettled: () => {
            queryClient.refetchQueries(['favorite-product']);
        },
    });

    return (
        <div
            dir="rtl"
            className="bg-[#F6F6F6] w-[17rem] h-[24rem] p-2 md:h-[30rem] rounded-3xl overflow-hidden border-1 border-transparent transition hover:transform-3d"
        >
            {/* images */}
            <Link href={`products/${id}`}>
                <Image
                    src={mainImage}
                    width={300}
                    height={400}
                    alt="image"
                    priority
                    className="w-full h-[14rem] md:h-[18.5rem] object-cover rounded-2xl"
                />
            </Link>
            {/** thumbnails */}
            <div className="flex justify-center gap-2 my-2 min-h-[1.5rem]">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`w-6 h-6 rounded-full overflow-hidden border-2 cursor-pointer ${
                            mainImage === img ? 'border-[#FD5504]' : 'border-gray-300'
                        }`}
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
                ))}
            </div>
            {/* decription */}
            <h2 className="mt-0.5 md:mt-3 mb-3 font-semibold text-center text-[#595959]">{name}</h2>
            <div className="flex flex-row w-full">
                <div className="w-full flex items-center gap-2">
                    {deleteBtn ? (
                        <button
                            onClick={deleteFavoriteProduct}
                            disabled={isDeleteFavoriteProduct}
                            className="group size-12 flex items-center justify-center bg-rose-200 hover:bg-rose-500 rounded-2xl group duration-200 group active:scale-95 cursor-pointer"
                        >
                            {isDeleteFavoriteProduct ? (
                                <HashLoader size={19} color="#fff" />
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6.5 stroke-red-600 group-hover:stroke-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                </svg>
                            )}
                        </button>
                    ) : (
                        <button
                            onClick={isLike ? deleteFavoriteProduct : addFavoriteProduct}
                            disabled={isAddFavoriteProduct}
                            className="size-12 flex items-center justify-center bg-rose-200 hover:bg-rose-500 rounded-2xl group duration-200 group active:scale-95 cursor-pointer"
                        >
                            {isAddFavoriteProduct ? (
                                <HashLoader size={19} color="#fff" />
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={`size-7 stroke-red-600 group-hover:stroke-white ${
                                        isLike && 'fill-rose-400'
                                    }`}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                    />
                                </svg>
                            )}
                        </button>
                    )}
                    <Link
                        href={`/products/${id}`}
                        className="size-12 flex items-center justify-center bg-orange-200 hover:bg-orange-500 rounded-2xl group duration-200 active:scale-95 cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            className="stroke-orange-500 group-hover:stroke-[#fff] size-7" // رنگ پیش‌فرض و تغییر رنگ هنگام هاور
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
                        {discountPercent > 1 && (
                            <>
                                <p className="text-[#AAAAAA] line-through">{price.toLocaleString('fa-IR')}</p>
                                <span className="text-slate-50 text-sm bg-[#FD5504] rounded-md text-center p-[2px]">
                                    {discountPercent}%
                                </span>
                            </>
                        )}
                    </div>

                    <div className="font-bold flex flex-row mt-1 md:mt-3 text-center items-center">
                        <h3 className="font-bold text-xl">{finalPrice.toLocaleString('fa-IR')}</h3>
                        <span className="text-[#AAAAAA] mx-2 text-xs">تومان</span> {/* اضافه کردن فاصله */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PCard;
