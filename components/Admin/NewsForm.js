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
import NewsEditor from "./NewsEditor";
import NewsCkEditor from "./NewsCkEditor";
import { getAllPosts, getPost } from "../../ApiUrl/newsApi/newsApi";
import {
  deleteProject,
  updateProjectData,
} from "../../ApiUrl/projectApi/projectApi";
import { toast } from "react-toastify";

const NewsForm = () => {
  const [arrNews, setArrNews] = useState([]);
  const [newsIdx, setNewsIdx] = useState();
  const [defaultValues, setDefaultValues] = useState();
  const [trigger, setTrigger] = useState(false);
  const [newContent1, setNewContent1] = useState();
  const [newContent2, setNewContent2] = useState("");
  const [newsHeadContent, setNewsHeadContent] = useState();
  const [currentContent1, setCurrentContent1] = useState();
  const [currentContent2, setCurrentContent2] = useState();
  const [isAddContributor, setIsAddContributor] = useState(false);
  const [reDelete, setReDelete] = useState(true);
  const [contributorList, setContributorList] = useState([0]);
  const [didNotSubmitHeadForm, setDidNotSubmitHeadForm] = useState(true);

  const deleteNews = async (id) => {
    try {
      await deleteProject(id);
      setReDelete(!reDelete);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchListNews = async () => {
    await getAllPosts().then((data) => {
      setArrNews(data);
    });
  };
  const fetchNewsId = async (id) => {
    try {
      let post = await getPost(id);
      console.log(post);
      let preLoadValue = post;
      setDefaultValues(preLoadValue);
      setCurrentContent1(post.listContent[0].description);
      setCurrentContent2(post.listContent[1].description);
      setTrigger(true);
    } catch (error) {
      console.log(error);
    }
  };

  const submitNewsCKEditor = async (e) => {
    e.preventDefault();
    console.log("submit");
    let body = {
      ...newsHeadContent,
      listContent: [
        { ...newsHeadContent.listContent[0], description: newContent1 },
        { ...newsHeadContent.listContent[1], description: newContent2 },
      ],
    };
    try {
      await updateProjectData(body);
      setNewsHeadContent({});
      setCurrentContent1("");
      setCurrentContent2("");
      toast.success("Update news successfully");
    } catch (error) {
      toast.error("Update news failed,plesae try again");
      console.log(error);
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
              {arrNews?.map((item, idx) => (
                <div
                  style={{ display: item.deleted === "1" && "none" }}
                  key={idx}
                >
                  <div className={styles.itemNews}>
                    <List>
                      <ListItem>
                        <ListItemButton
                          key={`item-${idx}`}
                          onClick={async () => {
                            console.log(item.title);
                            await fetchNewsId(item.title);
                            setNewsIdx(item._id);
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
                          // className={styles.btnEditNews}
                          onClick={() => {
                            deleteNews(item._id);
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


