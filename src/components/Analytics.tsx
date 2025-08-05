import { useEffect, FC } from 'react';
import { useSettings } from '../context/SettingsContext';

const Analytics: FC = () => {
    const { settings } = useSettings();
    const { gtm } = settings;

    useEffect(() => {
        // Only run this in production
        if (import.meta.env.PROD && gtm.head) {
            const headScriptId = 'gtm-head-script';
            if (document.getElementById(headScriptId)) {
                return; // Script already exists
            }

            const script = document.createElement('script');
            script.id = headScriptId;
            script.innerHTML = gtm.head;
            document.head.appendChild(script);

            // Cleanup function
            return () => {
                const existingScript = document.getElementById(headScriptId);
                if (existingScript) {
                    existingScript.remove();
                }
            };
        }
    }, [gtm.head]);
    
    useEffect(() => {
        if (import.meta.env.PROD && gtm.body) {
            const bodyScriptId = 'gtm-body-script';
            if (document.getElementById(bodyScriptId)) {
                return; // Script already exists
            }
            
            const noscript = document.createElement('noscript');
            noscript.id = bodyScriptId;
            noscript.innerHTML = gtm.body;
            document.body.prepend(noscript);
            
             return () => {
                const existingScript = document.getElementById(bodyScriptId);
                if (existingScript) {
                    existingScript.remove();
                }
            };
        }
    }, [gtm.body])

    return null; // This component does not render anything
};

export default Analytics;
