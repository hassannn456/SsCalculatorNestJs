import React from "react";
import { Box } from "@mui/material";
import SectionHeader from "../general/SectionHeader";
import { motion } from 'framer-motion';

const cardVariants = {
  offscreen: {
    scale: 1.1,
    opacity: 0,
  },

  onscreen: (index) => (
    {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 50,
        stiffness: 100,
        delay: index * 0.3,
      },
    }
  ),
};

const AboutDescription = ({
  image,
  title,
  description,
  inverted = false,
  subtitle,
  bgColor,
  scale = 1
}) => {
  return (
    <Box sx={{
      backgroundColor: bgColor ? bgColor : "white",
      position: "relative",
      height: { xs: "auto", md: "85vh" },
      py: { xs: "20px", md: 0 }
    }}>
      <Box
        sx={{
          px: { xs: "1rem", md: "2rem" },
          height: "100%",
          display: "flex",
          flexDirection: {
            md: inverted ? "row-reverse" : "row",
            xs: "column",
          },
          justifyContent: "space-between",
          width: { xs: "100%", md: "63rem", lg: "80rem", xl: "90rem" },
          alignItems: "center",
          margin: "auto"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "100%", md: "50%" },
            height: { xs: "auto", md: "70vh" },
            overflow: "hidden",
          }}
        >
          <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
            transition={{ type: "spring", stiffness: 100 }}
            custom={2}
            style={{ zIndex: 5 }}
          >
            <img
              src={image}
              style={{
                width: "100%",
                height: "100%",
                transform: `scale(${scale})`,
                objectFit: "contain",
                padding: "0px 10px",
              }}
            />
          </motion.div>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <SectionHeader
            title={title}
            description={description}
            subtitle={subtitle}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutDescription;
