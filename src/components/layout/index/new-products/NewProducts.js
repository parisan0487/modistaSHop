'use client';
import ProductsSlider from '../shared/ProductsSlider';
import useGetNewProducts from '@/hooks/fetchers-hook/useGetNewProducts';

const NewProducts = () => {
    const { data } = useGetNewProducts();

    return (
        <div className="flex flex-col items-center justify-center text-[#2D2929] w-full mt-2 mb-24">
            <h2 className="text-2xl">
                <span className="font-black">جدیدترین</span> محصولات{' '}
            </h2>

            <div className="flex items-center justify-center w-1/3 my-6">
                <span className="h-px flex-grow bg-gray-200"></span>
                <span className="mx-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                        <path
                            id="Star 1"
                            d="M11.5 0C11.5 0 12.1345 5.92243 14.606 8.39396C17.0776 10.8655 23 11.5 23 11.5C23 11.5 17.0776 12.1345 14.606 14.606C12.1345 17.0776 11.5 23 11.5 23C11.5 23 10.8655 17.0776 8.39396 14.606C5.92243 12.1345 0 11.5 0 11.5C0 11.5 5.92243 10.8655 8.39396 8.39396C10.8655 5.92243 11.5 0 11.5 0Z"
                            fill="#FD5504"
                        ></path>
                    </svg>
                </span>
                <span className="h-px flex-grow bg-gray-200"></span>
            </div>
            <ProductsSlider products={data} />
        </div>
    );
};

export default NewProducts;
