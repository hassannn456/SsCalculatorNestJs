import React from "react";
import { Grid, Typography } from "@mui/material";

import Experienced from "../../../public/assets/pngs/careers/experienced-professionals.webp";
import Internship from "../../../public/assets/pngs/careers/internship.webp";
import Graduates from "../../../public/assets/pngs/careers/graduates.webp";

const CareerTracksImages = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: "2rem",
        backgroundColor: "#ffffff",
        paddingBottom: "4rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <img
          src={Graduates}
          width="300px"
          height="300px"
          style={{ borderRadius: "10px" }}
        />
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "1",
            color: "#161c26",
            mb: "10px",
            textAlign: "center",
            fontFamily: "Barlow",
          }}
        >
          Graduates
        </Typography>
      </Grid>

      <Grid sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <img
          src={Experienced}
          width="300px"
          height="300px"
          style={{ borderRadius: "10px" }}
        />
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "1",
            color: "#161c26",
            mb: "10px",
            textAlign: "center",
            fontFamily: "Barlow",
          }}
        >
          Experienced Professionals
        </Typography>
      </Grid>

      <Grid sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <img
          src={Internship}
          width="300px"
          height="300px"
          style={{ borderRadius: "10px" }}
        />
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "1",
            color: "#161c26",
            mb: "10px",
            textAlign: "center",
            fontFamily: "Barlow",
          }}
        >
          Internship/MTO
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CareerTracksImages;
