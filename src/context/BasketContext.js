'use client';
import { createContext, useState, useEffect } from 'react';

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            title: 'تی شرت یقه گرد آستین کوتاه',
            price: 1_700_000,
            image: 'https://mehdibagheridev.ir/modista/wp-content/uploads/2025/03/product-man-sample-7-300x300.jpg',
            quantity: 1,
        },
        {
            id: 2,
            title: 'تی شرت یقه گرد آستین کوتاه',
            price: 1_700_000,
            image: 'https://mehdibagheridev.ir/modista/wp-content/uploads/2025/03/product-man-sample-7-300x300.jpg',
            quantity: 1,
        },
    ]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(products.reduce((acc, item) => acc + item.price * item.quantity, 0));
    }, [products]);

    const updateQuantity = (id, value) => {
        setProducts((products) =>
            products.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(0, item.quantity + value) }
                    : item
            )
        );
    };

    return (
        <BasketContext.Provider value={{ updateQuantity, products, totalPrice }}>
            {children}
        </BasketContext.Provider>
    );
};

export default BasketProvider;
