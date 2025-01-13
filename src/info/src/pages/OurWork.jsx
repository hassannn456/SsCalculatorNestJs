import React, { Suspense, lazy } from "react";
import HeroImageSection from "../utils/commons/heroImageSection";
import { SectionLoader } from "../utils/commons/Loaders";

import PortfolioBG from "/assets/images/portfolio-bg.webp";

// Lazy-loaded component
const CategoriesTabs = lazy(() => import("../components/ourWork/categoriesTabs"));

const OurWork = () => {
  return (
    <>
      {/* Eagerly loaded HeroImageSection */}
      <HeroImageSection title={"Our Work"} imageSrc={PortfolioBG} />

      {/* Lazy-loaded CategoriesTabs */}
      <Suspense fallback={<SectionLoader />}>
        <CategoriesTabs />
      </Suspense>
    </>
  );
};

export default OurWork;
