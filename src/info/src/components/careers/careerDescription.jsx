import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CareerPic from "/assets/images/careers/reel-color.webp";
import SectionHeader from "../../utils/commons/SectionHeader";

const styles = {
  mainContainer: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flexDirection: { xs: "column-reverse", md: "row" },
    width: "100%",
  },
  // textContainer: {
  //   display: "flex",
  //   flexDirection: "column",
  //   marginLeft: { xs: 0, md: "1rem" },
  //   width: { xs: "100%", md: "50%" },
  // },
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
    fontSize: { xs: "20px", md: "40px" },
    fontFamily: "Barlow",
    fontWeight: "600",
    color: "#313431",
  },
  aboutContent: {
    fontSize: "14px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#313431",
    mt: "2rem",
    lineHeight: "2",
  },
};

const CareerDescription = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box sx={{ width: "100vw", backgroundColor: "red" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          alignItems: "center",
          margin: "auto",
          width: "100%",
          paddingLeft: { xs: 0, md: "4rem" },
        }}
      >
        <Box sx={styles.mainContainer}>
          <Box sx={{ p: { xs: 1, md: 4 } }}>
            <Typography sx={styles.heading}>WHO WE ARE</Typography>
            <Typography sx={styles.subHeading}>
              We are from the people.
            </Typography>
            <Typography sx={styles.aboutContent}>
              We are a close-knit team of 8 dedicated individuals, united by our
              commitment to thrive in a value-driven culture. Our goal is to
              make a significant and enduring impact on both our organization
              and the careers of our team members.
            </Typography>
          </Box>
          <Box
            sx={{
              width: {xs: "91%", sm: "100%"},
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "2rem",
              overflow: "hidden",
            }}
          >
            <img
              src={CareerPic}
              alt="CareerImage"
              style={{
                width: "100%",
                height: "100%",
                transition: "transform 0.5s ease",
                transform: isHovered ? "scale(1.1)" : "scale(1)",
              }}
              loading="lazy"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CareerDescription;
