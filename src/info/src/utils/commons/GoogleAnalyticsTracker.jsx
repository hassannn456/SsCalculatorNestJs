import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const GoogleAnalyticsTracker = () => {
    const location = useLocation();

    useEffect(() => {
        window.gtag("config", "G-23X4Q68K6J", {
            page_path: location.pathname,
        });
    }, [location]);

    return null;
};

export default GoogleAnalyticsTracker;
