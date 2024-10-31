import React from "react";
import HeroImageSection from "./../../components/general/heroImageSection";
import CategoriesTabs from "./../../components/work/categoriesTabs";

import PortfolioBG from "/assets/pngs/portfolio-bg.jpg";

const OurWork = () => {
  return (
    <>
      <HeroImageSection title={"Our Work"} imageSrc={PortfolioBG} />
      <CategoriesTabs />
    </>
  );
};

export default OurWork;
