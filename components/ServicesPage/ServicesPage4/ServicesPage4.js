import React from 'react';
import styles from '../../../styles/ServicesPage4.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Rating from '@mui/material/Rating';
import Image from 'next/image';
import Img1 from '../../../public/imgs/weare.webp';
const CardSwiper = ({ title, description }) => {
  return (
    <div className={styles.wrapCard}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <Image style={{ borderRadius: '50%' }} src={Img1} alt='#' />
        </div>
        <span>{title}</span>
        <div>
          <Rating name='read-only' value={5} readOnly />
        </div>
        <span className={styles.descCard}>{description}</span>
      </div>
    </div>
  );
};
const ServicesPage4 = ({ listCardIndustry }) => {
  return (
    <div className={styles.service4Container}>
      <h3 className={styles.title}>Industry Recognition</h3>
      <div>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          spaceBetween={10}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            786: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1500: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          className='mySwiper'
        >
          {listCardIndustry.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <CardSwiper title={item.title} description={item.description} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesPage4;
