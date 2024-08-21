import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import TechCards from "../cards/techCards";

const styles = {
  Heading: {
    fontSize: { xs: "20px", lg: "37px" },
    fontFamily: "Barlow",
    fontWeight: "500",
    color: "#F9A11A",
    textAlign: "center",
  },
};

const RecentProjects = () => {
  return (
    <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
      <Box sx={{ width: "90%", marginTop: "20px" }}>
        <Typography sx={styles.Heading}>Our Recent Projects</Typography>
        <TechCards />
      </Box>
    </Stack>
  );
};

export default RecentProjects;
