import React, { Suspense, lazy } from "react";
import HeroImageSection from "../utils/commons/heroImageSection";
import { Box, Typography } from "@mui/material";
import HeaderText from "../utils/commons/HeaderText";
import { useParams } from "react-router-dom";
import { SectionLoader } from "../utils/commons/Loaders";

import servicesData from "../utils/data/Services";

// Lazy-loaded components
const AboutDescription = lazy(() =>
  import("../components/services/AboutDescription")
);
const ProcessInfo = lazy(() => import("../components/about/ProcessInfo"));
const CarouselContent = lazy(() =>
  import("../components/services/CarouselContent")
);
const RequestQuote = lazy(() => import("../components/home/requestQuotes"));
const Consultation = lazy(() => import("../components/about/Consultation"));

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
      {/* Eagerly Loaded Section */}
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

      {/* Eagerly Loaded Section */}
      <HeaderText />

      {/* Lazy-loaded Sections with dynamic loader colors */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Suspense fallback={<SectionLoader bg="rgb(240, 243, 246)" />}>
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
        </Suspense>
        <Box sx={{ position: "absolute", top: -10, left: 0 }}>
          <img
            src="/assets/images/shape-8.webp"
            alt="img"
            style={{ opacity: 0.4 }}
          />
        </Box>
      </Box>

      <Suspense fallback={<SectionLoader />}>
        <AboutDescription
          description={
            filteredData.extraDescription
              ? filteredData.extraDescription[0]
              : filteredData.description
          }
          title="WHAT YOU GET"
          image={
            filteredData.extraImage
              ? filteredData.extraImage
              : filteredData.image
          }
          inverted={true}
          subtitle={
            filteredData.title === "UI Design"
              ? "UI/UX Design"
              : filteredData.title2
          }
          scale={filteredData.scaleTwo}
        />
      </Suspense>

      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Suspense fallback={<SectionLoader bg="rgb(240, 243, 246)" />}>
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
        </Suspense>
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

      <Suspense fallback={<SectionLoader />}>
        <ProcessInfo />
      </Suspense>

      <Box sx={{ width: "100vw", backgroundColor: "#f0f3f6" }}>
        <Suspense fallback={<SectionLoader bg="rgb(240, 243, 246)" />}>
          <CarouselContent />
        </Suspense>
      </Box>

      <Suspense fallback={<SectionLoader />}>
        <RequestQuote inPage={false} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Consultation />
      </Suspense>
    </Box>
  );
};

export default Services;
