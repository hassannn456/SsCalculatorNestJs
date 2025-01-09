import React, { useContext, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Link,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import fieldImage from "/assets/pngs/footer/footer-shape.png";
import whiteLogo from "/assets/pngs/header/WhiteLogo.png";
// import { RefContext } from "./../../context/RefContext";
import { useNavigate } from "react-router-dom";

const styles = {
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: { xs: "40px 15px", lg: "80px 0px 60px 0px" },
    margin: "auto",
    width: { xs: "100%", md: "59rem", lg: "80rem", xl: "90rem" },
    backgroundColor: "black",
  },

  newsLetterHeading: {
    fontFamily: "Barlow",
    fontSize: { xs: "30px", md: "48px" },
    fontWeight: "600",
    textAlign: "center",
    color: "#ffffff",
  },

  newsLetterTagline: {
    fontFamily: "Barlow",
    fontSize: "16px",
    fontWeight: "500",
    mt: "0.5rem",
    textAlign: "center",
    color: "#ffffff",
  },

  fieldContainer: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  },

  textField: {
    border: "1px solid #378C92",
    width: { xs: "300px", md: "500px" },
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    "& label.Mui-focused": {
      color: "#378C92",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#378C92",
        borderRadius: "10px",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#378C92",
        borderRadius: "10px",
      },
    },
  },

  subscribeBtn: {
    color: "#ffffff",
    textTransform: "none",
    backgroundColor: "#378C92",
    width: { xs: "100%", md: "140px" },
    fontSize: "17px",
    height: { xs: "60px", md: "55px" },
    borderRadius: "12px",
    padding: { xs: "0px 10px", md: "0px 30px" },
    transition: "background-color 0.3s ease",
    "&&:hover": {
      backgroundColor: "#ffffff",
      color: "#378C92",
      border: "1px solid #378C92",
    },
  },

  image: {
    display: { xs: "none", md: "flex" },
  },

  image2: {
    display: { xs: "none", md: "flex" },
    transform: "rotate(90deg)",
  },

  footerInfoContainer: {
    width: "100%",
    mt: "5rem",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
  },

  logoContainer: {
    display: "flex",
    flexDirection: "column",
    width: { xs: "100%", md: "34%" },
  },

  quickLinksContainer: {
    mt: { xs: "1rem", md: "0rem" },
    display: "flex",
    gap: "0.5rem",
    flexDirection: "column",
    width: { xs: "100%", md: "22%" },
  },

  logoSubTagline: {
    mt: "1.5rem",
    fontFamily: "Barlow",
    fontSize: "16px",
    fontWeight: "500",
    color: "#646464",
    width: { xs: "100%", md: "70%" },
  },

  email: {
    mt: "1rem",
    fontFamily: "Barlow",
    fontSize: "16px",
    fontWeight: "500",
    color: "#378C92",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },

  socialMediaIcons: {
    mt: "2rem",
    display: "flex",
    gap: "2rem",
  },

  icon: {
    fontSize: "30px",
    cursor: "pointer",
    "&&:hover": {
      color: "rgba(55, 140, 146)",
    },
  },

  quickLinksHeading: {
    mt: "0.5rem",
    fontFamily: "Barlow",
    fontSize: "24px",
    fontWeight: "600",
    color: "#ffffff",
  },

  quickLinks: {
    color: "#646464",
    fontFamily: "Barlow",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    "&&:hover": {
      color: "#378C92",
    },
  },

  hours: {
    color: "#646464",
    fontFamily: "Barlow",
    fontSize: "16px",
    fontWeight: "500",
  },

  copyrightContainer: {
    display: "flex",
    gap: "0.5rem",
    flexDirection: "column",
    backgroundColor: "#000000",
    padding: { xs: "4px 10px", lg: "4px 0px" },
    margin: "auto",
    borderTop: "1px solid gray",
    width: { xs: "100%", md: "59rem", lg: "100%" },
  },

  topHeaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    flexDirection: { xs: "column", md: "row" },
  },

  copyright: {
    color: "#ffffff",
    fontFamily: "Barlow",
    fontSize: "10px",
    fontWeight: "400",
    textAlign: "center",
  },

  topHeaderLinksContainer: {
    display: { xs: "none", md: "flex" },
    justifyContent: "center",
    gap: "1rem",
  },
};

