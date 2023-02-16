import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { SwiperSlide } from "swiper/react";
import CustomSwiper from "../../../CustomSwiper/CustomSwiper";
import SlideItem from "../../../CustomSwiper/SlideItem";

const Page02Swiper = () => {
  let slide = [
    { title: "test1", title1: "123", postId: "1" },
    { title: "test2", title1: "123", postId: "1" },
    { title: "test3", title1: "123", postId: "1" },
    { title: "test4", title1: "123", postId: "1" },
  ];
  const renderSlide = () => {
    return slide.map((item, idx) => {
      return (
        <SwiperSlide key={idx}>
          {({ isActive, isPrev }) => {
            return (
              <SlideItem item={item} isActive={isActive} isPrev={isPrev} />
            );
          }}
        </SwiperSlide>
      );
    });
  };

  return (
    <>
      <Container sx={{ width: "80%" }}>
        <CustomSwiper renderSlide={renderSlide} />
      </Container>
    </>
  );
};

export default Page02Swiper;
