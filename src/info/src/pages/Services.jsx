import React from "react";
import HeroImageSection from "../utils/commons/heroImageSection";
import { Box, Typography } from "@mui/material";
import HeaderText from "../utils/commons/HeaderText";
import { useParams } from "react-router-dom";

import AboutDescription from "../components/services/AboutDescription";
import ProcessInfo from "../components/about/ProcessInfo";
import CarouselContent from "../components/services/CarouselContent";
import RequestQuote from "../components/home/requestQuotes";
import Consultation from "../components/about/Consultation";

import servicesData from "../utils/data/Services";

const Services = () => {
  const { serviceName } = useParams();
  let newStr = serviceName.replace(/_/g, " ");
  const filteredData = servicesData.find((service) => service.slug === newStr);

  if (!filteredData) {
    return (
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography sx={{ color: "black" }}>Service not found</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <HeroImageSection
        imageSrc={filteredData.headerImageSrc}
        title={
          filteredData.title === "UI Design"
            ? "UI/UX Design"
            : filteredData.title === "SEO"
            ? "Search Engine Optimization"
            : filteredData.title
        }
      />

      <HeaderText />

      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <AboutDescription
          description={filteredData.description}
          title="WE PROVIDE"
          image={filteredData.image}
          subtitle={
            filteredData.title === "UI Design"
              ? "UI/UX Design"
              : filteredData.title1
          }
          scale={filteredData.scaleOne}
          bgColor={"rgb(240, 243, 246)"}
        />
        <Box sx={{ position: "absolute", top: -10, left: 0 }}>
          <img
            src="/assets/images/shape-8.webp"
            alt="img"
            style={{ opacity: 0.4 }}
          />
        </Box>
      </Box>

      <AboutDescription
        description={
          filteredData.extraDescription
            ? filteredData.extraDescription[0]
            : filteredData.description
        }
        title="WHAT YOU GET"
        image={
          filteredData.extraImage ? filteredData.extraImage : filteredData.image
        }
        inverted={true}
        subtitle={
          filteredData.title === "UI Design"
            ? "UI/UX Design"
            : filteredData.title2
        }
        scale={filteredData.scaleTwo}
      />

      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <AboutDescription
          description={filteredData.extraDescription[1]}
          title="WHAT YOU GOT"
          image={filteredData.extraImage1}
          subtitle={
            filteredData.title === "UI Design"
              ? "UI/UX Design"
              : filteredData.title3
          }
          scale={filteredData.scaleThree}
          bgColor={"rgb(240, 243, 246)"}
        />
        <Box sx={{ position: "absolute", top: -200, right: 0, zIndex: 2 }}>
          <img
            src="/assets/images/shape5.webp"
            alt="img"
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            rotate: "180deg",
            zIndex: 3,
          }}
        >
          <img
            src="/assets/images/bg-pattern.webp"
            alt="img"
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Box>

      <ProcessInfo />

      <Box sx={{ width: "100vw", backgroundColor: "#f0f3f6" }}>
        <CarouselContent />
      </Box>

      <RequestQuote inPage={false} />

      <Consultation />
    </Box>
  );
};

export default Services;
