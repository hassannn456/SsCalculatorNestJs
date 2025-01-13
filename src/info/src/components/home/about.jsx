// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Box, Divider, Tooltip, Typography, Slide, Zoom } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { useInView } from "react-intersection-observer";
import AboutImage from "/assets/images/about/About1.webp";
import AboutImage_1 from "/assets/images/about/About2.webp";
import Signature from "/assets/images/about/Signature.webp";
import { useMediaQuery } from "@mui/material";
import { motion } from 'framer-motion';
import companyData from "../../utils/data/CompanyInfo";

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: { xs: "column-reverse", md: "row" },
    justifyContent: "center",
    padding: { xs: "20px 15px", lg: "80px 0px 160px 0" },
    margin: "auto",
    width: { xs: "100%", md: "60rem", lg: "80rem", xl: "90rem" },
    gap: "1rem",
  },
  heading: {
    fontSize: "20px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#378C92",
    textDecoration: "underline",
    textDecorationColor: "#313431",
    textDecorationThickness: "2px",
    textUnderlineOffset: "4px",
  },
  subHeading: {
    fontSize: { xs: "20px", md: "40px" },
    fontFamily: "Barlow",
    fontWeight: "600",
    color: "#313431",
  },
  aboutContent: {
    fontSize: "14px",
    fontFamily: "Barlow",
    fontWeight: "400",
    color: "#313431",
    mt: "2rem",
    lineHeight: "2",
  },
  signatureContainer: {
    display: "flex",
    mt: "2rem",
    flexDirection: { xs: "column", md: "row" },
  },

  ceoName: {
    fontSize: "16px",
    fontFamily: "Barlow",
    fontWeight: "600",
    color: "#313431",
    mt: "-2.5rem",
  },

  ceoRole: {
    fontSize: "12px",
    fontFamily: "Barlow",
    fontWeight: "300",
    color: "#313431",
  },

  verticalDivider: {
    ml: "-2rem",
  },

  call: {
    fontSize: "16px",
    fontFamily: "Barlow",
    fontWeight: "300",
    color: "#313431",
  },

  number: {
    fontSize: "24px",
    fontFamily: "Barlow",
    fontWeight: "600",
    color: "#378C92",
    cursor: "pointer",
  },

  arrowIconContainer: {
    cursor: "pointer",
    background: "linear-gradient(135deg, #378C92 0%, #285C5E 100%)",
    padding: "28px 30px",
    borderRadius: "50%",
    position: "absolute",
    marginTop: "5rem",
    left: 50,

    "&:hover": {
      background: "linear-gradient(135deg, #285C5E 0%, #378C92 100%)",
    },
  },
};

const cardVariants = {
  offscreen: {
    y: -10,
    opacity: 0,
  },
  onscreen: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 50,
      duration: 2.5,
      ease: "easeOut",
      delay: index * 0.1
    },
  }),
};

const cardVariantsRight = {
  offscreen: {
    marginLeft: "100px",
    opacity: 0,
  },
  onscreen: {
    marginLeft: "0px",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 50,
      duration: 0.5,
    },
  },
};

