import { Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterComp from "@/components/layout/footer/footerComp";
import Navbar from "@/components/layout/navbar/Navbar";
import { Toaster } from "react-hot-toast";

const kalameh = localFont({
  src: [
    {
      path: '../../public/fonts/kalameh/Kalameh-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/kalameh/Kalameh-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/kalameh/Kalameh-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/kalameh/Kalameh-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/kalameh/Kalameh-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/kalameh/Kalameh-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/kalameh/Kalameh-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/kalameh/Kalameh-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/kalameh/Kalameh-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-kalameh',
  display: 'swap',
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shop medista",
  description: "shop medista",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body
        className={`antialiased `}
      >
        <Navbar />
        {children}
        <FooterComp />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
