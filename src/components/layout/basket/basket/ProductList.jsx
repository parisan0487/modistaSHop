"use client"
import { useContext } from 'react';
import ProductBox from './ProductBox';
import { BasketContext } from '@/context/BasketContext';
const ProductList = ({ className = '' }) => {
    const { products } = useContext(BasketContext);

    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            {products.map((item, index) => (
                <ProductBox key={index} {...item} />
            ))}
        </div>
    );
};

export default ProductList;
