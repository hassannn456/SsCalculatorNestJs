import React from "react";
import { Stack, Typography } from "@mui/material";

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: { xs: "40px 15px", lg: "80px 0px" },
    backgroundColor: "#ffffff",
    alignItems: "center",
    margin: "auto",
    width: { xs: "100%", md: "63rem", lg: "80rem", xl: "90rem" },
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
};

const Testimonials = () => {
  return (
    <Stack sx={{ backgroundColor: "#ffffff" }}>
      <Stack sx={styles.mainContainer}>
        <Typography sx={styles.heading}>TESTIMONIALS</Typography>
      </Stack>
    </Stack>
  );
};

export default Testimonials;
