import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Box, Grid, Typography } from "@mui/material";

const StatsCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <Box
      component="section"
      sx={{
        background: { xs: "#378C92", md: "#ffffff" },
        borderTop: "10px solid #378C92",
        borderTopLeftRadius: "5px",
        borderTopRightRadius: "5px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        ref={ref}
        sx={{
          width: "100%",
          borderBottomLeftRadius: { xs: 0, md: "15px" },
          borderBottomRightRadius: { xs: 0, md: "15px" },
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "2rem",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={2.9}
          lg={2.6}
          sx={{
            width: "33.3%",
            minWidth: "33%",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Barlow",
              color: "black",
              fontSize: { xs: "30px", sm: "40px", md: "60px" },
              position: "relative",
              fontWeight: 500,
              textAlign: "center",
              lineHeight: "72px",
            }}
          >
            {inView && <CountUp end={52} duration={2} />}
          </Typography>
          <Typography
            variant="h2"
            style={{
              fontFamily: "Barlow",
              color: "rgb(121, 127, 137)",
              fontSize: "16px",
              position: "relative",
              fontWeight: 400,
              textAlign: "center",
              lineHeight: "29px",
            }}
          >
            Total Projects
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={2.9}
          lg={2.6}
          sx={{
            width: "33.3%",
            minWidth: "33.3%",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Barlow",
              color: "black",
              fontSize: { xs: "30px", sm: "40px", md: "60px" },
              position: "relative",
              fontWeight: 500,
              textAlign: "center",
              lineHeight: "72px",
            }}
          >
            {inView && <CountUp end={23} duration={2} />}
          </Typography>
          <Typography
            variant="h2"
            style={{
              fontFamily: "Barlow",
              color: "rgb(121, 127, 137)",
              fontSize: "16px",
              position: "relative",
              fontWeight: 400,
              textAlign: "center",
              lineHeight: "29px",
            }}
          >
            Company Staff
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={2.9}
          lg={2.6}
          sx={{ width: "33.3%", minWidth: "33.3%" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Barlow",
              color: "black",
              fontSize: { xs: "30px", sm: "40px", md: "60px" },
              position: "relative",
              fontWeight: 500,
              textAlign: "center",
              lineHeight: "72px",
            }}
          >
            {inView && <CountUp end={30} duration={2} />}
          </Typography>
          <Typography
            variant="h2"
            style={{
              fontFamily: "Barlow",
              color: "rgb(121, 127, 137)",
              fontSize: "16px",
              position: "relative",
              fontWeight: 400,
              textAlign: "center",
              lineHeight: "29px",
            }}
          >
            Happy Clients
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatsCounter;
