import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const PCardSkeleton = () => {
    const skeletonArray = Array(6).fill(0);
    return (
        <Swiper
            modules={[Autoplay]}
            loop
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            spaceBetween={10}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                700: {
                    slidesPerView: 2,
                },
                1040: {
                    slidesPerView: 3,
                },
                1300: {
                    slidesPerView: 4,
                },
            }}
        >
            {skeletonArray.map((_, index) => (
                <SwiperSlide key={index} className="!flex !justify-center">
                    <div
                        dir="rtl"
                        className="bg-[#F6F6F6] w-[17rem] h-[24rem] p-2 md:h-[30rem] rounded-3xl overflow-hidden border-1 border-transparent animate-pulse"
                    >
                        <div className="w-full h-[14rem] md:h-[18.5rem] bg-gray-300 rounded-2xl" />

                        <div className="flex justify-center gap-2 my-2 min-h-[1.5rem]">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className="w-6 h-6 rounded-full bg-gray-300" />
                            ))}
                        </div>

                        <div className="h-5 bg-gray-300 rounded w-2/3 mx-auto mb-3 mt-1.5 md:mt-3" />

                        <div className="flex flex-row w-full mt-2">
                            <div className="w-full flex items-center gap-2">
                                <div className="size-12 bg-gray-300 rounded-2xl" />
                                <div className="size-12 bg-gray-300 rounded-2xl" />
                            </div>

                            <div className="flex flex-col items-end w-1/2">
                                <div className="h-4 bg-gray-300 rounded w-20 mx-4 my-1" />
                                <div className="h-5 bg-gray-300 rounded w-24 mx-4 mt-2" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PCardSkeleton;
