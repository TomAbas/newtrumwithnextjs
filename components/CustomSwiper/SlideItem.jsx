import {Box, Typography} from "@mui/material";
import Image from "next/future/image";
import {useRouter} from "next/router";
import React, {useEffect, useRef} from "react";
import useMoveIcon from "../../hooks/useMoveIcon";
import iconPlus from "../../public/imgs/plusicon.svg";
import styles from "../../styles/Page02Styles.module.css";
import stylesSlide from "../../styles/SwiperStyles.module.css";
import arrow from "/public/imgs/arrow-up-right-svgrepo-com.svg";

const SlideItem = ({item, isActive, isPrev, isCategory}) => {
    const [position, setPosition, isEnter, setIsEnter] = useMoveIcon();
    const router = useRouter();
    const ref = useRef();

    return (
        <Box
            onClick={() => {
                if (item.postId) {
                    router.push(`/projects/${item.postId}`);
                }
            }}
            onMouseEnter={() => setIsEnter(true)}
            onMouseLeave={() => setIsEnter(false)}
            onPointerMove={(e) => {
                setPosition({
                    x: e.clientX - ref.current.getBoundingClientRect().x,
                    y: e.clientY - ref.current.getBoundingClientRect().y,
                });
            }}
            ref={ref}
            sx={{
                borderRadius: 20,
                position: "relative",
                // background: "#fff",
                height: "40vw",
                minHeight: "180px",
                maxHeight: "700px",
                transition: "1.1s cubic-bezier(0.215, 0.61, 0.355, 1)",
            }}
        >
            <Box
                className={styles.slideItem}
                style={{
                    background: `url(${item?.img}) no-repeat center center/cover`,
                }}
            >
                {!isCategory && (
                    <Box className={styles.item}>
                        <Typography variant="p">{item.title}</Typography>
                    </Box>
                )}
                <button className={styles.btnSeeMore}>
                    SEE MORE
                </button>
            </Box>
        </Box>
    );
};

export default SlideItem;
