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
// import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import EditIcon from "@mui/icons-material/Edit";
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
} from "../../ApiUrl/Api";
import { useEffect } from "react";
import { useState } from "react";
import NewsEditor from "./NewsEditor";
import NewsCkEditor from "./NewsCkEditor";

const drawerWidth = 240;
const NewsForm = () => {
  const [arrNews, setArrNews] = useState([]);
  const [newsIdx, setNewsIdx] = useState();
  const [defaultValues, setDefaultValues] = useState();
  const [trigger, setTrigger] = useState(false);
  const [newContent1, setNewContent1] = useState();
  const [newContent2, setNewContent2] = useState();
  const [newsHeadContent, setNewsHeadContent] = useState();
  const [currentContent1, setCurrentContent1] = useState();
  const [currentContent2, setCurrentContent2] = useState();
  const [isAddContributor, setIsAddContributor] = useState(false);
  const [reDelete, setReDelete] = useState(true);
  const [contributorList, setContributorList] = useState([0]);
  const [didNotSubmitHeadForm, setDidNotSubmitHeadForm] = useState(true);
  const [trigger1, setTrigger1] = useState();
  const deleteNews = async (id) => {
    await axios
      .post(`${urlDeleteNewsId}/${id}`)
      .then((res) => {
        console.log(res);
        setReDelete(!reDelete);
       
      })
      .catch((error) => {
        console.log(error);
        
      });
  };
  const fetchListNews = async () => {
    await axios
      .get(urlNews)
      .then(({ data }) => {
        // console.log(data);
        setArrNews(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchNewsId = async (id) => {
    await axios.get(`${urlNewsId}/${id}`).then(({ data }) => {
      // console.log(data);
      let preLoadValue = {
        title1: data[0].title,
        title2: data[0].title2,
        headLine1: data[0].tagline11,
        headLine2: data[0].tagline12,
        subHeadLine: data[0].tagline21,
        tagLine1: data[0].subtitle,
        tagLine2: data[0].subtitle2,
        category: data[0].category,
        youtubeUrl: data[0].youtubeLink,
      };
      setDefaultValues(preLoadValue);
      setCurrentContent1(data[0].content);
      setCurrentContent2(data[0].contetn2);
      setTrigger(true);
    });
  };
  const fetchListContributorId = async (id) => {
    await axios.get(`${urlListContributorIdPost}/${id}`).then(({ data }) => {
      console.log(data);
      setContributorList(data);
    });
  };
  const submitNewsCKEditor = async (e) => {
    e.preventDefault();
    const newForm = new FormData();
    console.log(newsHeadContent);
    newForm.append("banner", newsHeadContent.image1[0]);
    newForm.append("img", newsHeadContent.image2[0]);
    newForm.append("img1", newsHeadContent.image3[0]);
    newForm.append("img2", newsHeadContent.image4[0]);
    newForm.append("img3", newsHeadContent.image5[0]);
    newForm.append("img4", newsHeadContent.image6[0]);
    newForm.append("img5", newsHeadContent.image6[0]);
    newForm.append("thumbnail", newsHeadContent.thumbnail[0]);
    newForm.append("postId", newsIdx);
    newForm.append("title", newsHeadContent.title1);
    newForm.append("title2", newsHeadContent.title2);
    newForm.append("category", newsHeadContent.category);
    newForm.append("subtitle", newsHeadContent.tagLine1);
    newForm.append("subtitle2", newsHeadContent.tagLine2);
    newForm.append("youtubeLink", newsHeadContent.youtubeUrl);
    newForm.append("tagline11", newsHeadContent.headLine1);
    newForm.append("tagline12", newsHeadContent.headLine2);
    newForm.append("tagline21", newsHeadContent.subHeadLine);
    newForm.append("deleted", 0);
    newForm.append("content", newContent1);
    newForm.append("contetn2", newContent2);
    console.log(newForm);
    if (newForm) {
      await axios({
        url: `${urlEditNewsId}/${newsIdx}`,
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        data: newForm,
      })
        .then((res) => {
          console.log(res);
          
          setNewsHeadContent([]);
          setCurrentContent1("");
          setCurrentContent2("");
        })
        .catch((error) => {
          
          console.log(error);
        });
    }
  };
  useEffect(() => {
    fetchListNews();
  }, [reDelete]);

  const ListNews = ({ arrNews }) => {
    return (
      <List
        sx={{
          // width: "100%",
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
          <div className={styles.itemNews}>
            <ul className={styles.ulList}>
              {arrNews.map((item, idx) => (
                <div style={{ display: item.deleted === "1" && "none" }} key={idx}>
                  <div className={styles.itemNews}>
                    <List>
                      <ListItem>
                        <ListItemButton
                          key={`item-${idx}`}
                          onClick={async () => {
                            await fetchNewsId(item.postId);
                            setNewsIdx(item.postId);
                            setIsAddContributor(false);
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
                          // className={styles.btnContributor}
                          onClick={async () => {
                            await fetchListContributorId(item.postId);
                            setNewsIdx(item.postId);
                            await fetchNewsId(item.postId);
                            setIsAddContributor(true);
                          }}
                        >
                          <PersonAddIcon />
                        </IconButton>
                      </div>

                      {/* <IconButton
                        size='small'
                        sx={{ flex: "30%" }}
                        variant='contained'
                        className='btn-edit-news'
                      >
                        <EditIcon />
                      </IconButton> */}
                      <div>
                        <IconButton
                          size='small'
                          sx={{ flex: "30%" }}
                          variant='contained'
                          // className={styles.btnEditNews}
                          onClick={async () => {
                            await deleteNews(item.postId);
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
          <h1>EDIT NEWS</h1>
        </div>
        <div className={styles.newsEditorForm}>
          <ListNews className={styles.listNews} arrNews={arrNews} />
          <div className={styles.formCk}>
            {defaultValues && !isAddContributor ? (
              <>
                <NewsEditor
                  newsIdx={newsIdx}
                  preLoadValue={defaultValues}
                  setNewsHeadContent={setNewsHeadContent}
                  isAddContributor={isAddContributor}
                  contributorList={contributorList}
                  setDidNotSubmitHeadForm={setDidNotSubmitHeadForm}
                  setContributorList={setContributorList}
                />
              </>
            ) : isAddContributor ? (
              <>
                {" "}
                <NewsEditor
                  newsIdx={newsIdx}
                  preLoadValue={defaultValues}
                  setNewsHeadContent={setNewsHeadContent}
                  isAddContributor={isAddContributor}
                  contributorList={contributorList}
                  setDidNotSubmitHeadForm={setDidNotSubmitHeadForm}
                  setContributorList={setContributorList}
                />
              </>
            ) : (
              <>
                <div className={styles.waitingForm}>
                  choose news on left panel to edit
                </div>
              </>
            )}
            <div
              className=''
              style={{
                display: trigger && !isAddContributor ? "block" : "none",
              }}
            >
              <NewsCkEditor
                className={styles.ckForm}
                currentContent1={currentContent1}
                currentContent2={currentContent2}
                setNewContent1={setNewContent1}
                setNewContent2={setNewContent2}
                submitNewsCKEditor={submitNewsCKEditor}
                didNotSubmitHeadForm={didNotSubmitHeadForm}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsForm;
