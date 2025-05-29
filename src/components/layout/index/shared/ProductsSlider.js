'use client';
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PCard from '../new-products/PCard';
import PCardSkeleton from '@/components/skeleton/PCardSkeleton';
import useGetFavoriteProducts from '@/hooks/fetchers-hook/useGetFavoriteProducts';

const ProductsSlider = ({ products }) => {
    const { data } = useGetFavoriteProducts();
    return (
        <div className="w-full">
            {!products ? (
                <PCardSkeleton />
            ) : (
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
                    {products.map((product) => (
                        <SwiperSlide key={product._id} className="!flex !justify-center">
                            <PCard key={product.id} {...product} favorites={data} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default ProductsSlider;
