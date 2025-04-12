import Image from "next/image";
import React from "react";
import MegaMenu from "./MegaMenu";

const NavbarBottom = () => {
  return (
    <div className="w-full flex items-center justify-between gap-4 py-4 pb-7 max-[900px]:hidden">
      <div className="size-10 flex gap-3">
        <div className="size-13 p-3 bg-orange-500 rounded-2xl flex items-center justify-center shrink-0">
          <Image
            src="https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/mini-cart-button.svg"
            width={50}
            height={50}
            alt="buy-button"
          />
        </div>
        <div className="p-3 h-13 border-2 border-orange-500 rounded-2xl flex items-center justify-center gap-2 shrink-0">
          <span className="!text-orange-500 font-extrabold">
            ورود / ثبت نام{" "}
          </span>
          <Image
            src="https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/login-user.svg"
            width={50}
            height={50}
            alt="buy-button"
            className="size-6"
          />
        </div>
      </div>

      <ul className="flex gap-5 items-center">
        <li className="relative flex items-center gap-1 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 stroke-gray-700 group-hover:rotate-180 delay-200 duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          <span className="!text-black/60 font-bold text-[1.1rem]">
            صفحات قالب
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Broken / Money / Tag">
              <path
                id="Vector 132"
                d="M22 12L19 8L8.5 19.5L10 21.5L13.5 22L21 15L22 12Z"
                fill="#F4694C"
              ></path>
              <path
                id="Vector"
                d="M16.1369 4.72848C14.5914 3.18295 13.8186 2.41018 12.816 2.12264C11.8134 1.83509 10.7485 2.08083 8.61875 2.57231L7.39057 2.85574C5.59881 3.26922 4.70292 3.47597 4.08944 4.08944C3.47597 4.70292 3.26922 5.59881 2.85574 7.39057L2.57231 8.61875C2.08083 10.7485 1.83509 11.8134 2.12264 12.816C2.41018 13.8186 3.18295 14.5914 4.72848 16.1369L6.55812 17.9665C9.24711 20.6555 10.5916 22 12.2623 22C13.933 22 15.2775 20.6555 17.9665 17.9665C20.6555 15.2775 22 13.933 22 12.2623C22 10.9198 21.1319 9.788 19.3957 8"
                stroke="#3B3B3B"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                id="Vector_2"
                d="M8.60742 10.8789C9.71199 10.8789 10.6074 9.98348 10.6074 8.87891C10.6074 7.77434 9.71199 6.87891 8.60742 6.87891C7.50285 6.87891 6.60742 7.77434 6.60742 8.87891"
                stroke="#3B3B3B"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                id="Vector_3"
                d="M11.5411 18.4998L12.5411 17.4998M18.5201 11.5205L14.9994 15.0413"
                stroke="#3B3B3B"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </g>
          </svg>
          <ul className="absolute top-8 right-0 w-37 p-4 bg-white overflow-hidden rounded-2xl shadow-2xl flex flex-col items-end gap-2 invisible opacity-0 delay-200 duration-300 group-hover:visible group-hover:opacity-100 group-hover:mt-4">
            <li className="text-[1.1rem] font-bold !text-zinc-600 cursor-pointer hover:!text-black">
              فروشگاه
            </li>
            <li className="text-[1.1rem] font-bold !text-zinc-600 cursor-pointer hover:!text-black">
              تکی مقاله
            </li>
            <li className="text-[1.1rem] font-bold !text-zinc-600 cursor-pointer hover:!text-black">
              تکی محصول
            </li>
            <li className="text-[1.1rem] font-bold !text-zinc-600 cursor-pointer hover:!text-black">
              حساب کاربری
            </li>
            <li className="text-[1.1rem] font-bold !text-zinc-600 cursor-pointer hover:!text-black">
              سبد خرید
            </li>
            <li className="text-[1.1rem] font-bold !text-zinc-600 cursor-pointer hover:!text-black">
              404
            </li>
          </ul>
        </li>
        <li className="flex gap-1">
          <span className="!text-black/60 font-bold text-[1.1rem]">
            حراج استایل
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Broken / Money / Tag">
              <path
                id="Vector 132"
                d="M22 12L19 8L8.5 19.5L10 21.5L13.5 22L21 15L22 12Z"
                fill="#F4694C"
              ></path>
              <path
                id="Vector"
                d="M16.1369 4.72848C14.5914 3.18295 13.8186 2.41018 12.816 2.12264C11.8134 1.83509 10.7485 2.08083 8.61875 2.57231L7.39057 2.85574C5.59881 3.26922 4.70292 3.47597 4.08944 4.08944C3.47597 4.70292 3.26922 5.59881 2.85574 7.39057L2.57231 8.61875C2.08083 10.7485 1.83509 11.8134 2.12264 12.816C2.41018 13.8186 3.18295 14.5914 4.72848 16.1369L6.55812 17.9665C9.24711 20.6555 10.5916 22 12.2623 22C13.933 22 15.2775 20.6555 17.9665 17.9665C20.6555 15.2775 22 13.933 22 12.2623C22 10.9198 21.1319 9.788 19.3957 8"
                stroke="#3B3B3B"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                id="Vector_2"
                d="M8.60742 10.8789C9.71199 10.8789 10.6074 9.98348 10.6074 8.87891C10.6074 7.77434 9.71199 6.87891 8.60742 6.87891C7.50285 6.87891 6.60742 7.77434 6.60742 8.87891"
                stroke="#3B3B3B"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                id="Vector_3"
                d="M11.5411 18.4998L12.5411 17.4998M18.5201 11.5205L14.9994 15.0413"
                stroke="#3B3B3B"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </g>
          </svg>
        </li>
        <li className="flex gap-1">
          <span className="!text-black/60 font-bold text-[1.1rem]">
            تماس با ما
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Broken / Nature, Travel / Fire Minimalistic">
              <path
                id="Vector 131"
                d="M16.5 20L4.5 10H4L3.5 13.5L5 17L8 20L12.5 21L16 20H16.5Z"
                fill="#F4694C"
              ></path>
              <path
                id="Vector"
                d="M16 19.9972C14.8233 20.635 13.4571 21 12 21C7.58172 21 4 17.6439 4 13.504C4 12.3727 4.14916 11.3124 4.40527 10.3284M19.1761 16.8211C19.7036 15.8211 20 14.695 20 13.504C20 9.76257 17.9654 6.83811 16.562 5.44436C16.3017 5.18584 15.8683 5.30006 15.7212 5.63288C14.9742 7.3229 13.4178 9.75607 11.4286 9.75607C10.1975 9.92086 8.31688 8.86844 9.83483 3.64868C9.97151 3.17868 9.46972 2.80113 9.08645 3.11539C8.09335 3.92966 6.95052 5.1206 6 6.64741"
                stroke="#3B3B3B"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </g>
          </svg>
        </li>
        <li className="flex gap-1">
          <span className="!text-black/60 font-bold text-[1.1rem]">
            درباره ما
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Broken / Nature, Travel / Fire Minimalistic">
              <path
                id="Vector 131"
                d="M16.5 20L4.5 10H4L3.5 13.5L5 17L8 20L12.5 21L16 20H16.5Z"
                fill="#F4694C"
              ></path>
              <path
                id="Vector"
                d="M16 19.9972C14.8233 20.635 13.4571 21 12 21C7.58172 21 4 17.6439 4 13.504C4 12.3727 4.14916 11.3124 4.40527 10.3284M19.1761 16.8211C19.7036 15.8211 20 14.695 20 13.504C20 9.76257 17.9654 6.83811 16.562 5.44436C16.3017 5.18584 15.8683 5.30006 15.7212 5.63288C14.9742 7.3229 13.4178 9.75607 11.4286 9.75607C10.1975 9.92086 8.31688 8.86844 9.83483 3.64868C9.97151 3.17868 9.46972 2.80113 9.08645 3.11539C8.09335 3.92966 6.95052 5.1206 6 6.64741"
                stroke="#3B3B3B"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </g>
          </svg>
        </li>
        <li className="relative flex items-center gap-1 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 stroke-gray-700 group-hover:rotate-180 delay-200 duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          <span className="!text-black/60 font-bold text-[1.1rem]">
            دسته بندی
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Broken / Settings, Fine Tuning / Widget 5">
              <path
                id="Vector 130"
                d="M10 21L10.5 15L10 3L4.5 2.5L2.5 4V13V20.5L6 21.5L10 21Z"
                fill="#F4694C"
              ></path>
              <path
                id="Rectangle 1880"
                d="M2.5 13V17.5C2.5 19.3856 2.5 20.3284 3.08579 20.9142C3.67157 21.5 4.61438 21.5 6.5 21.5C8.38562 21.5 9.32843 21.5 9.91421 20.9142C10.5 20.3284 10.5 19.3856 10.5 17.5V6.5C10.5 4.61438 10.5 3.67157 9.91421 3.08579C9.32843 2.5 8.38562 2.5 6.5 2.5C4.61438 2.5 3.67157 2.5 3.08579 3.08579C2.5 3.67157 2.5 4.61438 2.5 6.5V9"
                stroke="#3C3C3C"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                id="Rectangle 1884"
                d="M21.4995 18C21.495 19.5572 21.4458 20.3827 20.9142 20.9142C20.3284 21.5 19.3856 21.5 17.5 21.5C15.6144 21.5 14.6716 21.5 14.0858 20.9142C13.5 20.3284 13.5 19.3856 13.5 17.5V15.5C13.5 13.6144 13.5 12.6716 14.0858 12.0858C14.6716 11.5 15.6144 11.5 17.5 11.5C19.3856 11.5 20.3284 11.5 20.9142 12.0858C21.3183 12.4899 21.4436 13.0638 21.4825 14"
                stroke="#3C3C3C"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                id="Rectangle 1881"
                d="M13.5 5.5C13.5 4.56812 13.5 4.10218 13.6522 3.73463C13.8552 3.24458 14.2446 2.85523 14.7346 2.65224C15.1022 2.5 15.5681 2.5 16.5 2.5H18.5C19.4319 2.5 19.8978 2.5 20.2654 2.65224C20.7554 2.85523 21.1448 3.24458 21.3478 3.73463C21.5 4.10218 21.5 4.56812 21.5 5.5C21.5 6.43188 21.5 6.89782 21.3478 7.26537C21.1448 7.75542 20.7554 8.14477 20.2654 8.34776C19.8978 8.5 19.4319 8.5 18.5 8.5H16.5C15.5681 8.5 15.1022 8.5 14.7346 8.34776C14.2446 8.14477 13.8552 7.75542 13.6522 7.26537C13.5 6.89782 13.5 6.43188 13.5 5.5Z"
                stroke="#3C3C3C"
                strokeWidth="1.5"
              ></path>
            </g>
          </svg>
          <MegaMenu />
        </li>
      </ul>
    </div>
  );
};

export default NavbarBottom;
