import HeroImageSection from "../../components/general/heroImageSection";
import { Box, Typography } from "@mui/material";
import React from "react";
import AboutDescription from "../../components/services/AboutDescription";
import HeaderText from "../../components/general/HeaderText";
import Consultation from "../../components/about/Consultation";
import { useParams } from "react-router-dom";
import CarouselContent from "../../components/services/CarouselContent";
import servicesData from "./Data";
import ProcessInfo from "../../components/about/ProcessInfo";
import RequestQuote from "../../components/home/requestQuotes";

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

      <AboutDescription
        description={filteredData.description}
        title="WE PROVIDE"
        image={filteredData.image}
        subtitle={
          filteredData.title === "UI Design"
            ? "UI/UX Design"
            : filteredData.title1
        }
        // bgColor={"rgb(55 140 146 / 10%)"}
        bgColor={"rgb(240, 243, 246)"}
      />

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
      />

      <AboutDescription
        description={filteredData.extraDescription[1]}
        title="WHAT YOU GOT"
        image={filteredData.extraImage1}
        subtitle={
          filteredData.title === "UI Design"
            ? "UI/UX Design"
            : filteredData.title3
        }
        bgColor={"rgb(240, 243, 246)"}
      />

      <ProcessInfo />

      {/* <Box
        sx={{
          width: "100%",
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <StatsCounter />
        </Box>
      </Box> */}

      <Box sx={{ width: "100vw", backgroundColor: "#f0f3f6" }}>
        <CarouselContent />
      </Box>
      <RequestQuote bgColor={"#ffffff"} inPage={true} />
      <Consultation />
    </Box>
  );
};

export default Services;
