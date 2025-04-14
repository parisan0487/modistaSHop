import Link from 'next/link';
import AdvantageCard from './AdvantageCard';

const advantages = [
    {
        id: 1,
        text: 'خدمات پس از خرید',
        image: 'https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/feture-box-3.png',
    },
    {
        id: 2,
        text: 'ارسال رایگان و سریع',
        image: 'https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/feture-box-2.png',
    },
    {
        id: 3,
        text: 'ضمانت اصالت',
        image: 'https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/feture-box-1.png',
    },
    {
        id: 4,
        text: 'ضمانت بازگشت کالا',
        image: 'https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/feture-box-4.png',
    },
];

function Advantages() {
    return (
        <section className="flex flex-col-reverse xl:flex-row items-center gap-8 p-8 my-12 w-full bg-orange-600 rounded-4xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                {advantages.map((advantage) => (
                    <AdvantageCard key={advantage.id} {...advantage} />
                ))}
            </div>
            <div className="flex flex-col items-center gap-4 shrink-0">
                <h3 className="font-bold text-2xl text-white">مزیت‌های فروشگاه</h3>
                <Link href="/about" className="text-lg text-white font-normal border py-2.5 px-4 rounded-xl">
                    مشاهده همه
                </Link>
            </div>
        </section>
    );
}

export default Advantages;
