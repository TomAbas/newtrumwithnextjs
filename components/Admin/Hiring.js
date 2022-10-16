import React from "react";
import styles from "../../styles/Admin.module.css";
//mui
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

//
import axios from "axios";

import {
  urlDeleteNewsId,
  urlEditNewsId,
  urlListContributorIdPost,
  urlNews,
  urlNewsId,
  urlListJobs,
  urlJobId,
  urlDeleteJob,
} from "../../ApiUrl/Api";
import { useEffect } from "react";
import { useState } from "react";
import HiringEditor from "./HringEdior";
import AddHiring from "./AddHiring";
const drawerWidth = 240;
const Hiring = () => {
  const [arrNews, setArrNews] = useState([]);
  const [newsIdx, setNewsIdx] = useState();
  const [defaultValues, setDefaultValues] = useState();
  const [trigger, setTrigger] = useState(false);
  const [addNewJob, setAddNewJob] = useState(false);
  const [newsHeadContent, setNewsHeadContent] = useState();
  const [reDelete, setReDelete] = useState(true);

  const deleteJobs = async (id) => {
    await axios
      .post(`${urlDeleteJob}/${id}`)
      .then((res) => {
        console.log(res);
        setReDelete(!reDelete);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchListJobs = async () => {
    await axios
      .get(urlListJobs)
      .then(({ data }) => {
        console.log(data);
        setArrNews(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchJobId = async (id) => {
    await axios.get(`${urlJobId}/${id}`).then(({ data }) => {
      // console.log(data);
      let preLoadValue = {
        title1: data[0].title,
        title2: data[0].content,
      };
      setDefaultValues(preLoadValue);
      setTrigger(true);
    });
  };

  useEffect(() => {
    fetchListJobs();
  }, [reDelete, trigger]);

  const ListNews = ({ arrNews }) => {
    return (
      <List
        sx={{
          width: "100%",
          maxWidth: 280,
          border: "1px solid #ccc",
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 500,
          "& ul": { padding: 0 },
          padding: " 10px 10px",
        }}
        subheader={<li />}
      >
        <li key={`section-${1}`}>
          <div className={styles.itemNews}>
            <div className={styles.btnGroup}>
              <div>
                <Button
                  onClick={async () => {
                    console.log("click");
                    setAddNewJob(true);
                  }}
                >
                  <p>Add New Position </p>
                  <IconButton
                    size='small'
                    sx={{ flex: "30%" }}
                    variant='contained'
                    // className={styles.btnEditNews}
                  >
                    <PersonAddIcon />
                  </IconButton>
                </Button>
              </div>
            </div>
            <ul>
              {arrNews.map((item, idx) => (
                <div>
                  <div className={styles.itemNews}>
                    <List>
                      <ListItem>
                        <ListItemButton
                          key={`item-${idx}`}
                          onClick={async () => {
                            await fetchJobId(item.id);
                            setNewsIdx(item.id);
                            setAddNewJob(false);
                            // console.log(`${urlNewsId}/${newsIdx}`);
                          }}
                        >
                          <ListItemText
                            primary={`${item.title}`}
                            sx={{ textAlign: "center" }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </List>
                    <div className={styles.btnGroup}>
                      <div>
                        <IconButton
                          size='small'
                          sx={{ flex: "30%" }}
                          variant='contained'
                          // className={styles.btnEditNews}
                          onClick={async () => {
                            await deleteJobs(item.id);
                            console.log("click");
                          }}
                        >
                          <DeleteForeverIcon />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </li>
      </List>
    );
  };

  return (
    <>
      <div className={styles.landingpageformContainer}>
        <div className={styles.titleForm}>
          <h1>HIRING</h1>
        </div>
        <div className={styles.newsEditorForm}>
          <ListNews className={styles.listNews} arrNews={arrNews} />
          <div className={styles.formCk}>
            {defaultValues && !addNewJob ? (
              <>
                <HiringEditor
                  newsIdx={newsIdx}
                  preLoadValue={defaultValues}
                  setNewsHeadContent={setNewsHeadContent}
                  addNewJob={addNewJob}
                  setTrigger={setTrigger}
                  trigger={trigger}
                />
              </>
            ) : addNewJob ? (
              <>
                <AddHiring setTrigger={setTrigger} trigger={trigger} />
              </>
            ) : (
              <>
                <div className={styles.waitingForm}>
                  choose position on left panel to edit
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hiring;
