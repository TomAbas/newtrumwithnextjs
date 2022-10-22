import React from "react";

import { useInView } from "framer-motion";
import { useState } from "react";
import { useEffect, useRef } from "react";
import axios from "axios";
import { urlListContributorIdPost } from "../../ApiUrl/Api";
import { useRouter } from "next/router";
const ProjectPage002 = ({ tagLine, tagLine1, projectsidx }) => {
  // const router = useRouter();
  // const { projectsidx } = router.query;
  const [line1, setLine1] = useState([]);
  const [line2, setLine2] = useState([]);
  const [contributorArr, setContributorArr] = useState([]);
  const arrWordRef = useRef();
  const isArrWordIn = useInView(arrWordRef);
  const arrWordRef1 = useRef();
  const isArrWordIn1 = useInView(arrWordRef1);
  const getListContributor = () => {
    axios
      .get(`${urlListContributorIdPost}/${projectsidx}`)
      .then(({ data }) => {
        // console.log(data);
        setContributorArr(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const produceArray = () => {
    if (tagLine) {
      // console.log(tagLine1);
      let firstLine = tagLine.split(" ");
      setLine1(firstLine);
      if (tagLine1) {
        // console.log("123");
        let secondLine = tagLine1.split(" ");
        setLine2(secondLine);
      }
    }
  };
  const contributorList = () => {
    let b = contributorArr.map((contributor) => {
      return (
        <p >
          {contributor.role} by : {contributor.contributorName}
        </p>
      );
    });
    return b;
  };
  useEffect(() => {
    getListContributor();
    produceArray();
  }, [tagLine]);

  return (
    <>
      {/* <div className={styles.newsPage02Box}>
        <div className={styles.newsTitleBox}>
          <div className={styles.newsTitle}>
            <div className={styles.newsTitleH1} ref={arrWordRef}>
              {animationWords()}
            </div>
            <div className={styles.newsTitleH1} ref={arrWordRef1}>
              {animationWords1()}
            </div>
          </div>
          <div className={styles.newsCredits}>
            <div className={styles.newsCreditsWrapper}>
              <p>credits</p>
              <div className={styles.creditsBoxWrapper}>
                <div className={styles.creditsBox0}>{contributorList()}</div>
                <div className={styles.creditsBox1}></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProjectPage002;
