'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function ProfileComp() {
    const [showOrdersModal, setShowOrdersModal] = useState(false);
    const [showEditProfileModal, setShowEditProfileModal] = useState(false);
    const [user, setUser] = useState(null);
    const [editName, setEditName] = useState('');
    const [editPhone, setEditPhone] = useState('');
    const router = useRouter();

    const { logout } = useAuth();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    return;
                }

                const response = await axios.get('https://back-production-22f1.up.railway.app/api/users', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setUser(response.data);
            } catch (error) {
            }
        };

        fetchUserData();
    }, []);

    const handleUpdateProfile = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                return;
            }

            const response = await axios.put(
                'https://back-production-22f1.up.railway.app/api/users/update',
                { name: editName, phone: editPhone },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            setUser(response.data);
            setShowEditProfileModal(false);
            setEditName('');
            setEditPhone('');
        } catch (error) {
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        toast.success('خروج موفقیت‌آمیز بود');
        logout();
        router.push('/');
    };

    return (
        <div className="p-8 font-gandom overflow-hidden bg-gradient-to-br .from-gray-100  via-orange-300 to-gray-300">
            <div className="min-h-screen p-8 text-white flex justify-center items-center mt-12">
                <div className="max-w-4xl w-full p-6 rounded-lg shadow-lg text-gray-900 bg-white/20 backdrop-blur-md border border-white/30 text-right">
                    <h2 className="text-4xl font-bold text-center mb-6 text-black">حساب کاربری</h2>

                    <div className="flex items-center mb-8 justify-end">
                        <div className="mr-5 mt-4 text-right">
                            <h3 className="text-3xl text-white">{user?.name}</h3>
                            <p className="text-black">{user?.phone}</p>
                        </div>
                        <div className="w-24 h-24 bg-gray-300 rounded-full flex justify-center items-center text-3xl font-bold text-gray-700">
                            <Image
                                src={'https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/login-user.svg'}
                                alt={'userImage'}
                                width={80}
                                height={60}
                            />
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <button
                            onClick={() => setShowEditProfileModal(true)}
                            className="bg-orange-500 px-6 py-2 rounded-full text-white hover:bg-orange-600"
                        >
                            ویرایش پروفایل
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white/20 p-6 rounded-lg shadow-lg border border-white/30 text-white text-right">
                            <h3 className="text-2xl font-semibold mb-4">علاقه‌مندی‌ها</h3>
                            <p className="text-gray-500">مشاهده علاقه‌مندی‌های شما</p>
                            <Link href="/">
                                <button className="mt-4 bg-amber-500 px-6 py-2 rounded-full text-white hover:bg-amber-600 w-full">
                                    مشاهده علاقه‌مندی‌ها
                                </button>
                            </Link>
                        </div>

                        <div className="bg-white/20 p-6 rounded-lg shadow-lg border border-white/30 text-white text-right">
                            <h3 className="text-2xl font-semibold mb-4">سبد خرید</h3>
                            <p className="text-gray-500">مشاهده سبد خرید شما</p>
                            <Link href="/">
                                <button className="mt-4 bg-orange-500 px-6 py-2 rounded-full text-white hover:bg-orange-600 w-full">
                                    مشاهده سبد خرید
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white/20 p-6 rounded-lg shadow-lg border border-white/30 text-white text-right mt-8">
                        <h3 className="text-2xl font-semibold mb-4">سفارشات من</h3>
                        <button
                            className="bg-amber-600 px-6 py-2 rounded-full text-white hover:bg-amber-700 w-full"
                            onClick={() => setShowOrdersModal(true)}
                        >
                            مشاهده سفارشات
                        </button>
                    </div>

                    <div className="bg-white/20 p-6 rounded-lg shadow-lg border border-white/30 text-white mt-8 text-center">
                        <h3 className="text-2xl font-semibold mb-4">خروج از حساب</h3>
                        <p className="text-gray-500 mb-4">آیا مطمئن هستید؟</p>
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 px-6 py-2 rounded-full text-white hover:bg-red-700 w-full"
                        >
                            خروج از حساب
                        </button>
                    </div>
                </div>

                {showOrdersModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 animate-fade-in font-gandom">
                        <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 p-8 rounded-3xl shadow-2xl w-[30rem] text-center border border-white/20">
                            <h3 className="text-2xl font-semibold mb-4 text-white flex items-center justify-center gap-2">
                                <span>📦</span> سفارشات من
                            </h3>

                            <p className="text-gray-200 text-lg bg-white/20 px-4 py-2 rounded-lg inline-block">
                                هنوز هیچ سفارشی ثبت نکرده‌اید 🤷‍♂️
                            </p>

                            <div className="mt-6">
                                <button
                                    onClick={() => setShowOrdersModal(false)}
                                    className="bg-white text-orange-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mx-auto"
                                >
                                    👍 فهمیدم
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {showEditProfileModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 animate-fade-in font-gandom">
                        <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 p-8 rounded-3xl shadow-2xl w-[30rem] text-center">
                            <h2 className="text-2xl font-bold mb-4 text-white">ویرایش پروفایل</h2>

                            <input
                                type="text"
                                className="border border-white/50 p-2 w-full mb-4 backdrop-blur-md bg-white/20 text-right text-white placeholder-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                                placeholder="نام جدید"
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                            />
                            <input
                                type="text"
                                className="border border-white/50 p-2 w-full mb-4 backdrop-blur-md bg-white/20 text-right text-white placeholder-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                                placeholder="شماره تلفن جدید"
                                value={editPhone}
                                onChange={(e) => setEditPhone(e.target.value)}
                            />

                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={() => setShowEditProfileModal(false)}
                                    className="bg-gray-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-500 transition-all duration-300"
                                >
                                    انصراف
                                </button>
                                <button
                                    onClick={handleUpdateProfile}
                                    className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300"
                                >
                                    ذخیره تغییرات
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
