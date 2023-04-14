import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import stylesSlide from "../../styles/SwiperStyles.module.css";
import styles from "../../styles/Page02Styles.module.css";
import useMoveIcon from "../../hooks/useMoveIcon";
import iconPlus from "../../public/imgs/plusicon.svg";
import Image from "next/future/image";
import { useRouter } from "next/router";
const SlideItem = ({ item, isActive, isPrev, isCategory }) => {
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
        overflow: "hidden",
        position: "relative",
        background: "#fff",
        height: "40vw",
        minHeight: "180px",
        maxHeight: "700px",
        transition: "1.1s cubic-bezier(0.215, 0.61, 0.355, 1)",
        ...(isActive
          ? {
              transform: " rotate(0deg) translateY(0%) scale(1)",
            }
          : isPrev
          ? { transform: "rotate(-4deg) translateY(5%) scale(1)" }
          : { transform: "rotate(4deg) translateY(5%) scale(1)" }),
      }}
    >
      {isActive && (
        <div
          className={stylesSlide.iconPlusBox}
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        >
          <Image
            src={iconPlus}
            alt='icon plus'
            style={{
              display: isEnter ? "block" : "none",
            }}
          />
        </div>
      )}
      <Box
        className={styles.slideItem}
        style={{
          background: `url(${item?.img}) no-repeat center center/cover`,
        }}
      >
        {!isCategory && (
          <Box className={styles.item}>
            <Typography variant='p'>{item.title}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SlideItem;
