import React from "react";
// Import Swiper React components
import {Swiper} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styles from "../../styles/SwiperStyles.module.css";
// import required modules
import {Box} from "@mui/material";
import {useSwiper} from "swiper/react";
import {Pagination} from "swiper";
import imgArrowLeft from '../../public/imgs/arrowLeft.svg'
import imgArrowRight from '../../public/imgs/arrowRight.svg'
import Image from "next/image";


const BtnLeft = ({children}) => {
    const swiper = useSwiper();
    return (
        <Box
            sx={{
                position: "absolute",
                left: "50%",
                transform: 'translate(-350%, 5%)',
                bottom: "-50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex:10000,
                color:'#fff',
                '@media (max-width: 428px)': {
                    bottom: "-47px",
                }
            }}
            onClick={() => {
                swiper.slidePrev();
            }}
        >
            {children}
          <span style={{fontWeight:600, width:5 , paddingLeft:'1.5rem'}}>
                {swiper.activeIndex + 1}
          </span>

        </Box>
    );
};
const BtnRight = ({children}) => {
    const swiper = useSwiper();
    return (
        <Box
            sx={{
                position: "absolute",
                left: "50%",
                transform: 'translate(170%, 5%)',
                bottom: "-50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex:10000,
                color:'#fff',
                '@media (max-width: 428px)': {
                    bottom: "-47px",
                }
            }}
            onClick={() => {
                swiper.slideNext();
            }}
        >
            {children}
        </Box>
    );
};

export default function CustomSwiper({imgArr,renderSlide, setCurrentActiveSlide}) {
    const pagination = {
        clickable: true,
    };
    return (
        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            spaceBetween={100}
            centeredSlides={true}
            slidesPerView={1}
            effect='fade'
            onSlideChange={(swiper) => {
                setCurrentActiveSlide(swiper.activeIndex);
            }}
            className={styles.mySwiper}
        >
            <BtnLeft className={styles.ArrowLeft}>
                <Image width={10} height={10} src={imgArrowLeft} alt='arrow-left'/>
            </BtnLeft>
            <BtnRight className={styles.ArrowRight}>
               <span style={{paddingRight:'1.5rem'}}> {imgArr?.length}</span>
                <Image width={10} height={10} src={imgArrowRight} alt='arrow-left'/>
            </BtnRight>
            {renderSlide()}
        </Swiper>
    );
}
