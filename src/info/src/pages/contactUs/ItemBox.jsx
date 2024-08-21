import React from "react";
import { Box, Typography } from "@mui/material";

const ItemBox = ({ text, width }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        width: width ? width : "27%",
        padding: { xs: "2%", xl: "1%" },
        mt: { xs: 0, md: "3%", lg: "1%" },
        transition: "background-color 0.3s, color 0.3s",
        "&:hover": {
          backgroundColor: "#378C92",
          "& svg": {
            color: "white",
          },
          "& p": {
            color: "white",
          },
        },
        animation: `slideInFromLeft 2s ease-in-out`,
      }}
    >
      <Typography
        sx={{
          color: "black",
          mt: { xs: "5%", md: "5%", lg: "5%" },
          fontSize: { xs: "12px", lg: "16px" },
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default ItemBox;
