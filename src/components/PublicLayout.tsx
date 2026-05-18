
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Analytics from './Analytics';
import BottomNavBar from './BottomNavBar';
import SearchModal from './SearchModal';
import WhatsAppButton from './WhatsAppButton';
import { Outlet } from 'react-router-dom';
import DynamicSEOTags from './DynamicSEOTags';

// This component ensures the page scrolls to the top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <DynamicSEOTags />
      <Analytics />
      <ScrollToTop />
      <SearchModal />
      <Header />
      <main className="flex-grow pb-20 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <BottomNavBar />
      <WhatsAppButton />
    </div>
  );
};

export default PublicLayout;
