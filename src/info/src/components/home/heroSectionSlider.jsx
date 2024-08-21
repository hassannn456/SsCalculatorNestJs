import * as React from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ConceptAi from "../../../public/assets/pngs/heroSecionSlider/Concept Ai.svg";
import MainStay from "../../../public/assets/pngs/heroSecionSlider/MainStay.svg";
import MulaX from "../../../public/assets/pngs/heroSecionSlider/MulaX.svg";
import Neufluence from "../../../public/assets/pngs/heroSecionSlider/Neufluence.svg";
import SpiritualData from "../../../public/assets/pngs/heroSecionSlider/Spiritual Data.svg";
import SyntricAi from "../../../public/assets/pngs/heroSecionSlider/SyntricAI.svg";
import PrismX from "../../../public/assets/pngs/heroSecionSlider/PrismX.svg";

const icons = [
  {
    title: MainStay,
    width: 130,
    height: 60,
  },
  {
    title: MulaX,
    width: 130,
    height: 30,
    marginTop: "6%",
  },
  {
    title: Neufluence,
    width: 130,
    height: 60,
  },
  {
    title: ConceptAi,
    width: 130,
    height: 50,
  },
  {
    title: SpiritualData,
    width: 130,
    height: 60,
  },
  {
    title: SyntricAi,
    width: 130,
    height: 60,
  },
  {
    title: PrismX,
    width: 130,
    height: 60,
  },
];

const HeroSectionSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        width: "100%",
        margin: "auto",
        backgroundColor: "transparent",
        alignItems: "center",
        mb: { xs: "0rem", lg: "2rem" },
        overflow: "hidden",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Slider {...settings} pauseOnFocus={true}>
          {icons.map((icon, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: '3.8rem',
                willChange: "transform",

              }}
            >
              <img
                src={icon.title}
                alt={`Technology icon ${index}`}
                style={{
                  marginTop: icon.marginTop || "0",
                  width: icon.width,
                  height: icon.height,
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
