import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    <html lang="en">
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
