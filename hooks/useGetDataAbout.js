import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAboutData } from '../ApiUrl/about/aboutApi';

const useGetDataAbout = () => {
  const [aboutData, setAboutData] = useState();
  function getAboutDataFc() {
    getAboutData().then((data) => {
      console.log(data);
      setAboutData(data);
    });
  }
  useEffect(() => {
    getAboutDataFc();
  }, []);
  return { aboutData };
};

export default useGetDataAbout;
