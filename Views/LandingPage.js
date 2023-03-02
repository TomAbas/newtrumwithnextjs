import React, { useState, useEffect } from "react";
import LandingPage0 from "../components/landingpage/LandingPage/LandingPage1/LandingPage";
import Page01 from "../components/landingpage/LandingPage/Page-01/Page01";
import Page02 from "../components/landingpage/LandingPage/Page-02/Page02Swiper";
import Page03 from "../components/landingpage/LandingPage/Page-03/Page03";
import Page04 from "../components/landingpage/LandingPage/Page-04/Page04";

const LandingPage = ({ data }) => {
  const [landingPageData, setLandingPageData] = useState([]);
  const [page1Data, setPage1Data] = useState([]);
  const [page3Data, setPage3Data] = useState([]);
  const [page4Data, setPage4Data] = useState([]);

  const setData = () => {
    setLandingPageData(data.title);
    setPage1Data(data.description);
    setPage3Data(data.subTitle);
    setPage4Data(data.listContent);
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <>
      <LandingPage0 landingPageData={landingPageData} />
      <Page01 page1Data={page1Data} />
      <Page02 isLandingPage={true} />
      <Page03 page3Data={page3Data} />
      <Page04 page4Data={page4Data} />
    </>
  );
};

export default LandingPage;
