'use client';
import { useMemo, useState } from 'react';
import useGetBasketProducts from '@/hooks/fetchers-hook/useGetBasketProducts';
import Link from 'next/link';

const PaymentDetailsBox = () => {
    const [discountCode, setDiscountCode] = useState('');

    const { data } = useGetBasketProducts();

    const totalPrice = useMemo(() => {
        if (data?.items?.length) {
            return data.items.reduce((acc, { product: { price }, quantity }) => acc + price * quantity, 0);
        }
        return 0;
    }, [data]);

    return (
        <div dir="rtl" className="max-[640px]:w-full p-6 rounded-2xl bg-white shadow-md shrink-0">
            <h3 className="text-lg font-semibold mb-4">جزئیات پرداخت</h3>

            <p className="mb-4">مبلغ کل: {totalPrice.toLocaleString()} تومان</p>

            <div className="mb-4">
                <label className="block mb-2">کد تخفیف:</label>
                <div className="flex flex-col sm:flex-row gap-2">
                    <input
                        type="text"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                        className="flex-1 p-2 border border-gray-300 rounded-2xl outline-0 focus:outline-0 focus:border-zinc-600/50 duration-100"
                    />
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-2xl cursor-pointer">
                        اعمال کد
                    </button>
                </div>
            </div>

            <p className="font-bold mb-4">مبلغ قابل پرداخت: {totalPrice.toLocaleString('fa-IR')} تومان</p>

            <Link href={'/paymentDetails'}>
                <div className="text-white w-full py-3 rounded-2xl font-semibold bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition cursor-pointer">
                    ادامه مراحل خرید
                </div>
            </Link>
        </div>
    );
};

export default PaymentDetailsBox;
