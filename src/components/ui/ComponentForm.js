"use client"

import React, { useState } from "react"


export default function CommentForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: "",
    })

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        comment: false,
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: false,
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {
            name: !formData.name.trim(),
            email: !formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
            comment: !formData.comment.trim(),
        }

        setErrors(newErrors)

        if (!Object.values(newErrors).some(Boolean)) {
            alert("پیام شما با موفقیت ارسال شد")
            setFormData({ name: "", email: "", comment: "" })
        }
    }

    return (
        <div className="w-full mt-3" dir="rtl">
            <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="name" className="text-sm font-medium text-[#C2C3C4]">
                                    نام <span className="text-red-500">*</span>
                                </label>
                                {errors.name && <span className="text-red-500 text-xs">این فیلد الزامی است</span>}
                            </div>
                            <input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`${errors.name ? "border-red-500" : ""} bg-[#FFFFFF] w-full h-10 rounded-xl resize-none focus:outline-none p-3 text-sm text-[#7C8286]`}
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="email" className="text-sm font-medium text-[#C2C3C4]">
                                    ایمیل <span className="text-red-500">*</span>
                                </label>
                                {errors.email && <span className="text-red-500 text-xs">ایمیل معتبر وارد کنید</span>}
                            </div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`${errors.email ? "border-red-500" : ""} bg-[#FFFFFF] w-full h-10 rounded-xl resize-none focus:outline-none p-3 text-sm text-[#7C8286]`}
                            />
                        </div>
                    </div>
                    <div className="space-y-2 w-full">
                        <div className="flex justify-between">
                            <label htmlFor="comment" className="text-sm font-medium text-[#C2C3C4]">
                                دیدگاه شما <span className="text-red-500">*</span>
                            </label>
                            {errors.comment && <span className="text-red-500 text-xs">این فیلد الزامی است</span>}
                        </div>

                        <div className="relative w-full">
                            <textarea
                                id="comment"
                                name="comment"
                                rows={6}
                                value={formData.comment}
                                onChange={handleChange}
                                className={` w-full p-3 bg-[#FFFFFF]  rounded-xl resize-none focus:outline-none text-sm text-[#7C8286] ${errors.comment ? "border-red-500" : ""
                                    }`}
                            />
                            <button
                                type="submit"
                                className="absolute bottom-4 left-4 bg-[#F0F0F0] py-2 px-6 rounded-xl cursor-pointer text-sm"
                            >
                                ارسال پیام
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
