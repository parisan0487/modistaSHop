import Image from 'next/image';

function LatestProductCard({ text, image }) {
    return (
        <div className="flex flex-col items-center gap-2 w-full p-4 bg-white rounded-2xl">
            <Image src={image} width={80} height={80} alt={text} className="h-20 object-contain" />
            <span className="font-medium text-lg sm:text-xl text-gray-700">{text}</span>
        </div>
    );
}

export default LatestProductCard;
