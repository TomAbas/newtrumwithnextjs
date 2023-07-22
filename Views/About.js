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
  const [aboutData, setAboutData] = useState(null || {
    about01: {},
    about02: {},
    about03: {},
    description01: "",
    description02: "",
    video: "",
    _id: ''
  });
  console.log("🚀 ~ file: About.js:28 ~ aboutData:", aboutData)

  useEffect(() => {
    getAboutData().then((res) => {
      setAboutData(res);
    });
  }, [])

  return (
    <>
      <About01 aboutData={aboutData} landingPageData={landingPageData} mainImage={mainImage} />
      <About02 aboutData={aboutData} mainImage={mainImage} />
      <div className={styles.container}>
        <Page04 aboutData={aboutData} page4Data={page4Data} />
        <About03 aboutData={aboutData} />
      </div>

      {/* <Page02 isLandingPage={true} imgArr={imgArr} /> */}
      {/* <Page03 page3Data={page3Data} /> */}
    </>
  );
};

export default LandingPage;

// const [landingPageData, setLandingPageData] = useState([]);
// const [page1Data, setPage1Data] = useState([]);
// const [page3Data, setPage3Data] = useState([]);
// const [page4Data, setPage4Data] = useState([]);
// const [imgArr, setImgArr] = useState([]);
// const setData = () => {
//   setLandingPageData(data.title);
//   setPage1Data(data.description);
//   setPage3Data(data.subTitle);
//   setPage4Data(data.listContent);
// };
// const getListNews = async () => {
//   setImgArr(
//     await getAllProject().then((data) => {
//       return data.map((item, idx) => {
//         return {
//           img: item.mainImage,
//           title: item.title,
//           postId: item.title,
//         };
//       });
//     })
//   );
// };

// useEffect(() => {
//   setData();
//   getListNews();
// }, []);
