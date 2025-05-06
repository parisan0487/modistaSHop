import { useQuery } from '@tanstack/react-query';
import Fetch from '../../utils/Fetch';

const useGetFavoriteProducts = () => {
    const fetchHandler = async () => {
        const res = await Fetch.get('https://back-production-22f1.up.railway.app/api/wishlist/', {
            token: true,
        });
        return res.data;
    };

    const { data, isLoading } = useQuery({
        queryKey: ['favorite-product'],
        queryFn: fetchHandler,
    });

    return { data, isLoading };
};

export default useGetFavoriteProducts;
