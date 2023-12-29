import React, { useEffect } from "react";
import styles from "../../styles/Admin.module.css";
import { Button } from "@mui/material";
import { get, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addPostNews } from "../../ApiUrl/newsApi/newsApi";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { useState } from "react";
import ServiceAddServiceForm from "./ServiceAddServiceForm";
import KeywordForm from "./keywordForm";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../config/firbase";
import { toast } from "react-toastify";
import { handleChangeFile } from "../../Utils/handleChangeFileImage";
import Image from "next/image";
import Loading from "../Loading/Loading";

const NewsCreator = ({ arrNews, newsDetail, handleUpdateNews }) => {
  const [isLoading, setIsLoading] = useState(false);
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const [loading, setLoading] = useState(false);
  const [creditList, setCreditList] = useState([]);
  const [keywordList, setKeywordList] = useState([]);
  const [isPublic, setIsPublic] = useState(false);
  const [isTopRead, setIsTopRead] = useState(false);
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();

  const schema = yup.object().shape({
    title: yup.string().required("missing field").typeError("missing field"),
    description: yup
      .string()
      .required("missing field")
      .typeError("missing field"),
    category: yup.string().required("missing field").typeError("missing field"),
    mainImage: yup.mixed().required("missing field").typeError("missing field"),
    sliderImg: yup.mixed().required("missing field").typeError("missing field"),
    isPublic: yup
      .boolean()
      .required("missing field")
      .default(false)
      .typeError("missing field"),
    topRead: yup
      .boolean()
      .required("missing field")
      .default(false)
      .typeError("missing field"),
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
    if (!data) return null;
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
    if (!data) return null;
    const imgUrl = await handleUploadSlideImgs(data);
    return imgUrl;
  };

  const handleAddNews = async (data) => {
    try {
      const res = await addPostNews(data);
      console.log(res);
      toast.success("Add news successfully");
    } catch (error) {
      toast.error("Add news failed, please try again");
      console.log(error);
    }
  };

  const handleOnSubmit = async (data) => {
    setLoading(true);
    try {
      const slideImgUrl = await handleUploadSlideImgs(data.sliderImg);
      const mainImgUrl = await handleUploadMainImg(data.mainImage);
      console.log(slideImgUrl, "slideImgUrl");
      console.log(mainImgUrl, "mainImgUrl");
      console.log(newsDetail);
      const body = {
        title: data.title,
        category: data.category,
        description: data.description,
        mainImage: mainImgUrl[0] ? mainImgUrl[0] : newsDetail?.mainImage,
        sliderImages:
          slideImgUrl.length > 0 ? slideImgUrl : newsDetail?.sliderImages,
        credits: { creditList },
        keywords: keywordList.map((item) => item.title),
        isPublic: data.isPublic,
        topRead: data.topRead,
      };
      console.log(body);
      const res = newsDetail
        ? await handleUpdateNews(newsDetail._id, body)
        : await handleAddNews(body);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      reset();
      setCreditList([]);
      setKeywordList([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  useEffect(() => {
    register("description", { required: true });
  }, [register]);

  useEffect(() => {
    if (newsDetail) {
      console.log(newsDetail);
      // setCreditList
      const body = {
        title: newsDetail.title,
        description: newsDetail.description,
        category: newsDetail.category,
        topRead: newsDetail.topRead,
        isPublic: newsDetail.isPublic,
      };

      setKeywordList(
        newsDetail.keywords.map((item) => {
          return { title: item };
        })
      );

      setCreditList(
        newsDetail.credits.creditList.map((item) => {
          return item;
        })
      );

      console.log(
        newsDetail.credits.creditList.map((item) => {
          return item;
        })
      );
      reset(body);
    }
  }, [newsDetail]);
  return (
    <>
      <div>
        <div className={styles.landingpageform}>
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
                <p>{errors.title?.message}</p>
              </div>

              <div className={styles.titleEdit}>
                <h3>Category</h3>
                <input
                  type="text"
                  className={styles.inputField}
                  name="category"
                  {...register("category")}
                />
                <p>{errors.category?.message}</p>
              </div>

              <div className={styles.titleEdit}>
                <h3>Description</h3>
                <ReactQuill
                  theme="snow"
                  value={editorContent}
                  onChange={onEditorStateChange}
                />
                <p>{errors.description?.message}</p>
              </div>

              <div className={styles.titleEdit}>
                <h3>Main Image</h3>
                <input
                  className={styles.inputField}
                  type={"file"}
                  {...register("mainImage")}
                  onChange={(e) => {
                    handleChangeFile(e, setImg1);
                  }}
                />

                <p>{errors.mainImage?.message}</p>
              </div>
              <div className={styles.titleEdit}>
                <h3>Slider Image</h3>
                <input
                  className={styles.inputField}
                  type={"file"}
                  name="sliderImg"
                  multiple
                  {...register("sliderImg")}
                  onChange={(e) => {
                    handleChangeFile(e, setImg2);
                    console.log(img2);
                  }}
                />

                <p>{errors.sliderImg?.message}</p>
              </div>
            </div>

            <div className={styles.row1}>
              <div
                className={styles.titleEdit}
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <h3>Public news :</h3>
                <input
                  type="checkbox"
                  className={styles.checkBox}
                  {...register("isPublic")}
                  name="isPublic"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setIsPublic(true);
                    } else {
                      setIsPublic(false);
                    }
                  }}
                  disabled={isTopRead ? true : false}
                />
              </div>
            </div>

            <div className={styles.row1}>
              <div
                className={styles.titleEdit}
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <h3>Top readed news :</h3>
                <input
                  type="checkbox"
                  className={styles.checkBox}
                  name="topRead"
                  {...register("topRead")}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setIsTopRead(true);
                    } else {
                      setIsTopRead(false);
                    }
                  }}
                  disabled={isPublic ? true : false}
                />
              </div>
            </div>
            <Button
              variant="outlined"
              type="submit"
              disabled={
                keywordList.length === 0 || creditList.length === 0 || loading
                  ? true
                  : false
              }
            >
              Update content
            </Button>
          </form>
        </div>
      </div>
      {isLoading && <Loading />}
    </>
  );
};

export default NewsCreator;
