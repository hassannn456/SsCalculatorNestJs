// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import { Box, Slide, Typography } from "@mui/material";
import CallMadeTwoToneIcon from "@mui/icons-material/CallMadeTwoTone";
import WebDevIcon from "/assets/pngs/services/WebDevelopment.png";
import MobileAppIcon from "/assets/pngs/services/MobileApp.webp";
import UIUX from "/assets/pngs/services/UIUX.webp";
import SoftwareInnovation from "/assets/pngs/services/SoftwareInnovation.webp";
import WebDevImage from "/assets/pngs/services/WebDevImage.webp";
import MobileDevImage from "/assets/pngs/services/MobileDevImage.webp";
import UIUXImage from "/assets/pngs/services/UIImage1.webp";
import BlockchainImage from "/assets/pngs/services/BlockchainImage.webp";
import { motion } from 'framer-motion';
import { useMediaQuery } from "@mui/material";
import { useNavigate } from 'react-router-dom';
const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: { xs: "20px 15px", lg: "60px 80px" },
    width: "100%",
    alignItems: "center",
    position: "relative",
    zIndex: 100
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
      cursor: "pointer"
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
    mt: { xs: "3rem", lg: "2rem" },
    gap: "26px",
    width: { xs: "100%", md: "63rem", lg: "80rem", xl: "90rem" },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "30px",
    width: { xs: "300px", md: "280px", lg: "300px" },
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
    cursor: "default"
  },

  cardHeading: {
    fontSize: "24px",
    lineHeight: "1.2",
    fontFamily: "Barlow",
    fontWeight: "500",
    color: "#ffffff",
    borderBottom: "1px solid transparent",
    transition: 'all 0.1s ease',
    "&:hover": {
      fontWeight: "700",
      lineHeight: "1.5"
    }
  },
  cardContent: {
    fontSize: "12px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#ffffff",
    mt: "1rem",
    cursor: "text"
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

const cardVariantsLeft = {
  offscreen: {
    marginLeft: "-100px",
    opacity: 0,
  },
  onscreen: {
    marginLeft: "0px",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 50,
      duration: 0.5,
      ease: "easeOut"
    },
  },
};
const cardVariantsRight = {
  offscreen: {
    marginLeft: "100px",
    opacity: 0,
  },
  onscreen: {
    marginLeft: "0px",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 50,
      duration: 0.5,
    },
  },
};

const cardVariantsBottom = {
  offscreen: {
    y: 50,
    opacity: 0,
  },

  onscreen: (index) => (
    {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 50,
        stiffness: 100,
        delay: index * 0.3,
      },
    }
  ),
};
const Services = () => {
  const mainIconRef = useRef(null);
  const arrowIconRef = useRef(null);
  const contentRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();

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
      url: "/services/web-development"
    },
    {
      icon: MobileAppIcon,
      heading: "Mobile App Development",
      content:
        "Transform your ideas into powerful mobile applications. From conceptualization to deployment, our skilled team specializes in creating intuitive and feature-rich mobile apps across platforms.",
      backgroundImage: MobileDevImage,
      url: "/services/mobile-application"
    },
    {
      icon: UIUX,
      heading: "UI/UX Design",
      content:
        "Enhance user engagement and satisfaction with captivating UI/UX designs. We focus on creating seamless user experiences through intuitive interfaces and visually appealing designs.",
      backgroundImage: UIUXImage,
      url: "/services/ui-design"
    },
    {
      icon: SoftwareInnovation,
      heading: "Blockchain",
      content:
        "Explore the potential of blockchain technology for secure and transparent transactions. Our blockchain experts provide innovative solutions for decentralized applications and smart contracts.",
      backgroundImage: BlockchainImage,
      url: "/services/blockchain"
    },
  ];

  const handleNavigation = (e, url) => {
    navigate(url);
  }

  const handlePropagation = (e) => e.stopPropagation();

  return (
    <Box sx={{
      overflow: "hidden",
      position: "relative"
    }}>
      <Box sx={styles.mainContainer}>
        <Typography sx={styles.heading}>REASON TO CHOOSE US</Typography>
        <Typography sx={styles.subHeading}>
          We provide truly prominent IT solutions.
        </Typography>
        {" "}
        <Box sx={styles.cardContainer}>
          {
            isMobile ? (
              cardData.map((card, index) => (
                <motion.div
                  key={index}
                  className="card-container"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={index % 2 == 0 ? cardVariantsRight : cardVariantsLeft}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <Box sx={{ ...styles.cardParent }} onClick={() => handleNavigation(card.url)}>
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
                              <Box sx={styles.icon} onClick={(e) => handlePropagation(e)}>
                                <img
                                  src={card.icon}
                                  alt="icon"
                                  style={{ width: "50px", height: "45px" }}
                                  loading="lazy"
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
                            <Typography sx={styles.cardContent} onClick={(e) => handlePropagation(e)}>
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
                </motion.div>
              ))
            ) : (
              cardData.map((card, index) => (
                <motion.div
                  key={index}
                  className="card-container"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={cardVariantsBottom}
                  transition={{ type: "spring", stiffness: 100 }}
                  custom={index}
                >
                  <Box sx={{ ...styles.cardParent, mt: index % 2 == 0 ? "0rem" : "5rem" }}
                    onClick={(e) => handleNavigation(e, card.url)}>
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
                              <Box sx={styles.icon} onClick={(e) => handlePropagation(e)}>
                                <img
                                  src={card.icon}
                                  alt="icon"
                                  style={{ width: "50px", height: "45px" }}
                                  loading="lazy"
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
                            <Typography sx={styles.cardContent} onClick={(e) => handlePropagation(e)}>
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
                </motion.div>
              ))
            )
          }
        </Box>
      </Box>
      <Box sx={{
        position: "absolute",
        top: "37px",
        right: "-125px"
      }}>
        <img src="/assets/pngs/shape3.webp" alt="bgImg" loading="lazy" style={{
          objectFit: "contain",
          width: "450px",
          height: "450px",
          opacity: 0.5
        }} />
      </Box>
    </Box>
  );
};

export default Services;
