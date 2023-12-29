import React from "react";
import styles from "../../../styles/NewPage2.module.css";
const NewPage2 = ({ data }) => {
  return (
    <div className={styles.NewPage2Container}>
      <p
        className={styles.NewPage2Text1}
        dangerouslySetInnerHTML={{ __html: data.description }}
      ></p>

      <iframe
        className={styles.video}
        src={data.videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default NewPage2;
