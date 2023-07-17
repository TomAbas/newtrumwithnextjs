import React from 'react'
import styles from "../../../styles/ServicesPage4.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Rating from '@mui/material/Rating';
import Image from 'next/image';
import Img1 from "../../../public/imgs/weare.webp"
const CardSwiper = () => {

  return <div className={styles.wrapCard}>
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image style={{ borderRadius: "50%" }} src={Img1} alt="#" /></div>
      <span>Name Title</span>
      <div>
        <Rating name="read-only" value={5} readOnly />
      </div>
      <span className={styles.descCard}>
        Music Promo Today is by far the best music promotion, PR and marketing company
        I have ever used for my music career! They delivered on everything they promised.
      </span>
    </div>
  </div>
}
const ServicesPage4 = () => {
  return (
    <div className={styles.service4Container}>
      <h3 className={styles.title}>Industry Recognition</h3>
      <div>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>  <CardSwiper /></SwiperSlide>
          <SwiperSlide>  <CardSwiper /></SwiperSlide>
          <SwiperSlide>  <CardSwiper /></SwiperSlide>
          <SwiperSlide>  <CardSwiper /></SwiperSlide>
          <SwiperSlide>  <CardSwiper /></SwiperSlide>
          <SwiperSlide>  <CardSwiper /></SwiperSlide>
          <SwiperSlide>  <CardSwiper /></SwiperSlide>
          <SwiperSlide>  <CardSwiper /></SwiperSlide>
          <SwiperSlide>  <CardSwiper /></SwiperSlide>
          <SwiperSlide>  <CardSwiper /></SwiperSlide>
          <SwiperSlide>  <CardSwiper /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default ServicesPage4