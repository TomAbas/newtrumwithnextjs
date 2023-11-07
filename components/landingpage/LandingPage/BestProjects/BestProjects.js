import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/future/image";
import React from "react";
import styles from "/styles/BestProjectStyles.module.css";
import bg from "/public/imgs/slideImgs/MultiMediaProduction1.webp";
import { Swiper, SwiperSlide } from "swiper/react";

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

const Banner = () => {
  return (
    <div
      className={styles.banner}
      style={{
        background: `url(${bg.src}) no-repeat
    center center/cover`,
      }}
    >
      <div className={styles.bannerContent}>
        <div className={styles.bannerTitle}>
          <h1>join our artist roster</h1>
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
            {" "}
            read out case studies <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </button>
      </div>
    </div>
  );
};

const BestProjects = ({ imgArr }) => {
  console.log(imgArr);
  return (
    <div className={styles.bestProjectContainer}>
      <div className={styles.bestProjectBox}>
        {imgArr.slice(0, 4).map((project, idx) => {
          return <BestProjectItem project={project} key={idx} />;
        })}
      </div>
      <Banner />
    </div>
  );
};

export default BestProjects;
