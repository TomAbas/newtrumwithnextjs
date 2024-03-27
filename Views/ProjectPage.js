import React, { useState, useEffect, Suspense } from "react";
import styles from "../styles/NavPageStyles.module.css";
import ProjectPage01 from "../components/ProjectPage/ProjectPage01";
import ProjectPage02 from "../components/ProjectPage/ProjectPage02";
import ProjectPage03 from "../components/ProjectPage/ProjectPage03";
import ProjectPage04Swiper from "../components/ProjectPage/ProjectPage04Swiper";
import { getAllProject } from "../ApiUrl/projectApi/projectApi";
import LoadingHome from "../components/Loading/LoadingHome";
// img
const ProjectPage = ({ data }) => {
  const [newsBigTitle, setNewsBigTitle] = useState();
  const [category, setCategory] = useState();
  const [content, setContent] = useState();
  const [bannerImg, setBannerImg] = useState();
  // const [swiper, setSwiper] = useState([]);
  const [isCategory, setIsCategory] = useState(false);
  const [listContent, setListContent] = useState([]);
  const [urlSpotify, setUrlSpotify] = useState();
  const [loading, setLoading] = useState(false);
  //
  const fetchData = async () => {
    setLoading(true);
    setCategory(data.category);
    setNewsBigTitle(data.title);
    setBannerImg(data.mainImage);
    setContent(data.videoAlt);
    setIsCategory(data.isCategory);
    setListContent(data.listContent);
    setUrlSpotify(data.swiper[0]?.image);
    setLoading(false);
    // if (data.isCategory) {
    //   setSwiper(
    //     await getAllProject().then((project) => {
    //       return project
    //         .filter((item) => {
    //           return item.category === data.category && !item.isCategory;
    //         })
    //         .map((item) => {
    //           return {
    //             img: "https://picsum.photos/200",
    //             title: item.title,
    //             postId: item.title,
    //           };
    //         });
    //     })
    //   );
    // } else {
    //   const dataSwiperTest = [
    //     {
    //       image: "https://picsum.photos/200",
    //       title: "Content Marketing",
    //       postId: "Content Marketing",
    //     },
    //     {
    //       image: "https://picsum.photos/200",
    //       title: "Content Marketing",
    //       postId: "Content Marketing",
    //     },
    //     {
    //       image: "https://picsum.photos/200",
    //       title: "Content Marketing",
    //       postId: "Content Marketing",
    //     },
    //     {
    //       image: "https://picsum.photos/200",
    //       title: "Content Marketing",
    //       postId: "Content Marketing",
    //     },
    //   ];
    //   // setSwiper(data.swiper);
    //   setSwiper(dataSwiperTest);
    // }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  if (!data) {
    return <LoadingHome />;
  }
  return (
    <Suspense fallback={<LoadingHome />}>
      <div>
        <ProjectPage01
          isCategory={isCategory}
          title={newsBigTitle}
          category={category}
          bannerImg={bannerImg}
          content={content}
          listContent={listContent}
          urlSpotify={urlSpotify}
        />
        <div className={styles.container}></div>
      </div>
    </Suspense>
  );
};

export default ProjectPage;
