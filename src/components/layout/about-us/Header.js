import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
    return (
        <div className="flex gap-8 p-8 bg-gradient-to-t from-orange-600 to-orange-500 rounded-4xl overflow-hidden" dir="rtl">
            <div className="xl:w-1/2 space-y-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl text-white font-bold">درباره مُدیستا</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width={43} height={28} viewBox="0 0 43 28" fill="none">
                        <g id="Group 345003">
                            <path
                                id="Vector"
                                d="M20.5675 13.8695L8.16797 0V10.2184L20.5675 24.0878V13.8695Z"
                                fill="white"
                            />
                            <path
                                id="Vector_2"
                                d="M0.00780694 17.5518L0 17.5675V7.34909L6.56674 0V27.1291H0.00780694V17.5518Z"
                                fill="white"
                                fillOpacity={0.25}
                            />
                            <path
                                id="Vector_3"
                                d="M22.4336 13.8695L34.8331 0V10.2184L22.4336 24.0878V13.8695Z"
                                fill="white"
                            />
                            <path
                                id="Vector_4"
                                d="M42.9925 17.5518L43.0003 17.5675V7.34909L36.4336 0V27.1291H42.9925V17.5518Z"
                                fill="white"
                                fillOpacity={0.25}
                            />
                        </g>
                    </svg>
                </div>
                <p className="text-white font-medium leading-8">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                    نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
                    حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
                    رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </p>
                <Link
                    href="#"
                    className="w-max flex items-center gap-2 text-lg bg-white text-orange-500 font-medium py-2.5 px-4 rounded-xl"
                >
                    بازدید از پیج ما
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g id="9">
                            <path
                                id="Union"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.5713 3.42859H6.857V3.42882L6.857 3.42881L3.50628 6.79171L8.42978 11.6974L3.69217 15.5605V20.5714H8.43942V11.707L17.1937 20.4295L20.5444 17.0666L11.6213 8.17584H20.5713V3.42859Z"
                                fill="currentColor"
                            ></path>
                        </g>
                    </svg>
                </Link>
            </div>
            <div className="w-1/2 -mb-16 hidden xl:flex">
                <Image
                    src="/assets/images/aboutus-model-3.png"
                    className="object-contain"
                    alt="model 3"
                    width={180}
                    height={350}
                />
                <Image
                    src="/assets/images/aboutus-model-2.png"
                    className="object-contain"
                    alt="model 2"
                    width={180}
                    height={350}
                />
                <Image
                    src="/assets/images/aboutus-model-1.png"
                    className="object-contain"
                    alt="model 1"
                    width={180}
                    height={350}
                />
            </div>
        </div>
    );
}

export default Header;
