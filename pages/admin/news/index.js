import React from "react";
import News from "../../../components/Admin/News";
import styles from "../../../styles/Admin.module.css";
const index = () => {
  return (
    <div className={styles.landingpageformContainer}>
      <div className={styles.titleForm}>
        <h1>News</h1>
      </div>
      <News />
    </div>
  );
};

export default index;
