import { Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterComp from "@/components/layout/footer/footerComp";
import Navbar from "@/components/layout/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";

const kalameh = localFont({
  src: [
    {
      path: "/assets/fonts/Kalameh/Kalameh-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "/assets/fonts/Kalameh/Kalameh-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/assets/fonts/Kalameh/Kalameh-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/assets/fonts/Kalameh/Kalameh-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/assets/fonts/Kalameh/Kalameh-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/assets/fonts/Kalameh/Kalameh-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/assets/fonts/Kalameh/Kalameh-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "/assets/fonts/Kalameh/Kalameh-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-kalameh",
  display: "swap",
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
    <html lang="fa" className={kalameh.variable}>
      <body className={`antialiased `}>
        <Navbar />
        {children}
        <FooterComp />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
