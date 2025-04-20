import Breadcrumb from '@/components/ui/Breadcrumb';
import ContactUsForm from '@/components/layout/contact-us/ContactUsForm';
import ContactUsMap from '@/components/layout/contact-us/ContactUsMap';
import ContactUsReferences from '@/components/layout/contact-us/ContactUsReferences';

export default function Contact() {
    return (
        <div className="container">
            <Breadcrumb
                items={[
                    { text: 'صفحه اصلی', href: '/' },
                    { text: 'تماس با ما', href: '/contact-us' },
                ]}
            />
            <div className="flex flex-col-reverse xl:flex-row items-center gap-x-32 gap-y-8 mt-8" dir="rtl">
                <div className="space-y-12 w-full xl:w-3/5">
                    <ContactUsForm />
                    <ContactUsReferences />
                </div>
                <ContactUsMap />
            </div>
        </div>
    );
}
