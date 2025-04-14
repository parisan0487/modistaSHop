"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import LatestProductCard from "./LatestProductCard";

import "swiper/css";
import "swiper/css/navigation";

const latestProducts = [
  {
    id: 1,
    image: "https://mehdibagheridev.ir/modista/wp-content/uploads/2025/03/category-sample-2.png",
    text: "لباس مردانه",
  },
  {
    id: 2,
    image: "https://mehdibagheridev.ir/modista/wp-content/uploads/2025/03/category-sample-1.png",
    text: "لباس ست",
  },
  {
    id: 3,
    image: "https://mehdibagheridev.ir/modista/wp-content/uploads/2025/03/category-sample-5-1.png",
    text: "بافت زنانه",
  },
  { id: 4, image: "https://mehdibagheridev.ir/modista/wp-content/uploads/2025/03/category-sample-4.png", text: "کفش" },
  {
    id: 5,
    image: "https://mehdibagheridev.ir/modista/wp-content/uploads/2025/03/category-sample-5-1.png",
    text: "کیف",
  },
  {
    id: 6,
    image: "https://mehdibagheridev.ir/modista/wp-content/uploads/2025/03/category-sample-1.png",
    text: "لباس بچگانه",
  },
  {
    id: 7,
    image: "https://mehdibagheridev.ir/modista/wp-content/uploads/2025/03/category-sample-2.png",
    text: "لباس پسرانه",
  },
  {
    id: 8,
    image: "https://mehdibagheridev.ir/modista/wp-content/uploads/2025/03/category-sample-3.png",
    text: "لباس دخترانه",
  },
  {
    id: 9,
    image: "https://mehdibagheridev.ir/modista/wp-content/uploads/2025/03/category-sample-1.png",
    text: "لباس زنانه",
  },
];

function LatestProductSlider() {
  return (
    <div className="flex gap-4">
      <button className="latest-product-slider-next-slide hidden md:flex-center h-37 min-w-16 bg-white/20 rounded-2xl cursor-pointer">
        <img
          src="https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/10-1.svg"
          className="rotate-180"
          alt="arrow"
        />
      </button>
      <Swiper
        modules={[Autoplay, Navigation]}
        className="rounded-2xl"
        slidesPerView={2}
        spaceBetween={16}
        loop={true}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        navigation={{
          nextEl: ".latest-product-slider-next-slide",
          prevEl: ".latest-product-slider-prev-slide",
        }}
        breakpoints={{
          1480: {
            slidesPerView: 6,
          },
          1280: {
            slidesPerView: 4,
          },
          720: {
            slidesPerView: 3,
          },
        }}
      >
        {latestProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <LatestProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="latest-product-slider-prev-slide hidden md:flex-center h-37 min-w-16 bg-white/20 rounded-2xl cursor-pointer">
        <img src="https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/10-1.svg" alt="arrow" />
      </button>
    </div>
  );
}

export default LatestProductSlider;
