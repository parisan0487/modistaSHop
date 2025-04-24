'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import AdvantageCard from './AdvantageCard';

const advantages = [
    {
        id: 1,
        text: 'خدمات پس از خرید',
        image: 'https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/feture-box-3.png',
    },
    {
        id: 2,
        text: 'ارسال رایگان و سریع',
        image: 'https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/feture-box-2.png',
    },
    {
        id: 3,
        text: 'ضمانت اصالت',
        image: 'https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/feture-box-1.png',
    },
    {
        id: 4,
        text: 'ضمانت بازگشت کالا',
        image: 'https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/feture-box-4.png',
    },
];

function AdvantagesSlider() {
    return (
        <div>
            <Swiper
                modules={[Autoplay]}
                className="rounded-2xl"
                slidesPerView={1}
                spaceBetween={16}
                loop={true}
                autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
                breakpoints={{
                    1480: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                }}
            >
                {advantages.map((advantage) => (
                    <SwiperSlide key={advantage.id}>
                        <AdvantageCard {...advantage} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default AdvantagesSlider;
