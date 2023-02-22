import React from "react";
import { useState } from "react";

const useMoveIcon = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return [position, setPosition];
};

export default useMoveIcon;
