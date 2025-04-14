import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={`antialiased `}>
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}