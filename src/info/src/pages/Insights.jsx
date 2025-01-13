import React, { Suspense, lazy } from "react";
import ScrollToTopButton from "../utils/commons/scrollToTopBtn";
import HeroImageSection from "../utils/commons/heroImageSection";
import { SectionLoader } from "../utils/commons/Loaders";

import InsightsBG from "/assets/images/blogs-bg.webp";

// Lazy-loaded component
const InsightCards = lazy(() => import("../components/insights/insightCards"));

const InsightsPage = () => {
  return (
    <>
      <ScrollToTopButton />
      {/* Eagerly loaded HeroImageSection */}
      <HeroImageSection title="Insights" imageSrc={InsightsBG} overlay={true} />

      {/* Lazy-loaded InsightCards */}
      <Suspense fallback={<SectionLoader />}>
        <InsightCards />
      </Suspense>
    </>
  );
};

export default InsightsPage;
