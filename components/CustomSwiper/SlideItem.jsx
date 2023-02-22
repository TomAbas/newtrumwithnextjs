import React, { useRef, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Box } from "@mui/material";
import stylesSlide from "../../styles/SwiperStyles.module.css";
import useMoveIcon from "../../hooks/useMoveIcon";

const SlideItem = ({ item, isActive, isPrev }) => {
  const [position, setPosition] = useMoveIcon();

  const ref = useRef();

  return (
    <Box
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX - ref.current.getBoundingClientRect().x,
          y: e.clientY - ref.current.getBoundingClientRect().y,
        });
      }}
      ref={ref}
      sx={{
        overflow: "hidden",
        border: "2px solid red",
        position: "relative",
        background: "#fff",
        height: "60vh",
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
      Current slide is {isActive ? item.title : "not active"}
      {isActive && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }}
        />
      )}
    </Box>
  );
};

export default SlideItem;
