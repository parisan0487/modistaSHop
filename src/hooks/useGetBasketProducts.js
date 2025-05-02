'use client';

import Fetch from '@/utils/Fetch';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

const useGetBasketProducts = () => {
    const fetchHandler = async () => {
        try {
            const res = await Fetch.get('https://back-production-22f1.up.railway.app/api/cart/');
            return res.data;
        } catch (error) {
            throw error;
        }
    };

    const { data, isLoading, error } = useQuery({
        queryFn: fetchHandler,
        queryKey: ['basket-product'],
    });

    const totalPrice = useMemo(() => {
        if (data?.items?.length) {
            return data.items.reduce((acc, { product: { price }, quantity }) => acc + price * quantity, 0);
        }
        return 0;
    }, [data]);

    return { data, isLoading, error, totalPrice };
};

export default useGetBasketProducts;
