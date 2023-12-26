import { Box, Container, useTheme } from "@mui/material";
import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import CustomSwiper from "../../../CustomSwiper/CustomSwiper";
import SlideItem from "../../../CustomSwiper/SlideItem";
import useMoveIcon from "../../../../hooks/useMoveIcon";
import { useInView } from "framer-motion";

const CSlideItem = (imgArr, isCategory) => {
  return imgArr.map((item, idx) => {
    return (
      <SwiperSlide key={idx}>
        {({ isActive, isPrev }) => {
          return (
            <SlideItem
              item={item}
              isActive={isActive}
              isPrev={isPrev}
              isCategory={isCategory}
            />
          );
        }}
      </SwiperSlide>
    );
  });
};

const Page02Swiper = ({ isLandingPage, imgArr, isCategory = false }) => {
  const theme = useTheme();
  const gridBoxRef = useRef();

  const [
    position,
    ,
    isLeft,
    ,
    isRight,
    ,
    currentActiveSlide,
    setCurrentActiveSlide,
    ,
    onPointerMove,
  ] = useMoveIcon();
  const outerContainer = useRef();
  const innerContainerRef = useRef();
  const textRef = useRef();



  return (
    <>
      <Box
        position="relative"
        onPointerMove={(e) => {
          onPointerMove(e, outerContainer, innerContainerRef);
        }}
        ref={outerContainer}
        sx={{
          margin: "0 auto",
          position: "relative",
          height: "40vw",
          maxHeight: "700px",
          transition: "1.1s cubic-bezier(0.215, 0.61, 0.355, 1)",
        }}
      >
        <Container
          ref={innerContainerRef}
          sx={{
            padding: "0px 0px !important",
            width: "85%",
            maxWidth: "1200px",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <div className={"Page02Swiper"}>
            <CustomSwiper
              imgArr={imgArr}
              renderSlide={() =>
                CSlideItem(
                  imgArr?.filter((item) => item.img),
                  isCategory
                )
              }
              setCurrentActiveSlide={setCurrentActiveSlide}
            />
          </div>
        </Container>
      </Box>{" "}
    </>
  );
};

export default Page02Swiper;
