'use client';

import { useDeferredValue, useEffect, useState } from 'react';
import Fetch from '@/utils/Fetch';
import Image from 'next/image';
import Link from 'next/link';

const SearchNav = () => {
    const [value, setValue] = useState('');
    const search = useDeferredValue(value);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (search.trim()) {
            Fetch.get(`https://modistaback.onrender.com/api/products/search?q=${search}`).then((res) =>
                setProducts(res.data)
            );
        } else {
            setProducts([]);
        }
    }, [search]);

    return (
        <div className="relative w-96 h-[52px] rounded-2xl bg-[#F7F7F7] p-2 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                <Image
                    src="https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/Minimalistic-Magnifer.svg"
                    width={24}
                    height={24}
                    alt="آیکن جستجو"
                    className="w-6 h-6 active:scale-95 cursor-pointer"
                    loading="eager"
                    priority
                />
            </div>
            <input
                dir="rtl"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="دنبال چی میگردی؟"
                className="w-full h-full pr-1 bg-transparent text-base text-black/70 placeholder:text-black/50 outline-none"
            />

            {products.length > 0 && (
                <div className="absolute top-14 left-0 w-full bg-white rounded-2xl shadow-lg p-3 flex flex-col gap-2 z-10 max-h-80 overflow-y-auto">
                    {products.map((item) => (
                        <Link
                            href={`/products/${item.id}`}
                            key={item.id}
                            className="flex items-center justify-between max-[500px]:justify-end gap-4 p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200 cursor-pointer"
                        >
                            <div className="flex-shrink-0 w-12 h-12 overflow-hidden rounded-xl bg-gray-200 max-[500px]:hidden">
                                <Image
                                    src={item.images[0]}
                                    width={48}
                                    height={48}
                                    alt="product-image"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span dir="rtl" className="text-sm md:text-base font-medium text-black">
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchNav;
