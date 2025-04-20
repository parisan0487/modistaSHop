import Image from 'next/image';
import Link from 'next/link';

function InstagramPage() {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end gap-x-16" dir="rtl">
            <div className="space-y-8 lg:mb-12">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 23 23" fill="none">
                            <path
                                id="Star 1"
                                d="M11.5 0C11.5 0 12.1345 5.92243 14.606 8.39396C17.0776 10.8655 23 11.5 23 11.5C23 11.5 17.0776 12.1345 14.606 14.606C12.1345 17.0776 11.5 23 11.5 23C11.5 23 10.8655 17.0776 8.39396 14.606C5.92243 12.1345 0 11.5 0 11.5C0 11.5 5.92243 10.8655 8.39396 8.39396C10.8655 5.92243 11.5 0 11.5 0Z"
                                fill="#FD5504"
                            />
                        </svg>
                        <h3 className="font-bold text-2xl text-gray-800">اینستاگرام مُدیستا</h3>
                    </div>
                    <p className="text-gray-600">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
                            <g id="Broken / Essentional, UI / Check Circle">
                                <path
                                    id="Vector"
                                    d="M6.375 9.875L7.875 11.375L11.625 7.625"
                                    stroke="#FD5504"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    id="Vector_2"
                                    d="M5.25 3.00337C6.35315 2.36523 7.63392 2 9 2C13.1421 2 16.5 5.35786 16.5 9.5C16.5 13.6421 13.1421 17 9 17C4.85786 17 1.5 13.6421 1.5 9.5C1.5 8.13392 1.86523 6.85315 2.50337 5.75"
                                    stroke="#FD5504"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                />
                            </g>
                        </svg>
                        لورم ایپسوم متن ساختگی
                    </div>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
                            <g id="Broken / Essentional, UI / Check Circle">
                                <path
                                    id="Vector"
                                    d="M6.375 9.875L7.875 11.375L11.625 7.625"
                                    stroke="#FD5504"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    id="Vector_2"
                                    d="M5.25 3.00337C6.35315 2.36523 7.63392 2 9 2C13.1421 2 16.5 5.35786 16.5 9.5C16.5 13.6421 13.1421 17 9 17C4.85786 17 1.5 13.6421 1.5 9.5C1.5 8.13392 1.86523 6.85315 2.50337 5.75"
                                    stroke="#FD5504"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                />
                            </g>
                        </svg>
                        لورم ایپسوم متن ساختگی
                    </div>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19" fill="none">
                            <g id="Broken / Essentional, UI / Check Circle">
                                <path
                                    id="Vector"
                                    d="M6.375 9.875L7.875 11.375L11.625 7.625"
                                    stroke="#FD5504"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    id="Vector_2"
                                    d="M5.25 3.00337C6.35315 2.36523 7.63392 2 9 2C13.1421 2 16.5 5.35786 16.5 9.5C16.5 13.6421 13.1421 17 9 17C4.85786 17 1.5 13.6421 1.5 9.5C1.5 8.13392 1.86523 6.85315 2.50337 5.75"
                                    stroke="#FD5504"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                />
                            </g>
                        </svg>
                        لورم ایپسوم متن ساختگی
                    </div>
                </div>
                <Link
                    href="/about-us"
                    className="w-max flex items-center gap-2 bg-orange-500 text-white py-2.5 px-4 rounded-xl"
                >
                    <div className="flex flex-col">
                        <span className="font-normal">برو به</span>
                        <span className="font-bold">پیج اینستاگرام</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <g id="vuesax/bold/instagram">
                            <g id="instagram">
                                <path
                                    id="Vector"
                                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
                                    fill="white"
                                />
                            </g>
                        </g>
                    </svg>
                </Link>
            </div>
            <div className="relative top-16 lg:top-32">
                <Image src="/assets/images/aboutus-phone.jpg" alt="phone" width={250} height={500}></Image>
            </div>
        </div>
    );
}

export default InstagramPage;
