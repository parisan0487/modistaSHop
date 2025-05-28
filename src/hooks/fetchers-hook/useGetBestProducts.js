'use client';

import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Fetch from '../../utils/Fetch';

const useGetBestProducts = () => {
    const fetchHandler = async () => {
        try {
            return await Fetch.get('https://back-production-22f1.up.railway.app/api/products/category/orange').then(
                (res) => res.data
            );
        } catch (error) {
            toast.error('لطفا اینترنت خود را چک کن');
            return []
        }
    };

    const { data, isPending } = useQuery({
        queryKey: ['best-products'],
        queryFn: fetchHandler,
        refetchOnMount: false,

    });

    return { data, isPending };
};

export default useGetBestProducts;
