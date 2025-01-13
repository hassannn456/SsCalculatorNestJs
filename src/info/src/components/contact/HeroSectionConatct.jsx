import { Grid, styled, keyframes } from "@mui/material";
import React from "react";
import backgroundImage from "/assets/images/about/About-Us.webp";

const fadeInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledHeader = styled(Grid)(({ theme, fullscreen, contact }) => ({
  backgroundSize: contact ? "contain" : "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: contact ? "#378c92" : "#ffffff",
  position: "relative",
  minHeight: fullscreen ? "100vh" : "64vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  animation: `${fadeInBottom} 3s ease`,
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    backgroundPosition: "center",
    minHeight: fullscreen ? "100vh" : "55vh",
  },
}));

const StyledHeaderItem = styled(Grid)(() => ({
  zIndex: 2,
  color: "#fff",
  textAlign: "center",
}));

const HeroSectionConatct = ({
  imageSrc = backgroundImage,
  fullscreen = undefined,
  contact = undefined,
}) => {
  return (
    <StyledHeader
      item
      xs={12}
      sx={{
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      fullscreen={fullscreen}
      contact={contact}
    >
      <StyledHeaderItem
        item
        px={{ xs: fullscreen ? 2 : 4, sm: 8 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      ></StyledHeaderItem>
    </StyledHeader>
  );
};

export default HeroSectionConatct;
