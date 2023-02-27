import { Box, Container, Stack, Typography } from "@mui/material";
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

const Page02Swiper = ({ isLandingPage }) => {
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
  const [isClick, setIsClick] = useState(true);
  const [count, setCount] = useState(1);
  const outerContainer = useRef();
  const innerContainerRef = useRef();
  const textRef = useRef();
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
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transform: `translateY(-${
        i * textRef.current.getBoundingClientRect().height
      }px)`,
    }),
    hidden: { opacity: 0 },
  };
  useEffect(() => {
    console.log(count);
  }, [count]);
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
        width='4%'
        mx='auto'
        justifyContent={"flex-end"}
        sx={{
          position: "relative",
          marginTop: "20px",
          overflow: "hidden",
          "&:after": {
            content: `''`,
            position: "absolute",
            width: "50%",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            height: "1px",
            backgroundColor: "white",
            zIndex: 1,
          },
        }}
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
              <Typography variant='h5' color='#fff' key={idx} ref={textRef}>
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
          <Typography variant='h5' color='#fff'>
            {slide.length}
          </Typography>
        </motion.div>
      </Stack>
    </>
  );
};

export default Page02Swiper;
