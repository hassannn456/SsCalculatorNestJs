import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import ProjectContentDetail from "./ProjectContentDetail";
import BusinessIcon from '@mui/icons-material/Business';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const OurWorkDescription = ({
  logo,
  description,
  reverse = false,
  double = false,
  industry,
  platformType
}) => {
  return (
    <Box
      sx={{
        p: { xs: "1rem", md: "5rem" },
        width: "100%",
        display: "flex",
        flexDirection: {
          xs: double ? "column" : "column-reverse",
          sm: "row",
          md: reverse ? "row-reverse" : "row",
        },
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 4, sm: 0 },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "50%", md: "50%" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 2,
          }}
        >
          <Box sx={{ width: reverse ? "100%" : "20%" }}>
            {reverse ? (
              <Typography variant="h5" sx={{ fontSize: "1.5rem" }}>
                Project Overview
              </Typography>
            ) : (
              <img
                src={logo}
                style={{ height: "100%", width: "100%", objectFit: "fit" }}
              />
            )}
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography align="left">{description}</Typography>
          </Box>
          {!reverse && (
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "space-between", md: "space-between" },
                gap: "15px"
              }}
            >
              <Box>
                <ProjectContentDetail title="Industry" description={industry} icon={<BusinessIcon />} />
              </Box>
              <Box>
                <Divider orientation="vertical" />
              </Box>
              <Box>
                <ProjectContentDetail title="Platform Type" description={platformType} icon={<LibraryBooksIcon />} />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "50%", md: "50%" } }}>
          <img
            src={logo}
            style={{ height: "100%", width: "100%", objectFit: "fit" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OurWorkDescription;
