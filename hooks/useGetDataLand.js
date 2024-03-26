import React, { useEffect, useState } from "react";
import { getAllProject } from "../ApiUrl/projectApi/projectApi";

const useGetDataLand = (data) => {
  const [landingPageData, setLandingPageData] = useState([]);
  const [page1Data, setPage1Data] = useState([]);
  const [page3Data, setPage3Data] = useState([]);
  const [page4Data, setPage4Data] = useState([]);
  const [imgArr, setImgArr] = useState([]);
  const [projectArr, setProjectArr] = useState([]);
  const [mainImage, setMainImage] = useState([]);
  const setData = () => {
    setLandingPageData(data.title);
    setPage1Data(data.description);
    setPage3Data(data.subTitle);
    setPage4Data(data.listContent);
    setMainImage(data.mainImage);
  };
  const getListNews = async () => {
    try {
      const data = await getAllProject();

      setProjectArr(
        data
          .filter((item) => !item.isCategory)
          .map((item) => {
            return {
              img: item.mainImage,
              title: item.title,
              postId: item.title,
              content: item.listContent[0].description,
            };
          })
      );
      setImgArr(
        await getAllProject().then((data) => {
          return data
            .filter((item) => item.isCategory)
            .map((item) => {
              return {
                img: item.mainImage,
                title: item.title,
                postId: item.title,
              };
            });
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setData();
    getListNews();
  }, []);
  return {
    landingPageData,
    page1Data,
    page3Data,
    page4Data,
    imgArr,
    mainImage,
    projectArr,
  };
};

export default useGetDataLand;
