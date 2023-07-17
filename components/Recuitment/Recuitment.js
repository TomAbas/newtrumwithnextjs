import React, { useState, useEffect } from "react";
import styles from "../../styles/RecuitmentStyles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
//mui
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { ListItemButton, ListItemIcon } from "@mui/material";
import useGetContact from "../../hooks/useGetContect";
import FormContact from "./FormContact";
import Reasons from "./Reasons";
import { Stack, Box } from "@mui/material";
import BtnSubmit from "../Form/BtnSubmit";
import Industry from "./Industry/Industry";

const ListJobItem = ({ job }) => {
  const [activeSelectOption, setActiveSelectOption] = useState(false);
  return (
    <>
      <ListItemButton
        sx={{ borderTop: "0.1px solid rgba(128, 128, 128, 0.298)" }}
        onClick={(e) => {
          setActiveSelectOption(!activeSelectOption);
        }}
        // data-idx={idx}
      >
        <ListItemText primary={job.title} className={styles.item} />
        <ListItemIcon>
          <AddIcon sx={{ color: "#858585" }} />
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={activeSelectOption} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemText
            primary={job.description}
            sx={{ padding: "8px 16px" }}
          />
        </List>
      </Collapse>
    </>
  );
};
const Recuitment = () => {
  const { companyInfo, listJob } = useGetContact();

  const createListJobItem = () => {
    return listJob?.listJob?.map((job) => {
      return (
        <>
          <ListJobItem job={job} />
        </>
      );
    });
  };

  return (
    <>
      {companyInfo ? (
        <>
          <div className={styles.bigContainer}>
            <Stack direction={{ sm: "column", md: "row" }} spacing={2} gap={2}>
              <Box sx={{ minWidth: "50%" }}>
                <FormContact />
              </Box>
              <Box sx={{ minWidth: "50%" }}>
                <Reasons />
              </Box>
            </Stack>
            <BtnSubmit label="BOOK YOUR CALL" sx={{ mt: 4, mb: 2 }} />
            <p>We look forward to help you get started.</p>

            <Industry />

            <div className={styles.container}>
              <div className={styles.textHolder}>
                <div className={styles.titleMd}>{companyInfo.address}</div>
              </div>

              <div className={`${styles.textHolder} ${styles.phone}`}>
                <div className={styles.textHolder}>
                  <div className={styles.titleMd}>{companyInfo.phone}</div>
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
                <div className={styles.titleMd}>{listJob.title}</div>
                <p className={styles.recruitInfoText}>{listJob.description}</p>
              </div>
              <List className={styles.itemHolder}>{createListJobItem()}</List>
            </div>
            <div className={styles.bottomWidget}>
              <ul>
                <Link href={`${companyInfo.instagram}`} target="_blank">
                  <a>
                    <li className={styles.link}>Instagram</li>
                  </a>
                </Link>
                <Link href={`${companyInfo.facebook}`} target="_blank">
                  <a>
                    <li className={styles.link}>Facebook</li>
                  </a>
                </Link>
                <Link href={`${companyInfo.twitter}`} target="_blank">
                  <a>
                    <li className={styles.link}>Twitter</li>
                  </a>
                </Link>
                <Link href={`${companyInfo.linkedin}`} target="_blank">
                  <a>
                    <li className={styles.link}>Linkedin</li>
                  </a>
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
