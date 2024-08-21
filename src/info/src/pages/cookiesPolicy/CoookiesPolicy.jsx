import { Typography, Box } from "@mui/material";
import React from "react";
import HeroImageSection from "../../components/general/heroImageSection";
import TermsAndConditionsHeader from "../../../public/assets/pngs/FooterResources/TermsAndConditions.jpg";

const CookiesPolicy = () => {
  return (
    <Box>
      <HeroImageSection
        title="Cookie Policy"
        imageSrc={TermsAndConditionsHeader}
        fullScreen={true}
        call={true}
        subText="We use cookies to enhance your experience on our site. Learn more about how we use cookies and your choices."
      />
      <Box
        sx={{
          paddingX: { xs: 2, md: "10rem" },
          paddingY: { xs: 2, md: "2rem" },
        }}
      >
        <Typography
          sx={{
            color: "#378C92",
            fontSize: { xs: "2.5rem", md: "3rem" },
            fontFamily: "Barlow",
            fontWeight: "600",
            mb: { xs: "1rem", md: "2rem" },
          }}
        >
          Cookies Policy
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontSize: { xs: "0.8rem", md: "1.1rem" },
            fontFamily: "Barlow",
            lineHeight: "1.6",
            mb: "1rem",
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
            fontSize: { xs: "0.8rem", md: "1.1rem" },
            fontFamily: "Barlow",
            lineHeight: "1.6",
            mb: "1rem",
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
            fontSize: { xs: "0.8rem", md: "1.1rem" },
            fontFamily: "Barlow",
            lineHeight: "1.6",
            mb: "1rem",
          }}
        >
          <strong>How We Use Cookies</strong>
          <br />
          We use cookies to enhance your experience on our website, including:
          <ul>
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
            fontSize: { xs: "0.8rem", md: "1.1rem" },
            fontFamily: "Barlow",
            lineHeight: "1.6",
            mb: "1rem",
          }}
        >
          <strong>Types of Cookies We Use</strong>
          <br />
          Our website uses the following types of cookies:
          <ul>
            <li>
              <strong>Essential Cookies:</strong> These cookies are necessary
              for the website to function and cannot be switched off in our
              systems.
            </li>
            <li>
              <strong>Performance Cookies:</strong> These cookies help us
              understand how visitors interact with our website, allowing us to
              improve it.
            </li>
            <li>
              <strong>Functional Cookies:</strong> These cookies allow us to
              remember choices you make and provide enhanced, more personalized
              features.
            </li>
            <li>
              <strong>Targeting Cookies:</strong> These cookies are used to
              deliver advertisements more relevant to you and your interests.
            </li>
          </ul>
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontSize: { xs: "0.8rem", md: "1.1rem" },
            fontFamily: "Barlow",
            lineHeight: "1.6",
            mb: "1rem",
          }}
        >
          <strong>Your Choices Regarding Cookies</strong>
          <br />
          You can control and manage cookies through your browser settings. Most
          browsers allow you to refuse or accept cookies, delete existing
          cookies, or notify you when a cookie is being set. Please consult your
          browser's help section for instructions.
          <br />
          Note that disabling cookies may affect the functionality of our
          website and limit your ability to use certain features.
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontSize: { xs: "0.8rem", md: "1.1rem" },
            fontFamily: "Barlow",
            lineHeight: "1.6",
            mb: "1rem",
          }}
        >
          <strong>Changes to This Cookies Policy</strong>
          <br />
          We may update this Cookies Policy from time to time. Any changes will
          be posted on this page, and your continued use of our website will
          constitute acceptance of the revised policy. Please review this policy
          periodically to stay informed of any updates.
        </Typography>

        <Typography
          sx={{
            color: "#000000",
            fontSize: { xs: "0.8rem", md: "1.1rem" },
            fontFamily: "Barlow",
            lineHeight: "1.6",
            mb: "1rem",
          }}
        >
          <strong>Contact Us</strong>
          <br />
          If you have any questions or concerns about our use of cookies, please
          contact us at info@techietribe.com.
        </Typography>
      </Box>
    </Box>
  );
};

export default CookiesPolicy;
