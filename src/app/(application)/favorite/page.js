'use client';

import PCard from '@/components/layout/index/new-products/PCard';
import Loading from '@/components/layout/loading/Loading';
import { useAuth } from '@/context/AuthContext';
import Fetch from '@/utils/Fetch';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react';

const Page = () => {
    const { isLoggedIn } = useAuth();

    const fetchHandler = async () => {
        const res = await Fetch.get('https://back-production-22f1.up.railway.app/api/wishlist/', {
            token: true,
        });
        return res.data;
    };

    const { data, isLoading } = useQuery({
        queryKey: ['favorite-product'],
        queryFn: fetchHandler,
    });

    return (
        <div className="container flex flex-wrap justify-end max-[1024px]:justify-center gap-3 py-10">
            {isLoading ? (
                <Loading className='-top-20' />
            ) : isLoggedIn ? (
                (data?.items || []).map((product) => (
                    <PCard key={product.product._id} data={product.product} deleteBtn={true} />
                ))
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
            )}
        </div>
    );
};

export default Page;
