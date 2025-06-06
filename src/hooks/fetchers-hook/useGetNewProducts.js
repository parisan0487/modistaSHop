'use client';
import Fetch from '@/utils/Fetch';
import { useQuery } from '@tanstack/react-query';

const useGetNewProducts = () => {
    const fetchHandler = async () =>
        await Fetch.get('https://modistaback.onrender.com/api/products/').then((res) => res.data);

    const { data, isPending } = useQuery({
        queryKey: ['new-product'],
        queryFn: fetchHandler,
        refetchOnMount: false,

    });

    return { data, isPending };
};

export default useGetNewProducts;
