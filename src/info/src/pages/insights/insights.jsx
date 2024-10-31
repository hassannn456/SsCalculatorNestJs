import React from "react";
import ScrollToTopButton from "./../../components/general/scrollToTopBtn";
import HeroImageSection from "./../../components/general/heroImageSection";
import InsightCards from "../../components/insights/insightCards";
import InsightsBG from "/assets/pngs/blogs-bg.jpg";

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
