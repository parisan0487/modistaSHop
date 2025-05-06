import Image from 'next/image';

function AdvantageCard({ text, image }) {
    return (
        <div className="flex flex-col items-center gap-2 w-full p-4 bg-white rounded-2xl">
            <Image src={image} width={70} height={70} alt={text} className='w-auto'/>
            <span className="font-bold text-xl text-gray-700">{text}</span>
        </div>
    );
}

export default AdvantageCard;
