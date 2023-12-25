import React, { useEffect, useState } from "react";
import ServicesPage1 from "./ServicesPage1/ServicesPage1";
import ServicesPage2 from "./ServicesPage2/ServicesPage2";
import ServicesPage3 from "./ServicesPage3/ServicesPage3";
import ServicesPage4 from "./ServicesPage4/ServicesPage4";
import styles from "../../styles/ServicesPage.module.css";
import ServicesPage5 from "./ServicesPage5/ServicesPage5";
import Industry from "../Recuitment/Industry/Industry";
import { getListRatingData } from "../../ApiUrl/rating/ratingApi";
import { getCategoryFromListAllProject } from "../../services/projectApiSerivces";
import BestProjects from "../landingpage/LandingPage/BestProjects/BestProjects";
import SwiperListImage from "../SwiperListImage/SwiperListImage";

const ServicesPage = ({ data, listAllProject }) => {
  const [listCardIndustry, setListCardIndustry] = useState(null || []);
  const [dataServices, setDataServices] = useState(
    null || {
      listService: [],
      subTitle: "",
      title: {},
    }
  );
  const [listCategory, setListCategory] = useState([]);
  useEffect(() => {
    getListRatingData().then((res) => {
      setListCardIndustry(res);
    });
    setListCategory(getCategoryFromListAllProject(listAllProject));
  }, []);
  useEffect(() => {
    if (data) {
      setDataServices(data);
    }
  }, [data]);

  const dataTest = [
    {
      img: "https://picsum.photos/200",
      title: "Content Marketing",
      content: "We help yo",
    },
    {
      img: "https://picsum.photos/200",
      title: "Content Marketing",
      content: "We help yo",
    },
    {
      img: "https://picsum.photos/200",
      title: "Content Marketing",
      content: "We help yo",
    },
    {
      img: "https://picsum.photos/200",
      title: "Content Marketing",
      content: "We help yo",
    },
    {
      img: "https://picsum.photos/200",
      title: "Content Marketing",
      content: "We help yo",
    },
    {
      img: "https://picsum.photos/200",
      title: "Content Marketing",
      content: "We help yo",
    },
  ];
  
  return (
    <div className={styles.serviceContainer}>
      <ServicesPage1 />
      <ServicesPage2 dataServices={dataServices} />
      <ServicesPage3 dataServices={dataServices} listCategory={listCategory} />
      {/* <Industry /> */}
      {/* <ServicesPage4 listCardIndustry={listCardIndustry} /> */}
      <SwiperListImage imgArr={dataTest}/>
      <BestProjects />
      {/*<ServicesPage5 />*/}
    </div>
  );
};

export default ServicesPage;
