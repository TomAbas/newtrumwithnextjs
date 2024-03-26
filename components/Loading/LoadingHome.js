import React from "react";
import styles from "../../styles/AboutV2Styles.module.css";
const LoadingHome = () => {
  return (
    <div className={`${styles.about1Video} ${styles.about1VideoLoading}`}>
      <video preload="none" autoPlay playsInline muted loop>
        <source src={"/imgs/video.mp4"} type="video/mp4" />
      </video>
    </div>
  );
};

export default LoadingHome;
