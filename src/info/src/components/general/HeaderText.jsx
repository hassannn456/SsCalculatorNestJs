import React from "react";
import { Grid, Typography } from "@mui/material";

const HeaderText = () => {
  return (
    <Grid
      container
      sx={{
        display: "block",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center left",
        textAlign: "center",
        width: "100%",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        py: 7,
        px: { md: 44, sm: 20, xs: 5 },
      }}
    >
      <Typography
        sx={{
          color: "#378C92",
          fontSize: "14px",
          fontWeight: "600",
          letterSpacing: "3px",
          textAlign: "center",
          fontFamily: "Barlow",
        }}
      >
        GET TO KNOW ABOUT US
      </Typography>
      <Typography
        sx={{
          fontSize: "46px",
          fontWeight: "800",
          lineHeight: "1",
          color: "#161c26",
          mb: "10px",
          textAlign: "center",
          fontFamily: "Barlow",
        }}
      >
        Techietribe's Journey
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "500",
          color: "grey",
          textAlign: "center",
          lineHeight: "1.8",
        }}
      >
        TechieTribe sparks a revolution in technology by streamlining the
        integration of cutting-edge solutions into everyday business practices.
        Navigating the digital landscape can be daunting, but our platform
        serves as a beacon, guiding companies through the complexities of modern
        tech with ease and efficiency.
      </Typography>
    </Grid>
  );
};

export default HeaderText;
