import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/layout/about-us/Header';
import InstagramPage from '@/components/layout/about-us/InstagramPage';

export default function About() {
    return (
        <div className="container">
            <Breadcrumb
                items={[
                    { text: 'صفحه اصلی', href: '/' },
                    { text: 'درباره ما', href: '/about-us' },
                ]}
            />
            <div className='space-y-16 mt-8'>
                <Header />
                <InstagramPage />
            </div>
        </div>
    );
}
