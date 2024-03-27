import React, { Suspense, useEffect, useState } from "react";
import { getCategoryFromListAllProject } from "../../services/projectApiSerivces";
import styles from "../../styles/ServicesPage.module.css";
import SwiperListImage from "../SwiperListImage/SwiperListImage";
import ServicesPage1 from "./ServicesPage1/ServicesPage1";
import ServicesPage2 from "./ServicesPage2/ServicesPage2";
import ServicesPage3 from "./ServicesPage3/ServicesPage3";
import BestProjects, {
  Banner,
} from "../landingpage/LandingPage/BestProjects/BestProjects";
import LoadingHome from "../Loading/LoadingHome";

const ServicesPage = ({ data, listAllProject }) => {
  const [dataServices, setDataServices] = useState(
    null || {
      listService: [],
      subTitle: "",
      title: {},
    }
  );
  const [listCategory, setListCategory] = useState([]);
  useEffect(() => {
    setListCategory(getCategoryFromListAllProject(listAllProject));
  }, []);
  useEffect(() => {
    if (data) {
      setDataServices(data);
    }
  }, [data]);

  if (!data) {
    return <LoadingHome />;
  }

  return (
    <Suspense fallback={<LoadingHome />}>
      <div className={styles.serviceContainer}>
        <ServicesPage1 />
        <ServicesPage2 dataServices={dataServices} />
        <ServicesPage3
          dataServices={dataServices}
          listCategory={listCategory}
        />

        <div className={styles.swiperService}>
          <SwiperListImage />
        </div>
        <div className={styles.bannerContainer}>
          <BestProjects />
        </div>
      </div>
    </Suspense>
  );
};

export default ServicesPage;
