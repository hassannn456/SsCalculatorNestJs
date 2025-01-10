import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import DrawerAppBar from "./components/header/header";
import Footer from "./components/footer/footer";
import OurWork from "./pages/ourWork/OurWork";
import About from "./pages/About/About";
import Services from "./pages/services/Services";
import ContactUs from "./pages/contactUs/ContactUs";
import InsightsPage from "./pages/insights/insights";
import InsightDetails from "./pages/insights/insight-details/insights-details";
import ScrollToTopButton from "./components/general/scrollToTopBtn";
import { Box } from "@mui/material";
import TermsAndConditions from "./pages/termsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import CookiesPolicy from "./pages/cookiesPolicy/CoookiesPolicy";
import Faq from "./pages/faq/Faq";
import CareersPage from "./pages/careers/careers";
import ProjectDetailPage from "./pages/ourWork/detailPage/ProjectDetailPage";
import NotFound from "../src/pages/NotFound";
import Loader from "./pages/Loader/Loader";
import GoogleAnalyticsTracker from "../src/utils/commons/GoogleAnalyticsTracker";

const videoUrl = "/assets/video/HeroSectionDisplayHighQuality.mp4";

const preloadVideo = (src) => {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.src = src;
    video.onloadeddata = () => resolve(video);
    video.onerror = () => reject(new Error(`Failed to load video: ${src}`));
  });
};

function App({ video }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeoutId;

    preloadVideo(videoUrl)
      .then((video) => {
        timeoutId = setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((error) => console.error(error.message));

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [videoUrl]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <GoogleAnalyticsTracker />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "0",
        }}
      >
        <ScrollToTopButton />
        <DrawerAppBar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home video={video} />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services/:serviceName" element={<Services />} />
            <Route path="/insight-details/:id" element={<InsightDetails />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiesPolicy />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/projectDetail/:id/:name" element={<ProjectDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Box sx={{ backgroundColor: "#000000" }}>
          <Footer />
        </Box>
      </div>
    </Router>
  );
}

export default App;
