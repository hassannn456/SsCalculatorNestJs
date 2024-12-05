import React from "react";
import { Box, Grid, Typography, CardMedia, Container } from "@mui/material";
import selectIcon from "/assets/pngs/about/select (2).svg";
import TargetIcon from "/assets/pngs/about/target.svg";
import ChooseIcon from "/assets/pngs/about/choose.svg";
import worldIcon from "/assets/pngs/about/earth-asia.svg";

const ProcessInfo = () => {
  const gridItems = [
    {
      image: selectIcon,
      title: "Pick A Service",
      description:
        "Select from a range of services offered by our software house to meet all your needs.",
    },
    {
      image: TargetIcon,
      title: "Identify Your Goals ",
      description:
        "Explore our range of services to help you achieve your software goals.",
    },
    {
      image: ChooseIcon,
      title: "Select Your Solution",
      description:
        "Utilize our expert services to find the perfect software solutions for your needs.",
    },
    {
      image: worldIcon,
      title: "Tailored Solutions",
      description:
        "Explore and leverage the full range of our customized services.",
    },
  ];

  return (
    <Box sx={{ width: "100vw" }}>
      <Container
        maxWidth="lg"
        sx={{ pt: "2.5rem", pb: "4rem", backgroundColor: "#ffffff" }}
      >
        <Grid spacing={2} container>
          {gridItems.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{
                padding: { xs: "5px", sm: "9px", md: "20px" },
                marginBottom: { xs: "40px", md: "0px" },
                width: "100%",
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  width: "24%",
                  display: "flex",
                  margin: "auto",
                  animation: "beat 1.5s ease 0s infinite",
                }}
              />
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontWeight: "600",
                  letterSpacing: "1px",
                  lineHeight: "30px",
                  textAlign: "center",
                  marginTop: "22px",
                  fontFamily: "Barlow",
                  fontSize: "18px",
                  marginBottom: "20px",
                  color: "#11161f",
                  padding: "0px 34px",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontWeight: "400",
                  letterSpacing: "1px",
                  lineHeight: "25px",
                  textAlign: "center",
                  marginTop: "10px",
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  marginBottom: "10px",
                  color: "#888888",
                }}
              >
                {item.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
      <style jsx="true" global="true">{`
        @keyframes beat {
          0% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
          50% {
            -webkit-transform: scale(0.82);
            transform: scale(0.82);
          }
          100% {
            -webkit-transform: scale(1);
            transform: scale(1);
          }
        }
      `}</style>
    </Box>
  );
};

export default ProcessInfo;
