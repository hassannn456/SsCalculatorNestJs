import { Typography, Box } from "@mui/material";
import React from "react";
import HeroImageSection from "../utils/commons/heroImageSection";
import CookiesImage from "/assets/images/FooterResources/cookies.webp";
import companyData from "../utils/data/CompanyInfo";
const CookiesPolicy = () => {
  return (
    <Box>
      <HeroImageSection
        title="Cookie Policy"
        imageSrc={CookiesImage}
        fullScreen={true}
        call={true}
        subText="We use cookies to enhance your experience on our site. Learn more about how we use cookies and your choices."
      />
      <Box
        sx={{
          paddingX: { xs: 2, md: "8rem" },
          paddingY: { xs: 3, md: "3rem" },
          backgroundColor: "#F9F9F9",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <Typography
          sx={{
            color: "#378C92",
            fontSize: { xs: "2.5rem", md: "3rem" },
            fontFamily: "Barlow",
            fontWeight: "600",
            mb: { xs: "1rem", md: "2rem" },
            textAlign: "center",
          }}
        >
          Cookies Policy
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontSize: { xs: "0.9rem", md: "1.1rem" },
            fontFamily: "Barlow",
            lineHeight: "1.7",
            mb: "1.5rem",
          }}
        >
          <strong>Introduction to Our Cookies Policy</strong>
          <br />
          This Cookies Policy explains how Techietribe (Pvt.) Ltd. uses cookies
          and similar tracking technologies on our website,
          www.thetechietribe.com. By using our site, you consent to our use of
          cookies as described in this policy.
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontSize: { xs: "0.9rem", md: "1.1rem" },
            fontFamily: "Barlow",
            lineHeight: "1.7",
            mb: "1.5rem",
          }}
        >
          <strong>What Are Cookies?</strong>
          <br />
          Cookies are small text files that are placed on your device when you
          visit a website. They help the website recognize your device and store
          some information about your preferences or past actions.
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontSize: { xs: "0.9rem", md: "1.1rem" },
            fontFamily: "Barlow",
            lineHeight: "1.7",
            mb: "1.5rem",
          }}
        >
          <strong>How We Use Cookies</strong>
          <br />
          We use cookies to enhance your experience on our website, including:
          <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            {" "}
            <li>Remembering your login information for future visits.</li>
            <li>Tracking your preferences and settings.</li>
            <li>
              Analyzing website traffic and usage to improve our services.
            </li>
            <li>Providing personalized content and advertisements.</li>
          </ul>
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontSize: { xs: "0.9rem", md: "1.1rem" },
            fontFamily: "Barlow",
            lineHeight: "1.7",
            mb: "1.5rem",
          }}
        >
          <strong>Types of Cookies We Use</strong>
          <br />
          Our website uses the following types of cookies:
          <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>
              <strong>Essential Cookies:</strong> Necessary for the website to
              function.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Help us understand how
              visitors interact with the site.
            </li>
            <li>
              <strong>Functional Cookies:</strong> Remember your choices to
              provide personalized features.
            </li>
            <li>
              <strong>Targeting Cookies:</strong> Deliver ads that are more
              relevant to you.
            </li>
          </ul>
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontSize: { xs: "0.9rem", md: "1.1rem" },
            fontFamily: "Barlow",
            lineHeight: "1.7",
            mb: "1.5rem",
          }}
        >
          <strong>Your Choices Regarding Cookies</strong>
          <br />
          You can control cookies through your browser settings. Disabling
          cookies may affect the functionality of our website and limit your
          ability to use certain features.
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontSize: { xs: "0.9rem", md: "1.1rem" },
            fontFamily: "Barlow",
            lineHeight: "1.7",
            mb: "1.5rem",
          }}
        >
          <strong>Changes to This Cookies Policy</strong>
          <br />
          We may update this policy from time to time. Please review it
          periodically to stay informed.
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontSize: { xs: "0.9rem", md: "1.1rem" },
            fontFamily: "Barlow",
            lineHeight: "1.7",
            mb: "1.5rem",
          }}
        >
          <strong>Contact Us</strong>
          <br />
          If you have any questions, please contact us at {companyData.officialEmail}.
        </Typography>
      </Box>
    </Box>
  );
};

export default CookiesPolicy;
