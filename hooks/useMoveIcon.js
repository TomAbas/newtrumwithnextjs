import React from "react";
import { useState } from "react";

const useMoveIcon = () => {
  const [currentActiveSlide, setCurrentActiveSlide] = useState(0);
  const [isEnter, setIsEnter] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLeave, setIsLeave] = useState(false);

  function onPointerMove(e, outerContainer, innerContainerRef) {
    checkLeftRight(e.clientX, outerContainer, innerContainerRef);
    setPosition({
      x: e.clientX - innerContainerRef.current.getBoundingClientRect().x,
      y: e.clientY - innerContainerRef.current.getBoundingClientRect().y,
    });
  }
  function checkLeftRight(clientX, outerContainer, innerContainerRef) {
    if (
      clientX > outerContainer.current.getBoundingClientRect().x &&
      clientX < innerContainerRef.current.getBoundingClientRect().x
    ) {
      setIsEnter(true);
    } else {
      setIsEnter(false);
    }
    if (
      clientX < outerContainer.current.getBoundingClientRect().right &&
      clientX > innerContainerRef.current.getBoundingClientRect().right
    ) {
      setIsLeave(true);
    } else {
      setIsLeave(false);
    }
  }
  return [
    position,
    setPosition,
    isEnter,
    setIsEnter,
    isLeave,
    setIsLeave,
    currentActiveSlide,
    setCurrentActiveSlide,
    checkLeftRight,
    onPointerMove,
  ];
};

export default useMoveIcon;
