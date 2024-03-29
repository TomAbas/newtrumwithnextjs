import React, { useState, useEffect } from 'react';
import styles from '../../../styles/RecuitmentStyles.module.css';
import InputField from '../../Form/InputField';
import { Button, Box } from '@mui/material';
import BtnSubmit from '../../Form/BtnSubmit';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import IndustrySwiperSlide from './IndustrySwiperSlide';
import 'swiper/css';
import 'swiper/css/pagination';
import { getListIndustryData } from '../../../ApiUrl/industry/industryApi';

const breakpoints = {
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
}

const Industry = () => {
  const [dataIndustry, setDataIndustry] = useState([]);
  useEffect(() => {
    getListIndustryData().then((res) => {
      setDataIndustry(res);
    });
  }, []);
  return (
    <div>
      <Box
        className={styles.titleMd}
        sx={{
          margin: 'auto',
          fontSize: '45px !important',
          textAlign: 'center',
          mt: 8,
        }}
      >
        Industry Recognition
      </Box>

      <Box sx={{ my: '20px' }}>
        <Swiper
          breakpoints={breakpoints}
          modules={[Pagination]}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          style={{ padding: '10px 0 40px 0' }}
        >
          {dataIndustry.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <IndustrySwiperSlide item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </div>
  );
};

export default Industry;
