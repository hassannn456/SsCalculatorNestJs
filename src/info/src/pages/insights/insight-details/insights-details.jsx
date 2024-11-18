import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Divider,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import HeroImageSection from "../../../components/general/heroImageSection";
import webDevelopment from "/assets/pngs/webdevelopment.avif";
import BlogImage1 from "/assets/pngs/insights/blog01.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate, useParams } from "react-router-dom";
import InsightData from "../../../components/insights/insightData";

const styles = {
  "@keyframes fadeInUp": {
    from: {
      opacity: 0,
      transform: "translateY(20px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes slideInLeft": {
    from: {
      opacity: 0,
      transform: "translateX(-100px)",
    },
    to: {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  "@keyframes scaleIn": {
    from: {
      opacity: 0,
      transform: "scale(0.8)",
    },
    to: {
      opacity: 1,
      transform: "scale(1)",
    },
  },
  fadeInUp: {
    opacity: 0,
    animation: `fadeInUp 0.5s forwards`,
  },
  slideInLeft: {
    opacity: 0,
    animation: `slideInLeft 0.5s forwards`,
  },
  scaleIn: {
    opacity: 0,
    animation: `scaleIn 0.5s forwards`,
  },
};

const fadeInUpStyle = (delay) => ({
  ...styles.fadeInUp,
  animationDelay: `${delay}s`,
});

const slideInLeftStyle = (delay) => ({
  ...styles.slideInLeft,
  animationDelay: `${delay}s`,
});

const scaleInStyle = (delay) => ({
  ...styles.scaleIn,
  animationDelay: `${delay}s`,
});

const InsightDetails = () => {
  const { id } = useParams();
  const data = InsightData.find((item) => item.id === id);
  const navigate = useNavigate();

  if (!data) {
    return (
      <Typography variant="h6" color="textSecondary">
        Article not found
      </Typography>
    );
  }

  const handlePrevious = () => {
    if (id > 1) {
      navigate(`/insight-details/${Number(id) - 1}`);
    }
  };

  const handleNext = () => {
    if (Number(id) < InsightData.length) {
      navigate(`/insight-details/${Number(id) + 1}`);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "#666666",
        "@keyframes fadeInUp": styles["@keyframes fadeInUp"],
        "@keyframes slideInLeft": styles["@keyframes slideInLeft"],
        "@keyframes scaleIn": styles["@keyframes scaleIn"],
      }}
    >
      <HeroImageSection imageSrc={webDevelopment} title={data.heading} />
      <Container sx={{ padding: { xs: "1rem", md: "3rem" } }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={8}>
            <Box sx={{ width: "100%", height: { xs: "auto", md: "500px" } }}>
              <img
                src={data.image || BlogImage1}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
                alt={data.title}
              />
            </Box>
            <Box sx={{ mt: "1rem", marginBottom: "1rem" }}>
              <Typography variant="caption" color="textSecondary">
                Published on: August 2, 2024
              </Typography>
              <Divider sx={{ marginY: "1rem" }} />
            </Box>
            <div style={fadeInUpStyle(0.5)}>
              <Typography
                variant="h5"
                gutterBottom
                fontWeight={600}
                color={"#378c92"}
              >
                {data.heading}
              </Typography>
              <Typography paragraph>{data.description}</Typography>
            </div>
            <Box>
              {data.headings &&
                data.headings.map((item, index) => (
                  <div key={index} style={slideInLeftStyle(1)}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      fontWeight={500}
                      color={"black"}
                    >
                      {item.heading}
                    </Typography>
                    {item.description &&
                      item.description.map((detail, i) => (
                        <Typography key={i} paragraph>
                          {detail}
                        </Typography>
                      ))}
                  </div>
                ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "2rem",
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                onClick={handlePrevious}
                startIcon={<ArrowBackIcon />}
                disabled={id <= 1}
                sx={{
                  textTransform: "none",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "8px",
                  border: "1px solid #378c92",
                  color: "#378c92",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #378c92",
                  },
                }}
              >
                Previous
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleNext}
                disabled={id >= InsightData.length}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  textTransform: "none",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "8px",
                  border: "1px solid #378c92",
                  color: "#378c92",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #378c92",
                  },
                }}
              >
                Next
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ marginBottom: "2rem", ...scaleInStyle(1) }}>
              <CardMedia
                component="img"
                image={webDevelopment}
                alt="Web Development Image"
                sx={{ height: 200 }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  fontWeight={600}
                  color={"#378c92"}
                >
                  AI in Modern Web Development
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Discover how artificial intelligence is transforming the
                  landscape of web development.
                </Typography>{" "}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    marginTop: "1.5rem",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "8px",
                    backgroundColor: "#378c92",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      backgroundColor: "#378c92",
                    },
                    textTransform: "none",
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InsightDetails;
