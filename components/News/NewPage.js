import React, { useEffect } from "react";
import { getAllPostNews } from "../../ApiUrl/newsApi/newsApi";
import styles from "../../styles/NewsPage.module.css";
import SwiperListImage from "../SwiperListImage/SwiperListImage";
import BestProjects from "../landingpage/LandingPage/BestProjects/BestProjects";
import NewPage4 from "./NewPage4/NewPage4";

const NewPage = () => {
  const [listNewsPublic, setListNewsPublic] = React.useState([]);
  const [listNewsReaded, setListNewsReaded] = React.useState([]);

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

  useEffect(() => {
    handleGetListNewsPublic();
  }, []);

  return (
    <div className={styles.newPageContainer}>
      <div className={styles.newPageSubContainer}>
        <NewPage4
          listNewsPublic={listNewsPublic}
          listNewsReaded={listNewsReaded}
        />
        <BestProjects isShowButton={false} />
        <SwiperListImage />
      </div>
    </div>
  );
};

export default NewPage;
