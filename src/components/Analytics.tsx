import { useEffect, FC } from 'react';
import { useLocation } from 'react-router-dom';

// To satisfy TypeScript, we can declare dataLayer on the window object.
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const Analytics: FC = () => {
    const location = useLocation();

    useEffect(() => {
        // Use a short timeout to allow react-helmet-async to update the document title
        // before sending the page_view event.
        const timerId = setTimeout(() => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'page_view',
                page_path: location.pathname + location.search,
                page_title: document.title,
            });
        }, 0);

        return () => clearTimeout(timerId);
    }, [location.pathname, location.search]);

    return null; // This component does not render anything
};

export default Analytics;
