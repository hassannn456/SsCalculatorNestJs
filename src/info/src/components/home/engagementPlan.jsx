import React, { useState, useEffect } from "react";

import { Box, Button, Card, Typography, Slide } from "@mui/material";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import { CheckBox, Translate } from "@mui/icons-material";
import ProjectsIndex from "./projectsIndex";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@mui/material";
import { motion } from 'framer-motion';

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: { xs: "40px 15px", lg: "80px 0px" },
    alignItems: "center",
    margin: "auto",
    width: { xs: "100%", md: "59rem", lg: "80rem", xl: "90rem" },
  },

  heading: {
    fontSize: "20px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#378C92",
    marginBottom: "20px",
    textDecoration: "underline",
    textDecorationColor: "#313431",
    textDecorationThickness: "2px",
    textUnderlineOffset: "4px",
  },

  subHeading: {
    fontSize: "18px",
    fontFamily: "Barlow",
    fontWeight: "600",
    color: "#313431",
    textAlign: "center",
    width: { xs: "100%", md: "80%" },
  },

  cardContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "50px 30px",
    borderRadius: "20px",
    width: "100%",
    mt: "2rem",
    transition: "background-color 0.5s ease",

    "&:hover": {
      backgroundColor: "#0E8487",
      "& .text": {
        color: "#ffffff",
      },

      "& .quoteBtn": {
        backgroundColor: "transparent",
        color: "#ffffff",
        border: "1px solid #ffffff",
      },

      "& .popular": {
        color: "#ffffff",
        backgroundColor: "#97AFAE",
      },
      "& .icon": {
        backgroundColor: "#ffffff",
      },
    },
  },

  iconContainer: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    border: "1px solid #378C92",
    borderRadius: "10px",
    width: "max-content",
  },

  cardTopText: {
    fontSize: "14px",
    fontFamily: "Barlow",
    fontWeight: "500",
    color: "#313431",
  },

  cardHeading: {
    fontSize: "24px",
    fontFamily: "Barlow",
    fontWeight: "600",
    color: "#378C92",
  },

  cardData: {
    fontSize: "13px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#00000",
  },

  cardTagline: {
    fontSize: "16px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#00000",
  },

  quoteBtn: {
    mt: "2rem",
    color: "#378C92",
    textTransform: "none",
    backgroundColor: "white",
    border: "1px solid #378C92",
    fontSize: "16px",
    width: { xs: "200px", md: "150px" },
    height: "45px",
    transition: "0.5 ease",
    letterSpacing: "2px",

    "&:hover": {
      backgroundColor: "transparent",
      color: "#ffffff",
      border: "1px solid #ffffff",
    },
  },
};

const data = [
  {
    id: 1,
    content: "Assess specs to cover all the if’s but’s and what if's",
  },
  {
    id: 2,
    content: "Visualize your end product without spending money on development",
  },
  {
    id: 3,
    content:
      "Focus on your core business while we take care of the technicalities",
  },
  {
    id: 4,
    content: "Support via E-mail and Phone",
  },
  {
    id: 5,
    content: "Augment your existing in-house / external team",
  },
  {
    id: 6,
    content: "Develop a product - working in a true agile fashion",
  },
  {
    id: 7,
    content: "Maintain & support your existing product",
  },
  {
    id: 8,
    content: "Visualize your end product without spending money on development",
  },
];

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

