'use client';

import RoadMap from '@/components/layout/basket/shared/RoadMap';
import Loading from '@/components/layout/loading/Loading';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

const Layout = ({ children }) => {
    const { isLoggedIn, isLoading } = useAuth();

    return isLoading ? (
        <Loading className="-top-40" />
    ) : isLoggedIn ? (
        <div className="container w-full pb-5">
            <RoadMap />
            {children}
        </div>
    ) : (
        <div className="container w-full pb-5">
            <RoadMap />
            <div className="w-full h-50 flex flex-col gap-4 items-center justify-center text-2xl font-bold text-zinc-700/70">
                <span>ابتدا در سایت ثبت‌نام کنید</span>
                <Link
                    href="/register"
                    className="py-1 px-6 text-xl font-normal text-white bg-orange-500 rounded-2xl shadow-md"
                >
                    ثبت‌نام
                </Link>
            </div>
        </div>
    );
};

export default Layout;
