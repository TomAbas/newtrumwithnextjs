import React, { useEffect } from "react";
import styles from "../../../styles/ServicesPage3.module.css";
import ItemService from "./components/ItemService/ItemService";
import { getAllProject } from "../../../ApiUrl/projectApi/projectApi";

const ServicesPage3 = ({ dataServices, listCategory }) => {
  const { listService, subTitle } = dataServices;
  const mainTitle = {
    category: "SERVICES",
    description: subTitle,
  };
  const newData = [mainTitle, ...listCategory];
  return (
    <div className={styles.service3Container}>
      {newData.map((item, idx) => {
        return (
          <ItemService
            key={idx}
            desc={item.description}
            title={item.category}
            subTitle={item.title}
          />
        );
      })}
    </div>
  );
};

export default ServicesPage3;
