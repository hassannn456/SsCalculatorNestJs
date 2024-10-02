import React, { useState } from "react";
import { Box, Divider, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InsightData from "./insightData";

const categories = [
  "Artificial Intelligence",
  "Blockchain",
  "Cloud",
  "Digital Technology",
  "Electric World",
  "Miscellaneous",
  "Transportation",
];

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    margin: "auto",
    alignItems: "center",
    width: { xs: "100%", lg: "70%" },
  },
  heading: {
    fontSize: "20px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#378C92",
    textAlign: "center",
    textDecoration: "underline",
    textDecorationColor: "#313431",
    textDecorationThickness: "2px",
    textUnderlineOffset: "4px",
  },
  subHeading: {
    fontSize: "18px",
    fontFamily: "Barlow",
    fontWeight: "600",
    color: "#313431",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "3.3rem",
    width: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: { sm: "calc(50% - 1.65rem)", md: "400px" },
    height: "360px",
    border: "1px solid #E5E5E5",
    borderRadius: "1rem",
    overflow: "hidden",
    "&:hover": {
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
  },
  blogContentContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    gap: "0.5rem",
  },
  blogHeading: {
    fontSize: "16px",
    fontFamily: "Barlow",
    fontWeight: "600",
    color: "#378C92",
  },
  blogContent: {
    fontSize: "14px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#313431",
  },
  viewAllBtn: {
    mt: "2rem",
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: "#378C92",
    fontSize: "18px",
    height: "40px",
    padding: { xs: "20px", md: "25px 30px" },
    transition: "background-color 0.3s ease",
    borderRadius: "8px",
    letterSpacing: "2px",
    "&&:hover": {
      backgroundColor: "#313431",
    },
  },
  textField: {
    width: "300px",
    backgroundColor: "#ffffff",
    "& label.Mui-focused": {
      color: "#378C92",
      width: "300px",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "lightgray",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#378C92",
      },
    },
  },
  blogHeadingRecent: {
    fontSize: "14px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#313431",
    width: "80%",
    cursor: "pointer",
    "&&:hover": {
      color: "#378C92",
    },
  },
};

const InsightCards = () => {
  const navigate = useNavigate();
  const [blogsData, setBlogsData] = useState(InsightData); // Fixed useState

  const handleCardClick = (id) => {
    navigate(`/insight-details/${id}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column-reverse", lg: "row" },
        justifyContent: "center",
        padding: { xs: "20px 15px", lg: "80px" },
      }}
    >
      <Box sx={styles.mainContainer}>
        <Box sx={styles.cardContainer}>
          {blogsData.map((card, index) => (
            <Box
              key={index}
              sx={styles.card}
              onClick={() => handleCardClick(card.id)}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "250px",
                  overflow: "hidden",
                  borderRadius: { xs: "0", md: "1rem 1rem 0 0" },
                }}
              >
                <img
                  src={card.image}
                  alt={`blog-image-${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                  }}
                />
              </Box>
              <Divider sx={{ width: "100%", backgroundColor: "lightgray" }} />
              <Box sx={styles.blogContentContainer}>
                <Typography sx={styles.blogHeading}>{card.heading}</Typography>
                <Typography sx={styles.blogContent}>{card.content}</Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "Barlow",
                    fontWeight: "500",
                    color: "#378C92",
                    cursor: "pointer",
                  }}
                >
                  Read More
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", lg: "30%" },
        }}
      >
        <TextField
          size="medium"
          placeholder="Search"
          sx={styles.textField}
          inputProps={{
            sx: {
              "&::placeholder": {
                color: "gray",
                opacity: 0.4,
              },
            },
          }}
        />
        <Box sx={{ mt: "2rem" }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Barlow",
              fontWeight: "600",
              color: "#313431",
            }}
          >
            Recent
          </Typography>
          {InsightData.map((data, index) => (
            <Box
              key={index} // Added missing key prop
              onClick={() => handleCardClick(data.id)}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                mt: "0.5rem",
              }}
            >
              <Typography sx={styles.blogHeadingRecent}>
                {data.heading}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: "2rem" }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Barlow",
              fontWeight: "600",
              color: "#313431",
            }}
          >
            Categories
          </Typography>
          {categories.map((data, index) => (
            <Box
              key={index}
              onClick={() => {
                const filter = InsightData.filter(
                  (item) => item.category == data
                );
                setBlogsData(filter);
              }}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                mt: "0.5rem",
              }}
            >
              <Typography sx={styles.blogHeadingRecent}>{data}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default InsightCards;
