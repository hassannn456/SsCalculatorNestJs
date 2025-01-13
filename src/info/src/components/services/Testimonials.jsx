import React from "react";
import { Box } from "@mui/material";
import SectionIntro from "../general/SectionHeader";
import TestimonialSlider from "./TestimonialSlider";
import bgMap2 from "/assets/pngs/bg-map.webp";

const Testimonials = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "rgb(240, 243, 246)",
        backgroundImage: `url(${bgMap2})`,
        backgroundPosition: "top left",
        backgroundRepeat: "no-repeat",
        py: 5,
      }}
    >
      <Box>
        <SectionIntro
          title="OUR TESTIMONIALS"
          subtitle="What They Say"
          description="At TechieTribe, we pride ourselves on transforming ideas into cutting-edge software solutions. Our dedicated team ensures every project exceeds expectations, blending innovation with precision. Partner with us to turn your vision into impactful technology."
        justify={true}
        />
        <TestimonialSlider />
      </Box>
    </Box>
  );
};

export default Testimonials;
