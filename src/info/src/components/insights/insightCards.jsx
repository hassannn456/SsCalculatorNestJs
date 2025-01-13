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
  InputAdornment,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import InsightData from "../../utils/data/Insights";
import { Search } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

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
    backgroundColor: "#ffffff",
    marginLeft: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: { xs: "100%", md: "70%" },
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
    gap: "2rem",
    width: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: {
      sm: "calc(50% - 1.65rem)",
      lg: "calc(48% - 1.65rem)",
      xl: "calc(33% - 1.65rem)",
    },
    height: "360px",
    border: "1px solid #E5E5E5",
    borderRadius: "0.3rem",
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
    backgroundColor: "#ffffff",
    "& label.Mui-focused": {
      color: "#378C92",
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
  },
};

const InsightCards = () => {
  const theme = useTheme();
  const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down("xl"));
  const itemsPerPage = isMediumOrSmaller ? 8 : 9;

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
    setPage(0);
    const query = event.target.value.toLowerCase();
    setCurrentCategory(null);
    const filteredData = InsightData.filter(
      (item) =>
        item.heading.toLowerCase().includes(query) ||
        item.content.toLowerCase().includes(query)
    );

    setBlogsData(filteredData);
  };

  const handlePagination = (e) => {
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
        flexDirection: { xs: "column-reverse", md: "row" },
        justifyContent: "center",
        padding: { xs: "20px 15px", md: "40px", lg: "80px" },
      }}
    >
      <Box
        sx={{
          ...styles.mainContainer,
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
              {blogsData
                .slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
                ?.map((card, index) => (
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
                        loading="lazy"
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
          width: { xs: "100%", md: "30%", lg: "30%" },
          ml: { xs: 0, md: 3 },
          height: "fit-content",
          position: { xs: "static", md: "sticky" },
          top: "-20%",
          overflowY: "auto",
        }}
      >
        <TextField
          size="medium"
          placeholder="Search"
          sx={{
            ...styles.textField,
            width: { xs: "100%", md: "260px", lg: "300px" },
          }}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "gray" }} />
              </InputAdornment>
            ),
            inputProps: {
              sx: {
                "&::placeholder": {
                  color: "gray",
                  opacity: 0.4,
                },
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
        <Box sx={{ my: "2rem" }}>
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
                    color: "white",
                    backgroundColor: "#378C92",
                    width: "fit-content",
                    padding: "2px 5px",
                    borderRadius: "5px",
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <Typography
                    sx={{
                      ...styles.blogHeadingRecent,
                      width: "fit-content",
                      color: "white",
                      fontWeight: "bold",
                    }}
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
