import React, { Suspense } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroSectionSlider = React.lazy(() => import("./heroSectionSlider"));
import heroSectionVideo from "/assets/video/HeroSectionDisplay.mp4";

const styles = {
  mainContainer: {
    width: "100%",
    height: { xs: "90vh", md: "100vh" },
    position: "relative",
    overflow: "hidden",
  },
  videoContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%), linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)",
  },
  textContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    padding: { xs: "60px 16px", xl: "70px 32px" },
  },
  heading: {
    color: "#fff",
    textAlign: "center",
    fontSize: { xs: "33px", md: "34px", lg: "52px", xl: "60px" },
    margin: "0",
    fontWeight: "700",
    lineHeight: "1.1",
    fontFamily: "Barlow",
    letterSpacing: "2px",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: "1.4rem",
  },
  tellUsBtn: {
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: "#378C92",
    fontSize: { xs: "13px", sm: "18px" },
    height: "40px",
    padding: "12px 30px",
    borderRadius: "8px",
    transition: "background-color 0.3s ease",
    letterSpacing: "2px",
    "&:hover": {
      backgroundColor: "#313431",
    },
  },
};

const HeroSection = ({ scrollToBottom }) => {
  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.videoContainer}>
        <video
          playsInline
          autoPlay
          muted
          loop
          style={styles.video}
          poster="/assets/images/hero-fallback.jpg"
        >
          <source type="video/mp4" src={heroSectionVideo} />
        </video>
      </Box>
      <div style={styles.overlay}></div>
      <Box sx={styles.textContainer}>
        <Typography sx={styles.heading}>
          We Engineer
          <br />
          Software Solutions
        </Typography>
        <Box sx={styles.btnContainer}>
          <Button sx={styles.tellUsBtn} onClick={scrollToBottom}>
            Tell Us About Your Project
            <ArrowForwardIcon sx={{ ml: 1 }} />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          bottom: "0%",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        <Suspense fallback={<div style={{ height: "100px" }} />}>
          <HeroSectionSlider />
        </Suspense>
      </Box>
    </Box>
  );
};

export default HeroSection;
