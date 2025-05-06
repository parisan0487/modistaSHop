'use client';
import Basket from '@/components/layout/basket/basket/Basket';
import NoExistProduct from '@/components/layout/basket/basket/NoExistProduct';
import Loading from '@/components/layout/loading/Loading';
import useGetBasketProducts from '@/hooks/fetchers-hook/useGetBasketProducts';

const Page = () => {
    const { isLoading, data } = useGetBasketProducts();

    return (
        <div className="w-full">{isLoading ? <Loading className='-top-60'/> : data?.items?.length ? <Basket /> : <NoExistProduct />}</div>
    );
};

export default Page;
