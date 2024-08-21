import React from "react";
import { Box, Typography } from "@mui/material";
import LeadershipAvatars from "./LeadershipAvatars";

const Leadership = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Typography sx={styles.titleText}>Leadership</Typography>
      <Typography sx={styles.descriptionText}>
        Meet our founders and leadership team
      </Typography>
      <Box sx={styles.avatars}>
        <LeadershipAvatars position="Founder And CEO" />
        <LeadershipAvatars position="VP Growth" />
        <LeadershipAvatars position="Technical Team Lead" />
        <LeadershipAvatars position="Backend Team Lead" />
        <LeadershipAvatars position="HR Manager" />
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
    backgroundColor: "#f0f3f6",
    paddingY: "4rem",
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
    textAlign: "justify",
    paddingTop: "1rem",
  },
  avatars: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    marginTop: "2rem",
  },
};

export default Leadership;
