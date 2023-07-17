import React from 'react';
import About01 from '../components/About/AboutPage/About-01/About01';
import About02 from '../components/About/AboutPage/About-02/About02';
import Page04 from '../components/About/AboutPage/Page-04/Page04';
import useGetDataLand from '../hooks/useGetDataLand';
import About03 from '../components/About/AboutPage/About-03/About03';
import styles from '../styles/Home.module.css';

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
      <About01 landingPageData={landingPageData} mainImage={mainImage} />
      <About02 mainImage={mainImage} />
      <div className={styles.container}>
        <Page04 page4Data={page4Data} />
        <About03 />
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
