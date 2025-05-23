import { useMemo } from 'react';

const useTotalPrice = (data) => {
    const totalPrice = useMemo(() => {
        if (data?.items?.length) {
            return data.items.reduce((acc, { product: { price }, quantity }) => acc + price * quantity, 0);
        }
        return 0;
    }, [data]);

    return totalPrice;
};

export default useTotalPrice;
