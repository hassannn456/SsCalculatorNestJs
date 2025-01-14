import React from "react";
import HeroImageSection from "../utils/commons/heroImageSection";
import CareersBg from "/assets/images/careers/careers-hero.jpeg";

import CareerDescription from "../components/careers/careerDescription";
import CareerTracks from "../components/careers/career-tracks";
import CareerTracksImages from "../components/careers/careerTracksImages";
import HiringProcess from "../components/careers/our-hiring-process";
import CareerForm from "../components/careers/career-form";
import Consultation from "../components/about/Consultation";

const CareersPage = () => {
  return (
    <>
      <HeroImageSection
        title="Careers"
        imageSrc={CareersBg}
        overlay={true}
        fullscreen={true}
        call={true}
        subText="Join our dynamic team where innovation meets opportunity. At the heart of everything we do is a commitment to personal growth, professional excellence, and making a meaningful impact."
      />

      <CareerDescription />
      <CareerTracks />
      <CareerTracksImages />
      <HiringProcess />
      <CareerForm />
      <Consultation />
    </>
  );
};

export default CareersPage;
