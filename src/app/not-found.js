import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/layout/shared/footer/Footer';
import Navbar from '@/components/layout/shared/navbar/Navbar';
import Breadcrumb from '@/components/ui/Breadcrumb';
import BackToLastPageBtn from '@/components/layout/error-pages/BackToLastPageBtn';

function Notfound() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Breadcrumb
                    items={[
                        { text: 'صفحه اصلی', href: '/' },
                        { text: 'صفحه پیدا نشد', href: '#' },
                    ]}
                />
                <div className="flex flex-col gap-y-16 justify-center items-center">
                    <h2 className="text-5xl font-medium text-gray-800">صفحه مورد نظر پیدا نشد</h2>
                    <Image src={'assets/images/not-found.svg'} alt="not found" width={400} height={400} />
                    <div className="flex gap-4">
                        <BackToLastPageBtn />
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-lg bg-orange-500 text-white font-medium py-2.5 px-4 rounded-xl"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <g id="9">
                                    <path
                                        id="Union"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M20.5713 3.42859H6.857V3.42882L6.857 3.42881L3.50628 6.79171L8.42978 11.6974L3.69217 15.5605V20.5714H8.43942V11.707L17.1937 20.4295L20.5444 17.0666L11.6213 8.17584H20.5713V3.42859Z"
                                        fill="white"
                                    ></path>
                                </g>
                            </svg>
                            بازگشت به صفحه اصلی
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Notfound;
