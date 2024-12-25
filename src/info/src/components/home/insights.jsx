import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import SectionHeader from "../general/SectionHeader";
import InsightData from "../insights/insightData";
import { motion } from 'framer-motion';

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: { xs: "20px 15px 60px 15px", lg: "40px 0px" },
    margin: "auto",
    alignItems: "center",
    width: { sm: "100%", md: "60rem", lg: "80rem", xl: "90rem" },
  },
  heading: {
    fontSize: "20px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#378C92",
    textAlign: "center",
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
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    mt: "2rem",
    gap: "3.3rem",
    width: { xs: "100%", sm: "90%", md: "63rem", lg: "80rem", xl: "90rem" },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: { sm: "calc(50% - 1.65rem)", md: "280px" },
    height: "360px",
    border: "1px solid #E5E5E5",
    borderRadius: "1rem",
    overflow: "hidden",
    backgroundColor: "white",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
  },
  blogContentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    gap: "0.5rem",
  },
  blogHeading: {
    fontSize: "16px",
    fontFamily: "Barlow",
    fontWeight: "600",
    color: "#378C92",
    textAlign: "center",
  },
  blogContent: {
    fontSize: "14px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#313431",
    textAlign: "center",
  },
  viewAllBtn: {
    mt: "2rem",
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: "#378C92",
    fontSize: "18px",
    height: "40px",
    padding: { xs: "20px", md: "25px 30px" },
    transition: "background-color 0.3s ease",
    borderRadius: "8px",
    letterSpacing: "2px",
    "&&:hover": {
      backgroundColor: "#313431",
    },
  },
};

const cardVariantsLeft = {
  offscreen: {
    scale: 0.9,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 50,
      duration: 0.3,
      ease: "easeOut"
    },
  },
};
const cardVariantsRight = {
  offscreen: {
    scale: 0.9,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 50,
      duration: 0.5,
    },
  },
};

const Insights = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/insight-details/${id}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        backgroundImage: 'url("/assets/pngs/bg-map.png")',
        backgroundSize: "contain",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        overflow: "hidden"
      }}
    >
      <Box sx={styles.mainContainer}>
        <SectionHeader
          title="INSIGHTS"
          subtitle="News And Articles"
          description="Explore our latest insights, uncovering how technology transforms industries—from AI fairness to innovations in e-commerce and telecom."
          width={true}
        />
        <Box sx={styles.cardContainer}>
          {InsightData?.slice(0, 4)?.map((card, index) => (
            <motion.div
              key={index}
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={index % 2 == 0 ? cardVariantsRight : cardVariantsLeft}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Box
                key={card.id}
                sx={styles.card}
                onClick={() => handleCardClick(card.id)}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "150px",
                    overflow: "hidden",
                    borderRadius: { xs: "0", md: "1rem 1rem 0 0" },
                  }}
                >
                  <img
                    src={card.image}
                    alt={`blog-image-${card.id}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box sx={styles.blogContentContainer}>
                  <Typography sx={styles.blogHeading}>
                    {card.heading}
                  </Typography>
                  <Typography sx={styles.blogContent}>
                    {card.content}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Insights;
