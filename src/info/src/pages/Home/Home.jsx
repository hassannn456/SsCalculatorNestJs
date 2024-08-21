import React, { useContext } from "react";
import Services from "./../../components/home/services";
import HeroSection from "./../../components/home/heroSection";
import About from "./../../components/home/about";
import TechnologyIndex from "./../../components/home/technologyIndex";
import EngagementPlan from "./../../components/home/engagementPlan";
import Insights from "./../../components/home/insights";
import RequestQuote from "./../../components/home/requestQuotes";
import { Box } from "@mui/material";
import OurPortfolio from "../../components/home/ourPortfolio";
import "./Home.css";
import { RefContext } from "../../context/RefContext";
import ScrollToTopButton from "./../../components/general/scrollToTopBtn";

const Home = () => {
  const {
    homeRef,
    scrollToBottom,
    servicesRef,
    aboutRef,
    footerRef,
    insightsRef,
  } = useContext(RefContext);

  return (
    <>
      <ScrollToTopButton />
      <Box ref={homeRef}>
        <HeroSection scrollToBottom={scrollToBottom} />
      </Box>
      <TechnologyIndex />
      <Box ref={servicesRef}>
        <Services />
      </Box>
      <OurPortfolio scrollToBottom={scrollToBottom} />
      <Box ref={aboutRef}>
        <About />
      </Box>
      <EngagementPlan scrollToBottom={scrollToBottom} />
      <Box ref={insightsRef}>
        <Insights />
      </Box>
      {/* <Testimonials /> */}
      <Box ref={footerRef}>
        <RequestQuote />
      </Box>
    </>
  );
};

export default Home;
