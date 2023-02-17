import React from "react";
import { useState } from "react";

const useMoveIcon = () => {
  const [isEnter, setIsEnter] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLeave, setIsLeave] = useState(false);
  return [position, setPosition, isEnter, setIsEnter, isLeave, setIsLeave];
};

export default useMoveIcon;
