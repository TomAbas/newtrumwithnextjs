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
import slide5Img from "/public/imgs/slideImgs/MultiMediaProduction7.webp";
import { getAllProject } from "../../ApiUrl/projectApi/projectApi";
const ProjectPage04Swiper = ({
  subTitle1,
  content1,
  swiper,
  projectsidx,
  newsBigTitle,
}) => {
  const gridBoxRef = useRef();
  const inViewGridPicref = useInView(gridBoxRef);
  const [imgArr, setImgArr] = useState([]);
  const [nextProject, setNextProject] = useState();
  const arrWordRef = useRef();
  const isArrWordIn = useInView(arrWordRef);
  const getListNews = async () => {
    setNextProject(
      await getAllProject().then((data) => {
        const findIdx = (e) => e.title === newsBigTitle;
        let nextProject = data.findIndex(findIdx);
        console.log(data[nextProject + 1]);
        return data[nextProject + 1];
      })
    );
  };
  const createSwiperObj = () => {
    let swiperObj = swiper?.map((item, idx) => {
      return {
        img: item.image,
        title: "",
        postId: "",
      };
    });
    setImgArr(swiperObj);
  };
  const animationWords = () => {
    let b = subTitle1?.split("").map((word, idx) => {
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
    if (newsBigTitle) getListNews();
  }, [newsBigTitle]);
  useEffect(() => {
    if (swiper.length > 0) createSwiperObj();
  }, [swiper]);

  return (
    <>
      {" "}
      <div className={styles.newsPage04Box}>
        <div className={styles.newsContentBox01}>
          <div className={styles.newsContentTextPage04}>
            <div className={styles.newsContentH1} ref={arrWordRef}>
              {animationWords()}
            </div>

            <div dangerouslySetInnerHTML={{ __html: content1 }} />
            {/* <p>
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
            </p> */}
          </div>
        </div>
        {/* swiper */}
        <div className={styles.page02Container}>
          <Page02Swiper isLandingPage={false} imgArr={imgArr} />
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
            {nextProject && (
              <Link href={`/projects/${nextProject.title}`}>
                <a>
                  <div
                    className={styles.newsBackground}
                    style={{
                      background: `url(${nextProject.mainImage}) no-repeat center
                  center/cover`,
                    }}
                  >
                    <div className={styles.headlineNextNews}>
                      <h1>{nextProject.title}</h1>
                      <p>{nextProject.category}</p>
                    </div>
                  </div>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage04Swiper;
