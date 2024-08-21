import React from "react";
import { Box, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PinDropIcon from "@mui/icons-material/PinDrop";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const TextComponent = () => {
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingX: "2rem",
        background: "linear-gradient(to top, #378c92, #536cb7)",
        width: "100%",
        height: "100%",
        borderRadius: "8px",
        justifyContent: "space-around",
        paddingTop: { xs: "1rem", md: 0 },
        minHeight: { xs: "35rem", md: "100%" },
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: "1.5rem",
            fontFamily: "Barlow",
            fontWeight: "600",
          }}
        >
          Contact Information
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: "1rem",
            fontFamily: "Barlow",
            fontWeight: "200",
          }}
        >
          After you submit the form, out team will get back to you withn 24
          hours
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "0.7rem",
            }}
          >
            <MailOutlineIcon sx={{ color: "#ffffff" }} />
            <Box>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1.1rem",
                  fontFamily: "Barlow",
                  fontWeight: "600",
                }}
              >
                Chat with us
              </Typography>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  fontFamily: "Barlow",
                  fontWeight: "200",
                }}
              >
                info@techietribe.com
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "0.7rem",
            }}
          >
            <PhoneIcon sx={{ color: "#ffffff" }} />
            <Box>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1.1rem",
                  fontFamily: "Barlow",
                  fontWeight: "600",
                }}
              >
                Call us
              </Typography>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  fontFamily: "Barlow",
                  fontWeight: "200",
                }}
              >
                +92 300 456 1126
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "0.7rem",
            }}
          >
            <PinDropIcon sx={{ color: "#ffffff" }} />
            <Box>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1.1rem",
                  fontFamily: "Barlow",
                  fontWeight: "600",
                }}
              >
                Visit us
              </Typography>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  fontFamily: "Barlow",
                  fontWeight: "200",
                }}
              >
                Office#718, Siddique Trade Center, Gulberg 2, Lahore, Pakistan
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          paddingBottom: { xs: "1rem", md: 0 },
        }}
      >
        <Typography
          sx={{
            color: "#ffffff",
            fontFamily: "Barlow",
            fontSize: "1.1rem",
            fontWeight: "600",
          }}
        >
          Social Media
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "40%" },
            justifyContent: { xs: "space-around", md: "space-between" },
            marginTop: "1rem",
          }}
        >
          {" "}
          <Box
            sx={{
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              border: "2px solid #ffffff",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
            onClick={() =>
              handleIconClick(
                "https://www.facebook.com/profile.php?id=61557054675828&mibextid=ZbWKwL"
              )
            }
          >
            <FacebookIcon sx={{ color: "#378c92" }} />
          </Box>
          <Box
            sx={{
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              border: "2px solid #ffffff",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
            onClick={() =>
              handleIconClick(
                "https://www.instagram.com/thetechietribe_?igsh=MXAzY2d5NGtpdXJpcg=="
              )
            }
          >
            <InstagramIcon sx={{ color: "#378c92" }} />
          </Box>
          <Box
            sx={{
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              border: "2px solid #ffffff",
              "&:hover": {
                backgroundColor: "#f0f0f0",
              },
            }}
            onClick={() =>
              handleIconClick("https://www.linkedin.com/company/techietribe")
            }
          >
            <LinkedInIcon sx={{ color: "#378c92" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TextComponent;
