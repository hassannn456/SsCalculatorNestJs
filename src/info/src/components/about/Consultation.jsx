import React from "react";
import { Box, Typography, Button } from "@mui/material";
import consultationBg from "/assets/pngs/about/consultationBg.jpg";
import { useNavigate } from "react-router-dom";

const styles = {
  mainContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundImage: `url(${consultationBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: { xs: "30px 15px", lg: "30px 0px" },
    color: "#f0f3f6",
    flexDirection: { xs: "column", md: "row" },
  },
  button: {
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: "#378C92",
    width: { xs: "50%", md: "160px" },
    fontSize: "17px",
    height: { xs: "50px", md: "55px" },
    borderRadius: "12px",
    padding: { xs: "0px 10px", md: "0px 30px" },
    margin: { xs: "20px 0px", md: "0px 0px" },
    transition: "background-color 0.3s ease",
    "&&:hover": {
      backgroundColor: "#ffffff",
      color: "#378C92",
      border: "1px solid #378C92",
    },
  },
};

const Consultation = () => {
  const navigate = useNavigate();
  return (
    <Box sx={styles.mainContainer}>
      <Typography sx={{ fontSize: "1.5rem", fontWeight: 700, textAlign: { xs: "center", md: "left" } }}>
        Request a free Consultation
      </Typography>
      <Button
        variant="contained"
        sx={styles.button}
        onClick={() => navigate("/contact-us")}
      >
        Contact Us
      </Button>
    </Box>
  );
};

export default Consultation;
