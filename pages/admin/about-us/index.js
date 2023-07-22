import React, { useState } from 'react';
import AboutUsForm from '../../../components/Admin/AboutUsForm';
import { useEffect } from 'react';
import { getAboutData } from '../../../ApiUrl/about/aboutApi';

export function makeData(data) {
  return {
    about01FirstDescription: data.about01.description,
    about01SecondDescription: data.description01,
    about02Title: data.about02.title,
    about02FirstDescription: data.about02.description,
    about02SecondDescription: data.description02,
    about03Title: data.about03.title,
  };
}
const Index = () => {
  const [aboutUsData, setAboutUsData] = useState();
  const [aboutUsNumber, setAboutUsNumber] = useState([]);
  const [aboutUsPartner, setAboutUsPartner] = useState([]);
  function getAboutUsData() {
    getAboutData().then((data) => {
      // console.log(data);
      const dataAbout = makeData(data);
      setAboutUsNumber(data.about01.list);
      setAboutUsPartner(data.about03.listBrand);
      setAboutUsData(dataAbout);
    });
  }
  useEffect(() => {
    getAboutUsData();
  }, []);
  return (
    <div>
      <AboutUsForm
        aboutUsData={aboutUsData}
        aboutUsNumber={aboutUsNumber}
        aboutUsPartner={aboutUsPartner}
      />
    </div>
  );
};

export default Index;
