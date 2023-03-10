import React, { useState, useEffect } from "react";
import styles from "../styles/NavPageStyles.module.css";
import ProjectPage01 from "../components/ProjectPage/ProjectPage01";
import ProjectPage02 from "../components/ProjectPage/ProjectPage02";
import ProjectPage03 from "../components/ProjectPage/ProjectPage03";
import ProjectPage04 from "../components/ProjectPage/ProjectPage04";
import ProjectPage04Swiper from "../components/ProjectPage/ProjectPage04Swiper";
// img
import slide4Img from "/public/imgs/slideImgs/MultiMediaProduction6.webp";
import slide5Img from "/public/imgs/slideImgs/MultiMediaProduction7.webp";
const ProjectPage = ({ projectsidx, data }) => {
  const [newsBigTitle, setNewsBigTitle] = useState();
  const [openTitle, setOpenTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [subTitle1, setSubTitle1] = useState();
  const [tagLine, setTagLine] = useState();
  const [contributor, setContributor] = useState();
  const [category, setCategory] = useState();
  const [content, setContent] = useState();
  const [content1, setContent1] = useState();
  const [youtubeUrl, setYoutubeUrl] = useState();
  const [bannerImg, setBannerImg] = useState();
  const [img, setImg] = useState();
  const [swiper, setSwiper] = useState([]);

  //

  const fetchData = () => {
    //1
    setCategory(data.category);
    setNewsBigTitle(data.title);
    setBannerImg(data.mainImage);
    //2
    setTagLine(data.mainImageAlt);
    setContributor(data.Credits);
    //3
    setOpenTitle(data.videoAlt);
    setSubTitle(data.listContent[0].title);
    setContent(data.listContent[0].description);
    setYoutubeUrl(data.video);
    setImg(data.listContent[0].image);
    //4
    setSubTitle1(data.listContent[1].title);
    setContent1(data.listContent[1].description);
    setSwiper(data.swiper);
  };

  useEffect(() => {
    fetchData();
  }, [data]);
  return (
    <>
      <div>
        <ProjectPage01
          title={newsBigTitle}
          category={category}
          bannerImg={bannerImg}
        />
        <div className={styles.container}>
          <ProjectPage02
            tagLine={tagLine}
            projectsidx={projectsidx}
            contributor={contributor}
          />
          <ProjectPage03
            openTitle={openTitle}
            subTitle={subTitle}
            content={content}
            img={img}
          />
          <ProjectPage04Swiper
            subTitle1={subTitle1}
            content1={content1}
            projectsidx={projectsidx}
            swiper={swiper}
            newsBigTitle={newsBigTitle}
            youtubeUrl={youtubeUrl}
          />
          {/* <ProjectPage04
            subTitle1={subTitle1}
            content1={content1}
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            img5={img5}
            projectsidx={projectsidx}
          /> */}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
