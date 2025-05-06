'use client';
import useGetBasketProducts from '@/hooks/fetchers-hook/useGetBasketProducts';
import ProductBox from './ProductBox';

const ProductList = ({ className = '' }) => {
    const { data } = useGetBasketProducts();

    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            {data?.items?.map((item) => (
                <ProductBox key={item._id} data={item} />
            ))}
        </div>
    );
};

export default ProductList;
