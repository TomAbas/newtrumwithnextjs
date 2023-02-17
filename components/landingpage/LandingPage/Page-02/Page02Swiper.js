import { Box, Container } from "@mui/material";
import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import stylesSlide from "../../../../styles/SwiperStyles.module.css";
import CustomSwiper from "../../../CustomSwiper/CustomSwiper";
import SlideItem from "../../../CustomSwiper/SlideItem";
import arrowLeft from "../../../../public/imgs/arrowLeft.svg";
import arrowRight from "../../../../public/imgs/arrowRight.svg";
import Image from "next/future/image";
import useMoveIcon from "../../../../hooks/useMoveIcon";

const Page02Swiper = () => {
  const [position, setPosition, isLeft, setIsLeft, isRight, setIsRight] =
    useMoveIcon();
  const outerContainer = useRef();
  const innerContainerRef = useRef();
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
  function checkLeftRight(clientX) {
    if (
      clientX > outerContainer.current.getBoundingClientRect().x &&
      clientX < innerContainerRef.current.getBoundingClientRect().x
    ) {
      console.log("left");
      setIsLeft(true);
    } else {
      setIsLeft(false);
    }
    if (
      clientX < outerContainer.current.getBoundingClientRect().right &&
      clientX > innerContainerRef.current.getBoundingClientRect().right
    ) {
      console.log("right");
      setIsRight(true);
    } else {
      setIsRight(false);
    }
  }
  return (
    <>
      <Box
        position='relative'
        // onMouseEnter={() => setIsEnter(true)}
        // onMouseLeave={() => setIsEnter(false)}
        onPointerMove={(e) => {
          checkLeftRight(e.clientX);
          setPosition({
            x: e.clientX - innerContainerRef.current.getBoundingClientRect().x,
            y: e.clientY - innerContainerRef.current.getBoundingClientRect().y,
          });
        }}
        ref={outerContainer}
        sx={{
          width: "90%",
          margin: "0 auto",
          position: "relative",
          height: "40vw",
          transition: "1.1s cubic-bezier(0.215, 0.61, 0.355, 1)",
        }}
      >
        <Box
          className={stylesSlide.boxArrLeft}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            display: isLeft ? "block" : "none",
          }}
        >
          <Image src={arrowLeft} alt='arrow' />
        </Box>
        <Box
          className={stylesSlide.boxArrRight}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            display: isRight ? "block" : "none",
          }}
        >
          <Image src={arrowRight} alt='arrow' />
        </Box>
        <Container
          ref={innerContainerRef}
          sx={{ padding: "0px 0px !important" }}
        >
          <CustomSwiper renderSlide={renderSlide} />
        </Container>
      </Box>
    </>
  );
};

export default Page02Swiper;
