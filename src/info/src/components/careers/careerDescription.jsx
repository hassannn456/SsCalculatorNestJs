import React, { useState } from "react";
import { Box } from "@mui/material";
import CareerPic from "../../../public/assets/pngs/careers/reel-color.webp";
import SectionHeader from "../general/SectionHeader";

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
          <Box sx={styles.textContainer}>
            <SectionHeader
              subtitle={"We are from the people"}
              description={`We are a close-knit team of 8 dedicated individuals, united by our commitment to thrive in a value-driven culture. Our goal is to make a significant and enduring impact on both our organization and the careers of our team members`}
              justify={true}
            />
          </Box>
          <Box
            sx={{
              width: { lg: "50%", sm: "100%", xs: "100%" },
              display: { xs: "none", lg: "flex" },
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
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

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
  descriptionText: {
    fontSize: { xs: "13px", md: "15px" },
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "black",
    textAlign: "justify",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: { xs: 0, md: "1rem" },
    width: { xs: "100%", md: "50%" },
  },
  titleText: {
    fontSize: { xs: "20px", md: "30px" },
    fontFamily: "Barlow",
    fontWeight: "700",
    color: "#378C92",
    width: "80%",
  },
  dividerContainer: {
    width: "23%",
  },
  divider: {
    borderBottom: "5px solid #378C92",
    borderRadius: "5px",
  },
  descriptionTextContainer: {
    width: { xs: "100%", md: "80%" },
    paddingY: "1rem",
  },
};

export default CareerDescription;
