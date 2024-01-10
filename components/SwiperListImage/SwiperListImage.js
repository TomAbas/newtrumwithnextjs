import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from "../../styles/SwiperListImage.module.css";
import { Pagination } from "swiper"; 
import { getAllProject } from "../../ApiUrl/projectApi/projectApi";
import { useRouter } from "next/router";
import "swiper/css";
import "swiper/css/pagination";
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

      return `<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
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
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        onSlideChange={(swiper) => {}}
        spaceBetween={50}
        style={{ margin: "0" }}
        effect="fade"
        breakpoints={breakpoints}
      >
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
    </>
  );
};

export default SwiperListImage;
