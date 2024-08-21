import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import SectionHeader from "../general/SectionHeader";
import Apply from "../../../public/assets/pngs/careers/hiring-process1.svg";
import Review from "../../../public/assets/pngs/careers/hiring-process2.svg";
import Interviews from "../../../public/assets/pngs/careers/hiring-process3.svg";
import Onboarding from "../../../public/assets/pngs/careers/hiring-process4.svg";

const HiringProcess = () => {
  const steps = [
    {
      imgSrc: Apply,
      stepNumber: "01",
      title: "Apply",
      description:
        "Please browse through the job openings and submit your application for positions that match your skillset.",
    },
    {
      imgSrc: Review,
      stepNumber: "02",
      title: "Reviews",
      description:
        "Our recruiters will review your application and match you with the best-fit opportunity.",
    },
    {
      imgSrc: Interviews,
      stepNumber: "03",
      title: "Interviews",
      description:
        "Our interviewing process is competency-based, designed to identify individuals thrive.",
    },
    {
      imgSrc: Onboarding,
      stepNumber: "04",
      title: "Onboarding",
      description:
        "Our onboarding process will refine and prepare you for your professional journey with Techietribe.",
    },
  ];

  return (
    <Box sx={styles.mainContainer}>
      <SectionHeader
        title="OUR HIRING PROCESS"
        subtitle="As simple as it could be"
      />
      <Grid
        container
        justifyContent="center"
        sx={{
          paddingX: { xs: 0, lg: "4rem" },
        }}
      >
        {steps.map((step, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={3}
            lg={2.8}
            sx={{
              mt: "3rem",
              border: "1px solid lightgray",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              borderRadius: "100%",
              backgroundColor: "#f9f9f9",
              ml: "1rem",
              paddingX: "3rem",
              paddingY: "4rem",
            }}
          >
            <img
              src={step.imgSrc}
              alt={step.title}
              style={{ width: "30%", height: "30%" }}
            />
            <Typography
              sx={{
                marginTop: "1rem",
                fontWeight: 600,
                color: "#378C92",
                fontSize: "24px",
              }}
            >
              {step.stepNumber}
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                color: "#161c26",
                fontSize: "30px",
                fontWeight: 600,
              }}
            >
              {step.title}
            </Typography>
            <Typography
              sx={{
                marginTop: "0.5rem",
                fontSize: "14px",
                color: "#161c26",
                fontWeight: 400,
              }}
            >
              {step.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingY: "4rem",
    backgroundColor: "#f0f3f6",
    paddingX: { xs: "2rem", md: 0 },
    height: "100%",
  },
};

export default HiringProcess;
