import React, { Suspense, lazy } from "react";
import HeroImageSection from "../utils/commons/heroImageSection";
import CareersBg from "/assets/images/careers/careers-hero.jpeg";
import { SectionLoader } from "../utils/commons/Loaders";

// Lazy-loaded components
const CareerDescription = lazy(() =>
  import("../components/careers/careerDescription")
);
const CareerTracks = lazy(() => import("../components/careers/career-tracks"));
const CareerTracksImages = lazy(() =>
  import("../components/careers/careerTracksImages")
);
const HiringProcess = lazy(() =>
  import("../components/careers/our-hiring-process")
);
const CareerForm = lazy(() => import("../components/careers/career-form"));
const Consultation = lazy(() => import("../components/about/Consultation"));

const CareersPage = () => {
  return (
    <>
      {/* HeroImageSection: Eagerly Loaded */}
      <HeroImageSection
        title="Careers"
        imageSrc={CareersBg}
        overlay={true}
        fullscreen={true}
        call={true}
        subText="Join our dynamic team where innovation meets opportunity. At the heart of everything we do is a commitment to personal growth, professional excellence, and making a meaningful impact."
      />

      {/* Lazy-loaded Sections */}
      <Suspense fallback={<SectionLoader />}>
        <CareerDescription />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <CareerTracks />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <CareerTracksImages />
      </Suspense>

      <Suspense fallback={<SectionLoader bg="grey" />}>
        <HiringProcess />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <CareerForm />
      </Suspense>

      {/* Consultation: Eagerly Loaded */}
      <Consultation />
    </>
  );
};

export default CareersPage;
