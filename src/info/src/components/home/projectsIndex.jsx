import React, { useState, useEffect } from "react";

import { Box, Divider, Typography } from "@mui/material";

import Counter1 from "/assets/pngs/projectsIndex/counter-1.png";
import Counter2 from "/assets/pngs/projectsIndex/counter-2.png";
import Counter3 from "/assets/pngs/projectsIndex/counter-3.png";
import zIndex from "@mui/material/styles/zIndex";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    padding: { xs: "40px 15px", lg: "40px 0px" },
    backgroundColor: "#ffffff",
    margin: "auto",
    marginTop: { md: "70px", sm: "60px", xs: "60px" },
    width: { sm: "97%", xs: "96%", md: "55rem", lg: "80rem" },
    gap: "1rem",
    borderRadius: "20px",
    border: "1px solid lightgray",
    position: "relative",
    zIndex: 10,
  },
  number: {
    fontSize: "40px",
    fontFamily: "Barlow",
    fontWeight: "600",
    color: "#378C92",
    width: { sm: "100px", xs: "100px", md: "100%" },
    textAlign: { sm: "center", xs: "center", md: "left" },
  },
  cardName: {
    fontSize: "12px",
    fontFamily: "Barlow",
    fontWeight: "300",
    color: "#313431",
    width: { sm: "100px", xs: "100px", md: "100%" },
    textAlign: { sm: "center", xs: "center", md: "left" },
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    minWidth: "unset",
    minHeight: "unset",
    width: { sm: "100px", xs: "100px", md: "auto" },
    height: { sm: "100px", xs: "100px", md: "auto" },
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
};

const projectsData = [
  { image: Counter1, number: 25, name: "HAPPY CLIENTS" },
  { image: Counter2, number: 37, name: "FINISHED PROJECTS" },
  { image: Counter3, number: 6, name: "SKILLED EXPERTS" },
  { image: Counter1, number: 99, name: "CUSTOMER SATISFACTION" },
];

const ProjectsIndex = () => {
  const [slideIn, setSlideIn] = useState(false);
  useEffect(() => {
    setSlideIn(true);
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <Box sx={styles.mainContainer}>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Box
            sx={{
              width: { xs: "100%", lg: "25%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
            ref={ref}
          >
            <Box sx={styles.imageContainer}>
              <img src={project.image} alt="counter" />
            </Box>
            <Box>
              <Typography sx={styles.number}>
                {inView && (
                  <CountUp isCounting end={project.number} duration={3.2} />
                )}
                {project.name === "CUSTOMER SATISFACTION" && "%"}
              </Typography>
              <Typography sx={styles.cardName}>{project.name}</Typography>
            </Box>
          </Box>
          {index < projectsData.length - 1 && (
            <Divider orientation="vertical" flexItem />
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default ProjectsIndex;
