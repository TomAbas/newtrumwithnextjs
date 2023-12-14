import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import styles from '../../styles/SwiperListImage.module.css'
import {Pagination} from "swiper";
import {useSwiper} from "swiper/react";
import {Box} from "@mui/material";
import imgArrowLeft from '../../public/imgs/arrowLeft.svg'
import imgArrowRight from '../../public/imgs/arrowRight.svg'

const BtnLeft = ({children}) => {
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

const BtnRight = ({children}) => {
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


const SwiperListImage = ({imgArr, isShowNumPagination, breakpoints={
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
} }) => {
    console.log(imgArr)
    const [currentActiveSlide, setCurrentActiveSlide] = useState(1)
    useEffect(() => {
        console.log(currentActiveSlide)
    }, [currentActiveSlide])


    const pagination = {
        "clickable": true,
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            let customBullets = '';
            for (let i = 0; i < total; i++) {
                const bulletClassName = i === current - 1 ? 'swiper-pagination-bullet swiper-pagination-bullet-active' : 'swiper-pagination-bullet';
                customBullets += `<span class="${bulletClassName}"></span>`;
            }

            return `<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                <span 
                    style="color: #fff"
                 class="swiper-pagination-custom">
                    ${isShowNumPagination ? current : ''}
                    ${customBullets}
                    ${isShowNumPagination ? total : ''}
                </span>
            </div>`;
        },
    };

    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                onSlideChange={(swiper) => {
                    setCurrentActiveSlide(swiper.activeIndex + 1);
                }}
                spaceBetween={50}

                style={{margin: '0'}}
                breakpoints={breakpoints}
            >
                <div className={styles.WrapBtn}>
                    <BtnLeft>
                        <Image src={imgArrowLeft} width={15} height={15}/>
                    </BtnLeft>
                    <BtnRight>
                        <Image src={imgArrowRight} width={15} height={15}/>
                    </BtnRight>
                </div>
                {
                    imgArr?.map((item, idx) => {
                        return <SwiperSlide key={idx}>
                            <div className={styles.WrapItem}>
                                <Image width={300} height={300} src={item.img}/>
                                <div className={styles.wrapItroduceItem}>
                                    <h1 className={styles.titleItem}>News Title</h1>
                                    <div className={styles.descItem}>The project features several innovative real-time
                                        approaches and technologies, including volumetric capture of actors, motion
                                        capture, as well as physics and fluids simulations.
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    })
                }
            </Swiper>
        </>
    );
};

export default SwiperListImage;
