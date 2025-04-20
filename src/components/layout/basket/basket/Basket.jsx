import PaymentDetailsBox from './PaymentDetailsBox';
import ProductList from './ProductList';

const Basket = () => {
    return (
        <div dir='rtl' className="w-full flex flex-col-reverse justify-between lg:flex-row gap-10 max-[1024px]:items-center">
            <ProductList className="w-full lg:w-2/3" />
            <PaymentDetailsBox className="w-full lg:w-1/3" totalPrice={1_500_000} />
        </div>
    );
};

export default Basket;
