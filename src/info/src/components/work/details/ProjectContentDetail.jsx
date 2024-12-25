import React from "react";
import { Typography, Box } from "@mui/material";
const ProjectContentDetail = ({ title, description, icon }) => {
  return (
    <Box sx={{ width: "100%", display: "flex", gap: 2 }}>
      <Box sx={{ color: "#378C92" }}>
        {icon}
      </Box>
      <Box>
        <Typography sx={{ fontSize: 16, mb: "5px" }}>{title}</Typography>
        <Typography sx={{ color: "gray", fontSize: 12 }}>{description}</Typography>
      </Box>
    </Box>
  );
};

export default ProjectContentDetail;
