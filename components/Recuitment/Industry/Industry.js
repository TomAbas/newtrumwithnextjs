import React, { useState, useEffect } from "react";
import styles from "../../../styles/RecuitmentStyles.module.css";
import InputField from "../../Form/InputField";
import { Button, Box } from "@mui/material";
import BtnSubmit from "../../Form/BtnSubmit";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import IndustrySwiperSlide from "./IndustrySwiperSlide";
import "swiper/css";
import "swiper/css/pagination";

const dataIndustry = [
  {
    title: "logo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "2021-10-10",
  },
  {
    title: "logo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "2021-10-10",
  },
  {
    title: "logo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "2021-10-10",
  },
  {
    title: "logo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "2021-10-10",
  },
  {
    title: "logo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "2021-10-10",
  },
  {
    title: "logo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "2021-10-10",
  },
];

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  480: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
};

const Industry = () => {
  return (
    <div>
      <Box className={styles.titleMd} sx={{ textAlign: "center", mt: 8 }}>
        Industry Recognition
      </Box>

      <Box sx={{ my: "20px" }}>
        <Swiper
          breakpoints={breakpoints}
          modules={[Pagination]}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          style={{ padding: "10px 0 40px 0" }}
        >
          {dataIndustry.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <IndustrySwiperSlide />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </div>
  );
};

export default Industry;
