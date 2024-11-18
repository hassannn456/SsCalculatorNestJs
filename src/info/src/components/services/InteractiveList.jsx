import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useNavigate } from "react-router-dom";

const list = [
  {
    title: "App Development",
    pages: ["Web Development", "Mobile Application", "UI Design", "Blockchain"],
  },
  {
    title: "Digital Marketing",
    pages: ["SEO", "Content Marketing", "Social Media", "Email Marketing"],
  },
];

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList({ activeTab, closeDrawers }) {
  const [hoveredItem, setHoveredItem] = React.useState({
    listIndex: null,
    itemIndex: null,
  });
  const navigate = useNavigate();

  const handleMouseEnter = (listIndex, itemIndex) => {
    setHoveredItem({ listIndex, itemIndex });
  };

  const handleMouseLeave = () => {
    setHoveredItem({ listIndex: null, itemIndex: null });
  };

  const handleClick = (page) => {
    let newStr = page.toLowerCase().replace(/ /g, "-");
    navigate(`/services/${newStr}`);
    activeTab("Services");
    closeDrawers();
  };

  const dense = false;

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752, padding: "5rem" }}>
      <Grid container spacing={10}>
        {list.map((item, listIndex) => (
          <Grid item xs={12} md={6} key={item.title}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              {item.title}
            </Typography>
            <Demo>
              <List dense={dense}>
                {item.pages.map((name, itemIndex) => (
                  <ListItem
                    key={itemIndex}
                    onClick={() => handleClick(name)}
                    onMouseEnter={() => handleMouseEnter(listIndex, itemIndex)}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateX(-10px)",
                        color: "#606060",
                      },
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <ListItemText
                      primary={name}
                      sx={{
                        transition: "transform 0.3s ease",
                        transform:
                          hoveredItem.listIndex === listIndex &&
                          hoveredItem.itemIndex === itemIndex
                            ? "translateX(-20px)"
                            : "translateX(0)",
                        marginRight: "16px",
                      }}
                    />
                    <ListItemIcon
                      sx={{
                        transition: "transform 0.3s ease",
                        transform:
                          hoveredItem.listIndex === listIndex &&
                          hoveredItem.itemIndex === itemIndex
                            ? "translateX(20px)"
                            : "translateX(0)",
                      }}
                    >
                      {hoveredItem.listIndex === listIndex &&
                      hoveredItem.itemIndex === itemIndex ? (
                        <ArrowCircleRightOutlinedIcon
                          sx={{ color: "#368e90" }}
                        />
                      ) : (
                        <ArrowForwardIcon sx={{ color: "#368e90" }} />
                      )}
                    </ListItemIcon>
                  </ListItem>
                ))}
              </List>
            </Demo>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
