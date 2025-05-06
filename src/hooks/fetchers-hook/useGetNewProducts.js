'use client';
import Fetch from '@/utils/Fetch';
import { useQuery } from '@tanstack/react-query';

const useGetNewProducts = () => {
    const fetchHandler = async () =>
        await Fetch.get('https://back-production-22f1.up.railway.app/api/products/').then((res) => res.data);

    const { data, isPending } = useQuery({
        queryKey: ['new-product'],
        queryFn: fetchHandler,
    });

    return { data, isPending };
};

export default useGetNewProducts;
