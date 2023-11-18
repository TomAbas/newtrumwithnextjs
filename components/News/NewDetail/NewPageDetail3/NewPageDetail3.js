
import React, { useEffect } from "react";
import styles from "../../../../styles/NewPageDetail3.module.css";
import ItemNewPageDetail3 from "./ItemNewPageDetail3";

const NewPageDetail3 = ({ dataServices, listCategory }) => {
  const { listService, subTitle } = dataServices;
  const mainTitle = {
    category: "SERVICES",
  };
  const newData = [mainTitle, ...listCategory];
  return (
    <div className={styles.service3Container}>
      <h3 className={styles.titleCard}>LASTEST NEWS</h3>
      {newData.map((item, idx) => {
        return (
          <ItemNewPageDetail3
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

export default NewPageDetail3;
