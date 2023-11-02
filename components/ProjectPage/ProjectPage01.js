import React from "react";
import styles from "../../styles/ProjectPage01Styles.module.css";
import CustomSwiperProjectPage from "./CustomSwiperProjectPage";

const ProjectPage01 = ({ title, category, bannerImg, isCategory, swiper }) => {
  const animationWords = () => {
    let b = title?.split(" ").map((word, idx) => {
      let delay = { animationDelay: `${idx / 5 + 0.5}s` };
      return (
        <h1
          key={idx}
          className={`${styles.headlineWord} ${styles.fadeInUp0}`}
          style={delay}
        >
          {word}
        </h1>
      );
    });
    return b;
  };

  return (
    <>
      <div className={styles.headlineNewsBox}>
        <div
          style={{
            background: `url(${bannerImg}) no-repeat center center / cover`,
          }}
          className={styles.ContentLeft}
        >
          <div className={styles.headlineContent}>
            {isCategory && (
              <>
                <div className={styles.headlineWordBox}>
                  <div className={styles.wrapperText}> {animationWords()}</div>
                </div>
                <div className={styles.clientShortInfo}>
                  <h5>{category}</h5>
                </div>
              </>
            )}
          </div>
        </div>
        <div className={styles.ContentRight}>
          <div>
            <h1 className={styles.TitleRight}>Simon Dominic</h1>
            <div className={styles.DescRight}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              id eum veniam fugit repudiandae praesentium maxime quod, qui atque
              facilis repellat quibusdam. Possimus eveniet ipsa nesciunt sint
              quod dolor, qui tempora inventore autem, voluptas voluptatum ad
              adipisci quis molestiae? Doloribus unde autem reprehenderit
              distinctio, sit fuga tenetur porro rerum molestiae error iure
              quasi dolorum vel accusantium neque! Quibusdam voluptatem minus,
              omnis iste excepturi vero ut. Officiis, eveniet. Odio, natus
              nesciunt saepe earum corrupti est at ad vero ab, cumque ipsum
              dicta tenetur doloribus nostrum vitae eos ipsa illum voluptatibus
              accusantium! Aspernatur quo aperiam accusamus obcaecati alias
              dolorem dolores quas fuga.
            </div>
            <div className={styles.DescRight}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              id eum veniam fugit repudiandae praesentium maxime quod, qui atque
              facilis repellat quibusdam. Possimus eveniet ipsa nesciunt sint
              quod dolor, qui tempora inventore autem, voluptas voluptatum ad
              adipisci quis molestiae? Doloribus unde autem reprehenderit
              distinctio, sit fuga tenetur porro rerum molestiae error iure
              quasi dolorum vel accusantium neque! Quibusdam voluptatem minus,
              omnis iste excepturi vero ut. Officiis, eveniet. Odio, natus
              nesciunt saepe earum corrupti est at ad vero ab, cumque ipsum
              dicta tenetur doloribus nostrum vitae eos ipsa illum voluptatibus
              accusantium! Aspernatur quo aperiam accusamus obcaecati alias
              dolorem dolores quas fuga.
            </div>
          </div>
          <div>
            <ul className={styles.Breadcrumb}>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
          <div className={styles.WrapSwiper}>
            <CustomSwiperProjectPage
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 5,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 15,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                1480: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
              }}
              width={300}
              height={300}
              data={swiper}
            />
            <CustomSwiperProjectPage
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1480: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
              }}
              width={300}
              height={200}
              data={swiper}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage01;
