import React, { useEffect } from "react";
import styles from "../../../styles/ServicesPage3.module.css";
import ItemService from "./components/ItemService/ItemService";
import { getAllProject } from "../../../ApiUrl/projectApi/projectApi";

const ServicesPage3 = ({ dataServices, listCategory }) => {
  const { listService, subTitle } = dataServices;
  const mainTitle = {
    mainTitle: "SERVICES",
    description: subTitle,
  };
  const newData = [mainTitle, ...listService];
  // async function test() {
  //   let listAllProject = await getAllProject({ isCategory: 1 });
  //   console.log(listAllProject);
  // }
  // // isCategory: 0/1
  // useEffect(() => {
  //   test();
  // }, []);
  return (
    <div className={styles.service3Container}>
      {listCategory.map((item, idx) => {
        return (
          <ItemService
            key={idx}
            // desc={item.description}
            desc={""}
            title={item.category}
            subTitle={item.title}
          />
        );
      })}
    </div>
  );
};

export default ServicesPage3;
