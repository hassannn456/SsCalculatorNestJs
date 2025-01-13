// NotFound.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        backgroundColor: "black",
        padding: "20px",
        color: "white",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 700, marginBottom: 2 }}>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 3, opacity: 0.7 }}>
        Oops! The page you're looking for doesn't exist. It might have been
        moved or deleted.
      </Typography>
      <Button
        variant="contained"
        onClick={handleGoHome}
        sx={{
          color: "#ffffff",
          textTransform: "none",
          backgroundColor: "#378C92",
          width: { xs: "100%", md: "140px" },
          fontSize: "17px",
          borderRadius: "5px",
          transition: "background-color 0.3s ease",
          border: "0px solid #378C92",
          "&&:hover": {
            backgroundColor: "#ffffff",
            color: "#378C92",
            border: "1px solid #378C92",
          },
        }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
