import React from "react";
import { Box } from "@mui/material";
import SectionIntro from "../general/SectionHeader";
import TestimonialSlider from "./TestimonialSlider";
import bgMap2 from "../../../public/assets/pngs/bg-map.png";

const Testimonials = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#f0f3f6",
        backgroundImage: `url(${bgMap2})`,
        backgroundPosition: "top left",
        backgroundRepeat: "no-repeat",
        pt: 10,
      }}
    >
      <Box>
        <SectionIntro
          title="OUR TESTIMONIALS"
          subtitle="What They Say"
          description="At TechieTribe, we pride ourselves on transforming ideas into cutting-edge software solutions. Our dedicated team ensures every project exceeds expectations, blending innovation with precision. Partner with us to turn your vision into impactful technology."
        />
        <TestimonialSlider />
      </Box>
    </Box>
  );
};

export default Testimonials;