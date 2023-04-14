import React from "react";
import styles from "../../styles/Admin.module.css";
//mui
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import { useEffect } from "react";
import { useState } from "react";
import HiringEditor from "./HringEdior";
import AddHiring from "./AddHiring";
import {
  deleteRecuiterData,
  getRecuiterData,
} from "../../ApiUrl/recuiter/recuiter";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Button } from "@mui/material";
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
    try {
      await deleteRecuiterData(id);
      setReDelete(!reDelete);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchListJobs = async () => {
    setArrNews(await getRecuiterData().then((data) => data.listJob));
  };
  const fetchJobId = async (id) => {
    let jobEdit = arrNews.find((item) => item._id === id);
    let preLoadValue = {
      title1: jobEdit.title,
      title2: jobEdit.description,
    };
    setDefaultValues(preLoadValue);
    setTrigger(true);
  };

  useEffect(() => {
    fetchListJobs();
  }, [reDelete, trigger]);

  const ListNews = ({ arrNews }) => {
    return (
      <List
        sx={{
          width: "350px",
          maxWidth: "1000px",
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
          <div>
            <div className={styles.btnGroup}>
              <Button
                sx={{ width: "  100%" }}
                onClick={() => {
                  setAddNewJob(true);
                }}
              >
                <PersonAddIcon />
              </Button>
            </div>
            <ul className={styles.ulList}>
              {arrNews?.map((item, idx) => (
                <div key={idx}>
                  <div className={styles.itemNews}>
                    <List>
                      <ListItem>
                        <ListItemButton
                          key={`item-${idx}`}
                          onClick={async () => {
                            await fetchJobId(item._id);
                            setNewsIdx(item._id);
                            setAddNewJob(false);
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
                          onClick={() => {
                            deleteJobs(item._id);
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
