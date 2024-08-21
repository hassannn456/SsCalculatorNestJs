import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography, Container } from "@mui/material";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import bgArrow from "../../../public/assets/pngs/bg-arrow.png";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";

const testimonials = [
  {
    image:
      "https://img.freepik.com/free-photo/medium-shot-male-flight-attendant-posing_23-2150312701.jpg?t=st=1722977165~exp=1722980765~hmac=9238d998b56f4b36eb39b70c43f77e39202122bd02bc75966558a96bdef0645f&w=360",
    text: "Partnering with TechieTribe was a game-changer for us. Their innovative approach and seamless execution brought our software vision to life with remarkable efficiency.",
    name: "Lemaire Stewart",
    role: "Client",
  },
  {
    image:
      "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg",
    text: "TechieTribe transformed our digital presence with their cutting-edge solutions and exceptional service. Their expertise and commitment to innovation have elevated our business to new heights.",
    name: "Donald Ross",
    role: "Client",
  },

  {
    image:
      "https://img.freepik.com/free-photo/people-beauty-positive-emotions-concept-attractive-smiling-young-woman-with-bobbed-hairdo-dressed-green-casual-sweater-glad-recieve-present_273609-3743.jpg?t=st=1719865378~exp=1719868978~hmac=086a86dedb5cb9053ca8a4a4486cdcacacbf3d90c349dd280a576d240df1de2b&w=996",
    text: "Before choosing a service provider, I always refer to this directory. It has never let me down!",
    name: "Sarah Williams",
    role: "Patron",
  },
  {
    image:
      "https://img.freepik.com/free-photo/portrait-man-looking-front-him_23-2148422271.jpg?t=st=1719865070~exp=1719868670~hmac=41ddbe1558d351126ea76b5725905c6b432019c91eb971dc902da31c5eb9c6b2&w=996",
    text: "TechieTribe delivered top-notch software solutions that exceeded our expectations. Their dedication to quality and timely delivery truly sets them apart in the industry.",
    name: "David Wilson",
    role: "Customer",
  },
];

const truncateText = (text, limit) => {
  if (text.length <= limit) {
    return text;
  }
  return text.slice(0, limit) + "...";
};

const TestimonialSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Container maxWidth="lg" sx={{ pb: { xs: 5, md: 3 } }}>
      <div className="testimonail-swiper-container">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          loop={true}
          speed={800}
          pagination={{ clickable: true }} // Enable pagination dots
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <Box
                  sx={{
                    paddingLeft: { xs: "0", sm: "65px" },
                  }}
                >
                  <Box
                    sx={{
                      padding: {
                        xs: "80px 25px 25px 25px",
                        sm: "60px 45px 55px 95px",
                      },
                      marginTop: { xs: "50px", sm: "0px" },
                      margin: "0 auto",
                      position: "relative",
                      boxShadow: "0px 10px 20px 0px rgba(0,0,0,.07)",
                      borderRadius: "4px",
                      background: "white",
                      "&::after": {
                        content: "''",
                        background: `url(${bgArrow})`,
                        width: "166px",
                        position: "absolute",
                        top: "95%",
                        left: "30px",
                        zIndex: 10,
                      },
                      "&:hover .formatQuoteIcon": {
                        color: "#378C92",
                      },
                      "&:hover .testimonialImageBox": {
                        borderColor: "#378C92",
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "sans-serif",
                        color: "rgb(121, 127, 137)",
                        fontSize: { xs: "18px", lg: "18px" },
                        lineHeight: "34px",
                        position: "relative",
                        fontWeight: 400,
                      }}
                    >
                      {truncateText(testimonial.text, 110)}
                    </Typography>
                    <Typography
                      variant="h2"
                      pt={3}
                      sx={{
                        fontFamily: "Barlow",
                        color: "rgb(17, 22, 31)",
                        fontSize: { xs: "20px" },
                        lineHeight: "29px",
                        position: "relative",
                        fontWeight: 600,
                      }}
                    >
                      {testimonial.name},{" "}
                      <span
                        style={{
                          color: "rgb(121, 127, 137)",
                          fontFamily: "Barlow",
                          fontSize: "14px",
                          lineHeight: "15px",
                          position: "relative",
                          fontWeight: 700,
                        }}
                      >
                        {testimonial.role}
                      </span>
                    </Typography>
                    <FormatQuoteOutlinedIcon
                      className="formatQuoteIcon"
                      sx={{
                        width: "85px",
                        height: "90px",
                        position: "absolute",
                        bottom: "30px",
                        right: "30px",
                        color: isActive ? "#378C92" : "#f0f3f6",
                      }}
                    />
                    <Box
                      className="testimonialImageBox"
                      sx={{
                        border: "10px solid",
                        borderColor: isActive ? "#378C92" : "white",
                        padding: "10px",
                        borderRadius: "50%",
                        position: "absolute",
                        top: { xs: "-65px", sm: "60px" },
                        left: { xs: "12px", sm: "-55px" },
                        transition: "all .35s",
                      }}
                    >
                      <img
                        src={`${testimonial.image}`}
                        alt=""
                        style={{
                          width: "90px",
                          height: "90px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div ref={prevRef} className="testimonial-custom-prev">
          <ArrowBackIosNewIcon sx={{ fontSize: "40px" }} />
        </div>
        <div ref={nextRef} className="testimonial-custom-next">
          <ArrowForwardIosIcon sx={{ fontSize: "40px" }} />
        </div>

        <style>
          {`
          .testimonail-swiper-container .swiper-wrapper{
            margin-top: 16px;
            margin-bottom: 5rem;
            column-gap: 25px;
            position: relative;
          }
          .testimonail-swiper-container .swiper-slide {
            margin-right: 0px !important;
            border-left: none;
          }
          .testimonial-custom-next,
          .testimonial-custom-prev {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
            cursor: pointer;
            color: grey;
            height: 45px;
            width: 45px;
            margin: auto;
            display: none !important;
            justify-content: center;
            align-items: center;
            border-radius: 50px;
            transition: background-color 0.6s;
          }
          .testimonial-custom-prev {
            left: -50px;
          }
          .testimonial-custom-next {
            right: -50px;
          }
          @media only screen and (min-width: 1200px) {
            .testimonial-custom-next,
            .testimonial-custom-prev {
              display: none !important;
            }
          }
          .testimonial-custom-prev:hover,
          .testimonial-custom-next:hover {
            color: #1c9ac0;
          }
          @media only screen and (max-width: 900px) {
            .swiper-slide {
              border: none;
            }
          }
          @media only screen and (max-width: 720px) {
            .swiper-slide {
              border: none;
            }
          }
          @media only screen and (max-width: 500px) {
            .testimonial-custom-prev,
            .testimonial-custom-next {
              display: none;
            }
          }
          .swiper-pagination {
            bottom: 10px !important;
            text-align: center;
          }
          .swiper-pagination-bullet {
            background: rgba(0, 0, 0, 0.3);
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin: 0 4px;
          }
          .swiper-pagination-bullet-active {
            background: #378C92;
          }
          `}
        </style>
      </div>
    </Container>
  );
};

export default TestimonialSlider;
