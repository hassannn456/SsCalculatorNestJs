import React from "react";
import { Grid, Typography } from "@mui/material";

const CareerTracks = () => {
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
        OPPORTUNITIES
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
        CAREER TRACKS
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
        Techies, innovators, developers, and free-thinkers… you’ve come to the
        right place. Whether you’re an experienced professional or a recent
        graduate, working with Systems will give you opportunities to excel and
        achieve the global recognition that you deserve!
      </Typography>
    </Grid>
  );
};

export default CareerTracks;
