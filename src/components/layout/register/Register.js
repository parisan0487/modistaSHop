'use client';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from '@/providers/AuthContext';

export default function Register() {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();

    const validateName = (name) => /^[\u0600-\u06FF\sA-Za-z]{3,}$/.test(name);
    const validatePhone = (phone) => /^09\d{9}$/.test(phone);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isLogin) {
            if (!validateName(name)) {
                toast('❗نام باید حداقل ۳ کاراکتروفقط شامل حروف باشد ');
                return;
            }

            if (!validatePhone(phone)) {
                toast('❗شماره تلفن باید ۱۱ رقم و با ۰۹ شروع شود');
                return;
            }
        }

        const userData = isLogin ? { phone, password } : { name, phone, password };

        try {
            const endpoint = isLogin
                ? 'https://modistaback.onrender.com/api/users/login'
                : 'https://modistaback.onrender.com/api/users/register';

            const res = await axios.post(endpoint, userData, {
                headers: { 'Content-Type': 'application/json' },
            });

            localStorage.setItem('token', res.data.token);

            toast.success(isLogin ? 'ورود موفقیت‌آمیز بود' : 'ثبت‌نام موفقیت‌آمیز بود');

            setName('');
            setPhone('');
            setPassword('');

            login(res.data.token);
            setTimeout(() => {
                window.location.pathname = '/';
            }, 1000);
        } catch (err) {
            const errorMessage =
                typeof err.response?.data === 'string'
                    ? err.response.data
                    : err.response?.data?.message || 'خطایی رخ داده است. لطفاً دوباره تلاش کنید';

            toast.error(errorMessage);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 font-gandom">
            <div className="flex items-center space-x-2 mb-6">
                <span className={`text-lg font-semibold ${isLogin ? 'text-orange-600' : 'text-gray-500'}`}>ورود</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={!isLogin}
                        onChange={() => setIsLogin(!isLogin)}
                    />
                    <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-orange-600 transition relative">
                        <div
                            className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform ${
                                isLogin ? 'left-1' : 'translate-x-6'
                            }`}
                        ></div>
                    </div>
                </label>
                <span className={`text-lg font-semibold ${!isLogin ? 'text-orange-600' : 'text-gray-500'}`}>
                    ثبت نام
                </span>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 text-center border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    {isLogin ? 'ورود به حساب' : 'ایجاد حساب کاربری'}
                </h2>
                <form>
                    {!isLogin && (
                        <div className="mb-4">
                            <input
                                type="text"
                                className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 text-end"
                                placeholder="نام کامل"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <input
                            type="text"
                            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 text-end"
                            placeholder="شماره تلفن (مثال: 09123456789)"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 text-end"
                            placeholder="رمز عبور"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className="w-full bg-orange-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-orange-700 transition"
                        onClick={handleSubmit}
                    >
                        {isLogin ? 'بزن بریم' : 'ثبت نام'}
                    </button>
                </form>
            </div>
        </div>
    );
}
