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
import { ListItemButton, ListItemIcon, Typography } from "@mui/material";
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
            sx={{ padding: "8px 16px", fontSize: '12px' }}
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
              <Box sx={{ minWidth: "45%" }}>
                <FormContact />
              </Box>
              <Box sx={{ minWidth: "55%" }}>
                <Reasons />
              </Box>
            </Stack>
            <BtnSubmit label="BOOK YOUR CALL" sx={{ mt: 4, mb: 2 }} />
            <Typography
              variant="caption"
              sx={{ display: "block", fontWeight: "light" }}
            >
              We look forward to help you get started.
            </Typography>

            <Industry />


            <div className={styles.titleMd}>We're hiring</div>
            <Typography variant="caption">
              TRUM is an open and inclusive work environment, with flexible
              hours and sane workweeks. We are always on the lookout for new
              talent!
            </Typography>
            <div className={styles.recruitInfo}>
              <div className={styles.textHolder}>
                <div className={styles.titleMd}>{listJob.title}</div>
                <p className={styles.recruitInfoText}>{listJob.description}</p>
              </div>
              <List className={styles.itemHolder}>{createListJobItem()}</List>
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
