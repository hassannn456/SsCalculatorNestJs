import { Card, CardContent, Grid, Typography } from "@mui/material";
import tabsdata from "../tabs/tabs";
import { useNavigate } from "react-router-dom";
const TechCard = () => {
  const navigate = useNavigate();
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
      pl={{ xs: 0, sm: 12, md: 15 }}
    >
      {Array.isArray(tabsdata) &&
        tabsdata.map((item, index) => (
          <Grid item xs={12} sm={5.2} md={3.7} lg={2.5} key={index}>
            <Card
              onClick={() => navigate(`/projectDetail/${item.id}/${item.name}`)}
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
                }}
              >
                <img
                  src={item.path}
                  alt={item.label}
                  style={{
                    cursor: "pointer",
                    width: "140px",
                    height: "40px",
                    objectFit: "scale-down",
                  }}
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
                    height: "100px",
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
                    src={item.logo1}
                    alt={item.label}
                    style={{ cursor: "pointer", width: "20px", height: "20px" }}
                    />
                  <img
                    src={item.logo2}
                    alt={item.label}
                    style={{ cursor: "pointer", width: "20px", height: "20px" }}
                    />
                  <img
                    src={item.logo3}
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

export default TechCard;
