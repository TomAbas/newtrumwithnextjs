import React, { useEffect } from "react";

const useSelect = (arrEffectData, trigger1, setDadEffectArr, idxOfLine) => {
  const [arrEffect, setArrEffect] = React.useState(arrEffectData);
  const handleChange = (event, idx) => {
    if (event.target.checked) {
      setArrEffect((prev) => [...prev, idx]);
    } else {
      setArrEffect((prev) => prev.filter((item) => item !== idx));
    }
  };
  useEffect(() => {
    setDadEffectArr((prev) => {
      return { ...prev, [idxOfLine]: arrEffect };
    });
  }, [arrEffect]);
  useEffect(() => {
    setArrEffect(arrEffectData);
  }, [trigger1]);
  return { handleChange, setArrEffect, arrEffect };
};

export default useSelect;
