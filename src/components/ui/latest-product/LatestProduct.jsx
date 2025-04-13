import Link from "next/link";
import LatestProductSlider from "./LatestProductSlider";

function LatestProduct() {
  return (
    <section className="flex flex-col-reverse xl:flex-row items-center gap-8 p-8 my-12 w-full bg-orange-600 rounded-4xl">
      <div className="w-full xl:w-[calc(100%-232px)]">
        <LatestProductSlider />
      </div>
      <div className="flex flex-col items-center gap-4 shrink-0 w-50">
        <h3 className="text-2xl text-white">
          <span className="font-bold">جدیدترین</span> محصولات
        </h3>
        <Link href="/about" className="text-lg text-white font-normal border py-2.5 px-4 rounded-xl">
          مشاهده همه
        </Link>
      </div>
    </section>
  );
}

export default LatestProduct;
