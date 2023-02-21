import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styles from "../../styles/SwiperStyles.module.css";
import SlideItem from "./SlideItem";
// import required modules
import { Box } from "@mui/material";
import Image from "next/future/image";
import { Pagination, EffectFade } from "swiper";
import { useSwiper } from "swiper/react";
import useMoveIcon from "../../hooks/useMoveIcon";
import arrowLeft from "../../public/imgs/arrowLeft.svg";
import arrowRight from "../../public/imgs/arrowRight.svg";

const BtnLeft = ({ children }) => {
  const swiper = useSwiper();
  return (
    <Box
      sx={{
        border: "2px solid red",
        position: "absolute",
        left: "-8%",
        width: " 100px",
        top: "0",
        bottom: "0",
      }}
      onClick={() => {
        swiper.slidePrev();
      }}
    >
      {children}
    </Box>
  );
};
const BtnRight = ({ children }) => {
  const swiper = useSwiper();
  return (
    <Box
      sx={{
        border: "2px solid red",
        position: "absolute",
        right: "-8%",
        width: " 100px",
        top: "0",
        bottom: "0",
      }}
      onClick={() => swiper.slideNext()}
    >
      {children}
    </Box>
  );
};

export default function CustomSwiper({ renderSlide, setCurrentActiveSlide }) {
  return (
    <Swiper
      spaceBetween={150}
      centeredSlides={true}
      slidesPerView={1}
      effect='fade'
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={(swiper) => {
        setCurrentActiveSlide(swiper.activeIndex);
      }}
      className={styles.mySwiper}
    >
      <BtnLeft></BtnLeft>
      <BtnRight></BtnRight>
      {renderSlide()}
    </Swiper>
  );
}
