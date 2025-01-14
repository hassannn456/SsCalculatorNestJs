import React from "react";
import HeroSection from "../components/home/heroSection";
import ScrollToTopButton from "../utils/commons/scrollToTopBtn";

import TechnologyIndex from "../components/home/technologyIndex";
import Services from "../components/home/services";
import OurPortfolio from "../components/home/ourPortfolio";
import About from "../components/home/about";
import EngagementPlan from "../components/home/engagementPlan";
import Insights from "../components/home/insights";
import RequestQuote from "../components/home/requestQuotes";

const Home = ({ video }) => {
  return (
    <>
      <ScrollToTopButton />

      <HeroSection video={video} />

      <TechnologyIndex />

      <Services />

      <OurPortfolio />

      <About />

      <EngagementPlan />

      <Insights />

      <RequestQuote />
    </>
  );
};

export default Home;
