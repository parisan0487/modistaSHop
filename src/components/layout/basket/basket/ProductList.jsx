'use client';
import getBasketProducts from '@/utils/fetchers/getBasketProducts';
import ProductBox from './ProductBox';

const ProductList = ({ className = '' }) => {
    const { data } = getBasketProducts();

    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            {data?.items?.map((item) => (
                <ProductBox key={item._id} data={item} />
            ))}
        </div>
    );
};

export default ProductList;
