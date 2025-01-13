import * as React from "react";

import { Box, CardMedia, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ReactIcon from "/assets/images/technologies/React.webp";
import Angular from "/assets/images/technologies/Angular.png";
import NextIcon from "/assets/images/technologies/Next.webp";
import Vue from "/assets/images/technologies/Vue.webp";
import AWS from "/assets/images/technologies/AWS.webp";
import AWSAmplify from "/assets/images/technologies/AWS-Amplify.webp";
import Rails from "/assets/images/technologies/Rails.webp";
import GoogleCloud from "/assets/images/technologies/Google-Cloud.webp";
import Laravel from "/assets/images/technologies/Laravel.png";
import PostGres from "/assets/images/technologies/PostGres.png";

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
    padding: { xs: "20px 10px", lg: "60px 80px 0 80px" },
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
      <style jsx={true | undefined} global={true | undefined}>{`
        .swiper-button-prev,
        .swiper-button-next {
          width: 44px;
          color: blue green;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 24px;
          color: blue green;
        }
      `}</style>
      <Box sx={styles.mainContainer}>
        <Typography sx={styles.heading}>TECHNOLOGIES WE USE</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", md: "59rem", lg: "82rem", xl: "90rem" },
            padding: { xs: "40px 0px", lg: "30px 0px 0px" },
            justifyContent: "center",
            backgroundColor: "#ffffff",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Swiper
              spaceBetween={0}
              slidesPerView={7}
              slidesPerGroup={1}
              speed={5000}
              loop={true}
              navigation={true}
              autoplay={{
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              cssMode={true}
              autoplaydisableoninteraction={"false"}
              modules={[Pagination, Navigation, Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 4,
                },
                400: {
                  slidesPerView: 4,
                },
                600: {
                  slidesPerView: 5,
                },
                800: {
                  slidesPerView: 5,
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
                      gap: "0.5rem",
                      alignItems: "center",
                      height: "72.5px",
                    }}
                  >
                    {icon === NextIcon ? (
                      <CardMedia
                        component="img"
                        loading="lazy"
                        image={icon}
                        alt={`Technology icon ${index}`}
                        sx={{ height: { xs: "30px", lg: "50px" }, width: { xs: "30px", lg: "50px" }, objectFit: "contain" }}
                      />
                    ) : (
                      <CardMedia
                        component="img"
                        loading="lazy"
                        image={icon}
                        alt={`Technology icon ${index}`}
                        sx={{ height: { xs: "30px", lg: "50px" }, width: { xs: "30px", lg: "50px" }, objectFit: "contain" }}
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
