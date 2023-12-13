import React, {useState} from "react";
import styles from "../../styles/ProjectPage01Styles.module.css";
import CustomSwiperProjectPage from "./CustomSwiperProjectPage";
import imgFb from "../../public/imgs/facebook.svg"
import imgXlogo from "../../public/imgs/XLogo.svg"
import imgInsta from "../../public/imgs/Instagram.svg"
import Image from "next/image";
import ZoomAble from "../ZoomAble/ZoomAble";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";

const ProjectPage01 = ({title, category, bannerImg, isCategory, swiper}) => {
    const [isZoomed, setIsZoomed] = useState(false);

    const animationWords = () => {
        let b = title?.split(" ").map((word, idx) => {
            let delay = {animationDelay: `${idx / 5 + 0.5}s`};
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
                            nesciunt saepe earum corrupti est at ad vero ab.
                        </div>
                    </div>
                    <div>
                        <ul className={styles.Breadcrumb}>
                            <li>
                                <a href="#">
                                    <Image width={15} height={15} src={imgInsta}/>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Image width={15} height={15} src={imgFb}/>

                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <Image width={15} height={15} src={imgXlogo}/>
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.WrapSwiper}>
                        <CustomSwiperProjectPage
                            setIsZoomed={setIsZoomed}
                            isZoomed={isZoomed}
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
                            setIsZoomed={setIsZoomed}
                            isZoomed={isZoomed}
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
                        <ZoomAble isZoomed={isZoomed} setIsZoomed={setIsZoomed} content={
                            <Swiper
                                slidesPerView={1}
                                pagination={true} modules={[Pagination]}>
                                {
                                    swiper.map((item, idx) => {
                                        return (
                                            <SwiperSlide key={idx}>
                                                <Image
                                                    style={{borderRadius: 20}}
                                                    src={item.image}
                                                    width={500}
                                                    height={500}/>
                                            </SwiperSlide>
                                        )
                                    })
                                }

                            </Swiper>
                        }/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectPage01;
