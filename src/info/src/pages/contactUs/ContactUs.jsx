import React, { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
// import HeroImageSection from "../../components/general/heroImageSection";
import HeroSectionConatct from "./HeroSectionConatct";
import ContactHeader from "../../../public/assets/pngs/ContactUs/ContactHeader.png";
import ContactUsForm from "../../components/contact/ContactUsFrom.jsx";
import ContactBg from "../../../public/assets/pngs/ContactUs/ContactBG.png";
import TextComponent from "../../components/contact/TextComponent";
import ItemBox from "./ItemBox";

const ContactUs = () => {
  return (
    <Box>
      <HeroSectionConatct imageSrc={ContactHeader} />
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          padding: { xs: " 1rem", md: "4rem" },
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "35%" } }}>
          <TextComponent />
        </Box>
        <Box>
          <ContactUsForm />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
