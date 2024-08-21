import React from "react";
import Box from "@mui/material/Box";
import { Typography, Container } from "@mui/material";

const SectionIntro = ({
  title,
  subtitle,
  description,
  subtitleColor,
  justify = false,
}) => {
  return (
    <Container sx={{ width: "100%" }}>
      <Box component="section" sx={{ width: "100%" }}>
        <Typography
          variant="body2"
          style={{
            fontSize: "18px",
            lineHeight: "32px",
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
          variant="h3"
          style={{
            fontSize: "43px",
            lineHeight: "40px",
            fontFamily: "Barlow",
            color: subtitleColor ? subtitleColor : "#161c26",
            textAlign: justify ? "left" : "center",
            fontWeight: "600",
            marginTop: "10px",
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="body2"
          style={{
            fontSize: justify ? "17px" : "16px",
            lineHeight: "27px",
            fontFamily: "sans-serif",
            color: "#797f89",
            textAlign: justify ? "left" : "center",
            fontWeight: "400",
            marginTop: "18px",
            // padding: "0px 20px",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Container>
  );
};

export default SectionIntro;
