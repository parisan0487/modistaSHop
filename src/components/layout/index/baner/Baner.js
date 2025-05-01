import Image from 'next/image';

const banners = [
    {
        image: '/assets/images/home-banner-bg-2.jpg',
        title: 'بهترین لباس های ترند پاییز',
        subtitle: 'همین الان بخرش',
        btnText: 'خرید کن',
    },
    {
        image: '/assets/images/home-banner-bg.jpg',
        title: 'با مُدیستا برند بپوش',
        subtitle: 'با مُدیستا برند بپوش',
        btnText: 'خرید کن',
    },
];

export default function Banner() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20 w-full">
            {banners.map((banner, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src={banner.image}
                        alt="banner"
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-end pr-6 text-black text-right">
                        <h2 className="text-lg md:text-2xl font-bold mb-2 drop-shadow-sm">{banner.title}</h2>
                        <p className="text-sm md:text-base mb-4 drop-shadow-sm text-gray-700">{banner.subtitle}</p>
                        <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-80 transition">
                            {banner.btnText}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
