import React, { useState } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqData from "../../utils/data/FAQs";

const FAQAccordion = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {faqData.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
          sx={{ mb: 2, width: "100%" }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: expanded === `panel${index + 1}` ? "white" : "inherit",
                }}
              />
            }
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{
              backgroundColor:
                expanded === `panel${index + 1}` ? "#378c92" : "transparent",
              color: expanded === `panel${index + 1}` ? "white" : "#000000",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Barlow",
                fontSize: { xs: "0.8rem", md: "1rem" },
                color: "inherit",
              }}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "transparent",
              color: expanded === `panel${index + 1}` ? "white" : "inherit",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Barlow",
                fontSize: { xs: "0.7rem", md: "0.9rem" },
                color: "#000000",
              }}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default FAQAccordion;
