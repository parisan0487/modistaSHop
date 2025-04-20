import Image from 'next/image';

function ContactUsMap() {
    return (
        <div className="w-full xl:w-2/5">
            <div className="rounded-4xl h-60 xl:h-160 overflow-hidden">
                <Image src="/assets/images/map.png" alt="map" className='size-full object-cover' width={400} height={500} />
            </div>
        </div>
    );
}

export default ContactUsMap;
