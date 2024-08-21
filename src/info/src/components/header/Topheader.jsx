import React from "react";
import { Box, Typography } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Topheader = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#378C92",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography sx={{ fontSize: "20px" }}>Welcome to TechieTribe</Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            fontSize: "20px",
            marginRight: "1rem",
            borderRight: "1px solid white",
          }}
        >
          <Typography mr={2}>0900 78601</Typography>
        </Box>
        <Box
          sx={{
            fontSize: "20px",
            marginRight: "1rem",
            borderRight: "1px solid white",
          }}
        >
          <Typography mr={2}>Get Quote Now</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <XIcon />
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Topheader;
