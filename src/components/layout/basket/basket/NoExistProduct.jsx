import Link from 'next/link';
import React from 'react';

const NoExistProduct = () => {
    return (
        <div className="w-full h-96 bg-[#F7F7F7] rounded-2xl flex flex-col items-center justify-center gap-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-20 fill-[#989898]"
            >
                <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                    clipRule="evenodd"
                />
            </svg>
            <p className="text-zinc-600">هیچ سفارشی هنوز ثبت نشده است.</p>
            <Link href={'/shop'}>
                <div className="p-4 py-2 bg-orange-500 text-white rounded-2xl cursor-pointer">مرور محصولات</div>
            </Link>
        </div>
    );
};

export default NoExistProduct;
