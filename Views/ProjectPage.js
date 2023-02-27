import React, { useState, useEffect } from "react";

import styles from "../styles/NavPageStyles.module.css";

import ProjectPage01 from "../components/ProjectPage/ProjectPage01";
import ProjectPage02 from "../components/ProjectPage/ProjectPage02";
import ProjectPage03 from "../components/ProjectPage/ProjectPage03";
import ProjectPage04 from "../components/ProjectPage/ProjectPage04";
import ProjectPage04Swiper from "../components/ProjectPage/ProjectPage04Swiper";

const ProjectPage = ({ projectsidx, data }) => {
  // console.log("ssr ",data);
  const [newsBigTitle, setNewsBigTitle] = useState();
  const [newsBigTitle1, setNewsBigTitle1] = useState();
  const [openTitle, setOpenTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [subTitle1, setSubTitle1] = useState();
  const [tagLine, setTagLine] = useState();
  const [tagLine1, setTagLine1] = useState();
  const [category, setCategory] = useState();
  const [content, setContent] = useState();
  const [content1, setContent1] = useState();
  const [youtubeUrl, setYoutubeUrl] = useState();
  const [bannerImg, setBannerImg] = useState();
  const [img, setImg] = useState();
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();
  const [img4, setImg4] = useState();
  const [img5, setImg5] = useState();
  const [thumbnail, setThumbNail] = useState();
  //

  const fetchData = () => {
    setCategory(data.category);
    setNewsBigTitle(data.title);
    setNewsBigTitle1(data.title2);
    setOpenTitle(data.tagline21);
    setSubTitle(data.subtitle);
    setSubTitle1(data.subtitle2);
    setContent(data.content);
    setContent1(data.contetn2);
    setYoutubeUrl(data.youtubeLink);
    setTagLine(data.tagline11);
    setTagLine1(data.tagline12);
    setBannerImg(data.banner);
    setImg(data.img);
    setImg1(data.img1);
    setImg2(data.img2);
    setImg3(data.img3);
    setImg4(data.img4);
    setImg5(data.img5);
    setThumbNail(data.thumbnail);
  };

  useEffect(() => {
    // fetchData();
  }, [projectsidx]);
  return (
    <>
      <div>
        <ProjectPage01
          title={newsBigTitle}
          title1={newsBigTitle1}
          category={category}
          bannerImg={bannerImg}
        />
        <div className={styles.container}>
          <ProjectPage02
            tagLine={tagLine}
            tagLine1={tagLine1}
            projectsidx={projectsidx}
          />
          <ProjectPage03
            openTitle={openTitle}
            subTitle={subTitle}
            youtubeUrl={youtubeUrl}
            content={content}
            img={img}
          />
          <ProjectPage04Swiper
            subTitle1={subTitle1}
            content1={content1}
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            img5={img5}
            projectsidx={projectsidx}
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
