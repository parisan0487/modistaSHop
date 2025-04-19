import PCard from '@/components/layout/index/new-products/PCard';
import React from 'react';

const products = [
    {
        id: '3',
        name: 'هودی ',
        images: ['/assets/images/hoodie-2.jpg', '/assets/images/hoodie-1.jpg', '/assets/images/hoodie-3.jpg'],
        price: 1790000,
        discountPercent: 20,
        finalPrice: 1432000,
    },
    {
        id: '1',
        name: ' کیف وزشی مدل مارتن',
        images: [
            '/assets/images/bag-1.jpg',
            '/assets/images/bag-2.jpg',
            '/assets/images/bag-3.jpg',
            '/assets/images/bag-2.jpg',
            '/assets/images/pic3.jpg',
        ],
        price: 820000,
        discountPercent: 15,
        finalPrice: 697000,
    },
    {
        id: '2',
        name: ' ست بلوز و شلوار زنانه',
        images: [
            '/assets/images/bloz-1.jpg',
            '/assets/images/bloz-2.jpg',
            '/assets/images/bloz-3.jpg',
            '/assets/images/bloz-4.jpg',
            '/assets/images/bloz-1.jpg',
        ],
        price: 2150000,
        discountPercent: 10,
        finalPrice: 1935000,
    },

    {
        id: '4',
        name: 'هودی ',
        images: ['/assets/images/hoodie-1.jpg', '/assets/images/hoodie-2.jpg', '/assets/images/hoodie-3.jpg'],
        price: 950000,
        discountPercent: 25,
        finalPrice: 712000,
    },
    {
        id: '5',
        name: 'ژاکت ',
        images: [
            '/assets/images/jackets-1.jpg',
            '/assets/images/jackets-2.jpg',
            '/assets/images/jackets-3.jpg',
            '/assets/images/jackets-4.jpg',
            '/assets/images/jackets-2.jpg',
        ],
        price: 2450000,
        discountPercent: 10,
        finalPrice: 1935000,
    },
    {
        id: '5',
        name: 'ژاکت ',
        images: [
            '/assets/images/jackets-1.jpg',
            '/assets/images/jackets-2.jpg',
            '/assets/images/jackets-3.jpg',
            '/assets/images/jackets-4.jpg',
            '/assets/images/jackets-2.jpg',
        ],
        price: 2450000,
        discountPercent: 10,
        finalPrice: 1935000,
    },
    {
        id: '5',
        name: 'ژاکت ',
        images: [
            '/assets/images/jackets-1.jpg',
            '/assets/images/jackets-2.jpg',
            '/assets/images/jackets-3.jpg',
            '/assets/images/jackets-4.jpg',
            '/assets/images/jackets-2.jpg',
        ],
        price: 2450000,
        discountPercent: 10,
        finalPrice: 1935000,
    },
];

const page = () => {
    return (
        <div className="container flex flex-wrap justify-end max-[1024px]:justify-center gap-3 py-10">
            {products.map((product) => (
                <PCard key={product.id} data={product} deleteBtn={true} />
            ))}
        </div>
    );
};

export default page;
