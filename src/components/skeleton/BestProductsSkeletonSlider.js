'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

const BestProductsSkeletonSlider = () => {
    const skeletonArray = Array(6).fill(0);
    
    return (
        <Swiper
            spaceBetween={12}
            loop
            grabCursor
            className="w-full"
            breakpoints={{
                0: { slidesPerView: 1 },
                600: { slidesPerView: 2 },
                1300: { slidesPerView: 3 },
            }}
        >
            {skeletonArray.map((_, index) => (
                <SwiperSlide key={index}>
                    <div className="w-full max-w-xs mx-auto h-[280px] rounded-2xl p-4 bg-[#f7f7f7] flex flex-col justify-between cursor-pointer animate-pulse">
                        <div className="w-full h-[200px] bg-gray-200 rounded-xl" />
                        <div className="flex justify-between items-center mt-4" dir="rtl">
                            <div className="w-8 h-8 bg-gray-200 rounded-xl" />
                            <div className="flex flex-col items-end gap-2">
                                <div className="w-20 h-3 bg-gray-200 rounded" />
                                <div className="w-24 h-4 bg-gray-300 rounded" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BestProductsSkeletonSlider;
