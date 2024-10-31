import { Box, Fade, Slide, Zoom } from "@mui/material";
import React, { useState, useEffect } from "react";

const Loader = () => {
  const [slideIn, setSlideIn] = useState(false);
  // const [zoomIn, setZoomIn] = useState(true);

  useEffect(() => {
    setSlideIn(true);
    //   const timeOut = setTimeout(() => {
    //     setZoomIn(false);
    //   }, 1000);
    // return clearTimeout(timeOut);
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // background: "url('/public/assets/pngs/bg-app.jpg')",
        // backgroundSize: "cover",
        // backgroundColor: "black",
        // opacity: "0.9",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // background:
          // "url('https://cdn.pixabay.com/photo/2022/11/29/13/57/technology-7624582_1280.jpg')",
          backgroundSize: "cover",
          backgroundColor: "rgb(240, 243, 246)",
          // opacity: "0.5",
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
                src="/public/assets/pngs/bg-gif.gif"
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
