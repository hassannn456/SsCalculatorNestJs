// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Button, Divider, Tooltip, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EastIcon from "@mui/icons-material/East";
import MainStay from "../../../public/assets/pngs/portfolio/MainStay.png";
import MulaX from "../../../public/assets/pngs/heroSecionSlider/MulaX.png";
import Neufluence from "../../../public/assets/pngs/portfolio/Neufluence.png";
import SpiritualData from "../../../public/assets/pngs/portfolio/Spiritual Data.png";
import SyntricAi from "../../../public/assets/pngs/portfolio/SyntricAI.png";
import { useNavigate } from "react-router-dom";

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    padding: { xs: "40px 15px", lg: "40px 0px" },
    backgroundColor: "#ffffff",
    margin: "auto",
    overflow: "hidden",
    width: { xs: "95%", md: "60rem", lg: "80rem", xl: "90rem" },
    gap: "1rem",
    borderRadius: "20px",
    border: "1px solid lightgray",
  },
  ourPortfolioSection: {
    width: { xs: "100%", lg: "100%" },
    padding: "0px 40px",
  },
  heading: {
    fontSize: "20px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#378C92",
    marginBottom: "20px",
    textDecoration: "underline",
    textDecorationColor: "#313431",
    textDecorationThickness: "2px",
    textUnderlineOffset: "4px",
  },
  subHeading: {
    fontSize: "18px",
    fontFamily: "Barlow",
    fontWeight: "600",
    color: "#313431",
    width: {
      xs: "100%",
      lg: "90%",
    },
  },
  aboutBtn: {
    mt: "1.5rem",
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: "#378C92",
    fontSize: { md: "18px", sm: "18px", xs: "14px" },
    height: "40px",
    padding: { xs: "20px", md: "25px 30px" },
    transition: "background-color 0.3s ease",
    borderRadius: "8px",
    letterSpacing: "2px",
    "&&:hover": {
      backgroundColor: "#313431",
    },
  },
  projectsContainer: {
    width: { xs: "100%", lg: "50%" },
    mt: { xs: "1rem", lg: "0rem" },
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
};

// eslint-disable-next-line react/prop-types
const OurPortfolio = ({ scrollToBottom }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ backgroundColor: "#ffffff" }}>
      <Box sx={styles.mainContainer}>
        <Box sx={styles.ourPortfolioSection}>
          <Typography sx={styles.heading}>OUR PORTFOLIO</Typography>
          <Typography sx={styles.subHeading}>
            Explore a Fusion of Innovation, Expertise, and Passion in Our
            Portfolio.
          </Typography>
          <Box sx={styles.aboutBtnContainer}>
            <Button
              onClick={() => navigate("/contact-us")}
              sx={styles.aboutBtn}
            >
              Schedule Consultation
            </Button>
          </Box>
        </Box>
        <Box sx={styles.projectsContainer}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: "2rem",
              height: "50%",
              alignItems: "center",
            }}
          >
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: "none", lg: "flex" } }}
            />
            <Tooltip
              placement="top"
              title="Mainstay"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#378C92",
                    fontSize: "16px",
                    padding: "10px",
                    "& .MuiTooltip-arrow": {
                      color: "#378C92",
                    },
                  },
                },
              }}
            >
              <img
                src={MainStay}
                alt="main-stay"
                onClick={() => navigate("/projectDetail/2/MainStay")}
                style={{ cursor: "pointer", width: "150px", height: "40px" }}
              />
            </Tooltip>
            <Divider
              flexItem
              sx={{ width: "100%", display: { xs: "flex", lg: "none" } }}
            />
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: "none", lg: "flex" } }}
            />
            <Tooltip
              title="Mula X"
              placement="top"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#378C92",
                    fontSize: "16px",
                    padding: "10px",
                    "& .MuiTooltip-arrow": {
                      color: "#378C92",
                    },
                  },
                },
              }}
            >
              <img
                src={MulaX}
                onClick={() => navigate("/projectDetail/3/Mula")}
                alt="mula-x"
                style={{ cursor: "pointer", width: "150px", height: "40px" }}
              />
            </Tooltip>
            <Divider
              flexItem
              sx={{ width: "100%", display: { xs: "flex", lg: "none" } }}
            />
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: "none", lg: "flex" } }}
            />
            <Tooltip
              placement="top"
              title="Neufluence"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#378C92",
                    fontSize: "16px",
                    padding: "10px",
                    "& .MuiTooltip-arrow": {
                      color: "#378C92",
                    },
                  },
                },
              }}
            >
              <img
                src={Neufluence}
                onClick={() => navigate("/projectDetail/4/Neufluence")}
                alt="neufluence"
                style={{ cursor: "pointer", width: "150px", height: "40px" }}
              />
            </Tooltip>
            <Divider
              flexItem
              sx={{ width: "100%", display: { xs: "flex", lg: "none" } }}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <FiberManualRecordIcon
              sx={{ color: "#378C92", fontSize: "12px", ml: "-0.3rem" }}
            />
            <Divider flexItem sx={{ width: "175px" }} />
            <FiberManualRecordIcon
              sx={{ color: "#313431", fontSize: "12px", ml: "-0.3rem" }}
            />
            <Divider flexItem sx={{ width: "175px" }} />
            <FiberManualRecordIcon
              sx={{ color: "#378C92", fontSize: "12px", ml: "-0.3rem" }}
            />
            <Divider flexItem sx={{ width: "175px" }} />
          </Box>
          <Box
            sx={{
              display: "flex",
              mt: { xs: "1rem", lg: "0rem" },
              gap: "2rem",
              height: "50%",
              alignItems: "center",
              flexDirection: { xs: "column", lg: "row" },
            }}
          >
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: "none", lg: "flex" } }}
            />
            <Tooltip
              placement="top"
              title="Spiritual Data"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#378C92",
                    fontSize: "16px",
                    padding: "10px",
                    "& .MuiTooltip-arrow": {
                      color: "#378C92",
                    },
                  },
                },
              }}
            >
              <img
                src={SpiritualData}
                onClick={() => navigate("/projectDetail/5/SpiritualData")}
                alt="spiritual-data"
                style={{ cursor: "pointer", width: "150px", height: "40px" }}
              />
            </Tooltip>
            <Divider
              flexItem
              sx={{ width: "100%", display: { xs: "flex", lg: "none" } }}
            />
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: "none", lg: "flex" } }}
            />
            <Tooltip
              placement="top"
              title="Syntric AI"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#378C92",
                    fontSize: "16px",
                    padding: "10px",
                    "& .MuiTooltip-arrow": {
                      color: "#378C92",
                    },
                  },
                },
              }}
            >
              <img
                src={SyntricAi}
                onClick={() => navigate("/projectDetail/6/Syntric-AI")}
                alt="syntric-ai"
                style={{ cursor: "pointer", width: "150px", height: "40px" }}
              />
            </Tooltip>
            <Divider
              flexItem
              sx={{ width: "100%", display: { xs: "flex", lg: "none" } }}
            />
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: "none", lg: "flex" } }}
            />
            <Tooltip
              placement="top"
              title="Explore More"
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "#378C92",
                    fontSize: "16px",
                    padding: "10px",
                    "& .MuiTooltip-arrow": {
                      color: "#378C92",
                    },
                  },
                },
              }}
            >
              <Box
                onClick={() => {
                  navigate("/our-work");
                }}
                sx={{
                  width: "150px",
                  height: "40px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={{
                    color: "#378C92",
                    fontSize: "20px",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                >
                  Explore More
                </Typography>
                <EastIcon
                  sx={{
                    color: "#378C92",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                />
              </Box>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurPortfolio;