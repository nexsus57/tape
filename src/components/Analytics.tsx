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
        // 1. Google Tag Manager / Analytics Event
        const timerId = setTimeout(() => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'page_view',
                page_path: location.pathname + location.search,
                page_title: document.title,
            });
        }, 0);

        // 2. LOCAL ANALYTICS (For Admin Dashboard)
        // We store daily page views in localStorage to power the Admin Chart
        try {
            const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
            const storageKey = 'tapeindia_analytics_daily';
            const savedData = localStorage.getItem(storageKey);
            const data = savedData ? JSON.parse(savedData) : {};
            
            // Increment today's count
            data[today] = (data[today] || 0) + 1;
            
            // Save back to storage
            localStorage.setItem(storageKey, JSON.stringify(data));
            
            // Dispatch a custom event so the Dashboard updates instantly if open
            window.dispatchEvent(new Event('analyticsUpdated'));
        } catch (e) {
            console.error("Failed to save local analytics", e);
        }

        return () => clearTimeout(timerId);
    }, [location.pathname, location.search]);

    return null; // This component does not render anything
};

export default Analytics;
