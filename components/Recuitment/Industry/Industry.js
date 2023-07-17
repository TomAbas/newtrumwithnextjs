import React, { useState, useEffect } from "react";
import styles from "../../../styles/RecuitmentStyles.module.css";
import InputField from "../../Form/InputField";
import { Button, Box } from "@mui/material";
import BtnSubmit from "../../Form/BtnSubmit";
import { Swiper, SwiperSlide } from "swiper/react";
import IndustrySwiperSlide from "./IndustrySwiperSlide";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Industry = () => {
  return (
    <div>
      <div className={styles.titleMd}>Industry Recognition</div>

      <Box sx={{ my: "20px" }}>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <IndustrySwiperSlide />
          </SwiperSlide>
          <SwiperSlide>
            <IndustrySwiperSlide />
          </SwiperSlide>
          <SwiperSlide>
            <IndustrySwiperSlide />
          </SwiperSlide>
          <SwiperSlide>
            <IndustrySwiperSlide />
          </SwiperSlide>
        </Swiper>
      </Box>
      <p style={{ width: "100vw" }}>
        Once you click 'Submit', wait till your submission is processed, it'll
        take 5 seconds.
      </p>
    </div>
  );
};

export default Industry;
