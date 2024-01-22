import React, { useEffect, useState } from "react";
import styles from "../../../../styles/AboutV2Styles.module.css";
import icon from "../../../../public/imgs/HeaderIcon.svg";
import Image from "next/image";
import { getAllProject } from "../../../../ApiUrl/projectApi/projectApi";
import { useRouter } from "next/router";
const About04 = ({ aboutData }) => {
  const [service, setService] = useState([]);
  const datatest = [
    "Product/Service Explainers",
    "Startup Video Pitches",
    "Promotions",
    "Video Marketings",
    "Videos",
    "View all",
  ];
  const { about02 } = aboutData;

  const router = useRouter();
  const getService = async () => {
    let listAllProject = await getAllProject({ isCategory: 1 });

    if (listAllProject) {
      setService(listAllProject);
    }
  };
  useEffect(() => {
    getService();
  }, []);
  return (
    <div className={styles.about4Container}>
      <div className={styles.about4bg}>
        <div className={styles.about4Content}>
          <div className={styles.about4Left}>
            <p style={{ whiteSpace: "pre-line" }}>{about02?.title}</p>
          </div>
          <div className={styles.about4Right}>
            <div className={styles.itemBox}>
              {service.slice(0, 3).map((data, index) => {
                return <p key={index}> {data.category}</p>;
              })}
            </div>
            <div className={styles.itemBox}>
              {service.slice(3, 6).map((data, index) => {
                return <p key={index}> {data.category}</p>;
              })}
              <p
                className={styles.viewAll}
                onClick={() => {
                  router.push("/service");
                }}
              >
                View all <Image src={icon} width={15} height={15} alt="icon" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.overlay}></div>
    </div>
  );
};

export default About04;
