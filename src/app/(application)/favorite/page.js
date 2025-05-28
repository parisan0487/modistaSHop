'use client';

import NoExistProduct from '@/components/layout/basket/basket/NoExistProduct';
import PCard from '@/components/layout/index/new-products/PCard';
import Loading from '@/components/layout/loading/Loading';
import { useAuth } from '@/context/AuthContext';
import useGetFavoriteProducts from '@/hooks/fetchers-hook/useGetFavoriteProducts';
import Link from 'next/link';
import React from 'react';

const Page = () => {
    const { isLoggedIn } = useAuth();

    const { data, isLoading } = useGetFavoriteProducts();

    return isLoading ? (
        <Loading className="-top-20" />
    ) : isLoggedIn ? (
        <div className="container w-full flex justify-center py-10">
            {data?.products?.length ? (
                <div className="grid grid-cols-4 max-[1280px]:grid-cols-3 max-[1040px]:grid-cols-2 max-[615px]:grid-cols-1 gap-10">
                    {data.products.map((item) => (
                        <PCard key={item._id} {...item} deleteBtn={true} />
                    ))}
                </div>
            ) : (
                <NoExistProduct />
            )}
        </div>
    ) : (
        <div className="w-full h-50 flex flex-col gap-4 items-center justify-center text-2xl font-bold text-zinc-700/70">
            <span> ابتدا در سایت ثبت نام کنید</span>
            <Link
                href={'/register'}
                className="py-1 px-6 text-xl font-normal text-white bg-orange-500 rounded-2xl shadow-md"
            >
                ثبت نام
            </Link>
        </div>
    );
};

export default Page;
