import React from "react";
import { Box, Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PinDropIcon from "@mui/icons-material/PinDrop";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Link } from "react-router-dom";
import companyData from "../../utils/data/companyData";

const TextComponent = () => {
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };
  const handleAddressClick = () => {
    window.open(`${companyData.googleMapAddress}`, "_blank");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingX: "2rem",
        background: "linear-gradient(to top, #378c92, #536cb7)",
        width: "100%",
        borderRadius: "8px",
        justifyContent: "space-evenly",
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
          Once you submit the form, our team will respond to you within 24 hours.
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
                  "&&:hover": {
                    color: '#e0e0e0',
                    cursor: "pointer"
                  },
                }}
              >
                <Link to="mailto:example@gmail.com" target="_blank" >
                  {companyData.officialEmail}
                </Link>
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
                  "&&:hover": {
                    color: '#e0e0e0',
                    cursor: "pointer"
                  },
                }}
              >
                <Link to={`tel:${companyData.phoneNumber}`} target="_blank" >
                  {companyData.phoneNumber}
                </Link>
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
              <Typography sx={{
                color: "#ffffff",
                fontSize: "1rem",
                fontFamily: "Barlow",
                fontWeight: "200",
                "&&:hover": {
                  color: '#e0e0e0',
                  cursor: "pointer"
                },
              }} onClick={handleAddressClick}>
                {companyData.address}
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
            gap: 1.5,
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
              transition: "all 0.2s linear",
              color: "#378c92",
              "&:hover": {
                backgroundColor: "rgb(190,190,190)",
                cursor: "pointer",
                color: "white",
              },
            }}
            onClick={() =>
              handleIconClick(
                `${companyData.socialMedia.facebook}`
              )
            }
          >
            <FacebookIcon sx={{
              color: "inherit",
            }} />
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
              transition: "all 0.2s linear",
              color: "#378c92",
              "&:hover": {
                backgroundColor: "rgb(190,190,190)",
                cursor: "pointer",
                color: "white",
              },
            }}
            onClick={() =>
              handleIconClick(
                `${companyData.socialMedia.instagram}`
              )
            }
          >
            <InstagramIcon sx={{
              color: "inherit",
            }} />
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
              transition: "all 0.2s linear",
              color: "#378c92",
              "&:hover": {
                backgroundColor: "rgb(190,190,190)",
                cursor: "pointer",
                color: "white",
              },
            }}
            onClick={() =>
              handleIconClick(`${companyData.socialMedia.linkedin}`)
            }
          >
            <LinkedInIcon sx={{
              color: "inherit",

            }} />
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
              transition: "all 0.2s linear",
              color: "#378c92",
              "&:hover": {
                backgroundColor: "rgb(190,190,190)",
                cursor: "pointer",
                color: "white",
              },
            }}
            onClick={() =>
              handleIconClick(`${companyData.socialMedia.youtube}`)
            }
          >
            <YouTubeIcon sx={{
              color: "inherit",
            }} />
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
              transition: "all 0.2s linear",
              color: "#378c92",
              "&:hover": {
                backgroundColor: "rgb(190,190,190)",
                cursor: "pointer",
                color: "white",
              },
            }}
            onClick={() =>
              handleIconClick(`${companyData.socialMedia.pinterest}`)
            }
          >
            <PinterestIcon sx={{
              color: "inherit",
            }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TextComponent;
