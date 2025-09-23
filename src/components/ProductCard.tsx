import { useLocation, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';
import Analytics from './Analytics';
import BottomNavBar from './BottomNavBar';
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
    const { contact, socialLinks, testimonials } = settings;

    const reviewSchema = testimonials.map(testimonial => ({
        "@type": "Review",
        "reviewBody": testimonial.quote,
        "author": {
            "@type": "Person",
            "name": testimonial.author
        },
        "itemReviewed": {
            "@type": "Organization",
            "name": "Tape India"
        }
    }));

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
        ].filter(Boolean),
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "37"
        },
        "review": reviewSchema
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
      <main className="flex-grow pb-20 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <BottomNavBar />
    </div>
  );
};

export default PublicLayout;
