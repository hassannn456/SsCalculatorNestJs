import React from "react";
import { Box } from "@mui/material";
import LeadershipAvatars from "./LeadershipAvatars";
import Planning1 from "/assets/pngs/about/Planning1.jpg";
import Planning2 from "/assets/pngs/about/Planning2.jpg";
import Planning3 from "/assets/pngs/about/Planning3.svg";
import SectionHeader from "../general/SectionHeader";
import { motion } from 'framer-motion';

const cardVariantsBottom = {
  offscreen: {
    y: 50,
    opacity: 0,
  },

  onscreen: (index) => (
    {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 50,
        stiffness: 100,
        delay: index * 0.1,
      },
    }
  ),
};

const Process = () => {
  return (
    <Box sx={styles.mainContainer}>
      <SectionHeader
        title={"PROCESS"}
        subtitle={"Together, we make change happen!"}
      />
      <Box sx={styles.avatars}>
        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardVariantsBottom}
          transition={{ type: "spring", stiffness: 100 }}
          custom={3}
        >
          <LeadershipAvatars title="Discovery" imageSrc={Planning1} />
        </motion.div>
        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardVariantsBottom}
          transition={{ type: "spring", stiffness: 100 }}
          custom={4}
        >
          <LeadershipAvatars title="Planning" imageSrc={Planning2} />
        </motion.div>
        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardVariantsBottom}
          transition={{ type: "spring", stiffness: 100 }}
          custom={5}
        >
          <LeadershipAvatars title="Execute" imageSrc={Planning3} />
        </motion.div>
        <motion.div
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardVariantsBottom}
          transition={{ type: "spring", stiffness: 100 }}
          custom={6}
        >
          <LeadershipAvatars title="Deliver" imageSrc={Planning1} />
        </motion.div>
      </Box>
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
    paddingY: "2rem",

    backgroundColor: "#ffffff",
    paddingX: { xs: "2rem", md: 0 },
    height: "100%",
  },
  titleText: {
    fontSize: { xs: "20px", md: "30px" },
    fontFamily: "Barlow",
    fontWeight: "700",
    color: "#378C92",
  },
  descriptionText: {
    fontSize: { xs: "13px", md: "15px" },
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "black",
    textAlign: { xs: "justify", md: "center" },
    paddingTop: "1rem",
  },
  avatars: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
  },
};

export default Process;
