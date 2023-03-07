import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { SwiperSlide } from "swiper/react";
import stylesSlide from "../../../../styles/SwiperStyles.module.css";
import styles from "../../../../styles/Page02Styles.module.css";
import CustomSwiper from "../../../CustomSwiper/CustomSwiper";
import SlideItem from "../../../CustomSwiper/SlideItem";
import arrowLeft from "../../../../public/imgs/arrowLeft.svg";
import arrowRight from "../../../../public/imgs/arrowRight.svg";
import gridpic from "../../../../public/imgs/grid.svg";
import Image from "next/future/image";
import useMoveIcon from "../../../../hooks/useMoveIcon";
import { motion, AnimatePresence, useInView } from "framer-motion";
import slideImg from "/public/imgs/slideImgs/MultiMediaProduction1.webp";
import slide1Img from "/public/imgs/slideImgs/MultiMediaProduction2.webp";
import slide2Img from "/public/imgs/slideImgs/MultiMediaProduction3.webp";
import slide3Img from "/public/imgs/slideImgs/MultiMediaProduction4.webp";
import slide4Img from "/public/imgs/slideImgs/MultiMediaProduction6.webp";
import slide5Img from "/public/imgs/slideImgs/MultiMediaProduction7.webp";

const Page02Swiper = ({ isLandingPage, imgArr }) => {
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
  const [count, setCount] = useState(1);
  const outerContainer = useRef();
  const innerContainerRef = useRef();
  const textRef = useRef();
  let slide = [
    { title: "multi media production", postId: "1", img: `${slideImg.src}` },
    { title: "branding stategy", postId: "1", img: `${slide1Img.src}` },
    { title: "creative consultant", postId: "1", img: `${slide2Img.src}` },
    { title: "digital service", postId: "1", img: `${slide3Img.src}` },
    { title: "fashion brand consulting", postId: "1", img: `${slide4Img.src}` },
    {
      title: "lifestyle marketing solution",
      postId: "1",
      img: `${slide5Img.src}`,
    },
  ];
  const renderSlide = () => {
    return imgArr?.map((item, idx) => {
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
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transform: `translateY(-${
        i * textRef.current.getBoundingClientRect().height
      }px)`,
    }),
    hidden: { opacity: 0 },
  };

  return (
    <>
      <Box
        position='relative'
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
        {" "}
        {isLandingPage && (
          <Box
            ref={gridBoxRef}
            className={
              inViewGridPicref
                ? `${styles.gridBox} ${styles.gridShow}`
                : styles.gridBox
            }
          >
            <Image src={gridpic} alt='grid-pic' className={styles.gridPic} />
          </Box>
        )}
        <Box
          className={stylesSlide.boxArrLeft}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            display: isLeft ? "block" : "none",
          }}
        >
          {" "}
          <Image src={arrowLeft} alt='arrow' />
        </Box>
        <Box
          className={stylesSlide.boxArrRight}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            display: isRight ? "block" : "none",
          }}
        >
          {" "}
          <Image src={arrowRight} alt='arrow' />
        </Box>
        <Container
          ref={innerContainerRef}
          sx={{
            padding: "0px 0px !important",
            width: "80%",
            maxWidth: "1200px",
            // border: "2px solid blue",
            [theme.breakpoints.down("sm")]: {
              width: "100%",
            },
          }}
        >
          <CustomSwiper
            setIsClick={setCount}
            renderSlide={renderSlide}
            setCurrentActiveSlide={setCurrentActiveSlide}
          />
        </Container>
      </Box>{" "}
      <Stack
        direction='row'
        // width='2%'
        mx='auto'
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
          {new Array(slide.length).fill(0).map((item, idx) => {
            return (
              <Typography color='#fff' key={idx} ref={textRef}>
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
          <Typography color='#fff'>{imgArr?.length}</Typography>
        </motion.div>
      </Stack>
    </>
  );
};

export default Page02Swiper;