const About = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [slideIn, setSlideIn] = useState(false);
  useEffect(() => {
    setSlideIn(true);
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <Box sx={{
      backgroundColor: "#ffffff",
      pt: { xs: "40px", md: "0px" },
      overflow: "hidden",
      background: "url('/assets/images/bg-shape.webp')",
      backgroundRepeat: "no-repeat"
    }}>
      <Zoom in={slideIn} timeout={1000}>
        <Box sx={styles.mainContainer} ref={ref}>
          {isMobile ? (
            <>
              <motion.div
                className="card-container"
                style={{ overflow: "hidden" }}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariantsRight}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      md: "50%",
                      padding: "0px 2rem 0px 0px",
                    },
                    my: { xs: "2rem", md: "0rem" },
                  }}
                >
                  <Typography sx={styles.heading}>WHO WE ARE</Typography>
                  <Typography sx={styles.subHeading}>
                    Customized IT Solutions, Management & Support.
                  </Typography>
                  <Typography sx={styles.aboutContent}>
                    Boost innovation with top-tier tech teams. Our platform
                    connects you with skilled professionals to meet all your
                    software development requirements.
                  </Typography>
                  <Divider sx={{ mt: "2rem" }} />
                  <Box sx={styles.signatureContainer}>
                    <Box>
                      <img
                        style={{
                          marginLeft: "-7.5rem",
                          marginTop: "-2rem",
                          width: "350px",
                        }}
                        src={Signature}
                        alt="signature"
                      />
                      <Typography sx={styles.ceoName}>
                        {companyData.ownerName}
                      </Typography>
                      <Typography sx={styles.ceoRole}>
                        CEO, Techietribe
                      </Typography>
                    </Box>
                    <Divider
                      orientation={"vertical"}
                      flexItem
                      sx={styles.verticalDivider}
                    />
                    <Box
                      sx={{
                        padding: { xs: "10px 0px", md: "10px 0px 10px 40px" },
                      }}
                    >
                      <Typography sx={styles.call}>
                        Call to ask any question
                      </Typography>
                      <Typography sx={styles.number}>
                        <a href="tel:+923004561162">+92 300 456 1162</a>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    md: "50%",
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "relative",
                  },
                }}
              >
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <Tooltip placement="top" title="Coming Soon" arrow>
                    <Box sx={styles.arrowIconContainer}>
                      <PlayArrowRoundedIcon
                        sx={{ fontSize: "40px", color: "#ffffff" }}
                      />
                    </Box>
                  </Tooltip>

                  <Box
                    sx={{
                      position: "absolute",
                      marginTop: "12.5rem",
                      left: -20,
                      border: "8px solid #ffffff",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src={AboutImage_1}
                      alt="about"
                      style={{
                        borderRadius: "10px",
                      }}
                    />
                  </Box>

                  <img src={AboutImage} alt="about" />
                </Box>
              </Box>
              <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={cardVariantsRight}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <img
                    src={AboutImage}
                    alt="about"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
              </motion.div>
            </>
          ) :
            (inView && (
              <>
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      md: "50%",
                      padding: "0px 2rem 0px 0px",
                    },
                    my: { xs: "2rem", md: "0rem" },
                  }}
                >
                  <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={cardVariants}
                    transition={{ type: "spring", stiffness: 100 }}
                    custom={1}
                  >
                    <Typography sx={styles.heading}>WHO WE ARE</Typography>
                  </motion.div>
                  <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={cardVariants}
                    transition={{ type: "spring", stiffness: 100 }}
                    custom={2}
                  >
                    <Typography sx={styles.subHeading}>
                      Customized IT Solutions, Management & Support.
                    </Typography>
                  </motion.div>
                  <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={cardVariants}
                    transition={{ type: "spring", stiffness: 100 }}
                    custom={3}
                  >
                    <Typography sx={styles.aboutContent}>
                      Boost innovation with top-tier tech teams. Our platform
                      connects you with skilled professionals to meet all your
                      software development requirements.
                    </Typography>
                  </motion.div>
                  <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={cardVariants}
                    transition={{ type: "spring", stiffness: 100 }}
                    custom={4}
                  >
                    <Divider sx={{ mt: "2rem" }} />
                    <Box sx={styles.signatureContainer}>
                      <Box>
                        <img
                          style={{
                            marginLeft: "-7.5rem",
                            marginTop: "-2rem",
                            width: "350px",
                          }}
                          src={Signature}
                          alt="signature"
                        />
                        <Typography sx={styles.ceoName}>
                          {companyData.ownerName}                        </Typography>
                        <Typography sx={styles.ceoRole}>
                          CEO, Techietribe
                        </Typography>
                      </Box>
                      <Divider
                        orientation={"vertical"}
                        flexItem
                        sx={styles.verticalDivider}
                      />
                      <Box
                        sx={{
                          padding: { xs: "10px 0px", md: "10px 0px 10px 40px" },
                        }}
                      >
                        <Typography sx={styles.call}>
                          Call to ask any question
                        </Typography>
                        <Typography sx={styles.number}>
                          <a href="tel:+923004561162">+92 300 456 1162</a>
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Box>
                <Box
                  sx={{
                    width: {
                      xs: "100%",
                      md: "50%",
                      display: "flex",
                      justifyContent: "flex-end",
                      position: "relative",
                    },
                  }}
                >
                  <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <Tooltip placement="top" title="Coming Soon" arrow>
                      <Box sx={styles.arrowIconContainer}>
                        <PlayArrowRoundedIcon
                          sx={{ fontSize: "40px", color: "#ffffff" }}
                        />
                      </Box>
                    </Tooltip>

                    <Box
                      sx={{
                        position: "absolute",
                        marginTop: "12.5rem",
                        left: -20,
                        border: "8px solid #ffffff",
                        borderRadius: "10px",
                      }}
                    >
                      <img
                        src={AboutImage_1}
                        alt="about"
                        style={{
                          borderRadius: "10px",
                        }}
                      />
                    </Box>

                    <img src={AboutImage} alt="about" />
                  </Box>
                </Box>
                <Slide in={slideIn} direction="right" timeout={1800}>
                  <Box
                    sx={{
                      display: { xs: "flex", md: "none" },
                    }}
                  >
                    <img
                      src={AboutImage}
                      alt="about"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Box>
                </Slide>
              </>
            ))}
        </Box>
      </Zoom>
    </Box>
  );
};

export default About;
