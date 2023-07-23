import React, { useEffect, useState } from 'react';
import About01 from '../components/About/AboutPage/About-01/About01';
import About02 from '../components/About/AboutPage/About-02/About02';
import Page04 from '../components/About/AboutPage/Page-04/Page04';
import useGetDataLand from '../hooks/useGetDataLand';
import About03 from '../components/About/AboutPage/About-03/About03';
import styles from '../styles/Home.module.css';
import { getAboutData } from '../ApiUrl/about/aboutApi';

const LandingPage = ({ data }) => {
  const {
    landingPageData,
    page1Data,
    page3Data,
    page4Data,
    imgArr,
    mainImage,
  } = useGetDataLand(data);
  const [aboutData, setAboutData] = useState(
    null || {
      about01: {},
      about02: {},
      about03: {},
      description01: '',
      description02: '',
      video: '',
      _id: '',
    }
  );

  useEffect(() => {
    getAboutData().then((res) => {
      setAboutData(res);
    });
  }, []);

  return (
    <>
      <About01
        aboutData={aboutData}
        landingPageData={landingPageData}
        mainImage={mainImage}
      />
      <About02 aboutData={aboutData} mainImage={mainImage} />
      <div className={styles.container}>
        <Page04 aboutData={aboutData} page4Data={page4Data} />
        <About03 aboutData={aboutData} />
      </div>
    </>
  );
};

export default LandingPage;
