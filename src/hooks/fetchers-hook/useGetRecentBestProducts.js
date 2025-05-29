'use client';

import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Fetch from '../../utils/Fetch';

const useGetRecentBestProducts = () => {
    const fetchHandler = async () => {
        try {
            return await Fetch.get('https://modistaback.onrender.com/api/products/').then(
                (res) => res.data
            );
        } catch (error) {
            toast.error('لطفا اینترنت خود را چک کن');
            return [];
        }
    };

    const { data, isPending } = useQuery({
        queryKey: ['recent-best-products'],
        queryFn: fetchHandler,
        refetchOnMount: false,
    });

    return { data, isPending };
};

export default useGetRecentBestProducts;
