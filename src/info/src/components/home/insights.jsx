import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import BlogImage1 from "../../../public/assets/pngs/insights/blog01.jpeg";
import BlogImage2 from "../../../public/assets/pngs/insights/blog-2.png";
import BlogImage3 from "../../../public/assets/pngs/insights/blog-3.png";
import BlogImage4 from "../../../public/assets/pngs/insights/blog-4.png";
import SectionHeader from "../general/SectionHeader";

const cardData = [
  {
    image: BlogImage1,
    heading:
      "How Fair is Your AI? Exploring the Challenge of Defining ‘Fairness",
    content:
      "Artificial intelligence (AI) has rapidly transformed various industries, from healthcare to finance, ...",
    id: 1,
  },
  {
    image: BlogImage2,
    heading: "Impact of Chat GPT on the Telecom Industry",
    content:
      "The telecommunications industry is one that is constantly evolving and adapting to new technologies. ...",
    id: 2,
  },
  {
    image: BlogImage3,
    heading: "The power of E-Commerce cloud computing – An Insight",
    content:
      "Artificial intelligence (AI) has rapidly transformed various industries, from healthcare to finance, ...",
    id: 3,
  },
  {
    image: BlogImage4,
    heading: "Impact of AI on changing World and Its Ethical Implications",
    content:
      "AI stands for Artificial Intelligence, which refers to the development of computer systems that can, ...",
    id: 4,
  },
];

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: { xs: "20px 15px", lg: "80px 0px" },
    backgroundColor: "#ffffff",
    margin: "auto",
    alignItems: "center",
    width: { sm: "100%", md: "60rem", lg: "80rem", xl: "90rem" },
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
    mt: "2rem",
    gap: "3.3rem",
    width: { xs: "100%", sm: "90%", md: "63rem", lg: "80rem", xl: "90rem" },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: { sm: "calc(50% - 1.65rem)", md: "280px" },
    height: "360px",
    border: "1px solid #E5E5E5",
    borderRadius: "1rem",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
  },
  blogContentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    gap: "0.5rem",
  },
  blogHeading: {
    fontSize: "16px",
    fontFamily: "Barlow",
    fontWeight: "600",
    color: "#378C92",
    textAlign: "center",
  },
  blogContent: {
    fontSize: "14px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#313431",
    textAlign: "center",
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
};

const Insights = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/insight-details/`);
  };

  return (
    <Box sx={{ backgroundColor: "#ffffff" }}>
      <Box sx={styles.mainContainer}>
        <SectionHeader title={"INSIGHTS"} subtitle={"News And Articles"} />
        <Box sx={styles.cardContainer}>
          {cardData.map((card) => (
            <Box key={card.id} sx={styles.card} onClick={handleCardClick}>
              <Box
                sx={{
                  width: "100%",
                  height: "150px",
                  overflow: "hidden",
                  borderRadius: { xs: "0", md: "1rem 1rem 0 0" },
                }}
              >
                <img
                  src={card.image}
                  alt={`blog-image-${card.id}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                  }}
                />
              </Box>
              <Box sx={styles.blogContentContainer}>
                <Typography sx={styles.blogHeading}>{card.heading}</Typography>
                <Typography sx={styles.blogContent}>{card.content}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Insights;