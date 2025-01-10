import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  AppBar,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Typography,
  Collapse,
  CardMedia
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MainLogo from "/assets/pngs/header/Header_Logo.png";
import WhiteLogo from "/assets/pngs/header/WhiteLogo.png";

import SwipeableTemporaryDrawer from "../services/Blog";

const drawerWidth = 240;

const DrawerAppBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [service, setService] = React.useState(false);

  const [activeTab, setActiveTab] = useState("");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const serviceDrawer = (open) => () => {
    setService(open);
  };

  const closeDrawers = () => {
    setService(false);
  };

  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Contact",
      onClick: () => {
        setActiveTab("Contact");
        navigate("/contact-us");
        setMobileOpen(false);
      },
    },
    {
      name: "Services",
      onClick: () => {
        setMobileServicesOpen((prev) => !prev);
        setActiveTab("Service");
      },
      subItems: [
        {
          name: "Web Development",
          onClick: () => {
            navigate("/services/web-development");
            setMobileServicesOpen((prev) => !prev);

            setMobileOpen(false);
          },
        },
        {
          name: "Mobile Application",
          onClick: () => {
            navigate("/services/mobile-application");
            setMobileServicesOpen((prev) => !prev);

            setMobileOpen(false);
          },
        },
        {
          name: "UI Design",
          onClick: () => {
            navigate("/services/ui_design");
            setMobileServicesOpen((prev) => !prev);
            setMobileOpen(false);
          },
        },
        {
          name: "Blockchain",
          onClick: () => {
            navigate("/services/blockchain");
            setMobileServicesOpen((prev) => !prev);

            setMobileOpen(false);
          },
        },
        {
          name: "SEO",
          onClick: () => {
            navigate("/services/seo");
            setMobileServicesOpen((prev) => !prev);
            setMobileOpen(false);
          },
        },
        {
          name: "Email Marketing",
          onClick: () => {
            navigate("/services/email_marketing");
            setMobileServicesOpen((prev) => !prev);
            setMobileOpen(false);
          },
        },
        {
          name: "Content Marketing",
          onClick: () => {
            navigate("/services/content_marketing");
            setMobileServicesOpen((prev) => !prev);
            setMobileOpen(false);
          },
        },
        {
          name: "Social Media",
          onClick: () => {
            navigate("/services/social_media");
            setMobileServicesOpen((prev) => !prev);
            setMobileOpen(false);
          },
        },
      ],
    },
    {
      name: "About",
      onClick: () => {
        setActiveTab("About");
        navigate("/about");
        setMobileOpen(false);
      },
    },
    {
      name: "Insights",
      onClick: () => {
        setActiveTab("Insights");
        navigate("/insights");
        setMobileOpen(false);
      },
    },
    {
      name: "Careers",
      onClick: () => {
        setActiveTab("Careers");
        navigate("/careers");
        setMobileOpen(false);
      },
    },
    {
      name: "Portfolio",
      onClick: () => {
        setActiveTab("Portfolio");
        navigate("/our-work");
        setMobileOpen(false);
      },
    },
  ];

  const isActive = (sectionName) => {
    return activeTab === sectionName;
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      if (location.pathname !== "/contact-us") {
        setScrolled(window.scrollY > 0);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    const path = location.pathname;
    if (
      path === "/" ||
      path === "/terms-and-conditions" ||
      path === "/faq" ||
      path === "/privacy-policy" ||
      path === "/cookie-policy"
    ) {
      setActiveTab("");
      setScrolled(false);
    } else if (path === "/insights") {
      setActiveTab("Insights");
      setScrolled(false);
    } else if (path === "/careers") {
      setActiveTab("Careers");
      setScrolled(false);
    } else if (path === "/our-work") {
      setActiveTab("Portfolio");
      setScrolled(false);
    } else if (path.startsWith("/services/")) {
      setActiveTab("Services");
      setScrolled(false);
    } else if (path === "/about") {
      setActiveTab("About");
      setScrolled(false);
    } else if (path === "/contact-us") {
      setActiveTab("Contact");
    }
  }, [location.pathname]);

  const drawerContent = (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        height: "100%",
        width: "100%",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          top: 0,
          backgroundColor: "#f5f5f5",
          zIndex: 1,
          paddingBottom: "16px",
        }}
      >
        <img src={MainLogo} width={180} alt="Main Logo" />
      </Box>

      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0",
          width: "100%",
          marginTop: "20px",
        }}
      >
        {navItems.map((item) => (
          <React.Fragment key={item.name}>
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                padding: "0",
              }}
            >
              <ListItemButton
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  padding: "12px 24px",
                  color: isActive(item.name) ? "#00695c" : "#333",
                  textTransform: "none",
                  fontWeight: isActive(item.name) ? "bold" : "normal",
                  backgroundColor: isActive(item.name)
                    ? "#e0f2f1"
                    : "transparent",
                  "&:hover": {
                    backgroundColor: "#e0f2f1",
                  },
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onClick={item.onClick}
              >
                <Typography variant="body1">{item.name}</Typography>
                {item.subItems && (
                  <KeyboardArrowDownIcon
                    sx={{
                      fontSize: "15px",
                      transform: mobileServicesOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>
            {item.subItems && (
              <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
                <List
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",

                    padding: "0",
                    width: "100%",
                  }}
                >
                  {item.subItems.map((subItem) => (
                    <ListItem
                      key={subItem.name}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        padding: "0",
                      }}
                    >
                      <ListItemButton
                        sx={{
                          width: "100%",
                          borderRadius: "8px",
                          padding: "8px 24px",
                          color: isActive(subItem.name) ? "#004d40" : "#555",
                          textTransform: "none",
                          backgroundColor: isActive(subItem.name)
                            ? "#b9fbc0"
                            : "transparent",
                          "&:hover": {
                            backgroundColor: "#b9fbc0",
                          },
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                        onClick={subItem.onClick}
                      >
                        <Typography variant="body2">{subItem.name}</Typography>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{
          backgroundColor: scrolled ? "black" : "transparent",
          paddingTop: { xs: "2px 10px", lg: "5px 20px", md: "5px 0px" },
          display: mobileOpen && "none",
          height: "60px",
          alignItems: "center",
          boxShadow: "none",
          zIndex: 10000,
          transition: "background-color 0.5s ease",
          borderBottom: "0.5px solid gray",
        }}
        component="nav"
      >
        <Toolbar
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            margin: "auto",
            minHeight: "unset !important"
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon className="menu-btn" sx={{ color: "#ffffff" }} />
          </IconButton>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: { xs: "center", md: "space-between" },
            }}
          >
            <Box
              onClick={() => {
                navigate("/");
              }}
              onMouseEnter={closeDrawers}
            >
              <img
                src={WhiteLogo}
                width={170}
                height={"auto"}
                style={{
                  display: "flex",
                  transition: " display 0.5s ease",
                  cursor: "pointer",
                }}
              />
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex", lg: "flex" },
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => {
                  navigate("/about");
                  setActiveTab("About");
                }}
                onMouseEnter={closeDrawers}
                sx={{
                  color: isActive("About") ? "#378C92" : "#ffffff",
                  fontWeight: "400",
                  fontSize: "15px",
                  textTransform: "none",
                  fontFamily: "DM Sans, Sans-serif",
                  height: "40px",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#378c92",
                  },
                }}
                className="nav-btn"
              >
                About
              </Button>
              <Button
                sx={{
                  color: isActive("Services") ? "#378C92" : "#ffffff",
                  fontWeight: "400",
                  fontSize: "15px",
                  textTransform: "none",
                  fontFamily: "DM Sans, Sans-serif",
                  height: "40px",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#378c92",
                  },
                }}
                className="nav-btn"
                onMouseEnter={serviceDrawer(true)}
              >
                Services
                <KeyboardArrowDownIcon sx={{ fontSize: "18px" }} />
              </Button>
              <SwipeableTemporaryDrawer
                state={service}
                setState={setService}
                activeTab={setActiveTab}
                closeDrawers={closeDrawers}
              />
              <Button
                sx={{
                  color: isActive("Portfolio") ? "#378C92" : "#ffffff",
                  fontWeight: "400",
                  fontSize: "15px",
                  textTransform: "none",
                  fontFamily: "DM Sans, Sans-serif",
                  height: "40px",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#378c92",
                  },
                }}
                className="nav-btn"
                onClick={() => {
                  setActiveTab("Portfolio");
                  navigate("/our-work");
                }}
                onMouseEnter={closeDrawers}
              >
                Portfolio
              </Button>
              <Button
                sx={{
                  color: isActive("Insights") ? "#378C92" : "#ffffff",
                  fontWeight: "400",
                  fontSize: "15px",
                  textTransform: "none",
                  fontFamily: "DM Sans, Sans-serif",
                  height: "40px",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#378c92",
                  },
                }}
                className="nav-btn"
                onClick={() => {
                  navigate("/insights");
                  setActiveTab("Insights");
                }}
              >
                Insights
              </Button>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex", lg: "flex" },
                alignItems: "center",
              }}
            >
              <Button
                sx={{
                  color: isActive("Careers") ? "#378C92" : "#ffffff",
                  fontWeight: "400",
                  fontSize: "15px",
                  textTransform: "none",
                  fontFamily: "DM Sans, Sans-serif",
                  mr: "1rem",
                  height: "40px",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#378c92",
                  },
                }}
                className="nav-btn"
                onClick={() => {
                  navigate("/careers");
                  setActiveTab("Careers");
                }}
                onMouseEnter={closeDrawers}
              >
                Careers
              </Button>
              <Box sx={{ borderRight: "1px solid gray", height: "80%" }}></Box>
              <Button
                sx={{
                  color: isActive("Contact") ? "#378C92" : "#ffffff",
                  fontWeight: "400",
                  fontSize: "15px",
                  textTransform: "none",
                  fontFamily: "DM Sans, Sans-serif",
                  height: "40px",
                  ml: "1rem",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#378c92",
                  },
                }}
                className="nav-btn"
                onClick={() => {
                  navigate("/contact-us");
                  setActiveTab("Contact");
                  setScrolled(true);
                }}
                onMouseEnter={closeDrawers}
              >
                Contact
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
