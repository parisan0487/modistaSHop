import Image from 'next/image';
import Link from 'next/link';

const BestProductCard = ({ id, images, discount, price }) => {
    const finalPrice = !!discount ? price - discount : price;

    const calculateDiscountPercent = () => {
        if (!price || !discount || discount <= 0) return 0;
        return Math.round((discount / price) * 100);
    };

    const discountPercent = calculateDiscountPercent();

    return (
        <Link href={`/products/${id}`}>
            <div className="w-full max-w-xs mx-auto h-[280px] rounded-2xl p-4 bg-[#f7f7f7] flex flex-col justify-between cursor-pointer">
                <div className="relative w-full h-[200px] flex justify-center items-center">
                    <div className="absolute inset-0 bg-[url('/assets/images/hero-bg.svg')] bg-contain bg-no-repeat bg-center brightness-75" />
                    <Image
                        src={images[0]}
                        alt={'محصول'}
                        width={140}
                        height={190}
                        priority
                        className="relative z-10 object-contain w-auto h-40"
                    />
                </div>

                <div className="flex justify-between items-center" dir="rtl">
                    <button
                        className="bg-white p-2 rounded-xl shadow hover:bg-gray-100 transition cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                        }}
                    >
                        <Image
                            src="/assets/images/basket-48.png"
                            alt="افزودن به سبد"
                            width={20}
                            height={20}
                            className="w-5 h-5 text-gray-600"
                        />
                    </button>

                    <div className="flex flex-col items-end">
                        {!!discount && (
                            <div className="flex items-center gap-1 mb-1">
                                <span className="text-xs text-gray-400 line-through">
                                    {price.toLocaleString('fa-IR')}
                                </span>
                                {discount && (
                                    <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded">
                                        % {discountPercent}
                                    </span>
                                )}
                            </div>
                        )}

                        <div className="flex items-baseline gap-1">
                            <span className="text-lg font-semibold text-black">
                                {finalPrice?.toLocaleString('fa-IR')}
                            </span>
                            <span className="text-sm text-gray-500">تومان</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BestProductCard;
