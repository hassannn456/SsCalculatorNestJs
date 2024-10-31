/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import * as React from "react";

import { Box, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ReactIcon from "/assets/pngs/technologies/React.png";
import Angular from "/assets/pngs/technologies/Angular.png";
import NextIcon from "/assets/pngs/technologies/Next.png";
import Vue from "/assets/pngs/technologies/Vue.png";
import AWS from "/assets/pngs/technologies/AWS.png";
import AWSAmplify from "/assets/pngs/technologies/AWS-Amplify.png";
import Rails from "/assets/pngs/technologies/Rails.png";
import GoogleCloud from "/assets/pngs/technologies/Google-Cloud.png";
import Laravel from "/assets/pngs/technologies/Laravel.png";
import PostGres from "/assets/pngs/technologies/PostGres.png";

const icons = [
  ReactIcon,
  Angular,
  NextIcon,
  Vue,
  AWS,
  AWSAmplify,
  Rails,
  GoogleCloud,
  Laravel,
  PostGres,
];

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: { xs: "20px 15px", lg: "60px 80px 0 80px" },
    backgroundColor: "#ffffff",
    alignItems: "center",
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
};

const TechnologyIndex = () => {
  return (
    <>
      <style jsx={undefined} global={undefined}>{`
        .swiper-button-prev,
        .swiper-button-next {
          width: 44px; /* Change these values to adjust the size */
          color: blue green;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 24px; /* This changes the size of the arrows */
          color: blue green;
        }
      `}</style>
      <Box sx={styles.mainContainer}>
        <Typography sx={styles.heading}>TECHNOLOGIES WE USE</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", md: "63rem", lg: "82rem", xl: "90rem" },
            // margin: "auto",
            padding: { xs: "40px 15px", lg: "30px 0px 0px" },
            justifyContent: "center",
            backgroundColor: "#ffffff",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Swiper
              spaceBetween={0}
              slidesPerView={7}
              speed={5000}
              loop={true}
              navigation={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              modules={[Pagination, Navigation, Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                400: {
                  slidesPerView: 2,
                },
                600: {
                  slidesPerView: 3,
                },
                800: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}
            >
              {icons.map((icon, index) => (
                <SwiperSlide key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "1rem",
                      alignItems: "center",
                      height: "72.5px",
                    }}
                  >
                    {icon === NextIcon ? (
                      <img
                        src={icon}
                        alt={`Technology icon ${index}`}
                        style={{ width: "50px", height: "50px" }}
                      />
                    ) : (
                      <img
                        src={icon}
                        alt={`Technology icon ${index}`}
                        style={{ height: "50px" }}
                      />
                    )}
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TechnologyIndex;
