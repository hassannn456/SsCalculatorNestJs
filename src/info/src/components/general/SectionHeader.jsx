import React from "react";
import Box from "@mui/material/Box";
import { Typography, Container } from "@mui/material";
import backgroundImage from "/assets/pngs/earth-moon.png";

const SectionIntro = ({
  title,
  subtitle,
  description,
  subtitleColor,
  justify = false,
  width = false,
}) => {
  return (
    <Container sx={{ width: "100%" }}>
      <Box
        component="section"
        sx={{
          width: "100%",
        }}
      >
        <Typography
          style={{
            fontSize: "14px",
            fontFamily: "Barlow",
            color: "#378C92",
            textAlign: justify ? "left" : "center",
            fontWeight: "600",
            letterSpacing: "3px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "43px",
            lineHeight: { xs: "48px", md: "58px" },
            fontFamily: "Barlow",
            color: subtitleColor ? subtitleColor : "#161c26",
            textAlign: justify ? "left" : "center",
            fontWeight: "700",
            letterSpacing: "-1px",
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: justify ? "17px" : "16px",
            lineHeight: "20px",
            fontFamily: "sans-serif",
            color: "#797f89",
            textAlign: justify ? "left" : "center",
            fontWeight: "400",
            marginTop: "18px",
            m: "auto",
            width: width ? { xs: "100%", sm: "90%", md: "70%" } : "100%",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Container>
  );
};

export default SectionIntro;
