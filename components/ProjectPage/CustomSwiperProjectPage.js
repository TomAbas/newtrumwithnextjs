import { Box } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import ArrowLeft from "../../public/imgs/arrowLeft.svg";
import ArrowRight from "../../public/imgs/arrowRight.svg";
import styles from "../../styles/CustomSwiperProjectPage.module.css";

const BtnLeft = ({ children }) => {
  const swiper = useSwiper();
  return (
    <Box
      sx={{
        width: "1.25rem",
        height: "1.25rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.15rem",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#393939",
          borderRadius: "50%",
        },
      }}
      onClick={() => {
        swiper.slidePrev();
      }}
    >
      {children}
    </Box>
  );
};
const BtnRight = ({ children }) => {
  const swiper = useSwiper();
  return (
    <Box
      sx={{
        width: "1.25rem",
        height: "1.25rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0.15rem",

        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#393939",
          borderRadius: "50%",
        },
      }}
      onClick={() => {
        swiper.slideNext();
      }}
    >
      {children}
    </Box>
  );
};

const CustomSwiperProjectPage = ({
  isZoomed,
  setIsZoomed,
  data,
  slidesPerView,
  width,
  height,
  breakpoints,
  title,
}) => {
  console.log(data);
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={10}
        className="mySwiper"
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "center",
        }}
        breakpoints={breakpoints}
      >
        <div className={styles.wrapBtn}>
          <div className={styles.Title}>{title ? title : "title"}</div>
          <div className={styles.Btn}>
            <BtnLeft>
              <Image src={ArrowLeft} alt="#" />
            </BtnLeft>
            <BtnRight>
              <Image src={ArrowRight} alt="#" />
            </BtnRight>
          </div>
        </div>
        <div className={styles.wrapImage}>
          {data.map((item, idx) => {
            return (
              <SwiperSlide
                sx={{
                  right: "0 !important",
                }}
                className={"sc"}
                key={idx}
              >
                <Image
                  onClick={() => {
                    setIsZoomed(!isZoomed);
                  }}
                  className={"imageprojectpage"}
                  style={{
                    borderRadius: "20px",
                  }}
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/trum-project.appspot.com/o/web%2Fimg2.webp?alt=media&token=71603e74-bce9-49a4-94b7-f2c6d856b52c"
                  }
                  // src={item.image ? item.image : item}
                  alt="#"
                  width={width}
                  height={height}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </>
  );
};

export default CustomSwiperProjectPage;
