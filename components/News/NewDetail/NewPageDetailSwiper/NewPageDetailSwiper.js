import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import stylesSlide from "../../../../styles/SwiperStyles.module.css";
import styles from "../../../../styles/NewPageDetailSwiper.module.css";
import CustomSwiper from "../../../CustomSwiper/CustomSwiper";
import SlideItem from "../../../CustomSwiper/SlideItem";
import arrowLeft from "../../../../public/imgs/arrowLeft.svg";
import arrowRight from "../../../../public/imgs/arrowRight.svg";
import Image from "next/future/image";
import useMoveIcon from "../../../../hooks/useMoveIcon";
import { motion, useInView } from "framer-motion";
import SlideItemNewDetail from "./SlideItemNewDetail";

const CSlideItem = (imgArr, isCategory) => {
  return imgArr.map((item, idx) => {
    return (
      <SwiperSlide key={idx}>
        {({ isActive, isPrev }) => {
          return (
            <SlideItemNewDetail
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
const NewPageDetailSwiper = ({ isLandingPage, imgArr, isCategory = false }) => {
  const theme = useTheme();
  const gridBoxRef = useRef();
  const inViewGridPicref = useInView(gridBoxRef);
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

  const variants = {
    visible: (i) => ({
      opacity: 1,
      transform: `translateY(-${i * textRef?.current?.getBoundingClientRect().height
        }px)`,
    }),
    hidden: { opacity: 0 },
  };

  return (
    <>
      <Box
        position="relative"
        onPointerMove={(e) => {
          onPointerMove(e, outerContainer, innerContainerRef);
        }}
        ref={outerContainer}
        sx={{
          // border: "2px solid red",
          width: "90%",
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          height: "40vw",
          maxHeight: "700px",
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
          {" "}
          <Image src={arrowLeft} alt="arrow" />
        </Box>
        <Box
          className={stylesSlide.boxArrRight}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            display: isRight ? "block" : "none",
          }}
        >
          {" "}
          <Image src={arrowRight} alt="arrow" />
        </Box>
        <Container
          ref={innerContainerRef}
          sx={{
            padding: "0px 0px !important",
            width: "80%",
            maxWidth: "1200px",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <CustomSwiper
            renderSlide={() =>
              CSlideItem(
                imgArr?.filter((item) => item.img),
                isCategory
              )
            }
            setCurrentActiveSlide={setCurrentActiveSlide}
          />
        </Container>
      </Box>{" "}
      <Stack
        direction="row"
        mx="auto"
        justifyContent={"flex-end"}
        className={styles.slidePagination}
      >
        <motion.div
          style={{ position: "absolute", left: 0 }}
          variants={variants}
          custom={currentActiveSlide}
          initial={{ opacity: 0 }}
          animate={"visible"}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          {imgArr
            ?.filter((item) => item.img)
            .map((item, idx) => {
              return (
                <Typography color="#fff" key={idx} ref={textRef}>
                  {idx + 1}
                </Typography>
              );
            })}
        </motion.div>

        <motion.div
          variants={variants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <Typography color="#fff">
            {imgArr?.filter((item) => item.img).length}
          </Typography>
        </motion.div>
      </Stack>
      <div className={styles.desc}>
        The artistic direction, inspired in part by the style of artist David Hockney, required colossal work in modeling and textures and makes viewers feel like they are inside a three dimension, living, painting. The project features several innovative real-time approaches and technologies, including volumetric capture of actors, motion capture, as well as physics and fluids simulations.
        The artistic direction, inspired in part by the style of artist David Hockney, required colossal work in modeling and textures and makes viewers feel like they are inside a three dimension, living, painting. The project features several innovative real-time approaches and technologies, including volumetric capture of actors, motion capture, as well as physics and fluids simulations.

      </div>
    </>
  );
};

export default NewPageDetailSwiper;
