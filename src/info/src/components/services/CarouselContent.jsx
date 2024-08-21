import { Box, Typography, Container, CardMedia } from "@mui/material";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Support from "./../../../public/assets/pngs/services/carousel/Support.png";
import Frontend from "./../../../public/assets/pngs/services/carousel/Frontend.png";
import Backend from "./../../../public/assets/pngs/services/carousel/Backend.png";
import FullStack from "./../../../public/assets/pngs/services/carousel/fullstack.png";
import Experience from "./../../../public/assets/pngs/services/carousel/Experience.png";
import QA from "./../../../public/assets/pngs/services/carousel/QA.png";
import CustomCard from "./CustomCard";
import SectionIntro from "../general/SectionHeader";
function CarouselContent() {
  const list = [
    {
      src: Support,
      title: "Support",
      description:
        "We build extensible on-premise and cloud-based back-end solutions for mobile, web, desktop systems that scale with your growing needs.",
    },
    {
      src: Frontend,
      title: "Frontend Developer",
      description:
        "Benefit from our full stack front-end expertise to create innovative, human-centric and goal-oriented web & mobile solutions.",
    },
    {
      src: Backend,
      title: "Backend Developer",
      description:
        "We build extensible on-premise and cloud-based back-end solutions for mobile, web, desktop systems that scale with your growing needs.",
    },
    {
      src: Experience,
      title: "Experience",
      description:
        "With our extensive expertise in UI/UX design and front-end development, we build web applications with delightful user experiences.",
    },
    {
      src: FullStack,
      title: "FullStack Developer",
      description:
        "We provide skillful software engineering to the full spectrum of technologies from simple frontend prototyping to the high-performing backend.",
    },
    {
      src: QA,
      title: "QA Testing",
      description:
        "A wide range of independent software QA and testing services that adhere to the highest levels of security and industry standards.",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Container
      maxWidth={"100%"}
      sx={{
        paddingX: "2rem",
      }}
    >
      <SectionIntro title={"Area of Expertise"} subtitle={"Why Choose Us"} />
      <div className="city-swiper-container">
        <Swiper
          slidesPerView={4}
          slidesPerGroup={1}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={800}
          breakpoints={{
            300: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            601: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            720: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 1,
            },
          }}
          onInit={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {list.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  position: "relative",

                  "&:hover .banner-content::before, &:hover .banner-content::after":
                    {
                      width: "100%",
                    },
                  "&:hover .banner-content::after": {
                    right: 0,
                  },
                  "&:hover .banner-content::before": {
                    left: 0,
                  },
                  "&:hover": {
                    boxShadow: "0px 10px 20px 0px rgba(0,0,0,.05)",
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",

                    "&::after": {
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      left: 0,
                      zIndex: 1,
                      transition: "all .35s",
                    },
                  }}
                >
                  <CustomCard
                    url={item.src}
                    title={item.title}
                    description={item.description}
                  />
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={prevRef} className="city-custom-prev">
          <ArrowBackIcon />
        </div>
        <div ref={nextRef} className="city-custom-next">
          <ArrowForwardIcon />
        </div>
        <style>
          {`
              .city-custom-prev, .city-custom-next {
                display: none !important;
              }
              span.swiper-pagination-bullet {
                width: 12px;
                height: 12px;
                background: #3d3939;
              }
              span.swiper-pagination-bullet.swiper-pagination-bullet-active {
                background: #1c9ac0;
              }
              .city-swiper-container .swiper-wrapper {
                margin-top: 16px;
                margin-bottom: 5rem;
              }
              .citySliderBox:hover .navigateLink {
                top: 0 !important;
                opacity: 1 !important;
              }
              .citySliderBox:hover .CityName {
                color: black !important;
              }
              .citySliderBox {
                position: relative !important;
              }
              .city-swiper-container .swiper-wrapper {
                column-gap: 25px;
              }
              .city-swiper-container {
                position: relative !important;
              }
              .city-swiper-container .swiper-slide {
                margin-right: 0px !important;
               
              }
              .city-swiper-container .swiper-slide-next {
                background-color: #f0f3f6;
                transition: background-color 0.6s;
              
              }
              .sliderSvg {
                transform-origin: center;
                transition: transform 0.5s ease-in-out;
              }
              .sliderBox:hover .sliderSvg {
                animation: scaleInOut 0.8s infinite alternate;
              }
              @keyframes scaleInOut {
                0% {
                  transform: scale(0.7);
                }
                100% {
                  transform: scale(1);
                }
              }
              .sliderBox {
                cursor: pointer;
                padding-left: 10px;
                padding-right: 10px;
                padding-bottom: 28px;
                padding-top: 40px;
              }
              .sliderSvg {
                fill: #1c9ac0;
                margin-left: 42px;
              }
              .city-swiper-container .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
                display: block;
              }
              .city-custom-next,
              .city-custom-prev {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                z-index: 1;
                cursor: pointer;
                color: white;
                background: #dee2e8;
                height: 45px;
                width: 45px;
                margin: auto;
                display: flex;
                justify-content: center;
                align-items: center;
            
                transition: background-color 0.6s;
              }
              .city-custom-prev {
                left: 29px;
              }
              .city-custom-next {
                right: 29px;
              }
              .city-swiper-container {
                overflow: hidden;
              }
              .mySwiper .swiper-slide {
                transition: transform 0.8s ease-in-out;
              }
              @media only screen and (max-width: 900px) {
                .sliderSvg {
                  margin-left: 0px;
                  margin: auto;
                  display: flex;
                }
              }
              @media only screen and (max-width: 720px) {
                .sliderSvg {
                  margin-left: 0px;
                  margin: auto;
                  display: flex;
                }
               
              }
              @media only screen and (max-width: 500px) {
                .city-custom-prev,
                .city-custom-next {
                  display: none;
                }
              }
            `}
        </style>
      </div>
    </Container>
  );
}

export default CarouselContent;
