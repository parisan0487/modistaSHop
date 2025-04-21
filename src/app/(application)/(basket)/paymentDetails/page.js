"use client";
import React from "react";

const Page = () => {
  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8 space-y-8">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">ثبت اطلاعات سفارش</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* نام */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">نام</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-700/30 focus:border"
              placeholder="مثلاً: علی"
            />
          </div>

          {/* نام خانوادگی */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">نام خانوادگی</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-700/30 focus:border"
              placeholder="مثلاً: رضایی"
            />
          </div>

          {/* استان */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">استان</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-700/30 focus:border"
              placeholder="مثلاً: تهران"
            />
          </div>

          {/* شهر */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">شهر</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-700/30 focus:border"
              placeholder="مثلاً: ری"
            />
          </div>

          {/* آدرس خیابان */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">آدرس خیابان</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-700/30 focus:border"
              placeholder="مثلاً: خیابان انقلاب، پلاک ۱۲"
            />
          </div>

          {/* تلفن */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">تلفن</label>
            <input
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-700/30 focus:border"
              placeholder="مثلاً: 02112345678"
            />
          </div>

          {/* کد پستی */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">کد پستی</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-700/30 focus:border"
              placeholder="مثلاً: 1234567890"
            />
          </div>

          {/* توضیحات */}
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">توضیحات</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-700/30 focus:border resize-none"
              placeholder="توضیحات اضافی..."
            ></textarea>
          </div>
        </div>

        {/* دکمه ثبت */}
        <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-xl font-semibold text-sm cursor-pointer">
          ثبت اطلاعات
        </button>
      </div>
    </div>
  );
};

export default Page;



