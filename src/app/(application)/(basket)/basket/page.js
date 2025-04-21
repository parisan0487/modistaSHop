import Basket from '@/components/layout/basket/basket/Basket';
import NoExistProduct from '@/components/layout/basket/basket/NoExistProduct';

const page = () => {
    return <div className="w-full">{true ? <Basket /> : <NoExistProduct />}</div>;
};

export default page;
