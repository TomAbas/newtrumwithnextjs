import { Box } from '@mui/material';
import Image from 'next/image'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import ArrowLeft from '../../public/imgs/arrowLeftLight.svg'
import ArrowRight from '../../public/imgs/arrowRightLight.svg'
import styles from '../../styles/CustomSwiperProjectPage.module.css'

const BtnLeft = ({ children }) => {
  const swiper = useSwiper();
  return (
    <Box
      sx={{
        width: '1rem'
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
        width: '1rem'
      }}
      onClick={() => {
        swiper.slideNext();
      }}
    >
      {children}
    </Box>
  );
};

const CustomSwiperProjectPage = ({ data, slidesPerView, width, height, breakpoints }) => {
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={10}
        className="mySwiper"
        style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center' }}
        breakpoints={breakpoints}
      >
        <div className={styles.wrapBtn}>
          <div className={styles.Title}>Title</div>
          <div className={styles.Btn}>
            <BtnLeft>
              <Image src={ArrowLeft} alt='#' />
            </BtnLeft>
            <BtnRight>
              <Image src={ArrowRight} alt='#' />
            </BtnRight>
          </div>
        </div>
        <div className={styles.wrapImage} >
          {
            data.map((item) => {
              return <SwiperSlide key={item._id}>
                <Image

                  src={item.image}
                  alt="#"
                  width={width}
                  height={height}
                />
              </SwiperSlide>
            })
          }
        </div>

      </Swiper>
    </>
  )
}

export default CustomSwiperProjectPage