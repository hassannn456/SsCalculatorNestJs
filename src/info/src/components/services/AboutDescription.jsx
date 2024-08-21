import React from "react";
import { Box } from "@mui/material";
import SectionHeader from "../general/SectionHeader";

const AboutDescription = ({
  image,
  title,
  description,
  inverted = false,
  subtitle,
  bgColor,
}) => {
  return (
    <Box
      sx={{
        padding: { xs: "2rem", md: "2rem" },
        backgroundColor: bgColor ? bgColor : "white",
        display: "flex",
        flexDirection: {
          md: inverted ? "row-reverse" : "row",
          xs: "column",
        },
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", md: "50%" },
          height: "30%",
          maxHeight: "20%",
        }}
      >
        <img
          src={image}
          style={{ width: "70%", height: "auto", objectFit: "fill" }}
        />
      </Box>
      <Box sx={{ width: { xs: "100%", md: "50%" } }}>
        <SectionHeader
          title={title}
          description={description}
          subtitle={subtitle}
          justify={true}
        />
      </Box>
    </Box>
  );
};

export default AboutDescription;
