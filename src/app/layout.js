import "./globals.css";
import FooterComp from "@/components/layout/footer/footerComp";
import Navbar from "@/components/layout/navbar/Navbar";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={`antialiased `}>
        <Navbar />
        {children}
        <FooterComp />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
