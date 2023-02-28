import React, { useState, useEffect } from "react";
import styles from "../../styles/RecuitmentStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { urlCompanyInfo, urlListJobs } from "../../ApiUrl/Api";
import Link from "next/link";
//mui
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

import Collapse from "@mui/material/Collapse";

import { ListItemButton, ListItemIcon } from "@mui/material";
const Recuitment = () => {
  const [activeSelectOption, setActiveSelectOption] = useState(false);
  const [activeSelectOption1, setActiveSelectOption1] = useState(false);
  const [activeSelectOption2, setActiveSelectOption2] = useState(false);
  const [activeSelectOption3, setActiveSelectOption3] = useState(false);
  const [activeSelectOption4, setActiveSelectOption4] = useState(false);
  const [open, setOpen] = useState(false);
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
    setCompanyInfo({
      address: "5455 de Gaspé MTL, QC, H2T 3B3 (Address)",
      email: "contact@trum.com.vn",
      phoneNum: "514.907.5011",
      title: "We're hiring",
      content:
        "Trum. is an open and inclusive work environment, with flexible hours and sane workweeks. We are always on the lookout for new talent!",
    });
  };
  const fetchListJob = async () => {
    await axios.get(urlListJobs).then(({ data }) => {
      // console.log(data);
      setListJob(data);
    });
  };

  const showActiveSelect = (e) => {
    // console.log(e)
    switch (e.currentTarget.dataset.idx) {
      case "0":
        setActiveSelectOption(!activeSelectOption);

        break;
      case "1":
        setActiveSelectOption1(!activeSelectOption1);

        break;
      case "2":
        setActiveSelectOption2(!activeSelectOption2);

        break;
      case "3":
        setActiveSelectOption3(!activeSelectOption3);

        break;
      case "4":
        setActiveSelectOption4(!activeSelectOption4);

        break;
      default:
        setActiveSelectOption(false);
        setActiveSelectOption4(false);
        setActiveSelectOption2(false);
        setActiveSelectOption3(false);
        setActiveSelectOption1(false);
        break;
    }
  };
  const createListJobItem = () => {
    let a;

    {
      /* <div className={styles.innerItem}>
                <p>{job.title}</p> <AddIcon />
              </div> */
    }
    if (listJob) {
      a = listJob.map((job, idx) => {
        // console.log(job);
        return (
          <>
            <ListItemButton
              sx={{ borderTop: "0.1px solid rgba(128, 128, 128, 0.298)" }}
              onClick={(e) => showActiveSelect(e)}
              data-idx={idx}
            >
              <ListItemText
                primary={job.title}
                className={styles.item}
                key={idx}
              />
              <ListItemIcon>
                <AddIcon sx={{ color: "#858585" }} />
              </ListItemIcon>
            </ListItemButton>

            {idx === 0 ? (
              <Collapse in={activeSelectOption} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  <ListItemText
                    primary={job.content}
                    sx={{ padding: "8px 16px" }}
                  />
                </List>
              </Collapse>
            ) : idx === 1 ? (
              <Collapse in={activeSelectOption1} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  <ListItemText
                    primary={job.content}
                    sx={{ padding: "8px 16px" }}
                  />
                </List>
              </Collapse>
            ) : idx === 2 ? (
              <Collapse in={activeSelectOption2} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  <ListItemText
                    primary={job.content}
                    sx={{ padding: "8px 16px" }}
                  />
                </List>
              </Collapse>
            ) : idx === 3 ? (
              <Collapse in={activeSelectOption3} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  <ListItemText
                    primary={job.content}
                    sx={{ padding: "8px 16px" }}
                  />
                </List>
              </Collapse>
            ) : (
              <Collapse in={activeSelectOption4} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  <ListItemText
                    primary={job.content}
                    sx={{ padding: "8px 16px" }}
                  />
                </List>
              </Collapse>
            )}

            {/* <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          
            <ListItemText primary={job.content} sx={{padding: "8px 16px"}} />
        
        </List>
      </Collapse> */}
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
    // fetchListJob();
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
              <List className={styles.itemHolder}>{createListJobItem()}</List>
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
