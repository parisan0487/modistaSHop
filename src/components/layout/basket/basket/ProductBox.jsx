'use client';
import Image from 'next/image';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Fetch from '@/utils/Fetch';
import { MoonLoader } from 'react-spinners';

const ProductBox = ({ data }) => {
    const queryClient = useQueryClient();
    const {
        product: { _id, title, price, images },
        quantity,
        variant: { color, size },
    } = data;

    const { mutate: increment, isPending: isIncrementing } = useMutation({
        mutationFn: async (id) => {
            await Fetch.post('https://back-production-22f1.up.railway.app/api/cart/add', {
                productId: id,
                quantity: 1,
                color,
                size,
            });
        },
        onMutate: async (id) => {
            await queryClient.cancelQueries(['basket-product']);
            const previousData = queryClient.getQueryData(['basket-product']);

            queryClient.setQueryData(['basket-product'], (old) => {
                if (!old) return old;
                return {
                    ...old,
                    items: old.items.map((item) => {
                        if (item.product._id === id) {
                            return {
                                ...item,
                                quantity: item.quantity + 1,
                            };
                        }
                        return item;
                    }),
                };
            });

            return { previousData };
        },
        onError: (error, variable, context) => {
            queryClient.setQueryData(['basket-product'], context.previousData);
        },
        onSettled: () => {
            queryClient.invalidateQueries(['basket-product']);
        },
    });

    const { mutate: decrement, isPending: isDecrementing } = useMutation({
        mutationFn: async (id) => {
            if (data.quantity === 1) {
                await Fetch.delete(
                    `https://back-production-22f1.up.railway.app/api/cart/remove/${data.product._id}?color=${data.variant.color}&size=${data.variant.size}`
                );
            } else {
                await Fetch.post('https://back-production-22f1.up.railway.app/api/cart/add', {
                    productId: id,
                    quantity: -1,
                    color,
                    size,
                });
            }
        },
        onMutate: async (id) => {
            await queryClient.cancelQueries(['basket-product']);
            const previousData = queryClient.getQueryData(['basket-product']);

            queryClient.setQueryData(['basket-product'], (old) => {
                if (!old) return old;
                return {
                    ...old,
                    items: old.items.map((item) => {
                        if (item.product._id === id) {
                            return {
                                ...item,
                                quantity: item.quantity - 1,
                            };
                        }
                        return item;
                    }),
                };
            });

            return { previousData };
        },
        onError: (error, variable, context) => {
            queryClient.setQueryData(['basket-product'], context.previousData);
        },
        onSettled: () => {
            queryClient.invalidateQueries(['basket-product']);
        },
    });

    return (
        <div
            dir="rtl"
            className={`w-full p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between shadow-md bg-white gap-4 ${
                !quantity && 'hidden'
            }`}
        >
            <div className="w-full flex max-[640px]:flex-row-reverse items-center max-[640px]:justify-between gap-4 max-[450px]:flex-col">
                <Image
                    src={images[0]}
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
                    onClick={() => decrement(_id)}
                    disabled={isDecrementing || isIncrementing}
                    className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                >
                    {isDecrementing || isIncrementing ? <MoonLoader size={17} color="#fff" /> : '-'}
                </button>

                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-semibold">
                    {quantity}
                </div>

                <button
                    onClick={() => increment(_id)}
                    disabled={isIncrementing || isDecrementing}
                    className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                >
                    {isIncrementing || isDecrementing ? <MoonLoader size={17} color="#fff" /> : '+'}
                </button>
            </div>
        </div>
    );
};

export default ProductBox;
