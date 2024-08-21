import React from "react";


import { Stack, Typography } from "@mui/material";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import TestimonialImage1 from "../../../public/assets/pngs/testimonials/Testimonial1.png";
import TestimonialImage2 from "../../../public/assets/pngs/testimonials/Testimonial2.png";

const data = [
  {
    name: "Minhaj Alvi",
    designation: "Senior Software Engineer",
    testimonial:
      "I engaged Techietribe to develop a web application for both internal (admin work) and external purposes, including client onboarding, generating product quotes, obtaining approvals, and integrating APIs. Led by a skilled tech lead, they effectively manage a diverse team comprising project managers, frontend and backend developers. Their attentive listening and problem-solving prowess make them invaluable partners, highly recommended for any project. Their dedication to meeting deadlines and delivering high-quality results.",
    image: TestimonialImage1,
  },
  {
    name: "Hassan Chaudhary",
    designation: "Founder",
    testimonial:
      "I engaged Techietribe to develop a web application for both internal (admin work) and external purposes, including client onboarding, generating product quotes, obtaining approvals, and integrating APIs. Led by a skilled tech lead, they effectively manage a diverse team comprising project managers, frontend and backend developers. Their attentive listening and problem-solving prowess make them invaluable partners, highly recommended for any project. Their dedication to meeting deadlines and delivering high-quality results.",
    image: TestimonialImage2,
  },
];

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: { xs: "40px 15px", lg: "80px 0px" },
    backgroundColor: "#ffffff",
    alignItems: "center",
    margin: "auto",
    width: { xs: "100%", md: "63rem", lg: "80rem", xl: "90rem" },
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
};

const Testimonials = () => {
  return (
    <Stack sx={{ backgroundColor: "#ffffff" }}>
      <Stack sx={styles.mainContainer}>
        <Typography sx={styles.heading}>TESTIMONIALS</Typography>

        {/* <Stack direction="row" mt={3} width={"100%"} padding={"0px 40px"}>
                <Stack
                  direction="column"
                  justifyContent={"center"}
                  width={"50%"}
                  padding={"0px 20px 0px 0px"}
                >
                  <Typography
                    sx={{
                      color: "#313431",
                      fontSize: "14px",
                      fontFamily: "Barlow",
                      fontWeight: "400",
                    }}
                  >
                    I engaged Techietribe to develop a web application for both
                    internal (admin work) and external purposes, including
                    client onboarding, generating product quotes, obtaining
                    approvals, and integrating APIs. Led by a skilled tech lead,
                    they effectively manage a diverse team comprising project
                    managers, frontend and backend developers. Their attentive
                    listening and problem-solving prowess make them invaluable
                    partners, highly recommended for any project. Their
                    dedication to meeting deadlines and delivering high-quality
                    results.
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems={"center"}
                    mt={3}
                  >
                    <Avatar sx={{ width: 56, height: 56 }} />
                    <Stack direction="column">
                      <Typography
                        sx={{
                          color: "#313431",
                          fontSize: "16px",
                          fontFamily: "Barlow",
                          fontWeight: "600",
                        }}
                      >
                        Minhaj Alvi
                      </Typography>
                      <Typography
                        sx={{
                          color: "#313431",
                          fontSize: "14px",
                          fontFamily: "Barlow",
                          fontWeight: "400",
                        }}
                      >
                        Senior Software Engineer
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack
                  direction="row"
                  width={"50%"}
                  justifyContent={"flex-end"}
                >
                  <Image src={TestimonialImage1} alt="testimonials" />
                </Stack>
              </Stack> */}
        {/* <SwiperSlide>
            <Stack direction="row" mt={3} width={"100%"} padding={"0px 40px"}>
              <Stack
                direction="column"
                justifyContent={"center"}
                width={"50%"}
                padding={"0px 20px 0px 0px"}
              >
                <Typography
                  sx={{
                    color: "#313431",
                    fontSize: "14px",
                    fontFamily: "Barlow",
                    fontWeight: "400",
                  }}
                >
                  I engaged Techietribe to develop a web application for both
                  internal (admin work) and external purposes, including client
                  onboarding, generating product quotes, obtaining approvals,
                  and integrating APIs. Led by a skilled tech lead, they
                  effectively manage a diverse team comprising project managers,
                  frontend and backend developers. Their attentive listening and
                  problem-solving prowess make them invaluable partners, highly
                  recommended for any project. Their dedication to meeting
                  deadlines and delivering high-quality results.
                </Typography>
                <Stack direction="row" spacing={2} alignItems={"center"} mt={3}>
                  <Avatar sx={{ width: 56, height: 56 }} />
                  <Stack direction="column">
                    <Typography
                      sx={{
                        color: "#313431",
                        fontSize: "16px",
                        fontFamily: "Barlow",
                        fontWeight: "600",
                      }}
                    >
                      Hassan Chaudhary
                    </Typography>
                    <Typography
                      sx={{
                        color: "#313431",
                        fontSize: "14px",
                        fontFamily: "Barlow",
                        fontWeight: "400",
                      }}
                    >
                      Founder
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="row" width={"50%"} justifyContent={"flex-end"}>
                <Image src={TestimonialImage2} alt="testimonials" />
              </Stack>
            </Stack>
          </SwiperSlide> */}
      </Stack>
    </Stack>
  );
};

export default Testimonials;
