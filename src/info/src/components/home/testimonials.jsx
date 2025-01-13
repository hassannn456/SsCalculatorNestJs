import React from "react";
import companyData from "../../utils/data/companyData";
import { Stack, Typography } from "@mui/material";

import TestimonialImage1 from "/assets/pngs/testimonials/Testimonial1.webp";
import TestimonialImage2 from "/assets/pngs/testimonials/Testimonial2.webp";

const data = [
  {
    name: "Minhaj Alvi",
    designation: "Senior Software Engineer",
    testimonial:
      "I engaged Techietribe to develop a web application for both internal (admin work) and external purposes, including client onboarding, generating product quotes, obtaining approvals, and integrating APIs. Led by a skilled tech lead, they effectively manage a diverse team comprising project managers, frontend and backend developers. Their attentive listening and problem-solving prowess make them invaluable partners, highly recommended for any project. Their dedication to meeting deadlines and delivering high-quality results.",
    image: TestimonialImage1,
  },
  {
    name: `${companyData.ownerName}`,
    designation: "Founder",
    testimonial:
      "I engaged Techietribe to develop a web application for both internal (admin work) and external purposes, including client onboarding, generating product quotes, obtaining approvals, and integrating APIs. Led by a skilled tech lead, they effectively manage a diverse team comprising project managers, frontend and backend developers. Their attentive listening and problem-solving prowess make them invaluable partners, highly recommended for any project. Their dedication to meeting deadlines and delivering high-quality results.",
    image: TestimonialImage2,
  },
];

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: { xs: "40px 15px", lg: "80px 0px" },
    backgroundColor: "#ffffff",
    alignItems: "center",
    margin: "auto",
    width: { xs: "100%", md: "63rem", lg: "80rem", xl: "90rem" },
  },

  heading: {
    fontSize: "20px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#378C92",
    marginBottom: "20px",
    textDecoration: "underline",
    textDecorationColor: "#313431",
    textDecorationThickness: "2px",
    textUnderlineOffset: "4px",
  },
};

const Testimonials = () => {
  return (
    <Stack sx={{ backgroundColor: "#ffffff" }}>
      <Stack sx={styles.mainContainer}>
        <Typography sx={styles.heading}>TESTIMONIALS</Typography>
      </Stack>
    </Stack>
  );
};

export default Testimonials;
