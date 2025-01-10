import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import heroSectionVideo from "/assets/video/HeroSectionDisplayHighQuality.mp4";
import HeroSectionSlider from "./heroSectionSlider";

const styles = {
  mainContainer: {
    width: "100%",
    height: { xs: "90vh", md: "100vh" },
    position: "relative",
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
      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%), linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)",
  },

  textContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    paddingTop: { xs: "60px", xl: "70px" },
    paddingBottom: { xs: "3.8rem", md: "4.2rem", lg: "4.9rem", xl: "5.8rem" },
  },
  heading: {
    color: "#fff",
    textAlign: "center",
    fontSize: { xs: "27px", md: "34px", lg: "52px", xl: "60px" },
    margin: "0",
    fontWeight: "700",
    lineHeight: "1.1",
    fontFamily: "Barlow",
    letterSpacing: "2px",
  },

  linkArray: {
    display: { xs: "column", md: "flex" },
    gap: "15px",
    mt: "1rem",
    justifyContent: "center",
    alignItems: "center",
  },

  tellUsBtn: {
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: "#378C92",
    fontSize: { xs: "13px", sm: "18px" },
    height: { xs: "40px", md: "40px", lg: "50px" },
    padding: {
      xs: "22px 12px",
      md: "0px 14px",
      lg: "0px 16px",
      xl: "0px 30px",
    },
    borderRadius: "8px",
    transition: "background-color 0.3s ease",
    letterSpacing: "2px",
    "&&:hover": {
      backgroundColor: "#313431",
    },
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: "1.4rem",
  },

  links: {
    display: "flex",
    color: "#fff",
    textAlign: "center",
    fontSize: { xs: "15px", md: "22px" },
    margin: "0",
    fontFamily: "Barlow",
    fontWeight: "200",
    letterSpacing: "2px",
    textDecoration: "none",
    alignItems: "center",
    gap: "10px",
    justifyContent: "center",
  },

  linksIcon: {
    display: {
      xs: "none",
      md: "flex",
    },
    color: "#fff",
    fontSize: { xs: "10px", md: "10px" },
    margin: "0 5px",
    textAlign: "center",
  },
};

const HeroSection = ({ scrollToBottom }) => {
  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.videoContainer}>
        <video playsInline autoPlay muted loop style={styles.video}>
          <source type="video/mp4" src={heroSectionVideo} />
        </video>
      </Box>
      <div style={styles.overlay}></div>
      <Box sx={styles.textContainer}>
        <Typography sx={styles.heading}>
          We Engineer
          <br></br>
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
        <HeroSectionSlider />
      </Box>
    </Box>
  );
};

export default HeroSection;
