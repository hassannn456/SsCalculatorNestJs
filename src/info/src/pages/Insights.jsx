import React from "react";
import ScrollToTopButton from "../utils/commons/scrollToTopBtn";
import HeroImageSection from "../utils/commons/heroImageSection";
import InsightCards from "../components/insights/insightCards";

import InsightsBG from "/assets/images/blogs-bg.webp";

const InsightsPage = () => {
  return (
    <>
      <ScrollToTopButton />
      <HeroImageSection title="Insights" imageSrc={InsightsBG} overlay={true} />
      <InsightCards />
    </>
  );
};

export default InsightsPage;
