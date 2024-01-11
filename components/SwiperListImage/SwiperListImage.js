import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";
import styles from "../../styles/SwiperListImage.module.css";
import { Pagination } from "swiper";
import { getAllProject } from "../../ApiUrl/projectApi/projectApi";
import { useRouter } from "next/router";
import "swiper/css";
import "swiper/css/pagination";
import { Box } from "@mui/material";
import imgArrowLeft from "../../public/imgs/arrowLeft.svg";
import imgArrowRight from "../../public/imgs/arrowRight.svg";

const BtnLeft = ({ children }) => {
  const swiper = useSwiper();
  return (
    <Box
      className={styles.BtnLeft}
      sx={{
        zIndex: 10000,
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
      className={styles.BtnRight}
      sx={{
        zIndex: 10000,
      }}
      onClick={() => {
        swiper.slideNext();
      }}
    >
      {children}
    </Box>
  );
};

const SwiperListImage = ({
  isShowNumPagination,
  breakpoints = {
    375: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1320: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1480: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
}) => {
  const router = useRouter();
  const [listProject, setListProject] = useState([]);
  const pagination = {
    clickable: true,
    type: "custom",
    renderCustom: function (swiper, current, total) {
      let customBullets = "";
      for (let i = 0; i < total; i++) {
        const bulletClassName =
          i === current - 1
            ? "swiper-pagination-bullet swiper-pagination-bullet-active"
            : "swiper-pagination-bullet";
        customBullets += `<span class="${bulletClassName}"></span>`;
      }

      return `<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal ">
                <span 
                    style="color: #fff"
                 class="swiper-pagination-custom">
                    ${isShowNumPagination ? current : ""}
                    ${customBullets}
                    ${isShowNumPagination ? total : ""}
                </span>
            </div>`;
    },
  };
  const handleGetListProject = async () => {
    const res = await getAllProject({ isCategory: 0 });
    setListProject(res);
  };
  useEffect(() => {
    handleGetListProject();
  }, []);
  return (
    <div className={"MiniSwiper"}>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        onSlideChange={(swiper) => {}}
        spaceBetween={50}
        style={{ margin: "0" }}
        effect="fade"
        breakpoints={breakpoints}
      >
        <div className={styles.WrapBtn}>
          <BtnLeft>
            <Image src={imgArrowLeft} width={15} height={15} />
          </BtnLeft>
          <BtnRight>
            <Image src={imgArrowRight} width={15} height={15} />
          </BtnRight>
        </div>
        {listProject.length > 0 &&
          listProject.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div className={styles.WrapItem}>
                  <Image width={300} height={300} src={item.mainImage} />
                  <div className={styles.wrapItroduceItem}>
                    <h1
                      className={styles.titleItem}
                      onClick={() => router.push(`/projects/${item.title}`)}
                    >
                      {item.title}
                    </h1>
                    <div className={styles.descItem}>
                      <div
                        dangerouslySetInnerHTML={{ __html: item.videoAlt }}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default SwiperListImage;
