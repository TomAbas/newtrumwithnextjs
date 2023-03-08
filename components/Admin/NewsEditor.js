import React from "react";
import styles from "../../styles/Admin.module.css";

//mui
import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
//form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//editor
import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { urlDeleteContributor } from "../../ApiUrl/Api";
import { urlAddContributor, urlListContributorIdPost } from "../../ApiUrl/Api";
const schema = yup.object().shape({
  contributorName: yup.string(),
  contributorRole: yup.string(),
  title: yup.string().required("missing field"),
  category: yup.string().required("missing field"),
  video: yup.string().required("missing field"),
  videoAlt: yup.string().required("missing field"),
  mainImage: yup.mixed().required("missing field"),
  mainImageAlt: yup.string().required("missing field"),
  content1Title: yup.string().required("missing field"),
  content1Description: yup.string().required("missing field"),
  content1Image: yup.mixed().required("missing field"),
  content2Title: yup.string().required("missing field"),
  content2Description: yup.string().required("missing field"),
  content2Image: yup.mixed().required("missing field"),
  image1: yup.mixed().required("missing field"),
  image2: yup.mixed().required("missing field"),
  image3: yup.mixed().required("missing field"),
  image4: yup.mixed().required("missing field"),
  image5: yup.mixed().required("missing field"),
  // swiper: yup.array().required("missing field").default(new Array(4)),
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
      setNewNewsHeadContent(data);
      setDidNotSubmitHeadForm2(false);
    } else {
      setNewsHeadContent(data);
      setDidNotSubmitHeadForm(false);
    }
  };
  const submitAddContributor = async (data) => {
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
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  useEffect(() => {
    reset(preLoadValue);
  }, [preLoadValue]);
  useEffect(() => {
    console.log(errors);
  }, [errors]);

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
                      <ListItem
                        sx={{ borderBottom: " 2px solid #ccc" }}
                        key={idx}
                      >
                        <p>
                          {item.contributorName} : {item.role}{" "}
                        </p>{" "}
                        <div className="">
                          <IconButton
                            size="small"
                            sx={{
                              width: "fix-content",
                              flex: "10%",
                              justifyContent: "space-between",
                            }}
                            variant="contained"
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
                type="text"
                // defaultValue={preLoadValue.title2}
                className={styles.inputField}
                name="contributorName"
                {...register("contributorName")}
              />
              <p>{errors.contributorName?.message}</p>
            </div>

            <div className={styles.titleEdit}>
              <h3>Add Contributor Role: </h3>
              <textarea
                type="text"
                // defaultValue={preLoadValue.title2}
                className={styles.inputField}
                name="contributorRole"
                {...register("contributorRole")}
              />
              <p>{errors.contributorRole?.message}</p>
            </div>
          </div>
        </div>

        {/* <button className={styles.btnSubmit} type='submit'>
          submit
        </button> */}
        <Button variant="outlined" type="submit">
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
              <textarea
                type="text"
                defaultValue={preLoadValue.title}
                className={styles.inputField}
                name="title"
                {...register("title")}
              />
              <p>{errors.title?.message}</p>
            </div>
          </div>
        </div>
        <div className={styles.bannerEdit}>
          <div className={styles.bannerBanner}>CATEGORY :</div>
          <div className={styles.row1}>
            <div className={styles.titleEdit}>
              <textarea
                type="text"
                defaultValue={preLoadValue.category}
                className={styles.inputField}
                name="category"
                {...register("category")}
              />
              <p>{errors.category?.message}</p>
            </div>
          </div>
        </div>
        <div className={styles.content1Edit}>
          <div className={styles.bannerBanner}> IMAGE :</div>
          <div className={styles.row1}>
            <div className={styles.titleEdit}>
              <h3>Image : </h3>
              <textarea
                type="text"
                defaultValue={preLoadValue.mainImage}
                className={styles.inputField}
                name="mainImage"
                {...register("mainImage")}
              />
              <p>{errors.mainImage?.message}</p>
            </div>

            <div className={styles.titleEdit}>
              <h3>Description : </h3>
              <textarea
                type="text"
                defaultValue={preLoadValue.mainImageAlt}
                className={styles.inputField}
                name="mainImageAlt"
                {...register("mainImageAlt")}
              />
              <p>{errors.mainImageAlt?.message}</p>
            </div>
          </div>
        </div>
        <div className={styles.content1Edit}>
          <div className={styles.bannerBanner}> VIDEO :</div>
          <div className={styles.row1}>
            <div className={styles.titleEdit}>
              <h3>Video </h3>
              <textarea
                type="text"
                defaultValue={preLoadValue.video}
                className={styles.inputField}
                name="video"
                {...register("video")}
              />
              <p>{errors.video?.message}</p>
            </div>

            <div className={styles.titleEdit}>
              <h3>Description : </h3>
              <textarea
                type="text"
                defaultValue={preLoadValue.videoAlt}
                className={styles.inputField}
                name="videoAlt"
                {...register("videoAlt")}
              />
              <p>{errors.videoAlt?.message}</p>
            </div>
          </div>
        </div>
        <div className={styles.content2Edit}>
          <div className={styles.bannerBanner}> LIST IMAGE :</div>
          <div className={styles.row1}>
            {new Array(5).fill(0).map((item, idx) => {
              return (
                <>
                  <div className={styles.titleEdit}>
                    <h3>Image {idx + 1} : </h3>
                    <input
                      type="file"
                      accept="image/*"
                      className={styles.inputField}
                      name={`image${idx + 1}`}
                      {...register(`image${idx + 1}`)}
                    />
                    <p>{errors.listImage?.message}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className={styles.content1Edit}>
          <div className={styles.bannerBanner}> CONTENT :</div>
          <h2>Content 1: </h2>
          <div className={styles.row1}>
            <div className={styles.titleEdit}>
              <h3>Title : </h3>
              <textarea
                type="text"
                defaultValue={preLoadValue?.listContent[0].title}
                className={styles.inputField}
                name="content1Title"
                {...register("content1Title")}
              />
              <p>{errors.content1Title?.message}</p>
            </div>

            <div className={styles.titleEdit}>
              <h3>Description : </h3>
              <textarea
                type="text"
                defaultValue={preLoadValue?.listContent[0].description}
                className={styles.inputField}
                name="content1Description"
                {...register("content1Description")}
              />
              <p>{errors.content1Description?.message}</p>
            </div>
            <div className={styles.titleEdit}>
              <h3>Choose a image for content: </h3>
              <input
                type="file"
                accept="image/*"
                className={styles.inputField}
                name="content1Image"
                {...register("content1Image")}
              />
            </div>
          </div>
          <h2>Content 2: </h2>
          <div className={styles.row1}>
            <div className={styles.titleEdit}>
              <h3>Title : </h3>
              <textarea
                type="text"
                defaultValue={preLoadValue?.listContent[1].title}
                className={styles.inputField}
                name="content2Title"
                {...register("content2Title")}
              />
              <p>{errors.content2Title?.message}</p>
            </div>

            <div className={styles.titleEdit}>
              <h3>Description : </h3>
              <textarea
                type="text"
                defaultValue={preLoadValue?.listContent[1].description}
                className={styles.inputField}
                name="content2Description"
                {...register("content2Description")}
              />
              <p>{errors.content2Description?.message}</p>
            </div>
            <div className={styles.titleEdit}>
              <h3>Choose a image for content: </h3>
              <input
                type="file"
                accept="image/*"
                className={styles.inputField}
                name="content2Image"
                {...register("content2Image")}
              />
            </div>
          </div>
        </div>
        {/* <button className={styles.btnSubmit} type='submit'>
          submit
        </button> */}
        <Button variant="outlined" type="submit">
          submit
        </Button>
      </form>
    </div>
  );
};

export default NewsEditor;
