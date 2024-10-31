import {
  Grid,
  Stack,
  Typography,
  styled,
  keyframes,
  Button,
  Box,
} from "@mui/material";
import React from "react";
import backgroundImage from "/assets/pngs/about/About-Us.jpg";
import { Link, useNavigate } from "react-router-dom";

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
  backgroundSize: contact ? "contain" : "cover", // Scale down the image if contact is true
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
    // background:
    //   "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
    // zIndex: 1,
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
  title,
  fullscreen = undefined,
  call = false,
  subText,
  contact = undefined,
}) => {
  const navigate = useNavigate();
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
