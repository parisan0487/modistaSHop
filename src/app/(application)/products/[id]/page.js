'use client';

import BestSellersSection from '@/components/layout/index/recent-bests/RecentBests';
import Loading from '@/components/layout/loading/Loading';
import CommentForm from '@/components/ui/ComponentForm';
import FullProductCard from '@/components/ui/FullProductCard';
import Link from 'next/link';
import { use, useEffect, useState } from 'react';

const productTestData = {
    brand: ' نایک',
};

const Page = ({ params }) => {
    const { id } = use(params);
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`https://modistaback.onrender.com/api/products/${id}`);
                const data = await res.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const tabs = [
        { label: 'مشخصات', targetId: 'specifications' },
        { label: 'نظرات کاربران', targetId: 'reviews' },
    ];
    const [activeTab, setActiveTab] = useState('مشخصات');
    const handleClick = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const finalPrice = product.price - (product.discount || 0);

    const size = product.variants != undefined && product.variants.map((v) => v.size);
    const color = product.variants != undefined && product.variants.map((v) => v.color);

    const calculateDiscountPercent = () => {
        if (!product.price || !product.discount || product.discount <= 0) return 0;
        return Math.round((product.discount / product.price) * 100);
    };

    const discountPercent = calculateDiscountPercent();
    if (loading || !product || !product.images) {
        return <Loading className="-top-30" />;
    }

    return (
        <div className="p-6 rtl space-y-2 w-full container pl-4 pr-8">
            {/* ///////////////////////// Card product ///////////////// */}
            <div className="text-sm text-gray-400 flex flex-row cursor-pointer">
                <Link href="/">صفحه اصلی</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M12.5 15L7.5 10L12.5 5"
                        stroke="#B9B9B9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <Link href="/categories">{product.categories.slice(0, 1)}</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M12.5 15L7.5 10L12.5 5"
                        stroke="#B9B9B9"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <span className="text-gray-700 font-medium">{product.name}</span>
            </div>

            <FullProductCard productData={product} />
            {/* ///////////////////////// */}
            {/* ///////////////////////// Card icons ///////////////// */}
            <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-row lg:justify-evenly xl:mx-32 bg-[#F7F7F7] rounded-xl p-4 mt-12 lg:mt-28 xl:mt-8">
                {[
                    { img: '/assets/images/feture-box-4.png', text: 'ضمانت بازگشت کالا' },
                    { img: '/assets/images/feture-box-1.png', text: 'ضمانت اصالت' },
                    { img: '/assets/images/feture-box-2.png', text: 'ارسال رایگان و سریع' },
                    { img: '/assets/images/feture-box-3.png', text: 'خدمات پس از خرید' },
                ].map((feature, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={feature.img} alt={feature.text} width={70} height={70} />
                        <h4 className="font-bold text-[#4B4B4B]">{feature.text}</h4>
                    </div>
                ))}
            </div>
            {/* ///////////////////////// */}

            <div className="flex justify-center md:justify-start gap-4 px-24 mt-22">
                {tabs.map((tab) => (
                    <button
                        key={tab.targetId}
                        onClick={() => {
                            handleClick(tab.targetId);
                            setActiveTab(tab.label);
                        }}
                        className={`${
                            activeTab == tab.label ? 'bg-[#FD5504] text-white' : 'bg-gray-100 text-gray-700'
                        } px-6 md:px-8 md:py-4 py-3 rounded-2xl text-nowrap`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            {/* ///////////////////////// */}

            <div id="specifications" className="bg-[#F7F7F7] max-w-7xl w-full rounded-2xl mx-auto px-6 py-6 mt-18">
                <h3 className="text-lg md:text-xl font-[700] text-[#464646]">توضیحات تکمیلی</h3>
                <hr className="my-6 border-t border-[#464646] opacity-25" />
                <div className="w-full ">
                    {color && (
                        <div className="flex flex-row  gap-6 ">
                            <div className="py-3 px-22 bg-[#FFF] rounded-xl text-[#B0B0B0] text-nowrap my-3">رنگ</div>
                            <div className="py-3 w-full bg-[#FFF] rounded-xl text-[#464646] px-3  my-3 text-xs md:text-base">
                                {color.join(', ')}
                            </div>
                        </div>
                    )}
                    {size && (
                        <div className="flex flex-row  gap-6 ">
                            <div className="py-3 px-22 bg-[#FFF] rounded-xl text-[#B0B0B0] text-nowrap my-3">سایز</div>
                            <div className="py-3 w-full bg-[#FFF] rounded-xl text-[#464646] px-3  my-3 text-xs md:text-base">
                                {size}
                            </div>
                        </div>
                    )}
                    {productTestData.brand && (
                        <div className="flex flex-row  gap-6 ">
                            <div className="py-3 px-22 bg-[#FFF] rounded-xl text-[#B0B0B0] text-nowrap my-3">برند</div>
                            <div className="py-3 w-full bg-[#FFF] rounded-xl text-[#464646] px-3 my-3 text-xs md:text-base">
                                {productTestData.brand}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* ///////////////////////// */}
            <div id="reviews" className="mt-26 w-full max-w-7xl mx-auto">
                <h3 className="text-2xl font-[800] text-[#373737]  my-6">دیدگاه ها</h3>
                <div className="flex flex-row w-full">
                    <div className="bg-[#F7F7F7] max-w-7xl w-full rounded-2xl mx-auto px-6 py-6">
                        <h3 className="text-lg md:text-xl font-[700] text-[#000000]">دیدگاه شما </h3>
                        <CommentForm />
                    </div>

                    {/* /////// small card side */}
                    <div>
                        <div
                            dir="ltr"
                            className={`bg-[#F6F6F6] w-[15rem] hidden lg:block h-[27rem] rounded-3xl overflow-hidden  cursor-pointer mx-6`}
                        >
                            {/* image */}
                            <div className="flex flex-col max-h-[24rem] rounded-[1rem_1rem_0_0]  m-4 mb-0 overflow-hidden">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-[16.5rem] object-cover "
                                    width={80}
                                    height={80}
                                />
                            </div>
                            {/* title */}
                            <h2 className="mt-2 font-semibold text-center text-[#595959]">{product.name}</h2>

                            {/** price & discount */}
                            <div className="flex flex-row w-full ">
                                <div className="w-full flex items-center mx-4">
                                    <div className="flex flex-col mt-8">
                                        <div className="flex flex-row mx-4 font-light items-center gap-1 min-h-[1.5rem]">
                                            {discountPercent > 0 ? (
                                                <>
                                                    <span className="text-white text-sm bg-[#FD5504] rounded-md text-center px-1 py-[2px]">
                                                        {discountPercent}%
                                                    </span>
                                                    <p className="text-[#AAAAAA] line-through text-sm">
                                                        {product.price.toLocaleString('fa-IR')}
                                                    </p>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="text-white text-sm bg-[#FD5504] rounded-md text-center px-1 py-[2px] opacity-0">
                                                        99%
                                                    </span>
                                                    <p className="text-[#AAAAAA] line-through text-sm opacity-0">
                                                        999999
                                                    </p>
                                                </>
                                            )}
                                        </div>

                                        <div className="font-bold flex flex-row text-center items-center mb-6">
                                            <span className="text-[#AAAAAA] mx-2 text-xs">تومان</span>
                                            {finalPrice > 1 && (
                                                <h3 className="font-bold text-xl">
                                                    {finalPrice.toLocaleString('fa-IR')}
                                                </h3>
                                            )}
                                        </div>
                                    </div>

                                    <div className="bg-[#FD5504] p-2.5 rounded-2xl group ml-6 h-[5rem] flex flex-col items-center">
                                        <p className="text-md text-[#FEA87B]">{discountPercent}%</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 25 24"
                                            fill="none"
                                            className="stroke-[#fff]" // رنگ پیش‌فرض و تغییر رنگ هنگام هاور
                                        >
                                            <path
                                                d="M20 9.5L19.2896 6.89465C19.0157 5.89005 18.8787 5.38775 18.5978 5.00946C18.318 4.63273 17.9378 4.34234 17.5008 4.17152C17.0619 4 16.5413 4 15.5 4M5 9.5L5.7104 6.89465C5.98432 5.89005 6.12128 5.38775 6.40221 5.00946C6.68199 4.63273 7.06216 4.34234 7.49922 4.17152C7.93808 4 8.45872 4 9.5 4"
                                                strokeWidth="1.5"
                                            ></path>
                                            <path
                                                d="M9.5 4C9.5 3.44772 9.94772 3 10.5 3H14.5C15.0523 3 15.5 3.44772 15.5 4C15.5 4.55228 15.0523 5 14.5 5H10.5C9.94772 5 9.5 4.55228 9.5 4Z"
                                                strokeWidth="1.5"
                                            ></path>
                                            <path
                                                d="M8.5 13V17"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M16.5 13V17"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M12.5 13V17"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                            <path
                                                d="M4.36425 16.4552C4.90992 18.6379 5.18275 19.7292 5.99654 20.3646C6.81032 21 7.93525 21 10.1851 21H14.8158C17.0656 21 18.1906 21 19.0044 20.3646C19.8181 19.7292 20.091 18.6379 20.6366 16.4552C21.4946 13.0234 21.9236 11.3075 21.0227 10.1538C20.1219 9 18.3532 9 14.8158 9H10.1851C6.64769 9 4.87899 9 3.97816 10.1538C3.44937 10.831 3.37879 11.702 3.58422 13"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div dir="ltr">
                <BestSellersSection />
            </div>
        </div>
    );
};

export default Page;