const Footer = () => {
  const navigate = useNavigate();
  // const {
  //   scrollToServices,
  //   scrollToAbout,
  //   scrollToBottom,
  //   scrollToHome,
  //   scrollToInsights,
  // } = useContext(RefContext);

  const quickLinksArray = [
    { name: "Home", onClick: () => navigate("/") },
    {
      name: "Services",
      onClick: () => {
        navigate("/services/web-development");
      },
    },
    {
      name: "About Company",
      onClick: () => {
        navigate("/about");
      },
    },
    {
      name: "Insights",
      onClick: () => {
        navigate("/insights");
      },
    },
    {
      name: "Careers",
      onClick: () => {
        navigate("/careers");
      },
    },
    {
      name: "Contact Us",
      onClick: () => {
        navigate("/contact-us");
      },
    },
  ];

  const forumSupportArray = [
    {
      name: "Terms and Conditions",
      onClick: () => {
        navigate("/terms-and-conditions");
      },
    },
    {
      name: "Help & FAQ",
      onClick: () => {
        navigate("/faq");
      },
    },

    {
      name: "Privacy Policy",
      onClick: () => {
        navigate("/privacy-policy");
      },
    },
    {
      name: "Cookie Policy",
      onClick: () => {
        navigate("/cookie-policy");
      },
    },
  ];

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setSnackbarMessage("Please enter your email address before subscribing.");
      setError("true");
      setSnackbarOpen(true);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setSnackbarMessage("Invalid Email Address");
      setError("Invalid Email Address");
      setSnackbarOpen(true);
      return;
    }
    setSnackbarMessage("Newsletter Subscription Successful!");
    setSnackbarOpen(true);
    setEmail("");
    setError("");
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    if (error) setError("");
  };
  const handleAddressClick = () => {
    window.open("https://maps.app.goo.gl/G2MNu77hjGQVJpkLA", "_blank");
  };
  return (
    <>
      <Box sx={styles.mainContainer}>
        <Typography sx={styles.newsLetterHeading}>
          Join Our Newsletter
        </Typography>
        <Typography sx={styles.newsLetterTagline}>
          We offer competitive pricing packages designed to enhance your lead
          capture strategies.
        </Typography>
        <Box sx={styles.fieldContainer}>
          <Box sx={styles.image}>
            <img src={fieldImage} alt="field-image" />
          </Box>
          <form onSubmit={handleSubmit}>
            <Box sx={styles.fieldContainer}>
              <TextField
                name="email"
                sx={styles.textField}
                placeholder="Email Address"
                type="email"
                value={email}
                onChange={handleChange}
                error={!!error}
              />
              <Button sx={styles.subscribeBtn} type="submit">
                Subscribe
                <ArrowForwardIcon sx={{ ml: 0.5 }} />
              </Button>
            </Box>
          </form>
          <Box sx={styles.image2}>
            <img src={fieldImage} alt="field-image" />
          </Box>
        </Box>

        <Box sx={styles.footerInfoContainer}>
          <Box sx={styles.logoContainer}>
            <img src={whiteLogo} alt="white-logo" width={300} />
            <Typography sx={styles.logoSubTagline}>
              Transforming Visions into Digital Realities
            </Typography>
            <Typography
              style={{ marginTop: "0.5rem" }}
              sx={styles.logoSubTagline}
            >
              Ready to collaborate with us
            </Typography>
            <Typography sx={{
              ...styles.email,
              color: "rgb(55, 140, 146)",
              transition: 'all 0.3s linear',
              ":hover": {
                color: "rgba(55, 140, 146,0.7)",
              }
            }}>
              <a
                href="mailto:info@thetechietribe.com"
                style={{
                  textDecoration: "none",
                }}
              >
                info@thetechietribe.com
              </a>
            </Typography>
            <Box sx={styles.socialMediaIcons}>
              <Link
                color="#ffffff"
                href="https://www.facebook.com/profile.php?id=61557054675828&mibextid=LQQJ4d"
                target="_blank"
              >
                <FacebookIcon sx={styles.icon} />
              </Link>
              <Link
                color="#ffffff"
                href="https://www.instagram.com/thetechietribe_?igsh=ZTRodmlndWxrc3Jt"
                target="_blank"
              >
                <InstagramIcon sx={styles.icon} />
              </Link>
              <Link
                color="#ffffff"
                href="https://www.linkedin.com/company/techietribe/"
                target="_blank"
              >
                <LinkedInIcon sx={styles.icon} />
              </Link>
            </Box>
          </Box>
          <Box sx={styles.quickLinksContainer}>
            <Typography sx={styles.quickLinksHeading}>Quick Links</Typography>
            {quickLinksArray.map((data, index) => (
              <Typography
                sx={styles.quickLinks}
                key={index}
                onClick={data.onClick}
              >
                {data.name}
              </Typography>
            ))}
          </Box>
          <Box sx={styles.quickLinksContainer}>
            <Typography sx={styles.quickLinksHeading}>Resources</Typography>
            {forumSupportArray.map((data, index) => (
              <Typography
                sx={styles.quickLinks}
                onClick={data.onClick}
                key={index}
              >
                {data.name}
              </Typography>
            ))}
          </Box>
          <Box sx={styles.quickLinksContainer}>
            <Typography sx={styles.quickLinksHeading}>Address</Typography>
            <Typography sx={styles.quickLinks} onClick={handleAddressClick}>
              Office No. 718, 7th Floor, Siddique Trade Center, Block H, Gulberg
              2, Lahore, Punjab
            </Typography>
            <Typography sx={styles.quickLinksHeading}>Hours</Typography>
            <Typography sx={styles.hours}>
              6:00pm - 3:00am
              <br />
              Monday to Friday
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#378C92",
        }}
      >
        <Box sx={styles.copyrightContainer}>
          <Box sx={styles.topHeaderContainer}>
            <Typography sx={styles.copyright}>
              Copyright © 2024 Techietribe. All Rights Reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Snackbar
        sx={{ mb: "1rem" }}
        open={snackbarOpen}
        autoHideDuration={6000}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert severity={error ? "error" : "success"}>{snackbarMessage}</Alert>
      </Snackbar>
    </>
  );
};

export default Footer;
