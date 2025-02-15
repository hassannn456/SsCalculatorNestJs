import React from "react";
import { Box } from "@mui/material";
import HeroImageSection from "../utils/commons/heroImageSection";
import HeaderText from "../utils/commons/HeaderText";

import AboutDescription1 from "../components/services/AboutDescription";
import Process from "../components/about/Process";
import Testimonials from "../components/services/Testimonials";
import RequestQuote from "../components/home/requestQuotes";

import Header from "/assets/images/about/AboutHeaderSec.webp";
import ExtraHeader from "/assets/images/about/businessSuccess.webp";
import AboutBG from "/assets/images/about/About-Us.webp";
import image from "/assets/images/about/mk-5-removebg-preview.webp";

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
          <img
            src="/assets/images/blog-shape-1.webp"
            alt=""
            style={{
              height: "auto",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>

      <Box sx={{ position: "relative" }}>
        <AboutDescription1
          image={ExtraHeader}
          title={"WHY CHOOSE US"}
          subtitle={"We are increasing Business Success"}
          description={`At TechieTribe, we deliver innovative, customized digital transformation solutions with a focus on engineering excellence and client-centric service. Our expert team ensures robust, scalable software tailored to your unique needs, maximizing ROI and driving long-term success. Choose TechieTribe for a dedicated partner in achieving your business goals efficiently and effectively.`}
          scale={0.8}
          inverted={true}
        />
        <Box sx={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}>
          <img
            src="/assets/images/bg-about1.webp"
            alt=""
            style={{
              height: "auto",
              width: "100%",
              opacity: 0.1,
            }}
          />
        </Box>
      </Box>

      <Box sx={{ position: "relative" }}>
        <AboutDescription1
          image={image}
          title={"CONTACT US"}
          subtitle={"Leading Innovators in Web and Mobile Development"}
          description={`Techietribe is not just another software house, we are your partners
            in innovation. Specializing in cutting-edge web and mobile
            development, we turn visionary ideas into functional, user-friendly
            applications. Our team combines expertise and creativity to deliver
            top-notch digital solutions, ensuring your business stands out in a
            competitive market.`}
          scale={1.2}
          bgColor={"rgb(240, 243, 246)"}
        />
        <Box sx={{ position: "absolute", top: 0, right: 0 }}>
          <img
            src="https://redvisionexperts.com/wp-content/uploads/2020/10/bg-map-3.webp"
            alt=""
            style={{
              height: "auto",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>

      <Process />

      <Testimonials />

      <RequestQuote inPage={false} />
    </Box>
  );
};

export default About;
