import * as React from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ConceptAi from "/assets/pngs/heroSecionSlider/Concept Ai.svg";
import MainStay from "/assets/pngs/heroSecionSlider/MainStay.svg";
import MulaX from "/assets/pngs/heroSecionSlider/MulaX.svg";
import Neufluence from "/assets/pngs/heroSecionSlider/Neufluence.svg";
import SpiritualData from "/assets/pngs/heroSecionSlider/Spiritual Data.svg";
import SyntricAi from "/assets/pngs/heroSecionSlider/SyntricAI.svg";
import PrismX from "/assets/pngs/heroSecionSlider/PrismX.svg";

const icons = [
  { title: MainStay, width: 130, height: 60 },
  { title: MulaX, width: 110, height: 50, marginTop: "18px" },
  { title: Neufluence, width: 130, height: 60, marginTop: "8px" },
  { title: ConceptAi, width: 100, height: 60 },
  { title: SpiritualData, width: 130, height: 60 },
  { title: SyntricAi, width: 130, height: 60 },
  { title: PrismX, width: 90, height: 60 },
];

const HeroSectionSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplaySpeed: 0,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 4, sm: 6, md: 10 },
        width: "100%",
        margin: "auto",
        backgroundColor: "transparent",
        alignItems: "center",
        mb: { xs: "1rem", lg: "2rem" },
        overflow: "hidden",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Slider {...settings}>
          {icons.map((icon, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "3.8rem",
                willChange: "transform",
                // m: "auto",
              }}
            >
              <img
                src={icon.title}
                alt={`Technology icon ${index}`}
                style={{
                  paddingTop: icon.marginTop || "0",
                  width: icon.width,
                  height: icon.height,
                  margin: "auto",
                }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default HeroSectionSlider;
