import React, { useEffect } from "react";
import styles from "../../styles/NewsPage.module.css";
import NewPage1 from "./NewPage1/NewPage1";
import NewPage2 from "./NewPage2/NewPage2";
import NewPage3 from "./NewPage3/NewPage3";
import NewPage4 from "./NewPage4/NewPage4";
import BestProjects from "../landingpage/LandingPage/BestProjects/BestProjects";
import SwiperListImage from "../SwiperListImage/SwiperListImage";
import { getAllPostNews } from "../../ApiUrl/newsApi/newsApi";

const NewPage = () => {
  const [listNewsPublic, setListNewsPublic] = React.useState([]);
  const [listNewsReaded, setListNewsReaded] = React.useState([]);
  const imgArr = [
    {
      image: "https://picsum.photos/500/500",
    },
    {
      image: "https://picsum.photos/500/500",
    },
    {
      image: "https://picsum.photos/500/500",
    },
    {
      image: "https://picsum.photos/500/500",
    },
    {
      image: "https://picsum.photos/500/500",
    },
    {
      image: "https://picsum.photos/500/500",
    },
  ];
  const handleGetListNewsPublic = async () => {
    const paramsPublic = {
      isPublic: 1,
    };
    const paramsReaded = {
      topRead: 1,
    };
    const dataPublic = await getAllPostNews(paramsPublic);
    const data = await getAllPostNews(paramsReaded);
    setListNewsPublic(dataPublic);
    setListNewsReaded(data);
  };

  const handleSearchNews = async (search) => {
    const params = {
      search: "search",
    };
    const data = await getAllPostNews(paramsReaded);
  };

  useEffect(() => {
    handleGetListNewsPublic();
  }, []);

  return (
    <div className={styles.newPageContainer}>
      {/*<NewPage1/>*/}
      <div className={styles.newPageSubContainer}>
        {/*<NewPage2/>*/}
        {/*<NewPage3/>*/}
        <NewPage4
          listNewsPublic={listNewsPublic}
          listNewsReaded={listNewsReaded}
        />
        <BestProjects isShowButton={false} />
        <SwiperListImage imgArr={imgArr} />
      </div>
    </div>
  );
};

export default NewPage;
