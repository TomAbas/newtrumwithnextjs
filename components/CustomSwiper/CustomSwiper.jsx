import React from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styles from "../../styles/SwiperStyles.module.css";
import SlideItem from "./SlideItem";
// import required modules
import { Pagination, EffectFade } from "swiper";

export default function CustomSwiper({ renderSlide }) {
 
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        spaceBetween={150}
        centeredSlides={true}
        slidesPerView={1}
        effect='fade'
        className={styles.mySwiper}
      >
        {renderSlide()}
      </Swiper>
    </>
  );
}
