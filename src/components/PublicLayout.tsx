import { useLocation, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import Analytics from './Analytics';

// This component ensures the page scrolls to the top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Organization Schema for SEO
const OrganizationSchema = () => (
    <script type="application/ld+json">
        {`
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Tape India",
            "url": "https://delightful-panda-036f75.netlify.app/",
            "logo": "https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9840647096",
                "contactType": "customer service"
            }
        }
        `}
    </script>
);


const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Analytics />
      <OrganizationSchema />
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PublicLayout;
