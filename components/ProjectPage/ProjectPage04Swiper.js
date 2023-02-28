import React, { useEffect, useRef, useState } from "react";
import arrowLeft from "../../public/imgs/arrowLeft.svg";
import arrowRight from "../../public/imgs/arrowRight.svg";
import plusicon from "../../public/imgs/plusicon.svg";
import { useInView } from "framer-motion";
import Image from "next/future/image";
import styles from "../../styles/ProjectPage04Styles.module.css";
import { urlNews } from "../../ApiUrl/Api";
import { urlNewsId } from "../../ApiUrl/Api";
import axios from "axios";
import Link from "next/link";
import Page02Swiper from "../landingpage/LandingPage/Page-02/Page02Swiper";
import slide5Img from "/public/imgs/slideImgs/MultiMediaProduction7.png";
const ProjectPage04Swiper = ({
  subTitle1,
  content1,
  img1,
  img2,
  img3,
  img4,
  img5,
  projectsidx,
}) => {
  const gridBoxRef = useRef();
  const inViewGridPicref = useInView(gridBoxRef);
  const [subTitleAr1, setSubTitleAr1] = useState([]);
  const [imgArr, setImgArr] = useState([]);
  const [nextNews, setNextNews] = useState();
  const [currentIdxNews, setCurrentIdxNews] = useState();
  const arrWordRef = useRef();
  const isArrWordIn = useInView(arrWordRef);
  const getListNews = async () => {
    await axios.get(urlNews).then(({ data }) => {
      let a = data.filter((data) => {
        return data.deleted === "0";
      });
      // console.log(a);
      const findIdx = (e) => e.postId === projectsidx;
      // console.log(a.findIndex(findIdx));
      let currentIdxNews = a.findIndex(findIdx);
      if (currentIdxNews >= 0) {
        let converToNum = parseInt(currentIdxNews);
        let b;
        if (converToNum === a.length - 1) {
          b = a[0].postId;
        } else {
          b = a[converToNum + 1].postId;
        }
        console.log(b);
        setCurrentIdxNews(b);
      }
    });
  };
  const fetchNextNews = async () => {
    // if (currentIdxNews) {
    //   // console.log("currentIdxNews", currentIdxNews);
    //   await axios.get(`${urlNewsId}/${currentIdxNews}`).then(({ data }) => {
    //     // console.log(data);
    //     setNextNews(data[0]);
    //   });
    // }
    setNextNews({
      title: "lifestyle marketing solution",
      postId: "1",
      img: `${slide5Img.src}`,
      category: "marketing",
    });
  };
  const produceArray = () => {
    // if (subTitle1) {
    //   let subTitleArr1 = subTitle1.split("");
    //   // console.log(subTitleArr1);
    //   setSubTitleAr1(subTitleArr1);
    //   // console.log(typeof img);
    //   let imgArr = [];

    //   imgArr.push(img1);
    //   imgArr.push(img2);
    //   imgArr.push(img3);
    //   imgArr.push(img4);
    //   imgArr.push(img5);
    //   setImgArr(imgArr);
    // }
    if (true) {
      let subTitleArr1 = "Innovation".split("");
      // console.log(subTitleArr1);
      setSubTitleAr1(subTitleArr1);
      // console.log(typeof img);
      let imgArr = [];

      imgArr.push(img1);
      imgArr.push(img2);
      imgArr.push(img3);
      imgArr.push(img4);
      imgArr.push(img5);
      setImgArr(imgArr);
    }
  };

  const animationWords = () => {
    let b = subTitleAr1.map((word, idx) => {
      let delay = { animationDelay: `${idx / 5 + 0.5}s` };
      return (
        <h1
          key={idx}
          className={isArrWordIn ? `${styles.fadeInUp0}` : " "}
          style={delay}
        >
          {word}
        </h1>
      );
    });
    return b;
  };

  useEffect(() => {
    // getListNews();
  }, [projectsidx]);
  useEffect(() => {
    fetchNextNews();
  }, [currentIdxNews]);
  useEffect(() => {
    produceArray();
  }, [subTitle1]);

  return (
    <>
      {" "}
      <div className={styles.newsPage04Box}>
        <div className={styles.newsContentBox01}>
          <div className={styles.newsContentTextPage04}>
            <div className={styles.newsContentH1} ref={arrWordRef}>
              {animationWords()}
            </div>

            {/* <div dangerouslySetInnerHTML={{ __html: content1 }} /> */}
            <p>
              A consistent content marketing strategy and simplification of the
              e-commerce contract are the key. Taking advantage of our rich
              digital KOL resource and the Facebook Fanpage community to
              distribute content, TRUM quickly helps brands capture and attract
              customers.
            </p>
            <p>
              As a result, in just 3 days of sale event, TRUM has boosted
              revenue on e-commerce platforms by 350% (~ 4 billionVND) compared
              to previous seasons.
            </p>
          </div>
        </div>
        {/* swiper */}
        <div className={styles.page02Container}>
          <Page02Swiper isLandingPage={false} />
        </div>
        {/* end */}
        <div className={styles.newsNextNews}>
          <p>Next project</p>
          <div
            className={
              inViewGridPicref
                ? `${styles.nextNewsBackground} ${styles.gridShow}`
                : `${styles.nextNewsBackground}`
            }
            ref={gridBoxRef}
          >
            {nextNews && (
              <Link href={`/projects/${nextNews.postId}`}>
                <div
                  className={styles.newsBackground}
                  style={{
                    background: `url(${nextNews.img}) no-repeat center
                  center/cover`,
                  }}
                >
                  <div className={styles.headlineNextNews}>
                    <h1>{nextNews.title}</h1>
                    <h1>{nextNews.title1}</h1>
                    <p>{nextNews.category}</p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage04Swiper;
