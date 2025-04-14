'use client';
import React, { useState } from 'react';
import axios from 'axios';

const AddProductsToDB = () => {
    const [status, setStatus] = useState();

    const products = [
        {
            id: '123',
            name: '',
            price: 539000,
            description: '',
            categories: [],
            producter: 'تهران',
            images: ['/img/', '/img/', '/img/'],
            variants: [
                { color: '', size: '', stock: 1 },
                { color: '', size: '', stock: 2 },
                { color: '', size: '', stock: 4 },
                { color: '', size: '', stock: 6 },
            ],
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
                },
            );

            setStatus('اضافه شد');
        } catch {
            console.error('خطا در افزودن محصولات');
            setStatus('خطا در ارسال محصولات');
        }
    };

    const deleteAllProducts = async () => {
        try {
            await axios.delete('https://back-production-22f1.up.railway.app/api/products/delete-all');
            alert('پاک شد');
        } catch {
            console.error('خطا در حذف تمام محصولات');
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
