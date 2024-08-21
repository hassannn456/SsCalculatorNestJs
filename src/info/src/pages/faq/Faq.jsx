import React from "react";
import { Box } from "@mui/material";
import FAQAccordion from "../../components/faq/FAQAccordion";
import HeroImageSection from "../../components/general/heroImageSection";
import TermsAndConditionsHeader from "../../../public/assets/pngs/FooterResources/TermsAndConditions.jpg";
import faqImage from "../../../public/assets/pngs/FooterResources/faqImage.svg";

const Faq = () => {
  return (
    <Box sx={{ width: "100vw" }}>
      <HeroImageSection
        title="FAQ's"
        imageSrc={TermsAndConditionsHeader}
        fullScreen={true}
        call={true}
        subText="Leveraging a diverse range of development technologies since our inception, we consistently align with the latest trends and evolving demands."
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          padding: { xs: 2, md: "2rem" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ width: { xs: "80%", sm: "60%", md: "35%" } }}>
          <img src={faqImage} width={"100%"} height={"100%"} />
        </Box>
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <FAQAccordion />
        </Box>
      </Box>
    </Box>
  );
};

export default Faq;
