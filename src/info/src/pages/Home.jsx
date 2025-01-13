import React, { Suspense, lazy } from "react";
import HeroSection from "../components/home/heroSection";
import ScrollToTopButton from "../utils/commons/scrollToTopBtn";
import { Box } from "@mui/material";
import { SectionLoader } from "../utils/commons/Loaders";

// Lazy-loaded components
const TechnologyIndex = lazy(() =>
  import("../components/home/technologyIndex")
);
const Services = lazy(() => import("../components/home/services"));
const OurPortfolio = lazy(() => import("../components/home/ourPortfolio"));
const About = lazy(() => import("../components/home/about"));
const EngagementPlan = lazy(() => import("../components/home/engagementPlan"));
const Insights = lazy(() => import("../components/home/insights"));
const RequestQuote = lazy(() => import("../components/home/requestQuotes"));

const Home = ({ video }) => {
  return (
    <>
      <ScrollToTopButton />
      <Box>
        <HeroSection video={video} />
      </Box>

      <Suspense fallback={<SectionLoader minHeight="200px" />}>
        <TechnologyIndex />
      </Suspense>

      <Box>
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
      </Box>

      <Suspense fallback={<SectionLoader />}>
        <OurPortfolio />
      </Suspense>

      <Box>
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
      </Box>

      <Suspense fallback={<SectionLoader bg="grey" />}>
        <EngagementPlan />
      </Suspense>

      <Box>
        <Suspense fallback={<SectionLoader />}>
          <Insights />
        </Suspense>
      </Box>

      <Box>
        <Suspense fallback={<SectionLoader bg="grey" />}>
          <RequestQuote />
        </Suspense>
      </Box>
    </>
  );
};

export default Home;
