import React, { useEffect, useState } from "react";
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
import BlogImage1 from "/assets/pngs/insights/blog01.webp";
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
  const [articleData, setArticleData] = useState({
    id: null,
    image: webDevelopment,
    title: "AI in Modern Web Development",
    description: "Discover how artificial intelligence is transforming the landscape of web development. ",
    headings: []
  });
  const [cardData, setCardData] = useState({
    id: null,
    img: webDevelopment,
    title: "AI in Modern Web Development",
    description: "Discover how artificial intelligence is transforming the landscape of web development. "
  });
  const { id } = useParams();
  const data = InsightData.find((item) => item.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    const data = InsightData.find((item) => item.id === id);
    if (!data) {
      return;
    }
    let obj = {
      id: data.id,
      image: data.image,
      title: data.title,
      description: data.description,
      headings: data.headings
    }
    setArticleData({ ...obj });
  }, [id]);

  useEffect(() => {
    const currentIndex = InsightData.findIndex((item) => item.id === id);
    const data = InsightData.find((item, index) => index === currentIndex + 1);
    if (currentIndex == InsightData.length - 1) {
      const obj = {
        id: InsightData[0].id,
        img: InsightData[0].image,
        title: InsightData[0].heading,
        description: InsightData[0].content,
      }
      setCardData({ ...obj });
    } else {
      const obj = {
        id: data.id,
        img: data.image,
        title: data.heading,
        description: data.content,
      }
      setCardData({ ...obj });
    }
  }, [articleData.id])

  if (!data) {
    return (
      <Box sx={{
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        padding: "20px"
      }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            lineHeight: "1.4",
            letterSpacing: "1px",
            marginBottom: 2
          }}
        >
          Article Not Found
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            maxWidth: "500px",
            marginTop: 1,
            fontSize: "1.1rem",
            opacity: 0.7
          }}
        >
          We're sorry, but the article you're looking for doesn't exist. Please check the URL or go back to the homepage.
        </Typography>
      </Box>

    );
  }

  const handlePrevious = (id) => {
    const currentIndex = InsightData.findIndex((item) => item.id === id);
    if (currentIndex == 0) {
      return;
    } else {
      const data = InsightData.find((item, index) => index === currentIndex - 1);
      navigate(`/insight-details/${data.id}`);
    }
  };

  const handleNext = (id) => {
    const currentIndex = InsightData.findIndex((item) => item.id === id);
    if (currentIndex == InsightData.length - 1) {
      return;
    } else {
      const data = InsightData.find((item, index) => index === currentIndex + 1);
      navigate(`/insight-details/${data.id}`);
    }
  };

  const handleCard = (id) => {
    navigate(`/insight-details/${id}`);
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
                src={articleData.image || BlogImage1}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
                alt={articleData.title}
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
              <Typography paragraph>
                {articleData.description}
              </Typography>
            </div>
            <Box>
              {articleData.headings &&
                articleData.headings.map((item, index) => (
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
                onClick={() => handlePrevious(articleData.id)}
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
                onClick={() => handleNext(articleData.id)}
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

          <Grid item xs={12} md={4} sx={{
            ":hover": {
              "cursor": "pointer"
            }
          }} onClick={() => handleCard(cardData.id)} >
            <Card sx={{ marginBottom: "2rem", ...scaleInStyle(1), position: "sticky", top: 100 }}>
              <CardMedia
                component="img"
                image={cardData.img}
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
                  {cardData.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {cardData.description}
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
                  onClick={() => handleCard(cardData.id)}
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
