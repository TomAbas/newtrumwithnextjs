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
const CardSwiper = ({ title, description, img, rating }) => {
  return (
    <div className={styles.wrapCard}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <Image
            height={110}
            width={110}
            layout='fixed'
            objectFit='cover'
            src={img}
            alt='#'
          />
        </div>
        <span>{title}</span>
        <div className='wrap-rating'>
          <Rating
            sx={{
              "& .MuiRating-iconEmpty": {
                color: "#fff"
              }
            }}
            name='read-only' value={4} readOnly />
        </div>
        <span className={styles.descCard}>{description}</span>
      </div>
    </div>
  );
};
const ServicesPage4 = ({ listCardIndustry }) => {
  return (
    <div className={styles.service4Container}>
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
                <CardSwiper
                  title={item.title}
                  description={item.description}
                  img={item.image}
                  rating={item.rating}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesPage4;
