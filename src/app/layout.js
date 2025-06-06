import localFont from 'next/font/local';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import { AuthProvider } from '@/providers/AuthContext';
import QueryProvider from '@/providers/QueryProviders';

const kalameh = localFont({
    src: [
        {
            path: './../../public/assets/fonts/Kalameh/Kalameh-Thin.ttf',
            weight: '100',
            style: 'normal',
        },
        {
            path: './../../public/assets/fonts/Kalameh/Kalameh-ExtraLight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: './../../public/assets/fonts/Kalameh/Kalameh-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './../../public/assets/fonts/Kalameh/Kalameh-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './../../public/assets/fonts/Kalameh/Kalameh-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './../../public/assets/fonts/Kalameh/Kalameh-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './../../public/assets/fonts/Kalameh/Kalameh-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './../../public/assets/fonts/Kalameh/Kalameh-ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: './../../public/assets/fonts/Kalameh/Kalameh-Black.ttf',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: '--local-font-kalameh',
});

export default function RootLayout({ children }) {
    return (
        <html lang="fa" className={`${kalameh.variable}`}>
            <body className={`antialiased`} suppressHydrationWarning>
                <QueryProvider>
                    <AuthProvider>{children}</AuthProvider>
                    <Toaster position="bottom-center" />
                </QueryProvider>
            </body>
        </html>
    );
}
