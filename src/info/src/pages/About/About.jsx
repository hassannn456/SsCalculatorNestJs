import React from "react";
import { Box } from "@mui/material";
import HeroImageSection from "./../../components/general/heroImageSection";
import AboutBg from "/assets/pngs/work-header.jpeg";
import AboutDescription1 from "./../../components/services/AboutDescription";
import Process from "./../../components/about/Process";
import EngagementPlan from "./../../components/home/engagementPlan";
import HeaderText from "../../components/general/HeaderText";
import AboutUsCardNew from "../../components/about/AboutUsCardNew";
import RequestQuote from "../../components/home/requestQuotes";
import Testimonials from "../../components/services/Testimonials";
import Header from "/assets/pngs/about/AboutHeaderSec.png";
import ExtraHeader from "/assets/pngs/about/businessSuccess.png";
import AboutBG from "/assets/pngs/about/About-Us.jpg";

const About = () => {
  return (
    <Box>
      <HeroImageSection title="About Us" imageSrc={AboutBG} overlay={true} />
      <HeaderText />
      <Box sx={{ position: "relative" }}>
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
          bgColor={"rgb(240, 243, 246)"}
        />
        <Box sx={{ position: "absolute", top: 0, left: 0 }}>
          <img src="/assets/pngs/blog-shape-1.png" alt="" style={{
            height: "auto",
            width: "100%",
            objectFit: "contain",
          }} />
        </Box>
      </Box>
      <Box sx={{ position: "relative" }}>
        <AboutDescription1
          image={ExtraHeader}
          title={"WHY CHOOSE US"}
          subtitle={"We are increasing Business Success"}
          description={`At TechieTribe, we deliver innovative, customized digital transformation solutions with a focus on engineering excellence and client-centric service. Our expert team ensures robust, scalable software tailored to your unique needs, maximizing ROI and driving long-term success. Choose TechieTribe for a dedicated partner in achieving your business goals efficiently and effectively.

        `}
          inverted={true}
        />
        <Box sx={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}>
          <img src="/assets/pngs/bg-about1.png" alt="" style={{
            height: "auto",
            width: "100%",
            opacity: 0.1,
          }} />
        </Box>
      </Box>
      <AboutUsCardNew />
      <Process />
      <Testimonials />
      <RequestQuote bgColor={"#ffffff"} inPage={false} />
    </Box>
  );
};

export default About;
