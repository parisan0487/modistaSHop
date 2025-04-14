import Footer from '@/components/layout/shared/footer/Footer';
import Navbar from '@/components/layout/shared/navbar/Navbar';

function ApplicationLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default ApplicationLayout;
