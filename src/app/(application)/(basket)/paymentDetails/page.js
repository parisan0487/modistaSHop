'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';

const schema = z.object({
    firstName: z.string().min(2, 'نام باید حداقل ۲ کاراکتر باشد'),
    lastName: z.string().min(2, 'نام خانوادگی باید حداقل ۲ کاراکتر باشد'),
    province: z.string().min(2, 'استان الزامی است'),
    city: z.string().min(2, 'شهر الزامی است'),
    address: z.string().min(5, 'آدرس باید کامل‌تر باشد'),
    phone: z.string().min(10, 'شماره تلفن معتبر نیست'),
    postalCode: z.string().min(10, 'کد پستی باید ۱۰ رقم باشد'),
    description: z.string().optional(),
});

const InputField = ({ label, name, register, error, type = 'text', placeholder, textarea }) => (
    <div className={textarea ? 'sm:col-span-2' : ''}>
        <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
        {textarea ? (
            <textarea
                {...register(name)}
                rows={4}
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-700/30 focus:border resize-none"
            />
        ) : (
            <input
                {...register(name)}
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-700/30 focus:border"
            />
        )}
        {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
);

const Page = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(schema) });

    const onSubmit = (data) => {
        //fetch to server
    };

    return (
        <div dir="rtl" className="min-h-screen flex items-center justify-center py-10">
            <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8 space-y-8">
                <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">ثبت اطلاعات سفارش</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField
                        label="نام"
                        name="firstName"
                        register={register}
                        error={errors.firstName}
                        placeholder="مثلاً: علی"
                    />
                    <InputField
                        label="نام خانوادگی"
                        name="lastName"
                        register={register}
                        error={errors.lastName}
                        placeholder="مثلاً: رضایی"
                    />
                    <InputField
                        label="استان"
                        name="province"
                        register={register}
                        error={errors.province}
                        placeholder="مثلاً: تهران"
                    />
                    <InputField
                        label="شهر"
                        name="city"
                        register={register}
                        error={errors.city}
                        placeholder="مثلاً: ری"
                    />
                    <InputField
                        label="آدرس خیابان"
                        name="address"
                        register={register}
                        error={errors.address}
                        placeholder="مثلاً: خیابان انقلاب، پلاک ۱۲"
                    />
                    <InputField
                        label="تلفن"
                        name="phone"
                        register={register}
                        error={errors.phone}
                        type="tel"
                        placeholder="مثلاً: 02112345678"
                    />
                    <InputField
                        label="کد پستی"
                        name="postalCode"
                        register={register}
                        error={errors.postalCode}
                        placeholder="مثلاً: 1234567890"
                    />
                    <InputField
                        label="توضیحات"
                        name="description"
                        register={register}
                        error={errors.description}
                        placeholder="توضیحات اضافی..."
                        textarea
                    />

                    <div className="sm:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-xl font-semibold text-sm cursor-pointer"
                        >
                            رفتن به درگاه پرداخت
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
