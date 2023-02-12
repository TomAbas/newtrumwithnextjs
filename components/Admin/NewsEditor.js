import React from "react";
import styles from "../../styles/Admin.module.css";

//mui
import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
//form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//editor
// import Editor from "ckeditor5-custom-build/build/ckeditor";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { urlDeleteContributor } from "../../ApiUrl/Api";
import { urlAddContributor, urlListContributorIdPost } from "../../ApiUrl/Api";
const schema = yup.object().shape({
  contributorName: yup.string(),
  contributorRole: yup.string(),
  title1: yup.string().required("missing field"),
  title2: yup.mixed(),
  headLine1: yup.string().required("missing field"),
  headLine2: yup.mixed(),
  subHeadLine: yup.string().required("missing field"),
  tagLine1: yup.string().required("missing field"),
  tagLine2: yup.string().required("missing field"),
  youtubeUrl: yup.string().required("missing field"),
  category: yup.string().required("missing field"),
  image1: yup.mixed().required("missing field"),
  image2: yup.mixed().required("missing field"),
  image3: yup.mixed().required("missing field"),
  image4: yup.mixed().required("missing field"),
  image5: yup.mixed().required("missing field"),
  image6: yup.mixed().required("missing field"),
  thumbnail: yup.mixed(),
});

