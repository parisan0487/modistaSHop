import { useQuery } from '@tanstack/react-query';
import Fetch from '../../utils/Fetch';

const useGetFavoriteProducts = () => {
    const fetchHandler = async () => {
        const res = await Fetch.get('https://modistaback.onrender.com/api/wishlist/', {
            token: true,
        });
        return res.data;
    };

    const { data, isLoading } = useQuery({
        queryKey: ['favorite-product'],
        queryFn: fetchHandler,
        refetchOnMount: false,

    });

    return { data, isLoading };
};

export default useGetFavoriteProducts;
