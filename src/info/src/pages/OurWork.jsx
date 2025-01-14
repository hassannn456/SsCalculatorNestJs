import React from "react";
import HeroImageSection from "../utils/commons/heroImageSection";
import CategoriesTabs from "../components/ourWork/categoriesTabs";

import PortfolioBG from "/assets/images/portfolio-bg.webp";

const OurWork = () => {
  return (
    <>
      <HeroImageSection title={"Our Work"} imageSrc={PortfolioBG} />
      <CategoriesTabs />
    </>
  );
};

export default OurWork;
