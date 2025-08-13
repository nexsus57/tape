
import { useLocation, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import Analytics from './Analytics';
import { useSettings } from '../context/SettingsContext';

// This component ensures the page scrolls to the top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Organization Schema for SEO
const OrganizationSchema = () => {
    const { settings } = useSettings();
    const { contact, socialLinks } = settings;

    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Tape India",
        "url": "https://tapeindia.shop",
        "logo": "https://file.garden/aIULwzQ_QkPKQcGw/tapeindialogo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": `+91-${contact.phone1.replace(/[^0-9]/g, '')}`,
            "contactType": "customer service",
            "email": contact.email
        },
        "sameAs": [
            socialLinks?.facebook,
            socialLinks?.linkedin,
            socialLinks?.instagram,
        ].filter(Boolean)
    };
    
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};


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
