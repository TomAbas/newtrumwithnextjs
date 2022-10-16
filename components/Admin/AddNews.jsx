import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NewsEditor from "./NewsEditor";
import NewsCkEditor from "./NewsCkEditor";
import axios from "axios";
import styles from '../../styles/Admin.module.css'
import { urlAddNews } from "../../ApiUrl/Api";
import NewsCkEditorAddNews from "./NewsCkEditorAddNews";
const AddNews = ({ isAddNews }) => {
  const [newNewsHeadContent, setNewNewsHeadContent] = useState();
  const [newNewsContent1, setNewNewsContent1] = useState();
  const [newNewsContent2, setNewNewsContent2] = useState();
  const [didNotSubmitHeadForm2, setDidNotSubmitHeadForm2] = useState(true);

  const submitNewNewsCKEditor = async (e) => {
    e.preventDefault();
    console.log(newNewsHeadContent);
    console.log(newNewsContent1);

    const newForm = new FormData();

    newForm.append("banner", newNewsHeadContent.image1[0]);
    newForm.append("img", newNewsHeadContent.image2[0]);
    newForm.append("img1", newNewsHeadContent.image3[0]);
    newForm.append("img2", newNewsHeadContent.image4[0]);
    newForm.append("img3", newNewsHeadContent.image5[0]);
    newForm.append("img4", newNewsHeadContent.image6[0]);
    newForm.append("img5", newNewsHeadContent.image6[0]);
    newForm.append("thumbnail", newNewsHeadContent.thumbnail[0]);
    newForm.append("title", newNewsHeadContent.title1);
    newForm.append("title2", newNewsHeadContent.title2);
    newForm.append("category", newNewsHeadContent.category);
    newForm.append("subtitle", newNewsHeadContent.tagLine1);
    newForm.append("subtitle2", newNewsHeadContent.tagLine2);
    newForm.append("youtubeLink", newNewsHeadContent.youtubeUrl);
    newForm.append("content", newNewsContent1);
    newForm.append("contetn2", newNewsContent2);
    newForm.append("tagline11", newNewsHeadContent.headLine1);
    newForm.append("tagline12", newNewsHeadContent.headLine2);
    newForm.append("tagline21", newNewsHeadContent.subHeadLine);
    newForm.append("deleted", 0);
    if (newForm) {
      await axios({
        url: `${urlAddNews}`,
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        data: newForm,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <>
      <div className={styles.landingpageformContainer}>
        <div className={styles.titleForm}>
          <h1>ADD NEWS</h1>
        </div>
        <div className={styles.newsEditorForm}>
          <div className={styles.formCk}>
            <NewsEditor
              setNewNewsHeadContent={setNewNewsHeadContent}
              isAddNews={isAddNews}
              setDidNotSubmitHeadForm2={setDidNotSubmitHeadForm2}
            />
            <div className=''>
              {/* <NewsCkEditor
                className={styles.ckForm}
                setNewNewsContent1={setNewNewsContent1}
                setNewNewsContent2={setNewNewsContent2}
                submitNewNewsCKEditor={submitNewNewsCKEditor}
                isAddNews={isAddNews}
              /> */}
              <NewsCkEditorAddNews
                className={styles.ckForm}
                setNewNewsContent1={setNewNewsContent1}
                setNewNewsContent2={setNewNewsContent2}
                submitNewNewsCKEditor={submitNewNewsCKEditor}
                didNotSubmitHeadForm2={didNotSubmitHeadForm2}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNews;
