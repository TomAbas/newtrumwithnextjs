import React, { useState, useEffect } from "react";
import styles from "../../styles/RecuitmentStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { urlCompanyInfo, urlListJobs } from "../../ApiUrl/Api";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
const Recuitment = () => {
  const [companyInfo, setCompanyInfo] = useState();
  const [listJob, setListJob] = useState([]);
  const fetchCompanyInfo = async () => {
    await axios
      .get(urlCompanyInfo)
      .then(({ data }) => {
        setCompanyInfo(data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchListJob = async () => {
    await axios.get(urlListJobs).then(({ data }) => {
      console.log(data);
      setListJob(data);
    });
  };
  const createListJobItem = () => {
    let a;
    if (listJob) {
      a = listJob.map((job, idx) => {
        console.log(job);
        return (
          <>
            <li className={styles.item} key={idx}>
              <div className={styles.innerItem}>
                <p>{job.title}</p> <AddIcon />
              </div>
            </li>
          </>
        );
      });
    }
    return a;
  };
  useEffect(() => {
    fetchCompanyInfo();
  }, []);
  useEffect(() => {
    fetchListJob();
  }, [companyInfo]);
  return (
    <>
      {companyInfo ? (
        <>
          <div className={styles.bigContainer}>
            <div className={styles.container}>
              <div className={styles.textHolder}>
                <div className={styles.titleMd}>{companyInfo.address}</div>
              </div>

              <div className={`${styles.textHolder} ${styles.phoneNum}`}>
                <div className={styles.textHolder}>
                  <div className={styles.titleMd}>
                    {companyInfo.phoneNumber}
                  </div>
                  <div className={styles.titleXs}>Contact Us</div>
                </div>
              </div>
              <div className={styles.iconBox}>
                <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
                <div className={styles.email}>
                  {" "}
                  <p> {companyInfo.email}</p>{" "}
                </div>
              </div>
            </div>
            <div className={styles.recruitInfo}>
              <div className={styles.textHolder}>
                <div className={styles.titleMd}>{companyInfo.title}</div>
                <p className={styles.recruitInfoText}>{companyInfo.content}</p>
              </div>
              <ul className={styles.itemHolder}>
                {/* <li className={styles.item}>
                  <p>
                    item 1{" "}
                    <a className='btn'>
                      
                    </a>
                  </p>
                  <div className={`${styles.subContent} ${styles.textHolder}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Est ipsum, tempora praesentium inventore, ut asperiores,
                    adipisci a rem deserunt odit nam esse doloribus consectetur?
                    Harum at explicabo nulla? Quas, accusantium.
                  </div>
                </li> */}
                {/* <li className={styles.item}>
                  <p>item 1</p>
                </li>
                <li className={styles.item}>
                  <p>item 1</p>
                </li>
                <li className={styles.item}>
                  <p>item 1</p>
                </li>
                <li className={styles.item}>
                  <p>item 1</p>
                </li> */}
                {createListJobItem()}
              </ul>
            </div>
            <div className={styles.bottomWidget}>
              <ul>
                <Link href={`${companyInfo.instagram}`} target='_blank'>
                  <li className={styles.link}>Instagram</li>
                </Link>
                <Link href={`${companyInfo.facebook}`} target='_blank'>
                  <li className={styles.link}>Facebook</li>
                </Link>
                <Link href={`${companyInfo.twitter}`} target='_blank'>
                  <li className={styles.link}>Twitter</li>
                </Link>
                <Link href={`${companyInfo.linkedin}`} target='_blank'>
                  <li className={styles.link}>Linkedin</li>
                </Link>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default Recuitment;
