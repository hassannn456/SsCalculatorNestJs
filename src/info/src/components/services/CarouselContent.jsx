import { Box, Container } from "@mui/material";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Support from "/assets/images/services/carousel/Support.webp";
import Frontend from "/assets/images/services/carousel/Frontend.webp";
import Backend from "/assets/images/services/carousel/Backend.webp";
import FullStack from "/assets/images/services/carousel/fullstack.webp";
import Experience from "/assets/images/services/carousel/Experience.webp";
import QA from "/assets/images/services/carousel/QA.webp";
import CustomCard from "./CustomCard";
import SectionIntro from "../../utils/commons/SectionHeader";

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

  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <Container
      sx={{
        backgroundImage:
          "url(https://redvisionexperts.com/wp-content/uploads/2020/10/bg-map-3.webp)",
        backgroundPosition: "100% -10%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgb(240, 243, 246)",
        textAlign: "center",
        justifyContent: "left",
        overflow: "hidden",
        position: "relative",
        padding: "2rem",
        px: { lg: 10, md: 5, sm: 3, xs: 2 },
        py: { lg: 2, md: 10, sm: 8, xs: 5 },
        pb: { lg: 2, xs: 0 },
      }}
      maxWidth={"100%"}
    >
      <SectionIntro title={"Area of Expertise"} subtitle={"Why Choose Us"} justify={true} />
      <div className="city-swiper-container">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          freeMode={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
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
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
          }}
          onInit={(swiper) => {
            if (
              swiper.params.navigation &&
              prevRef.current &&
              nextRef.current
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }

          }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {list.map((item, index) => {
            let rotation = "rotateY(90deg)";
            if (index === activeIndex) {
              rotation = "rotateY(60deg)";
            } else if (index === (activeIndex + 1) % list.length) {
              rotation = "rotateY(0deg)";
            } else if (index === (activeIndex + 2) % list.length) {
              rotation = "rotateY(-59deg)";
            }
            return <SwiperSlide key={index}>
              <Box
                sx={{
                  perspective: "2000px",
                }}
              >
                <Box
                  sx={{
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    perspective: "1400px",
                    transform: { sm: "none", md: rotation },
                  
                    mx: "10px",
                    "&:hover": {
                      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
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
          })}
        </Swiper>
        <div ref={prevRef} className="city-custom-prev" >
          <ArrowBackIosIcon sx={{ color: "rgba(28, 154, 192, 0.85)", mt: { xs: "120px", sm: "40px", md: "0px" }, mr: { xs: "20px", md: "0px" } }} />
        </div>
        <div ref={nextRef} className="city-custom-next">
          <ArrowForwardIosIcon sx={{ color: "rgba(28, 154, 192, 0.85)", mt: { xs: "120px", sm: "40px", md: "0px" }, ml: { xs: "30px", md: "0px" } }} />
        </div>
        <style>
          {`
              .city-custom-prev, .city-custom-next {
                color: rgba(28, 154, 192, 0.85);
                height: 40px;
                width: 40px;
              }
              span.swiper-pagination-bullet {
                width: 10px;
                height: 10px;
                background: #3d3939;
              }
              span.swiper-pagination-bullet.swiper-pagination-bullet-active {
                background: #1c9ac0;
              }
              .city-swiper-container .swiper-wrapper {
                margin-top: 16px;
                margin-bottom: 5rem;
              }
              .city-custom-prev, .city-custom-next {
                position: absolute;
                top: 50%;
                z-index: 10;
                cursor: pointer;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
              }
              .city-custom-prev { left: 10px; }
              .city-custom-next { right: 10px; }
            `}
        </style>
      </div>
    </Container>
  );
}

export default CarouselContent;
