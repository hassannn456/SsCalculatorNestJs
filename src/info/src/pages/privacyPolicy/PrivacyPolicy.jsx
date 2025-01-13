import { Typography, Box } from "@mui/material";
import React from "react";
import HeroImageSection from "../../components/general/heroImageSection";
import PrivacyPolicyImage from "/assets/pngs/FooterResources/privacyPolicy.webp";
import companyData from "../../utils/data/companyData";

const PrivacyPolicy = () => {
  return (
    <Box>
      <HeroImageSection
        title="Privacy Policy"
        imageSrc={PrivacyPolicyImage}
        fullScreen={true}
        call={true}
        subText="Leveraging a diverse range of development technologies since our inception, we consistently align with the latest trends and evolving demands."
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
          Privacy Policy
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
          <strong>Welcome to Techietribe (Pvt.) Ltd.'s Privacy Policy</strong>
          <br />
          This Privacy Policy explains how Techietribe (Pvt.) Ltd. collects,
          uses, and protects your personal information when you use our website,
          www.thetechietribe.com. By accessing and using our site, you agree to
          the terms outlined in this policy.
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
          <strong>Information We Collect</strong>
          <br />
          We collect personal information that you voluntarily provide to us,
          such as your name, email address, and contact details when you use our
          services or communicate with us. We may also collect information about
          your interactions with our website, such as IP addresses and browsing
          behavior, through cookies and similar technologies.
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
          <strong>How We Use Your Information</strong>
          <br />
          The information we collect is used to provide and improve our
          services, communicate with you, and ensure a personalized experience
          on our website. We may use your data to send you updates, newsletters,
          or promotional materials that may be of interest to you.
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
          <strong>Data Protection and Security</strong>
          <br />
          We implement reasonable security measures to protect your personal
          information from unauthorized access, alteration, disclosure, or
          destruction. However, no method of transmission over the Internet or
          electronic storage is 100% secure, and we cannot guarantee absolute
          security.
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
          <strong>Sharing Your Information</strong>
          <br />
          We do not sell or rent your personal information to third parties. We
          may share your data with trusted partners who assist us in operating
          our website and conducting our business, provided they agree to keep
          this information confidential.
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
          <strong>Your Rights</strong>
          <br />
          You have the right to access, correct, or delete your personal
          information. If you wish to exercise these rights or have any
          questions about your data, please contact us at  {companyData.officialEmail}.
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
          <strong>Third-Party Links</strong>
          <br />
          Our website may contain links to third-party sites. We are not
          responsible for the privacy practices or content of these external
          sites. We encourage you to review the privacy policies of any
          third-party sites you visit.
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
          <strong>Changes to This Privacy Policy</strong>
          <br />
          We may update this Privacy Policy from time to time. Any changes will
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
          If you have any questions or concerns about this Privacy Policy,
          please contact us at {companyData.officialEmail}.
        </Typography>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
