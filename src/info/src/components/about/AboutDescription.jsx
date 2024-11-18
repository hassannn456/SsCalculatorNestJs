import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Header from "/assets/pngs/about/AboutHeader.jpg";
import SectionHeader from "../general/SectionHeader";

const AboutDescription = () => {
  return (
    <Box sx={{ width: "100vw", backgroundColor: "#ffffff" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "4rem",
          backgroundColor: "#ffffff",
          alignItems: "center",
          margin: "auto",
          width: { xs: "100%", md: "63rem", lg: "80rem", xl: "90rem" },
        }}
      >
        <Box sx={styles.mainContainer}>
          <Box sx={styles.imageContainer}>
            <img
              src={Header}
              style={{ width: "100%", height: "100%" }}
              alt="AboutImage"
            />
          </Box>
          <Box sx={styles.textContainer}>

            <SectionHeader
              title={"About Us"}
              subtitle={"We are increasing Business Success"}
              description={`TechieTribe is a leading software house that specializes in
                providing customized solutions for businesses seeking to drive
                digital transformation. With its innovative approach and focus
                on engineering excellence, TechieTribe is helping companies to
                achieve their digital transformation goals in a way that is both
                efficient and effective.`}
              justify={true}
            />

            <Box sx={styles.descriptionTextContainer}>
            </Box>
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
    flexDirection: { xs: "column", md: "row" },
    paddingX: { xs: "3%", md: 0 },
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
  imageContainer: {
    width: { lg: "50%", sm: "100%", xs: "100%" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default AboutDescription;
