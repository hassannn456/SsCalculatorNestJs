import React from "react";
import { Box } from "@mui/material";
import HeroSectionConatct from "../components/contact/HeroSectionConatct";
import TextComponent from "../components/contact/TextComponent";
import ContactUsForm from "../components/contact/ContactUsFrom.jsx";

import ContactHeader from "/assets/images/ContactUs/ContactHeader.webp";

const ContactUs = () => {
  return (
    <>
      <HeroSectionConatct imageSrc={ContactHeader} />

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
          <TextComponent />
        </Box>

        <ContactUsForm />
      </Box>
    </>
  );
};

export default ContactUs;
