import React, { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MediaCard from "./MediaCard";
import InteractiveList from "./InteractiveList";
import BlogImage1 from "/assets/pngs/insights/blog01.jpeg";

export default function SwipeableTemporaryDrawer({
  state,
  setState,
  activeTab,
  closeDrawers,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setState(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setState(false);
  };

  const list = () => (
    <Box
      pl={"3rem"}
      sx={{ display: "flex", position: "relative" }}
      onMouseLeave={handleMouseLeave}
    >
      <MediaCard image={BlogImage1} closeDrawers={closeDrawers} />
      <InteractiveList activeTab={activeTab} closeDrawers={closeDrawers} />
      <IconButton
        onClick={() => setState(false)}
        sx={{
          position: "absolute",
          right: "16px",
          top: "16px",
        }}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor="top"
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{
          sx: {
            top: "60px"
          },
        }}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
