'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ImageSlider({ items }) {
    const { id, name, images } = items;
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <Link href={`http://localhost:3000/product/${id}`}>
            <div className="relative w-[15rem] md:w-[25rem] h-[27rem] md:h-[34rem] rounded-3xl overflow-hidden shadow-[0_0_32px_#ffffff]">
                <Image src={images[selectedIndex]} alt={name} className="object-cover" fill />

                <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-black/80 to-transparent z-10" />

                <div className="absolute bottom-4 left-0 right-0 px-4 flex justify-center z-20">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedIndex(idx)}
                            className={`w-15 h-15 md:w-24 md:h-22 rounded-xl mx-1 overflow-hidden cursor-pointer ${idx === selectedIndex ? 'opacity-100' : 'opacity-80'
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`thumb-${idx}`}
                                width={48}
                                height={48}
                                className="object-cover w-full h-full"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    setSelectedIndex(idx);
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* عنوان محصول */}
                <div className="absolute bottom-32 right-4 text-white text-sm py-1 rounded-lg z-20">
                    <h3 className="font-semibold text-xl mx-2">{name}</h3>
                </div>
            </div>
        </Link>
    );
}
