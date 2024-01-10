import React, { useEffect, useState } from "react";
import { getCategoryFromListAllProject } from "../../services/projectApiSerivces";
import styles from "../../styles/ServicesPage.module.css";
import SwiperListImage from "../SwiperListImage/SwiperListImage";
import ServicesPage1 from "./ServicesPage1/ServicesPage1";
import ServicesPage2 from "./ServicesPage2/ServicesPage2";
import ServicesPage3 from "./ServicesPage3/ServicesPage3";

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

  return (
    <div className={styles.serviceContainer}>
      <ServicesPage1 />
      <ServicesPage2 dataServices={dataServices} />
      <ServicesPage3 dataServices={dataServices} listCategory={listCategory} />

      <div className={styles.swiperService}>
        <SwiperListImage />
      </div>
    </div>
  );
};

export default ServicesPage;
