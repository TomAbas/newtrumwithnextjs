import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import styles from "../../styles/Admin.module.css";
import {
  deleteNews,
  getAllPostNews,
  getNewsDetail,
  updateNews,
} from "../../ApiUrl/newsApi/newsApi";
import { toast } from "react-toastify";
import NewsCreator from "./News";

const ListNews = ({ arrNews, fetchNewsId, deleteNews }) => {
  return (
    <List
      sx={{
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
                        size="small"
                        sx={{ flex: "30%" }}
                        variant="contained"
                        onClick={() => {
                          deleteNews(item._id);
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

const EditNews = () => {
  const [arrNews, setArrNews] = useState([]);
  const [newsDetail, setNewsDetail] = useState();

  const handleGetListNews = async () => {
    const res = await getAllPostNews();
    setArrNews(res);
  };

  const fetchNewsId = async (title) => {
    const res = await getNewsDetail(title);
    setNewsDetail(res);
    console.log(res);
  };

  const handleDeleteNews = async (id) => {
    try {
      const res = await deleteNews(id);
      console.log(res);
      handleGetListNews();
      toast.success("Delete news successfully");
    } catch (error) {
      toast.error("Delete news failed, please try again");
      console.log(error);
    }
  };

  const handleUpdateNews = async (id, body) => {
    try {
      const res = await updateNews(id, body);
      console.log(res);
      handleGetListNews();
      toast.success("Update news successfully");
    } catch (error) {
      toast.error("Update news failed, please try again");
      console.log(error);
    }
  };
  useEffect(() => {
    handleGetListNews();
  }, []);

  return (
    <div>
      <div className={styles.landingpageformContainer}>
        <div className={styles.titleForm}>
          <h1>EDIT NEWS</h1>
        </div>
        <div className={styles.newsEditorForm}>
          <ListNews
            className={styles.listNews}
            arrNews={arrNews}
            fetchNewsId={fetchNewsId}
            deleteNews={handleDeleteNews}
          />
          <div className={styles.formCk}>
            {newsDetail ? (
              <>
                <NewsCreator
                    arrNews={arrNews}
                  newsDetail={newsDetail}
                  handleUpdateNews={handleUpdateNews}
                />
              </>
            ) : (
              <>
                <div className={styles.waitingForm}>
                  choose news on left panel to edit
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNews;
