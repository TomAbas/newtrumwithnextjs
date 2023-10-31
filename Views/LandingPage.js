import React from "react";
import LandingPage0 from "../components/landingpage/LandingPage/LandingPage1/LandingPage";
import Page01 from "../components/landingpage/LandingPage/Page-01/Page01";
import Page02 from "../components/landingpage/LandingPage/Page-02/Page02Swiper";
import Page03 from "../components/landingpage/LandingPage/Page-03/Page03";
import Page04 from "../components/landingpage/LandingPage/Page-04/Page04";
import useGetDataLand from "../hooks/useGetDataLand";
import BestProjects from "../components/landingpage/LandingPage/BestProjects/BestProjects";

const LandingPage = ({ data }) => {
  const {
    landingPageData,
    page1Data,
    page3Data,
    page4Data,
    imgArr,
    mainImage,
  } = useGetDataLand(data);

  return (
    <>
      <LandingPage0 landingPageData={landingPageData} mainImage={mainImage} />
      <Page01 page1Data={page1Data} />
      <Page02 isLandingPage={true} imgArr={imgArr} />
      <Page03 page3Data={page3Data} />
      {/* <Page04 page4Data={page4Data} /> */}
      <BestProjects imgArr={imgArr} />
    </>
  );
};

export default LandingPage;
