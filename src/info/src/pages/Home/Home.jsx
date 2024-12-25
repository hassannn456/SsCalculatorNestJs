import React from "react";
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
import ScrollToTopButton from "./../../components/general/scrollToTopBtn";

const Home = ({ video }) => {
  return (
    <>
      <ScrollToTopButton />
      <Box>
        <HeroSection video={video} />
      </Box>
      <TechnologyIndex />
      <Box>
        <Services />
      </Box>
      <OurPortfolio />
      <Box>
        <About />
      </Box>
      <EngagementPlan />
      <Box>
        <Insights />
      </Box>
      <Box>
        <RequestQuote />
      </Box>
    </>
  );
};

export default Home;
