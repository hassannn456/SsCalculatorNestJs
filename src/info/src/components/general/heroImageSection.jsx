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
import backgroundImage from "../../../public/assets/pngs/about/About-Us.jpg";
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

const StyledHeader = styled(Grid)(({ theme, fullScreen, contact }) => ({
  backgroundSize: contact ? "contain" : "cover", // Scale down the image if contact is true
  backgroundRepeat: "no-repeat",
  backgroundColor: contact ? "#378c92" : "#ffffff",
  position: "relative",
  minHeight: fullScreen ? "100vh" : "64vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  animation: `${fadeInBottom} 3s ease`,
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
    zIndex: 1,
  },
  [theme.breakpoints.down("sm")]: {
    backgroundPosition: "center",
    minHeight: fullScreen ? "100vh" : "55vh",
  },
}));

const StyledHeaderItem = styled(Grid)(() => ({
  zIndex: 2,
  color: "#fff",
  textAlign: "center",
}));

const TitleHeader = ({
  imageSrc = backgroundImage,
  title = "Latest Posts",
  fullScreen = false,
  call = false,
  subText,
  contact = false,
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
      fullScreen={fullScreen}
      contact={contact}
    >
      <StyledHeaderItem
        item
        px={{ xs: fullScreen ? 2 : 4, sm: 8 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: fullScreen ? "30px" : "20px",
              sm: fullScreen ? "65px" : "36px",
            },
            fontWeight: "bold",
            lineHeight: "3rem",
            mt: fullScreen ? 10 : 5,
            textTransform: "uppercase",
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          {title}
        </Typography>
        {subText && (
          <Box sx={{ mt: { xs: "1rem", md: "2rem" } }}>
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: { xs: "15px", md: "22px" },
                maxWidth: "100%",
                fontWeight: "400",
              }}
            >
              {subText}
            </Typography>
          </Box>
        )}

        {!call && (
          <Stack direction="row" sx={{ justifyContent: "center", mt: 1 }}>
            <Typography
              component={Link}
              to="/"
              sx={{
                fontSize: { xs: "12px", sm: "16px" },
                marginY: "6px",
                textDecoration: "none",
                color: "#378C92",
              }}
            >
              Home
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "16px" },
                marginY: "6px",
                ml: 0.6,
              }}
            >
              {` - ${title}`}
            </Typography>
          </Stack>
        )}
        {call && (
          <Button
            sx={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid #ffffff",
              padding: { xs: "0.7rem", md: "0.9rem" },
              mt: "2rem",
              mb: fullScreen ? 8 : 5,
            }}
            onClick={() => navigate("/contact-us")}
          >
            Request a Call
          </Button>
        )}
      </StyledHeaderItem>
    </StyledHeader>
  );
};

export default TitleHeader;
