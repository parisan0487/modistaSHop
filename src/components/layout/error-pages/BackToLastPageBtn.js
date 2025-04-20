'use client';

import { useRouter } from 'next/navigation';

function BackToLastPageBtn() {
    const router = useRouter();

    return (
        <button
            onClick={router.back}
            className="text-lg text-orange-500 font-medium border border-orange-500 py-2.5 px-4 rounded-xl cursor-pointer"
        >
            بازگشت به صفحه قبل
        </button>
    );
}

export default BackToLastPageBtn;
