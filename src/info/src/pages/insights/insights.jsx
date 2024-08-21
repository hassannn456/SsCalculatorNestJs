import React from "react";
import ScrollToTopButton from "./../../components/general/scrollToTopBtn";
import HeroImageSection from "./../../components/general/heroImageSection";
import BlogBg from "../../../public/assets/pngs/insights/blog-hero.jpeg";
import InsightCards from "../../components/insights/insightCards";

const InsightsPage = () => {
  return (
    <>
      <ScrollToTopButton />
      <HeroImageSection title="Insights" imageSrc={BlogBg} overlay={true} />
      <InsightCards />
    </>
  );
};

export default InsightsPage;
