import React from 'react';

// import { useEffect } from "react";
import { useState } from 'react';
import NewsEditor from './NewsEditor';
// import NewsCkEditor from "./NewsCkEditor";
import axios from 'axios';
import styles from '../../styles/Admin.module.css';
import { urlAddNews } from '../../ApiUrl/Api';
import NewsCkEditorAddNews from './NewsCkEditorAddNews';
import { createProjectData } from '../../ApiUrl/projectApi/projectApi';
import { toast } from 'react-toastify';
const AddNews = ({ isAddNews }) => {
  let preloadValue = {
    title: '',
    category: '',
    video: '',
    listContent: [
      {
        title: '',
        image: '',
      },
      {
        title: '',
        image: '',
      },
    ],
    videoAlt: '',
    mainImage: '',
    mainImageAlt: '',
    swiper: [
      {
        image: '',
      },
      {
        image: '',
      },
      {
        image: '',
      },
      {
        image: '',
      },
      {
        image: '',
      },
    ],
  };
  const [newNewsHeadContent, setNewNewsHeadContent] = useState();
  const [newNewsContent1, setNewNewsContent1] = useState();
  const [newNewsContent2, setNewNewsContent2] = useState('');
  const [didNotSubmitHeadForm2, setDidNotSubmitHeadForm2] = useState(true);

  const submitNewNewsCKEditor = async (e) => {
    e.preventDefault();

    let body = {
      ...newNewsHeadContent,
      listContent: [
        { ...newNewsHeadContent.listContent[0], description: newNewsContent1 },
        { ...newNewsHeadContent.listContent[1], description: newNewsContent2 },
      ],
    };
    console.log(body);
    try {
      await createProjectData(body);
      toast.success('News added successfully');
    } catch (error) {
      console.log(error);
      toast.error('News added failed,plesae try again');
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
              preLoadValue={preloadValue}
              setNewNewsHeadContent={setNewNewsHeadContent}
              isAddNews={isAddNews}
              setDidNotSubmitHeadForm2={setDidNotSubmitHeadForm2}
            />
            <div className=''>
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
