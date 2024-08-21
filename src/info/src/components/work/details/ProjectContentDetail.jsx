import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import { Typography, Box } from "@mui/material";
const ProjectContentDetail = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", gap: 2 }}>
      <Box>
        <BusinessIcon sx={{ color: "#378C92" }} />
      </Box>
      <Box>
        <Typography sx={{ fontSize: 20 }}>Industry</Typography>
        <Typography sx={{ color: "gray" }}>Media &</Typography>
        <Typography sx={{ color: "gray" }}>Entertaiment</Typography>
      </Box>
    </Box>
  );
};

export default ProjectContentDetail;
