"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

const products = [
  {
    id: 2,
    title: "کاپشن دخترانه خزدار",
    image: "/img/sample.png",
    price: 2300000,
    oldPrice: 2600000,
    discount: "۱۵٪",
  },
  {
    id: 1,
    title: "پلیور زنانه یقه اسکی نارنجی",
    image: "/img/sample-orange-shirt.png",
    price: 1500000,
  },
  {
    id: 3,
    title: "بلوز آستین بلند بچگانه",
    image: "/img/carousel-slide.png",
    price: 900000,
    oldPrice: 1050000,
    discount: "۱۰٪",
  },
  {
    id: 4,
    title: "بلوز آستین بلند بچگانه",
    image: "/img/sample-orange-shirt.png",
    price: 900000,
    oldPrice: 1050000,
    discount: "۱۰٪",
  },
];

const toPersianDigits = (num) => {
  return num
    .toString()
    .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)])
    .replace(/\B(?=(\d{3})+(?!\d))/g, "٬");
};

export default function TopSellingProducts() {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="w-full px-6 py-10 max-w-7xl mx-auto ">
      <div className="relative w-full flex items-center justify-between gap-20">
        <button
          onClick={handlePrev}
          className="absolute left-[-5rem] w-11 h-11 bg-[#f7f7f7] rounded-2xl mb-[41px]"
        >
          <Image
            src="/img/slide-arrow-1.svg"
            alt="slide-arrow"
            width={40}
            height={40}
          />
        </button>

        <Swiper
          spaceBetween={1}
          slidesPerView={3}
          loop={true}
          grabCursor={true}
          ref={swiperRef}
          slidesPerGroup={1}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="w-56 h-[280px] rounded-2xl p-4 bg-[#f7f7f7] flex flex-col justify-between ">
                <div className="w-full h-[200px] relative flex justify-center items-center">
                  <div className="absolute inset-0 bg-[url('/img/hero-user-bg.svg')] bg-contain bg-no-repeat bg-center filter brightness-75" />
                  <Image
                    src={product.image}
                    alt={product.title || "محصول"}
                    width={140}
                    height={190}
                    className="relative z-10 object-contain h-40"
                  />
                </div>

                <div className="flex justify-between items-center" dir="rtl">
                  {/* آیکن سبد خرید */}
                  <button className="bg-white p-2 rounded-xl shadow hover:bg-gray-100 transition">
                    <Image
                      src="/img/basket-48.png"
                      alt="حذف"
                      width={20}
                      height={20}
                      className="w-5 h-5 text-gray-600"
                    />
                  </button>

                  {/* قیمت‌ها */}
                  <div className="flex flex-col items-end">
                    {product.oldPrice && (
                      <div className="flex items-center gap-1 mb-1">
                        <span className="text-gray-400 text-xs line-through">
                          {toPersianDigits(product.oldPrice)}
                        </span>

                        {product.discount && (
                          <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded">
                            {product.discount}
                          </span>
                        )}
                      </div>
                    )}

                    {/* قیمت نهایی */}
                    <div className="flex items-baseline gap-1">
                      <span className="text-black text-lg font-semibold">
                        {toPersianDigits(product.price)}
                      </span>
                      <span className="text-gray-500 text-sm">تومان</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={handleNext}
          className="absolute right-[24rem] w-11 h-11 bg-[#f7f7f7] rounded-2xl mb-[41px]"
        >
          <Image
            src="/img/slide-arrow.svg"
            alt="slide-arrow"
            width={40}
            height={40}
          />
        </button>

        <div className="flex justify-end items-center mb-6 w-72 mr-12">
          <div className="text-end">
            <h2 className="text-right text-[32px] leading-[200%] text-[#2B2727]">
              <span className="font-extrabold text-[#000]">پرفروش ترین</span>{" "}
              <span className="font-light text-[#2B2727]">محصولات</span>
            </h2>

            <div className="flex flex-col items-end leading-tight">
              <div className="flex items-center w-[305px] mx-auto">
                <div className="flex-grow border-t border-[#F7F7F7]"></div>
                <span className=" text-orange-500 text-3xl">★</span>
                <div className="flex-grow border-t border-[#F7F7F7]"></div>
              </div>

              <div className="flex items-center gap-5 mt-5">
                <div className="text-right">
                  <div>
                    <h3 className="text-[32px] font-extrabold leading-[24px] text-[#514F4F] mb-0">
                      <span>+10 </span>
                    </h3>

                    <p className="text-[#979797] text-[14px] font-normal mt-3">
                      تنوع محصولات{" "}
                    </p>
                  </div>
                </div>

                <div className="flex relative w-auto h-full gap-0 mb-16 mr-28">
                  <div className="flex flex-wrap absolute top-0 left-0">
                    <Image
                      src="/img/Ellipse-11.png"
                      className="w-[52px] z-10 max-w-4xl"
                      width={49}
                      height={49}
                      alt="تصویر ۱"
                    />
                  </div>
                  <div className="flex flex-wrap absolute top-0 left-[30px]">
                    <Image
                      src="/img/Ellipse-13.png"
                      className="w-[52px] z-20 max-w-4xl"
                      width={49}
                      height={49}
                      alt="تصویر ۲"
                    />
                  </div>
                  <div className="flex flex-wrap absolute top-0 left-[60px]">
                    <Image
                      src="/img/Ellipse-12.png"
                      className="w-[52px] z-30 max-w-4xl"
                      width={49}
                      height={49}
                      alt="تصویر ۳"
                    />
                  </div>
                </div>

                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
