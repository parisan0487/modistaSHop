"use client";

import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import slideToleftI from "assets/slide-arrow-1.svg";
import slideToRithI from "assets/slide-arrow.svg";
import Image from "next/image";

const products = [
  {
    id: "1",
    name: "کفش پیاده‌روی نایک",
    images: ["/images/pic5.jpg", "/images/pic2.jpg", "/images/pic3.jpg", "/images/pic4.jpg"],
  },
  {
    id: "7",
    name: " پیاده‌روی نایک",
    images: ["/images/pic5.jpg", "/images/pic2.jpg", "/images/pic3.jpg", "/images/pic4.jpg"],
  },
  {
    id: "2",
    name: "هدفون بی‌سیم سونی",
    images: ["/images/pic2.jpg", "/images/pic1.jpg", "/images/pic3.jpg", "/images/pic4.jpg"],
  },
  {
    id: "3",
    name: "ژاکت",
    images: ["/images/pic3.jpg", "/images/pic2.jpg", "/images/pic1.jpg", "/images/pic4.jpg"],
  },
  {
    id: "4",
    name: "کاپشن زمستانی مردانه",
    images: ["/images/pic4.jpg", "/images/pic2.jpg", "/images/pic3.jpg", "/images/pic1.jpg"],
  },
  {
    id: "5",
    name: "کیف چرمی دست‌دوز",
    images: ["/images/pic1.jpg", "/images/pic2.jpg", "/images/pic3.jpg", "/images/pic4.jpg"],
  },
  {
    id: "6",
    name: "کیف  دست‌دوز",
    images: ["/images/pic2.jpg", "/images/pic1.jpg", "/images/pic3.jpg", "/images/pic4.jpg"],
  },
];

const VISIBLE_COUNT = 5;

const NewSets = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const handlePrev = () => {
    setCenterIndex((prev) => (prev > 0 ? prev - 1 : products.length - 1));
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev < products.length - 1 ? prev + 1 : 0));
  };

  const getVisibleItems = () => {
    const half = Math.floor(VISIBLE_COUNT / 2);
    const result = [];
    for (let i = -half; i <= half; i++) {
      const index = (centerIndex + i + products.length) % products.length;
      result.push({ ...products[index], position: i, realIndex: index });
    }
    return result;
  };

  return (
    <div className="flex flex-col items-center justify-center text-[#2D2929] min-w-full my-12 bg-[#F7F7F7]">
      <h2 className="text-2xl">
        <span className="font-black">جدیدترین</span> ست‌ها
      </h2>

      <div className="flex items-center justify-center w-1/3 my-6">
        <span className="h-px flex-grow bg-gray-200"></span>
        <span className="mx-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
            <path
              d="M11.5 0C11.5 0 12.1345 5.92243 14.606 8.39396C17.0776 10.8655 23 11.5 23 11.5C23 11.5 17.0776 12.1345 14.606 14.606C12.1345 17.0776 11.5 23 11.5 23C11.5 23 10.8655 17.0776 8.39396 14.606C5.92243 12.1345 0 11.5 0 11.5C0 11.5 5.92243 10.8655 8.39396 8.39396C10.8655 5.92243 11.5 0 11.5 0Z"
              fill="#FD5504"
            ></path>
          </svg>
        </span>
        <span className="h-px flex-grow bg-gray-200"></span>
      </div>

      <div className="relative w-full max-w-[1100px] flex items-center justify-center my-8">
        {/* دکمه قبلی */}
        <button onClick={handlePrev} className="absolute left-4 z-50 p-3 bg-white rounded-xl shadow-md">
          <Image src={slideToleftI} alt="prev" width={24} height={24} />
        </button>

        {/* دکمه بعدی */}
        <button onClick={handleNext} className="absolute right-4 z-50 p-3 bg-white rounded-xl shadow-md">
          <Image src={slideToRithI} alt="next" width={24} height={24} />
        </button>

        {/* نمایش عکس‌ها */}
        <div className="relative flex flex-row items-center justify-center h-[34rem] w-full overflow-hidden ">
          {getVisibleItems().map(({ id, images, name, position, realIndex }) => {
            const zIndex = position === 0 ? 30 : 10;
            const translateX = position * 13;

            return (
              <div
                key={id}
                onClick={() => setCenterIndex(realIndex)}
                className="absolute transition-all duration-500 ease-in-out cursor-pointer "
                style={{
                  transform: `translateX(${translateX}rem)`,
                  zIndex,
                }}
              >
                {position === 0 ? (
                  <ImageSlider items={{ id, images, name }} />
                ) : (
                  <Image
                    src={images[0]}
                    alt={name}
                    width={240}
                    height={544}
                    className="object-cover rounded-3xl w-[12rem] h-[34rem]"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewSets;
