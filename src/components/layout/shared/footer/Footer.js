'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Footer = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const logos = [
        'https://mehdibagheridev.ir/modista/wp-content/uploads/2025/01/kasbokar-2.png',
        'https://mehdibagheridev.ir/modista/wp-content/uploads/2025/01/footer-meli-badge.png',
        'https://mehdibagheridev.ir/modista/wp-content/uploads/2025/01/namad-1-1.png',
        'https://mehdibagheridev.ir/modista/wp-content/uploads/2025/01/kasbokar-2.png',
        'https://mehdibagheridev.ir/modista/wp-content/uploads/2025/01/footer-meli-badge.png',
        'https://mehdibagheridev.ir/modista/wp-content/uploads/2025/01/namad-1-1.png',
    ];

    return (
        <div className="w-full bg-white px-8 max-[500px]:px-4 pt-12 pb-2 flex flex-col gap-8">
            <div class="bg-[#F4F4F4] bg-[url('/assets/images/pre-footer.svg')] bg-contain bg-no-repeat bg-center h-10"></div>
            <div className="w-full flex flex-row max-[1280px]:flex-wrap min-[1280px]:justify-between justify-center max-[1280px]:gap-32 max-[860px]:gap-8">
                <div className="flex flex-col gap-4 max-[450px]:items-center">
                    <div className="grid grid-cols-2 gap-4 max-[400px]:gap-2">
                        <div className="w-44 max-[400px]:w-40 h-20 rounded-2xl bg-[#F7F7F7] p-6 flex flex-col items-center justify-center gap-2">
                            <Image
                                src="https://mehdibagheridev.ir/modista/wp-content/uploads/2025/01/footer-iconsfacebook-8.svg"
                                width={10}
                                height={10}
                                alt="footer-icon"
                                className="size-6 shrink-0"
                            />
                            <span className="text-black/60 max-[400px]:text-[0.8rem]">مشاوره و پشتیبانی</span>
                        </div>
                        <div className="w-44 max-[400px]:w-40 h-20 rounded-2xl bg-[#F7F7F7] p-6 flex flex-col items-center justify-center gap-2">
                            <Image
                                src="https://mehdibagheridev.ir/modista/wp-content/uploads/2025/01/footer-iconsfacebook-7.svg"
                                width={10}
                                height={10}
                                alt="footer-icon"
                                className="size-6 shrink-0"
                            />
                            <span className="text-black/60 max-[400px]:text-[0.8rem]">تحویل اکسپرس</span>
                        </div>
                        <div className="w-44 max-[400px]:w-40 h-20 rounded-2xl bg-[#F7F7F7] p-6 flex flex-col items-center justify-center gap-2">
                            <Image
                                src="https://mehdibagheridev.ir/modista/wp-content/uploads/2025/01/footer-iconsfacebook-5.svg"
                                width={10}
                                height={10}
                                alt="footer-icon"
                                className="size-6 shrink-0"
                            />
                            <span className="text-black/60 max-[400px]:text-[0.8rem]">گارانتی بازگشت وجه</span>
                        </div>
                        <div className="w-44 max-[400px]:w-40 h-20 rounded-2xl bg-[#F7F7F7] p-6 flex flex-col items-center justify-center gap-2">
                            <Image
                                src="https://mehdibagheridev.ir/modista/wp-content/uploads/2025/01/footer-iconsfacebook-6.svg"
                                width={10}
                                height={10}
                                alt="footer-icon"
                                className="size-6 shrink-0"
                            />
                            <span className="text-black/60 max-[400px]:text-[0.8rem]">ارسال رایگان</span>
                        </div>
                    </div>
                    <div className="w-full flex justify-between gap-2">
                        <div className="size-20 max-[450px]:size-17 rounded-2xl bg-[#F7F7F7] p-2 flex flex-col items-center justify-center gap-5 cursor-pointer">
                            <Image
                                src="https://mehdibagheridev.ir/modista/wp-content/uploads/2025/01/footer-iconsfacebook-1.svg"
                                width={10}
                                height={10}
                                alt="phone-icon"
                                className="size-8"
                            />
                        </div>
                        <div className="size-20 max-[450px]:size-17 rounded-2xl bg-[#F7F7F7] p-2 flex flex-col items-center justify-center gap-5 cursor-pointer">
                            <Image
                                src="https://mehdibagheridev.ir/modista/wp-content/uploads/2025/01/footer-iconsfacebook-2.svg"
                                width={10}
                                height={10}
                                alt="phone-icon"
                                className="size-8"
                            />
                        </div>
                        <div className="size-20 max-[450px]:size-17 rounded-2xl bg-[#F7F7F7] p-2 flex flex-col items-center justify-center gap-5 cursor-pointer">
                            <Image
                                src="https://mehdibagheridev.ir/modista/wp-content/uploads/2025/01/footer-iconsfacebook-3.svg"
                                width={10}
                                height={10}
                                alt="phone-icon"
                                className="size-8"
                            />
                        </div>
                        <div className="size-20 max-[450px]:size-17 rounded-2xl bg-[#F7F7F7] p-2 flex flex-col items-center justify-center gap-5 cursor-pointer">
                            <Image
                                src="https://mehdibagheridev.ir/modista/wp-content/uploads/2025/01/footer-iconsfacebook-4.svg"
                                width={10}
                                height={10}
                                alt="phone-icon"
                                className="size-8"
                            />
                        </div>
                    </div>
                </div>
                <div dir="rtl" className="flex gap-10">
                    <ul className="list-none space-y-2">
                        <li className="font-bold text-2xl">دسترسی سریع</li>
                        <li className="text-black/60 cursor-pointer hover:text-orange-500">دسته بندی</li>
                        <li className="text-black/60 cursor-pointer hover:text-orange-500">پرفروش ترین ها</li>
                        <li className="text-black/60 cursor-pointer hover:text-orange-500">محصولات تخفیف دار</li>
                        <li className="text-black/60 cursor-pointer hover:text-orange-500">پشتیبانی</li>
                        <li className="text-black/60 cursor-pointer hover:text-orange-500">محبوب ترین ها</li>
                        <li className="text-black/60 cursor-pointer hover:text-orange-500">سوالی دارید</li>
                        <li className="text-black/60 cursor-pointer hover:text-orange-500">تماس با ما</li>
                        <li className="text-black/60 cursor-pointer hover:text-orange-500">درباره ما</li>
                    </ul>

                    <ul className="list-none space-y-2">
                        <li className="font-bold text-2xl">لینک های مفید</li>
                        <li className="text-black/60 cursor-pointer hover:text-orange-500">دسته بندی</li>
                        <li className="text-black/60 cursor-pointer hover:text-orange-500">پرفروش ترین ها</li>
                        <li className="text-black/60 cursor-pointer hover:text-orange-500">محصولات تخفیف دار</li>
                        <li className="text-black/60 cursor-pointer hover:text-orange-500">پشتیبانی</li>
                        <li className="text-black/60 cursor-pointer hover:text-orange-500">محبوب ترین ها</li>
                        <li className="text-black/60 cursor-pointer hover:text-orange-500">سوالی دارید</li>
                        <li className="text-black/60 cursor-pointer hover:text-orange-500">تماس با ما</li>
                        <li className="text-black/60 cursor-pointer hover:text-orange-500">درباره ما</li>
                    </ul>
                </div>
                <div dir="rtl" className="w-2/5 flex flex-col gap-4 max-[1280px]:w-full max-[1280px]:items-center">
                    <Image
                        src="https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/mi-favicon.svg"
                        width={10}
                        height={10}
                        alt="logo"
                        className="size-14"
                    />
                    <span className="text-[1rem] !text-black/50 font-bold mb-4 max-[1280px]:text-center">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی شصت و سه
                        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                        را برای طراحان رایانه ای علی الخصوص طراحان خلاقی.
                    </span>

                    <div dir="rtl" className="relative w-full max-w-5xl mx-auto px-14">
                        <button
                            ref={prevRef}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-orange-300 hover:bg-orange-400 transition p-3 shadow-lg rounded-full backdrop-blur-sm cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#fff"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <button
                            ref={nextRef}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-orange-300 hover:bg-orange-400 transition p-3 shadow-lg rounded-full backdrop-blur-sm cursor-pointer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#fff"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={24}
                            slidesPerView={3}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            breakpoints={{
                                0: { slidesPerView: 2 },
                                640: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                            }}
                            className="!overflow-x-hidden !pb-3"
                        >
                            {logos.map((src, i) => (
                                <SwiperSlide key={i}>
                                    <div className="bg-white rounded-2xl shadow-sm p-4 flex justify-center items-center transition hover:shadow-lg cursor-pointer">
                                        <img
                                            src={src}
                                            alt={`logo-${i}`}
                                            className="h-16 object-contain grayscale-0 hover:grayscale transition duration-300"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            <div dir="rtl" className="bg-[#FD5504] text-white py-10 px-4 rounded-2xl">
                <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-right gap-6 md:gap-0 max-w-6xl mx-auto">
                    <div className="px-6 md:px-10 md:border-l md:border-white/30">
                        <p className="font-bold mb-2 !text-white/70"> آدرس فروشگاه:</p>
                        <p className="!text-white">تهران، خیابان کارگر جنوبی، کوچه نیکوکار، پلاک ۱۲</p>
                    </div>

                    <div className="px-6 md:px-10 md:border-l md:border-white/30">
                        <p className="font-bold mb-2 !text-white/70"> واتساپ و تلگرام:</p>
                        <p className="!text-white">0913 258 369 6</p>
                    </div>

                    <div className="px-6 md:px-10 md:border-l md:border-white/30">
                        <p className="font-bold mb-2 !text-white/70"> ایمیل پشتیبانی:</p>
                        <p className="!text-white">info@gmail.com</p>
                    </div>

                    <div className="px-6 md:px-10">
                        <p className="font-bold mb-2 !text-white/70"> شماره تماس:</p>
                        <p className="!text-white">021-258 369 5</p>
                    </div>
                </div>
            </div>

            <div dir="rtl" className="w-full text-center">
                <p className="!text-black/50 font-bold">
                    این فروشگاه متعلق به تیم فروشگاهی میباشد و حقوق آن محفوظ است.
                </p>
            </div>
        </div>
    );
};

export default Footer;
