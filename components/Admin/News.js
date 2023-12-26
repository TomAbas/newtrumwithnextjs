import React, { useEffect } from "react";
import styles from "../../styles/Admin.module.css";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addPost } from "../../ApiUrl/newsApi/newsApi";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { useState } from "react";
import ServiceAddServiceForm from "./ServiceAddServiceForm";
import KeywordForm from "./keywordForm";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../config/firbase";
const News = () => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const [creditList, setCreditList] = useState([]);
  const [keywordList, setKeywordList] = useState([]);
  const schema = yup.object().shape({
    // title: yup.string().required("missing field").typeError("missing field"),
    // description: yup
    //   .string()
    //   .required("missing field")
    //   .typeError("missing field"),
    // category: yup.string().required("missing field").typeError("missing field"),
    // mainImage: yup.mixed().required("missing field").typeError("missing field"),
    sliderImg: yup.mixed().required("missing field").typeError("missing field"),
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onEditorStateChange = (editorState) => {
    setValue("description", editorState);
  };

  const editorContent = watch("description");

  const handleUploadSlideImgs = async (data) => {
    const uploadSlideImg = await Promise.all(
      Array.from(data).map(async (img) => {
        try {
          let downloadURL;
          if (img.name === undefined) {
            throw new Error("No file selected");
          }
          const id = new Date().getTime();
          const sotrageRef = ref(storage, `web/${img.name}${id}}`);
          const uploadTask = uploadBytesResumable(sotrageRef, img);
          downloadURL = await new Promise((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              () => {},
              (error) => console.log("err ", error),
              async () => {
                let url = await getDownloadURL(uploadTask.snapshot.ref);
                resolve(url);
              }
            );
          });
          return downloadURL;
        } catch (error) {
          console.log(error);
        }
      })
    );
    return uploadSlideImg;
  };

  const handleUploadMainImg = async (data) => {
    const imgUrl = await handleUploadSlideImgs(data);
    return imgUrl;
  };
  const handleOnSubmit = async (data) => {
    const slideImgUrl = await handleUploadSlideImgs(data.sliderImg);
    const mainImgUrl = await handleUploadMainImg(data.mainImage);
    const body = {
      title: data.title,
      category: data.category,
      description: data.description,
      mainImage: mainImgUrl[0],
      sliderImg: slideImgUrl,
      credit: { creditList },
      keywords: keywordList.map((item) => item.title),
    };

    try {
      const res = await addPost(body);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  useEffect(() => {
    register("description", { required: true });
  }, [register]);
  return (
    <>
      <div className={styles.landingpageformContainer}>
        <div className={styles.titleForm}>
          <h1>News</h1>
        </div>
        <div className={styles.landingpageform}>
          <form
            onSubmit={handleSubmit(handleOnSubmit)}
            className={styles.formNews}
          >
            <div className={styles.content3Edit}>
              <div className={styles.bannerBanner}>EDIT NEWS :</div>
              <div className={styles.titleEdit}>
                <h3>News Title</h3>
                <textarea
                  type="text"
                  className={styles.inputField}
                  name="title"
                  {...register("title")}
                />
              </div>

              <div className={styles.titleEdit}>
                <h3>Category</h3>
                <input
                  type="text"
                  className={styles.inputField}
                  name="category"
                  {...register("category")}
                />
              </div>

              <div className={styles.titleEdit}>
                <h3>Description</h3>
                <ReactQuill
                  theme="snow"
                  value={editorContent}
                  onChange={onEditorStateChange}
                />
              </div>

              <div className={styles.titleEdit}>
                <h3>Main Image</h3>
                <input
                  className={styles.inputField}
                  type={"file"}
                  {...register("mainImage")}
                />
              </div>
              <div className={styles.titleEdit}>
                <h3>Slider Image</h3>
                <input
                  className={styles.inputField}
                  type={"file"}
                  name="sliderImg"
                  multiple
                  {...register("sliderImg")}
                />
              </div>
            </div>
            <Button variant="outlined" type="submit">
              Update content
            </Button>
          </form>

          <div className={styles.titleEdit}>
            <h3>Credit</h3>
            <ServiceAddServiceForm
              serviceList={creditList}
              setServiceList={setCreditList}
            />
          </div>

          <div className={styles.titleEdit}>
            <h3>Keyword</h3>
            <KeywordForm
              serviceList={keywordList}
              setServiceList={setKeywordList}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
