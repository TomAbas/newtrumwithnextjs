import React, { useState } from "react";
import AboutUsForm from "../../../components/Admin/AboutUsForm";
import { useEffect } from "react";
import { getAboutData } from "../../../ApiUrl/about/aboutApi";
import Loading from "../../../components/Loading/Loading";

export function makeData(data) {
  return {
    about01Title: data.about01.title.title,
    about01Description: data.about01.title.description,
    about02Title: data.about02.title,
    about02FirstDescription: data.description01,
    about02SecondDescription: data.description02,
    about02VideoUrl: data.about02.description,
    about03Title: data.about03.title,
    about04Title: data.about04.title,
  };
}
const Index = () => {
  const [aboutUsData, setAboutUsData] = useState();
  const [aboutUsNumber, setAboutUsNumber] = useState([]);
  const [aboutUsPartner, setAboutUsPartner] = useState([]);
  const [aboutUsDataImage, setAboutUsDataImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  function getAboutUsData() {
    setIsLoading(true);
    getAboutData().then((data) => {
      setAboutUsDataImage(data);
      const dataAbout = makeData(data);
      setAboutUsNumber(data.about01.list);
      setAboutUsPartner(data.about03.listBrand);
      setAboutUsData(dataAbout);
    });
    setIsLoading(false);
  }
  useEffect(() => {
    getAboutUsData();
  }, []);
  return (
    <div>
      <AboutUsForm
        aboutUsDataImage={aboutUsDataImage}
        aboutUsData={aboutUsData}
        aboutUsNumber={aboutUsNumber}
        aboutUsPartner={aboutUsPartner}
      />
      {isLoading && <Loading />}
    </div>
  );
};

export default Index;
