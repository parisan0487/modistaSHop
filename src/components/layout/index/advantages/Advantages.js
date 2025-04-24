import Link from 'next/link';
import AdvantagesSlider from './AdvantagesSlider';

function Advantages() {
    return (
        <section className="flex flex-col-reverse xl:flex-row items-center gap-8 p-8 my-12 w-full bg-orange-600 rounded-4xl">
            <div className="w-full xl:w-[calc(100%-232px)]">
                <AdvantagesSlider />
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
