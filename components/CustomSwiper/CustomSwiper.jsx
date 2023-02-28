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

const BtnLeft = ({ children, setIsClick }) => {
  const swiper = useSwiper();
  return (
    <Box
      sx={{
        position: "absolute",
        left: "-8%",
        width: " 100px",
        top: "0",
        bottom: "0",
      }}
      onClick={() => {
        setIsClick((prev) => !prev);
        swiper.slidePrev();
      }}
    >
      {children}
    </Box>
  );
};
const BtnRight = ({ children, setIsClick }) => {
  const swiper = useSwiper();
  return (
    <Box
      sx={{
        position: "absolute",
        right: "-8%",
        width: " 100px",
        top: "0",
        bottom: "0",
      }}
      onClick={() => {
        swiper.slideNext();
        setIsClick((prev) => prev + 1);
      }}
    >
      {children}
    </Box>
  );
};

export default function CustomSwiper({
  renderSlide,
  setCurrentActiveSlide,
  setIsClick,
}) {
  return (
    <Swiper
      
      spaceBetween={150}
      centeredSlides={true}
      slidesPerView={1}
      effect='fade'
      onSlideChange={(swiper) => {
        setCurrentActiveSlide(swiper.activeIndex);
      }}
      className={styles.mySwiper}
    >
      <BtnLeft setIsClick={setIsClick}></BtnLeft>
      <BtnRight setIsClick={setIsClick}></BtnRight>
      {renderSlide()}
    </Swiper>
  );
}
