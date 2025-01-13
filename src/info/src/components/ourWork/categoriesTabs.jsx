import * as React from "react";
import Box from "@mui/material/Box";
import RecentPorject from "./tabs/recentProjects";

const CategoriesTabs = () => {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", pt: "30px" }}>
      <RecentPorject />;
    </Box>
  );
};

export default CategoriesTabs;
