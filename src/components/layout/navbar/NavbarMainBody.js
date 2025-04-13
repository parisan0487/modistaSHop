import Image from "next/image";
import React from "react";
import SideBarBtn from "./SideBarBtn";
import Link from "next/link";

const NavbarMainBody = () => {
  return (
    <div className="w-full flex items-center justify-between gap-4 max-[900px]:gap-2 py-4 max-[900px]:py-2 border-b border-b-[#EFEFEF]">
      <Image
        src="https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/mi-favicon.svg"
        width={30}
        height={30}
        alt="logo"
        className="size-10 hidden max-[1000px]:block"
      />
      <div className="w-96 h-13 rounded-2xl bg-[#F7F7F7] p-2 pr-4 flex items-center gap-4">
        <div className="size-10 rounded-2xl bg-white flex items-center justify-center shrink-0">
          <Image
            src="https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/Minimalistic-Magnifer.svg"
            width={30}
            height={30}
            alt="search-icon"
            className="size-6 active:scale-95 cursor-pointer"
          />
        </div>
        <input
          dir="rtl"
          type="search"
          placeholder="دنبال چی میگردی؟"
          className="w-full h-full text-[1rem] !text-black/60 outline-none focus:outline-none focus:border-0 placeholder:!text-black/50"
        />
      </div>

      <div className="flex items-center gap-4 max-[1000px]:hidden">
        <div className="p-3 rounded-2xl bg-[#ECECEC] flex items-center justify-center gap-2 cursor-pointer">
          <span className="font-extrabold !text-[#989898]">
            اینستاگرام مُدیستا
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g id="vuesax/outline/instagram">
              <g id="instagram">
                <path
                  id="Vector"
                  d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                  fill="#989898"
                ></path>
                <path
                  id="Vector_2"
                  d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z"
                  fill="#989898"
                ></path>
                <path
                  id="Vector_3"
                  d="M17 7.5C16.87 7.5 16.74 7.47 16.62 7.42C16.5 7.37 16.39 7.3 16.29 7.21C16.2 7.11 16.12 7 16.07 6.88C16.02 6.76 16 6.63 16 6.5C16 6.37 16.02 6.24 16.07 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.34 5.75 16.39 5.7 16.44 5.67C16.5 5.63 16.56 5.6 16.62 5.58C16.68 5.55 16.74 5.53 16.81 5.52C17.13 5.45 17.47 5.56 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5Z"
                  fill="#989898"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div className="p-3 rounded-2xl border border-black/20 flex items-center justify-center gap-2 max-[900px]:hidden cursor-pointer">
          <span className="!text-black/60 font-extrabold">دانلود اپلیکیشن</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g id="Linear / Files / File Download">
              <path
                id="Vector"
                d="M15.3929 4.05365L14.8912 4.61112L15.3929 4.05365ZM19.3517 7.61654L18.85 8.17402L19.3517 7.61654ZM21.654 10.1541L20.9689 10.4592V10.4592L21.654 10.1541ZM3.17157 20.8284L3.7019 20.2981H3.7019L3.17157 20.8284ZM20.8284 20.8284L20.2981 20.2981L20.2981 20.2981L20.8284 20.8284ZM14 21.25H10V22.75H14V21.25ZM2.75 14V10H1.25V14H2.75ZM21.25 13.5629V14H22.75V13.5629H21.25ZM14.8912 4.61112L18.85 8.17402L19.8534 7.05907L15.8947 3.49618L14.8912 4.61112ZM22.75 13.5629C22.75 11.8745 22.7651 10.8055 22.3391 9.84897L20.9689 10.4592C21.2349 11.0565 21.25 11.742 21.25 13.5629H22.75ZM18.85 8.17402C20.2034 9.3921 20.7029 9.86199 20.9689 10.4592L22.3391 9.84897C21.9131 8.89241 21.1084 8.18853 19.8534 7.05907L18.85 8.17402ZM10.0298 2.75C11.6116 2.75 12.2085 2.76158 12.7405 2.96573L13.2779 1.5653C12.4261 1.23842 11.498 1.25 10.0298 1.25V2.75ZM15.8947 3.49618C14.8087 2.51878 14.1297 1.89214 13.2779 1.5653L12.7405 2.96573C13.2727 3.16993 13.7215 3.55836 14.8912 4.61112L15.8947 3.49618ZM10 21.25C8.09318 21.25 6.73851 21.2484 5.71085 21.1102C4.70476 20.975 4.12511 20.7213 3.7019 20.2981L2.64124 21.3588C3.38961 22.1071 4.33855 22.4392 5.51098 22.5969C6.66182 22.7516 8.13558 22.75 10 22.75V21.25ZM1.25 14C1.25 15.8644 1.24841 17.3382 1.40313 18.489C1.56076 19.6614 1.89288 20.6104 2.64124 21.3588L3.7019 20.2981C3.27869 19.8749 3.02502 19.2952 2.88976 18.2892C2.75159 17.2615 2.75 15.9068 2.75 14H1.25ZM14 22.75C15.8644 22.75 17.3382 22.7516 18.489 22.5969C19.6614 22.4392 20.6104 22.1071 21.3588 21.3588L20.2981 20.2981C19.8749 20.7213 19.2952 20.975 18.2892 21.1102C17.2615 21.2484 15.9068 21.25 14 21.25V22.75ZM21.25 14C21.25 15.9068 21.2484 17.2615 21.1102 18.2892C20.975 19.2952 20.7213 19.8749 20.2981 20.2981L21.3588 21.3588C22.1071 20.6104 22.4392 19.6614 22.5969 18.489C22.7516 17.3382 22.75 15.8644 22.75 14H21.25ZM2.75 10C2.75 8.09318 2.75159 6.73851 2.88976 5.71085C3.02502 4.70476 3.27869 4.12511 3.7019 3.7019L2.64124 2.64124C1.89288 3.38961 1.56076 4.33855 1.40313 5.51098C1.24841 6.66182 1.25 8.13558 1.25 10H2.75ZM10.0298 1.25C8.15538 1.25 6.67442 1.24842 5.51887 1.40307C4.34232 1.56054 3.39019 1.8923 2.64124 2.64124L3.7019 3.7019C4.12453 3.27928 4.70596 3.02525 5.71785 2.88982C6.75075 2.75158 8.11311 2.75 10.0298 2.75V1.25Z"
                fill="#989898"
              ></path>
              <path
                id="Vector_2"
                d="M13 2.5V5C13 7.35702 13 8.53553 13.7322 9.26777C14.4645 10 15.643 10 18 10H22"
                stroke="#989898"
                strokeWidth="1.5"
              ></path>
              <path
                id="Vector_3"
                d="M8.5 13.5L8.5 18.5M8.5 18.5L10.5 16.625M8.5 18.5L6.5 16.625"
                stroke="#989898"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
        </div>
        <Link href="/">

          <Image
            src="https://mehdibagheridev.ir/modista/wp-content/uploads/2024/12/mi-logo.svg"
            width={30}
            height={30}
            alt="logo"
            className="w-30 max-[900px]:hidden"
          />
        </Link>
      </div>
      <SideBarBtn />
    </div>
  );
};

export default NavbarMainBody;
