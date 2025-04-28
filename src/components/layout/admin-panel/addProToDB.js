'use client';
import React, { useState } from 'react';
import axios from 'axios';

const AddProductsToDB = () => {
    const [status, setStatus] = useState();

    const products = [
        {
            id: '123',
            name: 'کیف وزشی مدل مارتن',
            discount: 97000,
            price: 697000,
            description: 'کیف وزشی با طراحی زیبا',
            categories: ['کیف', 'ورزشی'],
            producter: 'تهران',
            images: [
                '/assets/images/bag-1.jpg',
                '/assets/images/bag-2.jpg',
                '/assets/images/bag-3.jpg',
                '/assets/images/bag-2.jpg',
                '/assets/images/pic3.jpg',
            ],
            variants: [{ color: 'مشکی', size: 'xl', stock: 10 }],
        },
        {
            id: '124',
            name: 'ست بلوز و شلوار زنانه',
            price: 2150000,
            description: 'ست بلوز و شلوار زنانه با تخفیف ویژه',
            categories: ['لباس زنانه', 'ست'],
            producter: 'اصفهان',
            images: [
                '/assets/images/bloz-1.jpg',
                '/assets/images/bloz-2.jpg',
                '/assets/images/bloz-3.jpg',
                '/assets/images/bloz-4.jpg',
                '/assets/images/bloz-1.jpg',
            ],
            variants: [{ color: 'مشکی', size: 'xl', stock: 15 }],
        },
        {
            id: '125',
            name: 'کاپشن زنانه مدل کاد',
            price: 1790000,
            discount: 97000,
            description: 'کاپشن زنانه مدل کاد با تخفیف 20%',
            categories: ['کاپشن', 'زنانه', 'ُست'],
            producter: 'تهران',
            images: [
                '/assets/images/capshan-1.jpg',
                '/assets/images/capshan-2.jpg',
                '/assets/images/capshan-3.jpg',
                '/assets/images/capshan-4.jpg',
                '/assets/images/capshan-5.jpg',
            ],
            variants: [{ color: 'قرمز', size: '2xl', stock: 10 }],
        },
        {
            id: '126',
            name: 'کاپشن زمستانی مدل تالای',
            price: 950000,
            discount: 97000,
            description: 'کاپشن زمستانی مدل تالای با تخفیف 25%',
            categories: ['کاپشن', 'زمستانی'],
            producter: 'مشهد',
            images: [
                '/assets/images/talay-3.jpg',
                '/assets/images/talay-2.jpg',
                '/assets/images/talay-1.jpg',
                '/assets/images/talay-4.jpg',
                '/assets/images/talay-1.jpg',
            ],
            variants: [{ color: 'ابی', size: 'md', stock: 5 }],
        },
        {
            id: '127',
            name: 'کفش ورزشی',
            price: 1240000,
            discount: 77000,
            description: 'کفش ورزشی برای فعالیت‌های روزمره',
            categories: ['کفش', 'ورزشی'],
            producter: 'تهران',
            images: [
                '/assets/images/shoe-4.webp',
                '/assets/images/shoe-2.jpg',
                '/assets/images/shoe-1.jpg',
                '/assets/images/shoe-3.jpg',
                '/assets/images/shoe-5.jpg',
            ],
            variants: [{ color: 'سفید', size: 'sm', stock: 20 }],
        },
        {
            id: '128',
            name: 'کش باف زنانه',
            price: 1100000,
            description: 'کش باف زنانه با طرح زیبا',
            categories: ['لباس زنانه', 'ست'],
            producter: 'تهران',
            images: ['/assets/images/s.jpg'],
            variants: [{ color: 'زرد', size: 'md', stock: 15 }],
        },
        {
            id: '129',
            name: 'شلوار راحتی',
            price: 1100000,
            discount: 100000,
            description: 'شلوار راحتی با کیفیت بالا',
            categories: ['شلوار', 'راحتی'],
            producter: 'اصفهان',
            images: ['/assets/images/s1.jpg'],
            variants: [{ color: 'ابی', size: 'lg', stock: 10 }],
        },
        {
            id: '130',
            name: 'پیراهن مردانه',
            price: 904000,
            discount: 287000,
            description: 'پیراهن مردانه با تخفیف ویژه',
            categories: ['لباس مردانه', 'پیراهن'],
            producter: 'تهران',
            images: ['/assets/images/s2.jpg'],
            variants: [{ color: 'آبی', size: 'xl', stock: 8 }],
        },
        {
            id: '131',
            name: 'شلوار راحتی بچه گانه',
            price: 730000,
            description: 'شلوار راحتی بچه گانه با طرح خاص',
            categories: ['لباس بچه گانه', 'شلوار'],
            producter: 'مشهد',
            images: ['/assets/images/s3.jpg'],
            variants: [{ color: 'سبز', size: 's', stock: 12 }],
        },
        {
            id: '132',
            name: 'لباس',
            price: 100000,
            description: 'لباس با تخفیف ویژه 1%',
            categories: ['لباس'],
            producter: 'تهران',
            images: ['/assets/images/s4.png'],
            variants: [{ color: 'قرمز', size: 'm', stock: 5 }],
        },
        {
            id: '133',
            name: 'لباس مردانه',
            price: 560000,
            discount: 97000,
            description: 'لباس مردانه با تخفیف 7%',
            categories: ['لباس مردانه'],
            producter: 'اصفهان',
            images: ['/assets/images/s5.png'],
            variants: [{ color: 'خاکستری', size: 'xl', stock: 10 }],
        },
        {
            id: '134',
            name: 'کش باف زنانه',
            price: 750000,
            description: 'کش باف زنانه با تخفیف 25%',
            categories: ['لباس زنانه', 'کش باف'],
            producter: 'تهران',
            images: ['/assets/images/s6.jpg'],
            variants: [{ color: 'مشکی', size: 'lg', stock: 15 }],
        },
        {
            id: '135',
            name: 'لباس',
            price: 750000,
            discount: 203000,
            description: 'لباس با تخفیف 25%',
            categories: ['لباس', 'ُست'],
            producter: 'اصفهان',
            images: ['/assets/images/s7.png'],
            variants: [{ color: 'سبز', size: 'm', stock: 7 }],
        },
        {
            id: '136',
            name: 'ژاکت زنانه',
            price: 320000,
            discount: 97000,
            description: 'ژاکت زنانه با تخفیف 19%',
            categories: ['لباس زنانه', 'ژاکت'],
            producter: 'تهران',
            images: ['/assets/images/s8.jpg'],
            variants: [{ color: 'زرد', size: 'md', stock: 10 }],
        },
        {
            id: '137',
            name: 'کاپشن بادی',
            price: 440000,
            description: 'کاپشن بادی با تخفیف 17%',
            categories: ['کاپشن', 'بادی'],
            producter: 'مشهد',
            images: ['/assets/images/s9.png'],
            variants: [{ color: 'سفید', size: 'lg', stock: 5 }],
        },
        {
            id: '138',
            name: 'پیراهن مردانه',
            price: 1100000,
            discount: 157000,
            description: 'پیراهن مردانه با تخفیف 5%',
            categories: ['لباس مردانه', 'پیراهن'],
            producter: 'اصفهان',
            images: ['/assets/images/s10.jpg'],
            variants: [{ color: 'سبز', size: 'xl', stock: 10 }],
        },
        {
            id: '139',
            name: 'کش باف زنانه',
            price: 1100000,
            description: 'کش باف زنانه با تخفیف 5%',
            categories: ['لباس زنانه', 'کش باف'],
            producter: 'تهران',
            images: ['/assets/images/s.jpg'],
            variants: [{ color: 'قرمز', size: 'md', stock: 15 }],
        },
        {
            id: '140',
            name: 'لباس پشمی',
            price: 1100000,
            discount: 57000,
            description: 'لباس پشمی با تخفیف 11%',
            categories: ['لباس'],
            producter: 'مشهد',
            images: ['/assets/images/s11.jpg'],
            variants: [{ color: 'ابی', size: '2xl', stock: 10 }],
        },
        {
            id: '141',
            name: 'مانتور زنانه',
            price: 770000,
            description: 'مانتور زنانه با تخفیف 14%',
            categories: ['لباس زنانه', 'ست'],
            producter: 'تهران',
            images: ['/assets/images/s12.jpg'],
            variants: [{ color: 'ابی', size: 'lg', stock: 12 }],
        },
        {
            id: '142',
            name: 'هودی زنانه و مردانه',
            price: 970000,
            discount: 27000,
            description: 'هودی زنانه و مردانه با تخفیف 33%',
            categories: ['لباس زنانه', 'لباس مردانه', 'هودی'],
            producter: 'اصفهان',
            images: ['/assets/images/s13.png'],
            variants: [{ color: 'سفید', size: 'xl', stock: 15 }],
        },
        {
            id: '143',
            name: 'سر همی بچگانه',
            price: 330000,
            description: 'سر همی بچگانه با تخفیف 14%',
            categories: ['لباس بچگانه'],
            producter: 'تهران',
            images: ['/assets/images/s14.jpg'],
            variants: [{ color: 'سفید', size: 'xs', stock: 8 }],
        },
        {
            id: '144',
            name: 'هودی بچه گانه',
            price: 42000,
            description: 'هودی بچه گانه با تخفیف 4%',
            categories: ['لباس بچه گانه'],
            producter: 'اصفهان',
            images: ['/assets/images/s16.jpg'],
            variants: [{ color: 'سبز', size: 's', stock: 12 }],
        },
        {
            id: '145',
            name: 'لباس بچه گانه',
            price: 30000,
            discount: 7000,
            description: 'لباس بچه گانه با تخفیف ویژه',
            categories: ['لباس بچه گانه'],
            producter: 'تهران',
            images: ['/assets/images/s17.jpg'],
            variants: [{ color: 'سفید', size: 'xs', stock: 10 }],
        },
        {
            id: '146',
            name: 'ژاکت یقه گرد',
            price: 600000,
            description: 'ژاکت یقه گرد با تخفیف ویژه',
            categories: ['لباس', 'ست'],
            producter: 'اصفهان',
            images: ['/assets/images/s18.jpg'],
            variants: [{ color: 'مشکی', size: 'm', stock: 7 }],
        },
    ];

    const addProducts = async () => {
        setStatus('در حال ارسال');
        try {
            const productsToSend = products.map((product) => ({
                ...product,
            }));

            await axios.post(
                'https://back-production-22f1.up.railway.app/api/products/add-multiple',
                { products: productsToSend },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            setStatus('اضافه شد');
        } catch {
            setStatus('خطا در ارسال محصولات');
        }
    };

    const deleteAllProducts = async () => {
        try {
            await axios.delete('https://back-production-22f1.up.railway.app/api/products/delete-all');
            alert('پاک شد');
        } catch {
            alert('خطا در حذف محصولات');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4 p-6">
            <button
                onClick={addProducts}
                className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-all"
            >
                افزودن محصولات
            </button>
            {status && <p className="text-gray-700 font-semibold">{status}</p>}

            <div className="flex flex-col items-center justify-center gap-4 p-6">
                <button
                    onClick={deleteAllProducts}
                    className="px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-lg transition-all"
                >
                    حذف تمام محصولات
                </button>
            </div>
        </div>
    );
};

export default AddProductsToDB;
