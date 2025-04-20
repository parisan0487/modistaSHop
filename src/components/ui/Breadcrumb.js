import Link from 'next/link';

function Breadcrumb({ items }) {
    return (
        <div className="border-t border-gray-100 py-8 flex flex-row-reverse items-center gap-x-1 text-gray-500">
            {items.map((item, i) => (
                <div key={item.href} className="flex flex-row-reverse items-center gap-x-1">
                    <Link href={item.href} className={`${i + 1 === items.length ? 'text-gray-800' : ''}`}>
                        {item.text}
                    </Link>
                    {i + 1 !== items.length && (
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                            <path
                                d="M12.5 15L7.5 10L12.5 5"
                                stroke="#B9B9B9"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Breadcrumb;
