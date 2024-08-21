import React from "react";
import { Box } from "@mui/material";
import HeroImageSection from "./../../components/general/heroImageSection";
import AboutBg from "../../../public/assets/pngs/work-header.jpeg";
import AboutDescription1 from "./../../components/services/AboutDescription";
import Process from "./../../components/about/Process";
import EngagementPlan from "./../../components/home/engagementPlan";
import HeaderText from "../../components/general/HeaderText";
import AboutUsCard from "../../components/about/AboutUsCard";
import RequestQuote from "../../components/home/requestQuotes";
import Testimonials from "../../components/services/Testimonials";
import Header from "../../../public/assets/pngs/about/AboutHeader.svg";
import ExtraHeader from "../../../public/assets/pngs/about/AboutExtraHeader.svg";
const About = () => {
  return (
    <Box>
      <HeroImageSection title="About Us" imageSrc={AboutBg} overlay={true} />
      <HeaderText />
      <AboutDescription1
        image={Header}
        title={"WHO WE ARE"}
        subtitle={"We are increasing Business Success"}
        description={`TechieTribe is a leading software house that specializes in
                providing customized solutions for businesses seeking to drive
                digital transformation. With its innovative approach and focus
                on engineering excellence, TechieTribe is helping companies to
                achieve their digital transformation goals in a way that is both
                efficient and effective.`}
        bgColor={"#f0f3f6"}
      />
      <AboutDescription1
        image={ExtraHeader}
        title={"WHY CHOOSE US"}
        subtitle={"We are increasing Business Success"}
        description={`At TechieTribe, we deliver innovative, customized digital transformation solutions with a focus on engineering excellence and client-centric service. Our expert team ensures robust, scalable software tailored to your unique needs, maximizing ROI and driving long-term success. Choose TechieTribe for a dedicated partner in achieving your business goals efficiently and effectively.

        `}
        inverted={true}
      />
      {/* <Leadership /> */}
      <AboutUsCard />
      <Process />
      <Testimonials />
      <RequestQuote bgColor={"#ffffff"} inPage={true} />
      <EngagementPlan projectIndex={false} />
      {/* <Consultation /> */}
    </Box>
  );
};

export default About;
