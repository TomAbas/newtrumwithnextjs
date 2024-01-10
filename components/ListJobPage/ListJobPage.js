import React from "react";
import styles from "../../styles/ProjectStyles.module.css";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import img from "/public/imgs/Projects..svg";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import aniStyles from "../../styles/Animation.module.css";
const ListJobPage = ({ arrayListJob }) => {
  const [deviceWidth, setDeviceWidth] = React.useState(0);
  useEffect(() => {
    setDeviceWidth(window?.innerWidth);
  }, []);
  const createItem = () => {
    let b = arrayListJob.map((job, idx) => {
      let a = (
        <div className={styles.listJobBox} key={idx}>
          {job.map((job, idx) => {
            if (typeof job === "number") {
              return (
                <Link href={`/projects/${job.title}`} key={idx}>
                  <Parallax className={styles.jobBox}></Parallax>
                </Link>
              );
            }
            return (
              <>
                {idx === 0 ? (
                  <Link href={`/projects/${job.title}`} key={idx}>
                    <Parallax className={styles.jobBox}>
                      <div
                        className={styles.innerBox}
                        style={{
                          backgroundImage: `url(${job.mainImage})`,
                        }}
                      ></div>
                      <div className={styles.innerBox2}>
                        <h3>{job.title}</h3>
                      </div>
                    </Parallax>
                  </Link>
                ) : (
                  <Link href={`/projects/${job.title}`} key={idx}>
                    <Parallax className={styles.jobBox}>
                      <div
                        className={styles.innerBox}
                        style={{ backgroundImage: `url(${job.mainImage})` }}
                      ></div>
                      <div className={styles.innerBox2}>
                        <h3>{job.title}</h3>
                      </div>
                    </Parallax>
                  </Link>
                )}
              </>
            );
          })}
        </div>
      );
      return a;
    });

    return b;
  };
  return (
    <>
      <ParallaxProvider>
        <div className={styles.listJobContainer}>
          <div className={`${styles.listJobTitlePage}`}>
            <Image
              src={img}
              alt="Picture of the author"
              width={600}
              height={500}
              className={aniStyles.fadeInUp}
            />
          </div>
          <div className={` ${styles.outerMove}`}>{createItem()}</div>
        </div>
      </ParallaxProvider>
    </>
  );
};

export default ListJobPage;