const EngagementPlan = ({ projectIndex = true }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 600px)");

  const [slideIn, setSlideIn] = useState(false);
  useEffect(() => {
    setSlideIn(true);
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        paddingTop: projectIndex ? { xs: "3rem", md: 0 } : 0,
        width: "100%",

      }}
    >
      {projectIndex && (
        <Box sx={{ mt: "-9rem" }}>
          {" "}
          <ProjectsIndex />
        </Box>
      )}
      <Box
        sx={{
          backgroundColor: "rgb(240, 243, 246)",
          paddingY: projectIndex ? { xs: "3rem", md: "0rem" } : 0,
          mt: projectIndex ? "-2rem" : 0,
          position: "relative",
          zIndex: 0
        }}
      >
        <Box sx={styles.mainContainer} ref={ref}>
          <Typography sx={styles.heading}>ENGAGEMENT PLAN</Typography>

          <Typography sx={styles.subHeading}>
            Share your ideas. We'll make them real. <br /> Pick your plan and let's
            start!
          </Typography>
          {isMobile ? (
            inView && (
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: "0rem", lg: "2rem" },
                  width: "100%",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                {" "}
                <motion.div
                  className="card-container"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariantsLeft}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <Card sx={styles.cardContainer}>
                    <Box sx={{ display: "flex", gap: "1rem", mb: "1rem" }}>
                      <Box sx={styles.iconContainer} className="icon">
                        <MonetizationOnRoundedIcon
                          sx={{ fontSize: "35px", color: "#378C92" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <Typography sx={styles.cardTopText} className="text">
                          For Projects
                        </Typography>
                        <Typography sx={styles.cardHeading} className="text">
                          Fixed Price
                        </Typography>
                      </Box>
                    </Box>

                    <Typography sx={styles.cardTagline} className="text">
                      On time. Within budget. As per expectations
                    </Typography>

                    {data.slice(0, 4).map((item) => (
                      <Box
                        key={item.id}
                        sx={{ display: "flex", gap: "0.5rem", mt: "1rem" }}
                      >
                        <CheckBox
                          sx={{
                            color: "#378C92",
                            borderRadius: "10px",
                            fontSize: "17px",
                          }}
                          className="text"
                        />
                        <Typography sx={styles.cardData} className="text">
                          {item.content}
                        </Typography>
                      </Box>
                    ))}

                    <Button
                      className="quoteBtn"
                      sx={styles.quoteBtn}
                      onClick={() => navigate("/contact-us")}
                    >
                      Get A Quote
                    </Button>
                  </Card>
                </motion.div>
                {" "}
                <motion.div
                  className="card-container"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariantsRight}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <Card sx={styles.cardContainer}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box sx={{ display: "flex", gap: "1rem", mb: "1rem" }}>
                        <Box sx={styles.iconContainer} className="icon">
                          <Person2RoundedIcon
                            sx={{ fontSize: "35px", color: "#378C92" }}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <Typography sx={styles.cardTopText} className="text">
                            For Dedicated Teams
                          </Typography>
                          <Typography sx={styles.cardHeading} className="text">
                            IT Experts
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        sx={{
                          display: { xs: "none", md: "flex" },
                          backgroundColor: "#f0f3f6",
                          fontSize: "16px",
                          color: "#313431",
                          borderRadius: "12px",
                          padding: "5px 25px",
                          height: "max-content",
                          fontWeight: "00",
                        }}
                        className="popular"
                      >
                        Popular
                      </Typography>
                    </Box>

                    <Typography sx={styles.cardTagline} className="text">
                      High-performing, on-demand teams of IT Experts
                    </Typography>

                    {data.slice(4, 8).map((item) => (
                      <Box
                        key={item.id}
                        sx={{ display: "flex", gap: "0.5rem", mt: "1rem" }}
                      >
                        <CheckBox
                          sx={{
                            color: "#378C92",
                            borderRadius: "10px",
                            fontSize: "17px",
                          }}
                          className="text"
                        />
                        <Typography sx={styles.cardData} className="text">
                          {item.content}
                        </Typography>
                      </Box>
                    ))}

                    <Button
                      className="quoteBtn"
                      sx={styles.quoteBtn}
                      onClick={() => navigate("/contact-us")}
                    >
                      Get A Quote
                    </Button>
                  </Card>
                </motion.div>
              </Box>
            )
          ) : (
            inView && (
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: "0rem", lg: "2rem" },
                  width: { xs: "80%", lg: "100%" },
                  flexDirection: { xs: "column", lg: "row" },
                }}
              >
                {" "}
                <Slide direction="right" in={slideIn} timeout={1800}>
                  <Card sx={styles.cardContainer}>
                    <Box sx={{ display: "flex", gap: "1rem", mb: "1rem" }}>
                      <Box sx={styles.iconContainer} className="icon">
                        <MonetizationOnRoundedIcon
                          sx={{ fontSize: "35px", color: "#378C92" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <Typography sx={styles.cardTopText} className="text">
                          For Projects
                        </Typography>
                        <Typography sx={styles.cardHeading} className="text">
                          Fixed Price
                        </Typography>
                      </Box>
                    </Box>

                    <Typography sx={styles.cardTagline} className="text">
                      On time. Within budget. As per expectations
                    </Typography>

                    {data.slice(0, 4).map((item) => (
                      <Box
                        key={item.id}
                        sx={{ display: "flex", gap: "0.5rem", mt: "1rem" }}
                      >
                        <CheckBox
                          sx={{
                            color: "#378C92",
                            borderRadius: "10px",
                            fontSize: "17px",
                          }}
                          className="text"
                        />
                        <Typography sx={styles.cardData} className="text">
                          {item.content}
                        </Typography>
                      </Box>
                    ))}

                    <Button
                      className="quoteBtn"
                      sx={styles.quoteBtn}
                      onClick={() => navigate("/contact-us")}
                    >
                      Get A Quote
                    </Button>
                  </Card>
                </Slide>{" "}
                <Slide direction="left" in={slideIn} timeout={1800}>
                  <Card sx={styles.cardContainer}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box sx={{ display: "flex", gap: "1rem", mb: "1rem" }}>
                        <Box sx={styles.iconContainer} className="icon">
                          <Person2RoundedIcon
                            sx={{ fontSize: "35px", color: "#378C92" }}
                          />
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          <Typography sx={styles.cardTopText} className="text">
                            For Dedicated Teams
                          </Typography>
                          <Typography sx={styles.cardHeading} className="text">
                            IT Experts
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        sx={{
                          display: { xs: "none", md: "flex" },
                          backgroundColor: "#f0f3f6",
                          fontSize: "16px",
                          color: "#313431",
                          borderRadius: "12px",
                          padding: "5px 25px",
                          height: "max-content",
                          fontWeight: "00",
                        }}
                        className="popular"
                      >
                        Popular
                      </Typography>
                    </Box>

                    <Typography sx={styles.cardTagline} className="text">
                      High-performing, on-demand teams of IT Experts
                    </Typography>

                    {data.slice(4, 8).map((item) => (
                      <Box
                        key={item.id}
                        sx={{ display: "flex", gap: "0.5rem", mt: "1rem" }}
                      >
                        <CheckBox
                          sx={{
                            color: "#378C92",
                            borderRadius: "10px",
                            fontSize: "17px",
                          }}
                          className="text"
                        />
                        <Typography sx={styles.cardData} className="text">
                          {item.content}
                        </Typography>
                      </Box>
                    ))}

                    <Button
                      className="quoteBtn"
                      sx={styles.quoteBtn}
                      onClick={() => navigate("/contact-us")}
                    >
                      Get A Quote
                    </Button>
                  </Card>
                </Slide>
              </Box>
            )
          )}
        </Box>
        <Box sx={{ position: "absolute", top: 0, right: 0, zIndex: -1 }}>
          <img src="/assets/pngs/bg-pattern.webp" alt="arrow" height="100%" width="100%" style={{ objectFit: "contain" }} />
        </Box>
      </Box>
    </Box>
  );
};

//330 500 -24 250

export default EngagementPlan;
