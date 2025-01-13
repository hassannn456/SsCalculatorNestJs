import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DrawerAppBar from "./components/header";
import Footer from "./components/footer";
import ScrollToTopButton from "./utils/commons/scrollToTopBtn";
import { Box } from "@mui/material";
import GoogleAnalyticsTracker from "../src/utils/commons/GoogleAnalyticsTracker";
// import Loader from "./utils/commons/Loaders";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const OurWork = lazy(() => import("./pages/OurWork"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const InsightsPage = lazy(() => import("./pages/Insights"));
const InsightDetails = lazy(() =>
  import("./pages/InsightsDetails")
);
const TermsAndConditions = lazy(() =>
  import("./pages/TermsAndConditions")
);
const CookiesPolicy = lazy(() =>
  import("./pages/CookiesPolicy")
);
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Faq = lazy(() => import("./pages/Faq"));
const CareersPage = lazy(() => import("./pages/Careers"));
const ProjectDetailPage = lazy(() =>
  import("./pages/ProjectDetails")
);
const NotFound = lazy(() => import("./pages/NotFound"));

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
        <Suspense fallback={<></>}>
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
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
