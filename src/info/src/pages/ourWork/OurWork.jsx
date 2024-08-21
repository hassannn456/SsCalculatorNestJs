import React from "react";
import HeroImageSection from "./../../components/general/heroImageSection";
import HeroBg from "../../../public/assets/pngs/workHeroBg.jpeg";
import CategoriesTabs from "./../../components/work/categoriesTabs";

const OurWork = () => {
  return (
    <>
      <HeroImageSection title={"Our Work"} imageSrc={HeroBg} />
      <CategoriesTabs />
    </>
  );
};

export default OurWork;
