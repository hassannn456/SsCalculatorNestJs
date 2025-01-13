import React, { Suspense, lazy } from "react";
import { Box } from "@mui/material";
import HeroSectionConatct from "../components/contact/HeroSectionConatct";
import { SectionLoader } from "../utils/commons/Loaders";

// Lazy-loaded components
const TextComponent = lazy(() => import("../components/contact/TextComponent"));
const ContactUsForm = lazy(() => import("../components/contact/ContactUsFrom.jsx"));

import ContactHeader from "/assets/images/ContactUs/ContactHeader.webp";

const ContactUs = () => {
  return (
    <Box>
      {/* Eagerly Loaded Section */}
      <HeroSectionConatct imageSrc={ContactHeader} />

      {/* Lazy-loaded Sections */}
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          padding: { xs: "1rem", md: "4rem" },
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "35%" } }}>
          <Suspense fallback={<SectionLoader />}>
            <TextComponent />
          </Suspense>
        </Box>

        <Suspense fallback={<SectionLoader />}>
          <ContactUsForm />
        </Suspense>
      </Box>
    </Box>
  );
};

export default ContactUs;
