import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Divider,
  TextField,
  Typography,
  Pagination,
  Stack,
  PaginationItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InsightData from "./insightData";

const categories = [
  // "All Insights",
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
    backgroundColor: "#ffffff",
    marginLeft: 0,
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
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "3.3rem",
    width: "100%",
    margin: "auto",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: { sm: "calc(50% - 1.65rem)", md: "400px" },
    height: "360px",
    border: "1px solid #E5E5E5",
    borderRadius: "0.5rem",
    cursor: "pointer",
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
  const [page, setPage] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(null);
  const navigate = useNavigate();
  const [blogsData, setBlogsData] = useState(InsightData);

  useEffect(() => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }, [page]);

  const handleCardClick = (id) => {
    navigate(`/insight-details/${id}`);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setCurrentCategory(null);
    const filteredData = InsightData.filter(
      (item) =>
        item.heading.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query)
    );

    setBlogsData(filteredData);
  };

  const handlePagination = (e, value) => {
    const val = +e.target.textContent;
    setPage(val - 1);
  };
  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
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
      <Box
        sx={{
          ...styles.mainContainer,
          justifyContent: blogsData.length === 0 ? "flex-start" : "center",
        }}
      >
        {blogsData.length === 0 ? (
          <Typography
            sx={{
              fontSize: "24px",
              fontFamily: "Barlow",
              fontWeight: "500",
              color: "#313431",
              marginTop: "2rem",
              textAlign: "center",
            }}
          >
            No Data Found
          </Typography>
        ) : (
          <>
            <Box
              sx={{
                ...styles.cardContainer,
              }}
            >
              {blogsData.slice(page * 8, page * 8 + 8)?.map((card, index) => (
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
                      borderRadius: { xs: "0", md: "0rem 0rem 0 0" },
                    }}
                  >
                    <img
                      src={card.image}
                      alt={`blog-image-${index}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Divider
                    sx={{ width: "100%", backgroundColor: "lightgray" }}
                  />
                  <Box sx={styles.blogContentContainer}>
                    <Typography sx={styles.blogHeading}>
                      {card.heading}
                    </Typography>
                    <Typography sx={styles.blogContent}>
                      {card.content}
                    </Typography>
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
            <Box
              sx={{
                mt: "50px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Stack spacing={2}>
                <Pagination
                  count={
                    blogsData.length === 0 ? 0 : Math.ceil(blogsData.length / 8)
                  }
                  shape="rounded"
                  page={page + 1}
                  onChange={handlePagination}
                  renderItem={(item) => (
                    <PaginationItem
                      {...item}
                      onClick={(e) => {
                        if (item.type === "previous") {
                          handlePrev();
                        } else if (item.type === "next") {
                          handleNext();
                        } else {
                          handlePagination(e);
                        }
                      }}
                    />
                  )}
                />
              </Stack>
            </Box>
          </>
        )}
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
          onChange={handleSearchChange}
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
              key={index}
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
                setCurrentCategory(data);
                const filter = InsightData.filter((item) => {
                  return item.category == data;
                });
                setPage(0);
                // {
                //   data == "All Insights"
                //     ? setBlogsData(InsightData)
                //     : setBlogsData(filter);
                // }
                setBlogsData(filter);
                window.scrollTo({
                  top: 300,
                  behavior: "smooth",
                });
              }}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                mt: "0.5rem",
              }}
            >
              {data == currentCategory ? (
                <Box
                  sx={{
                    color: "green",
                    width: "fit-content",
                    border: "1px solid green",
                    padding: "2px 5px",
                    borderRadius: "5px",
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <Typography
                    sx={{ ...styles.blogHeadingRecent, width: "fit-content" }}
                  >
                    {data}
                  </Typography>
                  <CloseIcon
                    onClick={(e) => {
                      window.scrollTo({
                        top: 300,
                        behavior: "smooth",
                      });
                      e.stopPropagation();
                      setCurrentCategory(null);
                      setBlogsData(InsightData);
                    }}
                    sx={{
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                  />
                </Box>
              ) : (
                <Typography
                  sx={{ ...styles.blogHeadingRecent, padding: "2px 5px" }}
                >
                  {data}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default InsightCards;
