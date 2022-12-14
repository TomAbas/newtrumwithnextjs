import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
// import styles from "../../styles/NavPageStyles.module.css";
import styles from "../styles/NavPageStyles.module.css";
import { urlNewsId } from "../ApiUrl/Api";
import ProjectPage01 from "../components/ProjectPage/ProjectPage01";
import ProjectPage02 from "../components/ProjectPage/ProjectPage02";
import ProjectPage03 from "../components/ProjectPage/ProjectPage03";
import ProjectPage04 from "../components/ProjectPage/ProjectPage04";
import ProjectPage002 from "../components/ProjectPage/ProjectPage002";


const ProjectPage = ({ projectsidx }) => {
  // console.log(projectsidx);
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
  const contentUrl = `https://www.trumagency.com/projects/${projectsidx}`;
  const shortContentUrl = `/${projectsidx}`;
  const fetchData = () => {
    if (projectsidx) {
      axios
        .get(`${urlNewsId}/${projectsidx}`)
        .then(({ data }) => {
          // console.log(data);
          setCategory(data[0].category);
          setNewsBigTitle(data[0].title);
          setNewsBigTitle1(data[0].title2);
          setOpenTitle(data[0].tagline21);
          setSubTitle(data[0].subtitle);
          setSubTitle1(data[0].subtitle2);
          setContent(data[0].content);
          setContent1(data[0].contetn2);
          setYoutubeUrl(data[0].youtubeLink);
          setTagLine(data[0].tagline11);
          setTagLine1(data[0].tagline12);
          setBannerImg(data[0].banner);
          setImg(data[0].img);
          setImg1(data[0].img1);
          setImg2(data[0].img2);
          setImg3(data[0].img3);
          setImg4(data[0].img4);
          setImg5(data[0].img5);
          setThumbNail(data[0].thumbnail);
          // setTageLine1(data[0].tagline2);
          // console.log(data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, [projectsidx]);
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat'
          rel='stylesheet'
        />
        {/* metatag google  */}
        <meta name='description' content={openTitle} />
        <meta
          name='keywords'
          content='Agency, Content,Marketing, KOL, Festival, Singer, Video, Art, Products'
        />
        <meta name='author' content='Trum Agency' />
        <link rel='canonical' href={shortContentUrl} />
        {/* metatag facebook */}
        <meta property='og:url' content={contentUrl} />
        <meta property='og:type' content='article' />
        <meta
          property='og:title'
          content={newsBigTitle + " " + newsBigTitle1}
        />
        <meta property='og:description' content={openTitle} />
        <meta property='og:image' content={thumbnail} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <title>{newsBigTitle + " " + newsBigTitle1}</title>
      </Head>
      <div>
        <ProjectPage01
          title={newsBigTitle}
          title1={newsBigTitle1}
          category={category}
          bannerImg={bannerImg}
        />
        <div className={styles.container}>
          {/* <ProjectPage002
            tagLine={tagLine}
            tagLine1={tagLine1}
            projectsidx={projectsidx}
          /> */}
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
          <ProjectPage04
            subTitle1={subTitle1}
            content1={content1}
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            img5={img5}
            projectsidx={projectsidx}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
