'use client';
import Fetch from '@/utils/Fetch';
import { useQuery } from '@tanstack/react-query';

const useGetBasketProducts = () => {
    const fetchHandler = async () => {
        try {
            const res = await Fetch.get('https://modistaback.onrender.com/api/cart/', { token: true });
            return res.data;
        } catch (error) {
            throw error;
        }
    };

    const { data, isLoading, error } = useQuery({
        queryFn: fetchHandler,
        queryKey: ['basket-product'],
    });

    return { data, isLoading };
};

export default useGetBasketProducts;
