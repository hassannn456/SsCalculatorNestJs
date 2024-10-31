import React from "react";
import { Box, Typography } from "@mui/material";

import defaultAvatar from "/assets/pngs/about/avatar.png";

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem",
  },
  avatarImage: {
    borderRadius: "50%",
    width: "100%",
    height: "12rem",
  },
  positionText: {
    color: "#7A7A7A",
    fontSize: "0.8rem",
  },
  titleText: {
    fontSize: "1rem",
    color: "#797f89",
  },
};

const LeadershipAvatars = ({ imageSrc, title, position }) => {
  return (
    <Box sx={styles.mainContainer}>
      <img
        src={imageSrc ? imageSrc : defaultAvatar}
        style={styles.avatarImage}
        alt="avatar"
      />
      <Typography sx={styles.titleText}>{title ? title : "N/A"}</Typography>
      <Typography sx={styles.positionText}>
        {position ? position : ""}
      </Typography>
    </Box>
  );
};

export default LeadershipAvatars;
