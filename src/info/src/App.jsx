import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RefProvider } from "./context/RefContext";
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

function App() {
  return (
    <Router>
      <RefProvider>
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
              <Route path="/" element={<Home />} />
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
            </Routes>
          </main>
          <Box sx={{ backgroundColor: "#000000" }}>
            <Footer />
          </Box>
        </div>
      </RefProvider>
    </Router>
  );
}

export default App;
