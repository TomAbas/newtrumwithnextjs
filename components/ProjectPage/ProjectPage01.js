import React, { Fragment, useEffect, useState } from "react";
import styles from "../../styles/ProjectPage01Styles.module.css";
import CustomSwiperProjectPage from "./CustomSwiperProjectPage";
import imgFb from "../../public/imgs/facebook.svg";
import imgXlogo from "../../public/imgs/XLogo.svg";
import imgInsta from "../../public/imgs/Instagram.svg";
import Image from "next/image";
import ZoomAble from "../ZoomAble/ZoomAble";
import SwiperListImageForPopup from "../SwiperListImage/SwiperListImageForPopup";
import { LinkSocial } from "../../constant/link";

const ProjectPage01 = ({
  title,
  category,
  bannerImg,
  isCategory,
  content,
  listContent,
  urlSpotify,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);
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
            <h1 className={styles.TitleRight}>{title}</h1>
            <div className={styles.DescRight}>
              <p dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
          </div>
          <div>
            <ul className={styles.Breadcrumb}>
              <li>
                <a href={LinkSocial.instagram}>
                  <Image width={15} height={15} src={imgInsta} />
                  Instagram
                </a>
              </li>
              <li>
                <a href={LinkSocial.facebook}>
                  <Image width={15} height={15} src={imgFb} />
                  Facebook
                </a>
              </li>
              {/* <li>
                <a href={LinkSocial.tiktok}>
                  <Image width={15} height={15} src={imgXlogo} />
                  Twitter
                </a>
              </li> */}
            </ul>
          </div>
          <div className={styles.WrapSwiper}>
            {listContent.map((content, idx) => {
              return (
                <Fragment key={idx}>
                  <CustomSwiperProjectPage
                    title={content.title}
                    isZoomed={idx === 0 ? isZoomed : isZoomed2}
                    setIsZoomed={idx === 0 ? setIsZoomed : setIsZoomed2}
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
                    data={content.image}
                  />

                  <ZoomAble
                    isZoomed={idx === 0 ? isZoomed : isZoomed2}
                    setIsZoomed={idx === 0 ? setIsZoomed : setIsZoomed2}
                    content={
                      <SwiperListImageForPopup
                        isShowNumPagination={true}
                        listContent={content.image}
                      />
                    }
                  />
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
      {urlSpotify && (
        <div className={`${styles.headlineNewsBox} ${styles.musicBox}`}>
          <h3>PlayList</h3>
          <iframe
            style={{ borderRadius: "12px" }}
            src={urlSpotify}
            width="100%"
            height="152"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default ProjectPage01;