const NewsEditor = ({
  newsIdx,
  preLoadValue,
  content1,
  setNewsHeadContent,
  isAddNews,
  setNewNewsHeadContent,
  isAddContributor,
  contributorList,
  setDidNotSubmitHeadForm,
  setDidNotSubmitHeadForm2,
  setContributorList,
}) => {
  // console.log(isAddContributor);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: useMemo(() => {
      return preLoadValue;
    }, [preLoadValue]),
  });
  const submitNewsEditor = (data) => {
    console.log(data);

    if (isAddNews) {
      console.log(213);
      setNewNewsHeadContent(data);
      setDidNotSubmitHeadForm2(false);
    } else {
      console.log(213);
      setNewsHeadContent(data);
      setDidNotSubmitHeadForm(false);
    }
  };
  const submitAddContributor = async (data) => {
    console.log(data);
    await axios
      .post(urlAddContributor, {
        contributorName: data.contributorName,
        role: data.contributorRole,
        postId: newsIdx,
      })
      .then(async (res) => {
        console.log(res);
        await axios
          .get(`${urlListContributorIdPost}/${newsIdx}`)
          .then(({ data }) => {
            console.log(data);
          
            setContributorList(data);
          });
      })
      .catch((error) => {
       
        console.log(error);
      });
  };
  const deleteContributor = async (id) => {
    await axios.post(`${urlDeleteContributor}/${id}`).then(async (res) => {
      console.log(res);
      await axios
        .get(`${urlListContributorIdPost}/${newsIdx}`)
        .then(({ data }) => {
          console.log(data);
         
          setContributorList(data);
        }).catch((error)=>{
         
          console.log(error)
        });
    });
  };
  useEffect(() => {
    reset(preLoadValue);
  }, [preLoadValue]);

  return (
    <div className={`${styles.landingpageform} ${styles.formNews}`}>
      <form
        onSubmit={handleSubmit(submitAddContributor)}
        className={styles.formNewsSubmit}
        style={{ display: !isAddContributor && "none" }}
      >
        <div className={styles.bannerEdit}>
          <div className={styles.bannerBanner}>Contributor :</div>
          <div className={styles.row1}>
            <div className={styles.titleEdit}>
              <h3>Current Contributor </h3>
              <List>
                {contributorList &&
                  contributorList.map((item, idx) => {
                    return (
                      <ListItem sx={{ borderBottom: " 2px solid #ccc" }} key={idx}>
                        <p>
                          {item.contributorName} : {item.role}{" "}
                        </p>{" "}
                        <div className=''>
                          <IconButton
                            size='small'
                            sx={{
                              width: "fix-content",
                              flex: "10%",
                              justifyContent: "space-between",
                            }}
                            variant='contained'
                            // className={styles.btnEditNews}
                            onClick={async () => {
                              await deleteContributor(item.contributorId);
                              // console.log("click");
                            }}
                          >
                            <DeleteForeverIcon />
                          </IconButton>
                        </div>
                      </ListItem>
                    );
                  })}
              </List>
            </div>

            <div className={styles.titleEdit}>
              <h3>Add Contributor Name: </h3>
              <textarea
                type='text'
                // defaultValue={preLoadValue.title2}
                className={styles.inputField}
                name='contributorName'
                {...register("contributorName")}
              />
              <p>{errors.contributorName?.message}</p>
            </div>

            <div className={styles.titleEdit}>
              <h3>Add Contributor Role: </h3>
              <textarea
                type='text'
                // defaultValue={preLoadValue.title2}
                className={styles.inputField}
                name='contributorRole'
                {...register("contributorRole")}
              />
              <p>{errors.contributorRole?.message}</p>
            </div>
          </div>
        </div>

        {/* <button className={styles.btnSubmit} type='submit'>
          submit
        </button> */}
        <Button variant='outlined' type='submit'>
          submit
        </Button>
      </form>

      <form
        onSubmit={handleSubmit(submitNewsEditor)}
        className={styles.formNewsSubmit}
        style={{ display: isAddContributor && "none" }}
      >
        <div className={styles.bannerEdit}>
          <div className={styles.bannerBanner}>TITLE :</div>
          <div className={styles.row1}>
            <div className={styles.titleEdit}>
              <h3>Line 1 : </h3>
              <textarea
                type='text'
                // defaultValue={preLoadValue.title1}
                className={styles.inputField}
                name='title1'
                {...register("title1")}
              />
              <p>{errors.title1?.message}</p>
            </div>

            <div className={styles.titleEdit}>
              <h3>Line 2 : </h3>
              <textarea
                type='text'
                // defaultValue={preLoadValue.title2}
                className={styles.inputField}
                name='title2'
                {...register("title2")}
              />
              <p>{errors.title2?.message}</p>
            </div>
          </div>
        </div>
        <div className={styles.content1Edit}>
          <div className={styles.bannerBanner}> HEADLINE :</div>
          <div className={styles.row1}>
            <div className={styles.titleEdit}>
              <h3>HEADLINE - Line 1 : </h3>
              <textarea
                type='text'
                // defaultValue={preLoadValue.headLine1}
                className={styles.inputField}
                name='headLine1'
                {...register("headLine1")}
              />
              <p>{errors.headLine1?.message}</p>
            </div>

            <div className={styles.titleEdit}>
              <h3>HEADLINE - Line 2 : </h3>
              <textarea
                type='text'
                // defaultValue={preLoadValue.headLine2}
                className={styles.inputField}
                name='headLine2'
                {...register("headLine2")}
              />
              <p>{errors.headLine2?.message}</p>
            </div>
          </div>
        </div>
        <div className={styles.content1Edit}>
          <div className={styles.bannerBanner}> Youtube Url :</div>
          <div className={styles.row1}>
            <div className={styles.titleEdit}>
              <h3>Youtube Embed URL </h3>
              <textarea
                type='text'
                // defaultValue={preLoadValue.youtubeUrl}
                className={styles.inputField}
                name='youtubeUrl'
                {...register("youtubeUrl")}
              />
              <p>{errors.youtubeUrl?.message}</p>
            </div>

            <div className={styles.titleEdit}>
              <h3>Category : </h3>
              <textarea
                type='text'
                // defaultValue={preLoadValue.category}
                className={styles.inputField}
                name='category'
                {...register("category")}
              />
              <p>{errors.category?.message}</p>
            </div>
          </div>
        </div>
        <div className={styles.content2Edit}>
          <div className={styles.bannerBanner}> SUB HEADLINE :</div>
          <div className={styles.row1}>
            <div className={styles.titleEdit}>
              <h3>SUB HEADLINE : </h3>
              <textarea
                type='text'
                // defaultValue={preLoadValue.subHeadLine}
                className={styles.inputField}
                name='subHeadLine'
                {...register("subHeadLine")}
              />
              <p>{errors.subHeadline?.message}</p>
            </div>

            <div className={styles.titleEdit}>
              <h3>Content 1 - Headline : </h3>
              <textarea
                type='text'
                className={styles.inputField}
                name='tagLine1'
                {...register("tagLine1")}
              />
              <p>{errors.tagLine1?.message}</p>
            </div>
            <div className={styles.titleEdit}>
              <h3>Content 2 - Headline : </h3>
              <textarea
                type='text'
                className={styles.inputField}
                name='tagLine2'
                {...register("tagLine2")}
              />
              <p>{errors.tagLine2?.message}</p>
            </div>
          </div>
        </div>
        <div className={styles.content4Edit}>
          <div className={styles.bannerBanner}>IMAGES :</div>
          <div className={styles.row1}>
            <div className={styles.titleEdit}>
              <h3>Choose a image for banner : </h3>
              <input
                type='file'
                accept='image/*'
                className={styles.inputField}
                name='image1'
                {...register("image1")}
              />
            </div>
            <div className={styles.titleEdit}>
              <h3>Choose a image for slide: </h3>
              <input
                type='file'
                accept='image/*'
                className={styles.inputField}
                name='image2'
                {...register("image2")}
              />
            </div>
            <div className={styles.titleEdit}>
              <h3>Choose a image for slide: </h3>
              <input
                type='file'
                accept='image/*'
                className={styles.inputField}
                name='image3'
                {...register("image3")}
              />
            </div>
          </div>
          <div className={styles.row1}>
            <div className={styles.titleEdit}>
              <h3>Choose a image for slide: </h3>
              <input
                type='file'
                accept='image/*'
                className={styles.inputField}
                name='image4'
                {...register("image4")}
              />
            </div>
            <div className={styles.titleEdit}>
              <h3>Choose a image for slide: </h3>
              <input
                type='file'
                accept='image/*'
                className={styles.inputField}
                name='image5'
                {...register("image5")}
              />
            </div>
            <div className={styles.titleEdit}>
              <h3>Choose a image for slide: </h3>
              <input
                type='file'
                accept='image/*'
                className={styles.inputField}
                name='image6'
                {...register("image6")}
              />
            </div>
            <div className={styles.titleEdit}>
              <h3>Choose a image for thumbnail: </h3>
              <input
                type='file'
                accept='image/*'
                className={styles.inputField}
                name='thumbnail'
                {...register("thumbnail")}
              />
            </div>
          </div>
        </div>
        {/* <button className={styles.btnSubmit} type='submit'>
          submit
        </button> */}
        <Button variant='outlined' type='submit'>
          submit
        </Button>
      </form>
    </div>
  );
};

export default NewsEditor;
