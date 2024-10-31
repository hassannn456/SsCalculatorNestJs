// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";

import { Box, Zoom, Slide, Typography } from "@mui/material";
import CallMadeTwoToneIcon from "@mui/icons-material/CallMadeTwoTone";
import { useInView } from "react-intersection-observer";
import WebDevIcon from "/assets/pngs/services/WebDevelopment.png";
import MobileAppIcon from "/assets/pngs/services/MobileApp.png";
import UIUX from "/assets/pngs/services/UIUX.png";
import SoftwareInnovation from "/assets/pngs/services/SoftwareInnovation.png";
import WebDevImage from "/assets/pngs/services/WebDevImage.png";
import MobileDevImage from "/assets/pngs/services/MobileDevImage.png";
import UIUXImage from "/assets/pngs/services/UIImage1.png";
import BlockchainImage from "/assets/pngs/services/BlockchainImage.png";

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: { xs: "20px 15px", lg: "80px" },
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  cardParent: {
    "&:nth-of-type(2n)": {
      mt: { xs: "0rem", md: "5rem" },
    },
    "&:nth-of-type(4n)": {
      mt: { xs: "0rem", md: "5rem" },
    },
    "&:hover": {
      transform: "translateY(-10px)",
    },
  },
  heading: {
    fontSize: "20px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#378C92",
    textDecoration: "underline",
    textDecorationColor: "#313431",
    textDecorationThickness: "2px",
    textUnderlineOffset: "4px",
  },
  subHeading: {
    fontSize: { xs: "20px", lg: "40px" },
    fontFamily: "Barlow",
    fontWeight: "600",
    color: "#313431",
    textAlign: "center",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    mt: "3rem",
    gap: "26px",
    width: { xs: "100%", md: "63rem", lg: "80rem", xl: "90rem" },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "30px",
    width: { xs: "100%", md: "280px", lg: "300px" },
    borderTop: "8px solid #378C92",
    height: "400px",
    transition: "transform 0.3s ease",
    position: "relative",
    "&:nth-of-type(2n)": {
      mt: { xs: "0rem", md: "5rem" },
    },
    "&:nth-of-type(4n)": {
      mt: { xs: "0rem", md: "5rem" },
    },
    "&:hover": {
      transform: "translateY(-10px)",
    },
    backgroundSize: "contain",
    backgroundPosition: "center",
    overflow: "hidden",
  },

  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(4px)",
  },

  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    backgroundColor: "#378C92",
    borderRadius: "50%",
    padding: "15px",
    minWidth: "unset",
    minHeight: "unset",
    width: "auto",
    height: "auto",
  },

  cardHeading: {
    fontSize: "24px",
    lineHeight: "1.2",
    fontFamily: "Barlow",
    fontWeight: "500",
    color: "#ffffff",
  },
  cardContent: {
    fontSize: "12px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#ffffff",
    mt: "1rem",
  },

  headingContainer: {
    display: "flex",
    gap: "0.5rem",
  },

  headingLine: {
    width: "5px",
    height: "100%",
    backgroundColor: "#378C92",
  },
};

const Services = () => {
  const mainIconRef = useRef(null);
  const arrowIconRef = useRef(null);
  const contentRef = useRef(null);
  const [sldIn, setSldIn] = useState(false);
  const [slideIn, setSlideIn] = useState([false, false, false, false]);

  useEffect(() => {
    setSldIn(true);
    setSlideIn([true, false, false, false]);
    setTimeout(() => {
      setSlideIn([true, true, false, false]);
    }, 1000);
    setTimeout(() => {
      setSlideIn([true, true, true, false]);
    }, 1500);
    setTimeout(() => {
      setSlideIn([true, true, true, true]);
    }, 2000);
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const cardData = [
    {
      icon: WebDevIcon,
      heading: "Web Development",
      content:
        "Craft interactive and dynamic websites tailored to your business needs. Our expert developers leverage the latest technologies to deliver high-performance web solutions that drive results.",
      backgroundImage: WebDevImage,
    },
    {
      icon: MobileAppIcon,
      heading: "Mobile App Development",
      content:
        "Transform your ideas into powerful mobile applications. From conceptualization to deployment, our skilled team specializes in creating intuitive and feature-rich mobile apps across platforms.",
      backgroundImage: MobileDevImage,
    },
    {
      icon: UIUX,
      heading: "UI/UX Design",
      content:
        "Enhance user engagement and satisfaction with captivating UI/UX designs. We focus on creating seamless user experiences through intuitive interfaces and visually appealing designs.",
      backgroundImage: UIUXImage,
    },
    {
      icon: SoftwareInnovation,
      heading: "Blockchain",
      content:
        "Explore the potential of blockchain technology for secure and transparent transactions. Our blockchain experts provide innovative solutions for decentralized applications and smart contracts.",
      backgroundImage: BlockchainImage,
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#ffffff" }} ref={ref}>
      {inView && (
        <Box sx={styles.mainContainer}>
          <Slide in={sldIn} direction="right" timeout={1800}>
            <Typography sx={styles.heading}>REASON TO CHOOSE US</Typography>
          </Slide>
          <Slide in={sldIn} direction="left" timeout={1800}>
            <Typography sx={styles.subHeading}>
              We provide truly prominent IT solutions.
            </Typography>
          </Slide>{" "}
          <Box sx={styles.cardContainer}>
            {cardData.map((card, index) => (
              <Slide
                in={!!slideIn[index]}
                direction="up"
                timeout={1800}
                key={index}
              >
                <Box sx={{ ...styles.cardParent }}>
                  <Box
                    key={index}
                    sx={{
                      ...styles.card,
                      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%), url(${card.backgroundImage})`,
                      justifyContent:
                        hoveredIndex === index ? "space-between" : "flex-end",
                    }}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Box
                      sx={{
                        ...styles.backgroundImage,
                        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%), url(${card.backgroundImage})`,
                      }}
                    />
                    {hoveredIndex === index && (
                      <Box sx={styles.iconContainer}>
                        <Box ref={mainIconRef}>
                          <Slide
                            direction="right"
                            in
                            timeout={500}
                            container={mainIconRef.current}
                          >
                            <Box sx={styles.icon}>
                              <img
                                src={card.icon}
                                alt="icon"
                                style={{ width: "50px", height: "45px" }}
                              />
                            </Box>
                          </Slide>
                        </Box>
                        <Box ref={arrowIconRef}>
                          <Slide
                            direction="left"
                            in
                            timeout={500}
                            container={arrowIconRef.current}
                          >
                            <CallMadeTwoToneIcon
                              sx={{
                                fontSize: "40px",
                                cursor: "pointer",
                                color: "#ffffff",
                              }}
                            />
                          </Slide>
                        </Box>
                      </Box>
                    )}

                    {hoveredIndex === index ? (
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Slide
                          direction="right"
                          in
                          timeout={500}
                          container={contentRef.current}
                        >
                          <Box sx={styles.headingContainer}>
                            <Box sx={styles.headingLine} />
                            <Typography
                              sx={{ ...styles.cardHeading, fontSize: "20px" }}
                            >
                              {card.heading}
                            </Typography>
                          </Box>
                        </Slide>
                        <Slide
                          direction="up"
                          in
                          timeout={500}
                          container={contentRef.current}
                        >
                          <Typography sx={styles.cardContent}>
                            {card.content}
                          </Typography>
                        </Slide>
                      </Box>
                    ) : (
                      <Box sx={styles.headingContainer}>
                        <Box sx={styles.headingLine} />
                        <Typography sx={styles.cardHeading}>
                          {card.heading}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Slide>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Services;
