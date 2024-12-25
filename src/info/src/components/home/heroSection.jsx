import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import heroSectionVideo from "/assets/video/HeroSectionVideo.mp4";
import HeroSectionSlider from "./heroSectionSlider";

const styles = {
  mainContainer: {
    width: "100%",
    height: { xs: "80vh", md: "100vh" },
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
    width: "100%",
    position: "absolute",
    top: { xs: "35%", md: "30%", lg: "30%" },
    left: "50%",
    transform: "translate(-50%, 0)",
  },
  heading: {
    color: "#fff",
    textAlign: "center",
    fontSize: { xs: "30px", md: "60px" },
    margin: "0",
    fontWeight: "700",
    lineHeight: "1.2",
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
    fontSize: { xs: "14px", sm: "20px" },
    height: { xs: "40px", lg: "60px" },
    borderRadius: "8px",
    padding: { xs: "0px 10px", sm: "0px 30px" },
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
    mt: "2rem",
    mb: { xs: "5rem", lg: "10rem", xl: "40rem" },
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
