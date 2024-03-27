import React, { Suspense, useEffect, useState } from "react";
import { getAllPostNews } from "../../ApiUrl/newsApi/newsApi";
import styles from "../../styles/NewsPage.module.css";
import SwiperListImage from "../SwiperListImage/SwiperListImage";
import BestProjects from "../landingpage/LandingPage/BestProjects/BestProjects";
import NewPage4 from "./NewPage4/NewPage4";
import LoadingHome from "../Loading/LoadingHome";

const NewPage = () => {
  const [loading, setLoading] = useState(false);
  const [listNewsPublic, setListNewsPublic] = React.useState([]);
  const [listNewsReaded, setListNewsReaded] = React.useState([]);

  const handleGetListNewsPublic = async () => {
    try {
      setLoading(true);
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
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetListNewsPublic();
  }, []);
  if (loading) {
    return <LoadingHome />;
  }

  return (
    <Suspense fallback={<LoadingHome />}>
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
    </Suspense>
  );
};

export default NewPage;
