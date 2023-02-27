import React from "react";

const useCheckDirection = () => {
  const [isLeft, setIsLeft] = useState(false);
  const [isRight, setIsRight] = useState(false);



  
  return [isLeft, isRight];
};

export default useCheckDirection;
