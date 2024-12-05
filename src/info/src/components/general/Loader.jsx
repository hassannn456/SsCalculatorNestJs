import { Box, Fade, Slide, Zoom } from "@mui/material";
import React, { useState, useEffect } from "react";

const Loader = () => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setSlideIn(true);
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundColor: "rgb(240, 243, 246)",
        }}
      >
        <Zoom in={slideIn} timeout={2000}>
          <Fade in={slideIn} timeout={1800}>
            <Box
              sx={{
                width: "1000px",
                height: "500px",
              }}
            >
              <img
                src="/assets/pngs/bg-gif.gif"
                alt="logo"
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Fade>
        </Zoom>
      </Box>
    </Box>
  );
};

export default Loader;
