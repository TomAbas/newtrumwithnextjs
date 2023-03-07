import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import styles from "../../styles/ProjectPage04Styles.module.css";
import Link from "next/link";
import Page02Swiper from "../landingpage/LandingPage/Page-02/Page02Swiper";
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
      <div className={styles.newsPage04Box}>
        {/* swiper */}
        <div className={styles.page02Container}>
          <Page02Swiper isLandingPage={false} imgArr={imgArr} />
        </div>
        {/* end */}
        <div className={styles.newsContentBox01}>
          <div className={styles.newsContentTextPage04}>
            <div className={styles.newsContentH1} ref={arrWordRef}>
              {animationWords()}
            </div>
            <div dangerouslySetInnerHTML={{ __html: content1 }} />
          </div>
        </div>
        {/* video */}
        <div className={styles.page03VideoBox}>
          <div className={styles.videoBranding}>
            <iframe
              width='100%'
              height='100%'
              src={"https://www.youtube.com/embed/6pGL9S-Serw"}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
              allowFullScreen
            ></iframe>
          </div>
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
