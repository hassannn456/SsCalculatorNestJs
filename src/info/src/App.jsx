import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DrawerAppBar from "./components/header";
import Footer from "./components/footer";
import ScrollToTopButton from "./utils/commons/scrollToTopBtn";
import { Box } from "@mui/material";
import GoogleAnalyticsTracker from "../src/utils/commons/GoogleAnalyticsTracker";

import Home from "./pages/Home";
import OurWork from "./pages/OurWork";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import InsightsPage from "./pages/Insights";
import InsightDetails from "./pages/InsightsDetails";
import TermsAndConditions from "./pages/TermsAndConditions";
import CookiesPolicy from "./pages/CookiesPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Faq from "./pages/Faq";
import CareersPage from "./pages/Careers";
import ProjectDetailPage from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

function App({ video }) {
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
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiesPolicy />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route
              path="/projectDetail/:id/:name"
              element={<ProjectDetailPage />}
            />
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
