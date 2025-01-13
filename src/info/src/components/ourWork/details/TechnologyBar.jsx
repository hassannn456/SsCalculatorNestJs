import React from "react";
import { Box, Typography } from "@mui/material";

const TechnologyBar = ({ images }) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "2rem",
        backgroundColor: "#F5F5F5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "20px",
          marginBottom: "2rem",
        }}
      >
        TECHNOLOGY USED
      </Typography>
      <Box
        sx={{
          width: { xs: "100%", sm: "50%", md: "30%" },
          display: "flex",
          justifyContent: "center",
          gap: "4rem",
        }}
      >
        <Box sx={{ width: "30%", display: "flex", justifyContent: "center" }}>
          <img
            src={images[0]}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            alt="Angular logo"
          />
        </Box>
        <Box sx={{ width: "30%", display: "flex", justifyContent: "center" }}>
          <img
            src={images[1]}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            alt="Angular logo"
          />
        </Box>
        <Box sx={{ width: "30%", display: "flex", justifyContent: "center" }}>
          <img
            src={images[2]}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            alt="Angular logo"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TechnologyBar;
