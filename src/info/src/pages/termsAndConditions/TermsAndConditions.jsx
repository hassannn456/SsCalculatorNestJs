import { Typography, Box } from "@mui/material";
import React from "react";
import HeroImageSection from "../../components/general/heroImageSection";
import TermsAndConditionsHeader from "../../../public/assets/pngs/FooterResources/termsAndCondition1.webp";

const TermsAndConditions = () => {
  return (
    <Box>
      <HeroImageSection
        title="Terms and Conditions"
        imageSrc={TermsAndConditionsHeader}
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
          Terms & Conditions
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
          <strong>
            Please read our terms carefully before using www.thetechietribe.com
            – the sole property of Techietribe (Pvt.) Ltd.
          </strong>
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
          The website owner reserves the right to modify, change, or completely
          revise these terms of use. It is therefore advised that all website
          users thoroughly review this page. Users of Techietribe.com must
          accept and adhere to these terms of use to enjoy the premium features
          and functionality, and to take full advantage of all products and
          services available on this site.
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
          <strong>Acceptance of Terms</strong>
          <br />
          By accessing and using our website, you accept our terms and
          conditions and agree to comply with them.
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
          <strong>Changes to Our Website</strong>
          <br />
          We may update or modify our website at any time to reflect changes to
          our products and services as per our business priorities and user
          needs. Our website is available for free, but we may restrict access
          to any part of it or suspend or withdraw it for business operational
          reasons.
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
          <strong>Confidentiality of Shared Information</strong>
          <br />
          If you are provided with a user identification code or any other
          information as part of our digital security procedures, you must keep
          that information confidential. For instance, if you make payments
          through our website for any project, you should not disclose
          confidential information to any third party. If you suspect any
          security violation or find someone using your confidential
          information, you must immediately notify us at
          support@techietribe.com.
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
          <strong>Use of Website Materials</strong>
          <br />
          We own and are licensed to all intellectual property rights and
          content published on this website. Interstate and international
          copyright laws protect our work. You may download extracts from any
          page(s) or print a copy for personal use, provided our trademark
          remains on it. You are not permitted to modify digital or paper copies
          of any materials you print or download from our site. You must not use
          any video, audio sequences, graphics, or illustrations separately from
          their accompanying text. All such rights are reserved with us. You
          must always acknowledge our status as the proprietor of any content
          you curate and use for non-commercial purposes. You may not use any
          content from our website for commercial purposes without our prior
          consent or license. If you breach these terms, we will revoke your
          right to use our website and may take legal action. Additionally, at
          our discretion, you must destroy or return any copies of our website
          material you have made.
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
          Our website may contain links to third-party sites for informational
          purposes only. These external resource links should not be interpreted
          as endorsements by us of those sites or their content. We are not
          responsible for the content, practices, or privacy policies of these
          third-party sites linked to our website, as we have no control over
          them.
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
          <strong>Refunds and Cancellations</strong>
          <br />
          In exceptional cases, Techietribe may consider refund and cancellation
          requests under specific conditions. The terms for refunds and
          cancellations are as follows:
          <ul>
            <li>
              A full refund will be granted if the project work has not
              commenced at the time of the cancellation request.
            </li>
            <li>
              If one or more milestones of the project have been completed or
              delivered, those payments are non-refundable, and the client is
              responsible for payment for those milestones. The remaining amount
              will be refunded.
            </li>
            <li>
              If a project has been initiated but no milestones have been
              reached, the client will be liable for payment for the work
              completed, and the remaining project will be canceled with a
              corresponding refund.
            </li>
            <li>
              Refunds or cancellations may be subject to the terms agreed upon
              in the individual project agreement between the client and
              Techietribe.
            </li>
            <li>
              No refund or cancellation will be provided once the entire project
              is completed or delivered.
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
          <strong>Modification of Terms</strong>
          <br />
          Techietribe.com’s terms of use may be changed or modified at any time
          by the site owner. Any new features, services, or products added to
          this website will immediately be subject to these terms and
          conditions. Your continued use of our website signifies your
          acceptance of these terms and conditions. Please review this page
          periodically, as we may amend these terms at any time. To ensure
          uninterrupted and trouble-free service from Techietribe, make sure to
          read and understand the terms applicable at that time.
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
          Feel free to contact us for any inquiries or concerns at
          info@techietribe.com.
        </Typography>
      </Box>
    </Box>
  );
};

export default TermsAndConditions;
