import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/future/image";
import React from "react";
import styles from "/styles/BestProjectStyles.module.css";
import bg from "/public/imgs/slideImgs/MultiMediaProduction1.webp";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Page02 from "../Page-02/Page02Swiper";
import { Pagination } from "swiper";
import BtnSubmit from "../../../Form/BtnSubmit";
import Button from "../../../Button";
import { useRouter } from "next/router";

const BestProjectItem = ({ project }) => {
  return (
    <div className={styles.projectItem}>
      <div className={styles.projectImg}>
        <Image width={100} height={100} src={project.img} alt={project.title} />
      </div>
      <div className={styles.projectContent}>
        <p>{project.title}</p>
      </div>
    </div>
  );
};

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerTitle}>
          <h1>join our </h1>
          <h1>artist roster</h1>
        </div>
        <button className={styles.btnBanner}>
          <div
            style={{
              backdropFilter: "15px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            read out case studies <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </button>
      </div>
    </div>
  );
};

const BestProjects = ({ imgArr, isShowButton = true }) => {
  const router = useRouter();

  return (
    <div className={styles.bestProjectContainer}>
      {imgArr && (
        <div className={`${styles.bestProjectBox} bestProjectBox`}>
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            slidesPerView={4.5}
            breakpoints={{
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
            }}
          >
            {imgArr.map((project, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className={styles.WrapContent}>
                    <Image
                      style={{ borderRadius: 20 }}
                      width={500}
                      height={300}
                      src={project.img}
                      alt={"#"}
                    />
                    <div className={styles.CardContent}>
                      <h3>NEWS TITLE</h3>
                      <div>
                        The project features several innovative real-time
                        approaches and technologies, including volumetric
                        capture of actors, motion capture, as well as physics
                        and fluids simulations.
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
      <Banner />
      {isShowButton && (
        <div className={styles.WrapBtn}>
          <Button
            onClick={() => router.push("/projects")}
            style={{
              border: "2px solid #393939",
              minWidth: 250,
              backgroundColor: "#000",
              color: "#fff",
            }}
            btnName={"ALL PROJECTS"}
          />
          <Button
            onClick={() => router.push("/contact")}
            style={{
              border: "2px solid #393939",
              minWidth: 250,
            }}
            btnName={"BOOK YOUR CALL"}
          />
        </div>
      )}
    </div>
  );
};

export default BestProjects;
