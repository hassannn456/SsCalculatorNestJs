import React from "react";
import { Box } from "@mui/material";
import LeadershipAvatars from "./LeadershipAvatars";
import Planning1 from "../../../public/assets/pngs/about/Planning1.jpg";
import Planning2 from "../../../public/assets/pngs/about/Planning2.jpg";
import Planning3 from "../../../public/assets/pngs/about/Planning3.svg";
import SectionHeader from "../general/SectionHeader";

const Process = () => {
  return (
    <Box sx={styles.mainContainer}>
      <SectionHeader
        title={"PROCESS"}
        subtitle={"Together, we make change happen!"}
      />
      <Box sx={styles.avatars}>
        <LeadershipAvatars title="Discovery" imageSrc={Planning1} />
        <LeadershipAvatars title="Planning" imageSrc={Planning2} />
        <LeadershipAvatars title="Execute" imageSrc={Planning3} />
        <LeadershipAvatars title="Deliver" imageSrc={Planning1} />
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
