
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import tabsdata from "../tabs/tabs";

import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const TechExpertCards = ({ selectedTab, onTabChange }) => {
  const [filteredData, setFilteredData] = useState(tabsdata);

  useEffect(() => {
    if (selectedTab === "All") {
      setFilteredData(tabsdata);
    } else {
      setFilteredData(
        tabsdata.filter((item) => item.expert.includes(selectedTab))
      );
    }
  }, [selectedTab]);

  const uniqueExpert = [
    "All",
    ...new Set(tabsdata.map((item) => item.expert).flat()),
  ];

  return (
    <Grid
      container
      item
      sx={{
        background: "white",
        textAlign: "center",
        display: "flex",
        justifyContent: "left",
        gap: { xs: 6, md: 4 },
      }}
      rowSpacing={0}
      pt={{ xs: 4, md: 1 }}
      pb={{ xs: 8, md: 12 }}
      pl={{ xs: 2, sm: 12, md: 15 }}
    >
      <Grid item xs={10.6} spacing={0}>
        {uniqueExpert.map((expert, index) => (
          <Button
            key={index}
            sx={{
              fontWeight: "400",
              fontSize: "15px",
              display: "inline",
              color: selectedTab === expert ? "black" : "#8d8e8f9e",
              cursor: "pointer",
              textAlign: "center",
              marginLeft: "0",
              marginRight: "0",
              marginBottom: "10px",
              mx: "5px",
              px: "10px",
              pt: "5px",
              pb: selectedTab === expert ? "3px" : "5px",
              backgroundColor: "transparent",

              borderBottom: selectedTab === expert ? "2px solid black" : "none",

              borderRadius: 0,
              "&:hover": {
                pb: "3px",
                backgroundColor: "transparent",
                borderBottom: "2px solid black",
                color: "black",
                borderRadius: 0,
              },
              "&:focus": {
                outline: "none",
              },
              textTransform: "none",
              minWidth: "auto",
            }}
            onClick={() => onTabChange(expert)}
          >
            {expert}
          </Button>
        ))}
      </Grid>

      {Array.isArray(filteredData) &&
        filteredData.map((item, index) => (
          <Grid item xs={12} sm={5.2} md={3.7} lg={2.5} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #EBEBEB",
                boxShadow: "none",
                borderRadius: "1rem",
                width: "100%",
                height: "100%",
                pb: 1,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow:
                    "10px 10px 20px 0px rgba(19.999999999999986, 101.00000000000001, 95.00000000000004, 0.17)",
                  cursor: "pointer",
                  "& Button": {
                    background: "#fc3c3c",
                    color: "white",
                    opacity: 1,
                  },
                  "& h5": {
                    color: (theme) => theme.palette.primary.hover,
                  },
                },
              }}
            >
              <Grid
                sx={{
                  borderRadius: "1rem",
                  py: "30px",
                  px: { md: "50px", lg: "25px", sm: "80px", xs: "200px" },
                  mt: { md: "10px", lg: "20px" },
                  bgcolor: "#F5F5F5",
                }}
              >
                <img
                  src={item.path} // Ensure that the path matches the actual file name and extension
                  alt={item.label}
                  style={{ cursor: "pointer", width: "140px", height: "50px" }}
                />
              </Grid>
              <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "black",
                    textAlign: "center",
                    lineHeight: "1.5rem",
                    maxHeight: "auto",
                    mb: "10px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 6,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.description}
                </Typography>
                <Typography
                  sx={{
                    color: "#B6B3B3",
                    fontSize: "14px",
                    fontWeight: "400",
                    textTransform: "capitalize",
                    lineHeight: "48px",
                    margin: "10px 0",
                  }}
                >
                  Technologies
                </Typography>
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "-34px 0px 0px 0px",
                  }}
                >
                  <span
                    style={{
                      marginRight: "50px",
                      width: "31%",
                      height: "1px",
                      backgroundColor: "#B6B3B3",
                    }}
                  ></span>
                  <span
                    style={{
                      marginLeft: "50px",
                      width: "31%",
                      height: "1px",
                      backgroundColor: "#B6B3B3",
                    }}
                  ></span>
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    mt: 4,
                  }}
                >
                  <img
                    src={item.logo1} // Ensure that the path matches the actual file name and extension
                    alt={item.label}
                    style={{ cursor: "pointer", width: "20px", height: "20px" }}
                  />
                  <img
                    src={item.logo2} // Ensure that the path matches the actual file name and extension
                    alt={item.label}
                    style={{ cursor: "pointer", width: "20px", height: "20px" }}
                  />
                  <img
                    src={item.logo3} // Ensure that the path matches the actual file name and extension
                    alt={item.label}
                    style={{ cursor: "pointer", width: "20px", height: "20px" }}
                  />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default TechExpertCards;
