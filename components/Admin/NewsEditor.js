import React from "react";
import styles from "../../styles/Admin.module.css";
//firebase
import { storage } from "../../config/firbase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
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
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Loading from "../Loading/Loading";

const schema = yup.object().shape({
  contributorName: yup.string(),
  contributorRole: yup.string(),
  title: yup.string().required("missing field"),
  category: yup.string().required("missing field"),
  // video: yup.string().required("missing field"),
  videoAlt: yup.string().required("missing field"),
  mainImage: yup.mixed().required("missing field"),
  // mainImageAlt: yup.string().required("missing field"),
  content1Title: yup.string().required("missing field"),
  content1Image: yup.mixed().required("missing field"),
  content2Title: yup.string().required("missing field"),
  content2Image: yup.mixed().required("missing field"),
  // image1: yup.mixed().required("missing field"),
  // image2: yup.mixed().required("missing field"),
  // image3: yup.mixed().required("missing field"),
  // image4: yup.mixed().required("missing field"),
  // image5: yup.mixed().required("missing field"),
  // swiper: yup.array().required("missing field").default(new Array(4)),
  isCategory: yup.boolean().default(false).required("missing field"),
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
  setDidNotSubmitHeadForm = () => {},
  setDidNotSubmitHeadForm2 = () => {},
  setContributorList,
}) => {
  // console.log(isAddContributor);
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: useMemo(() => {
      return preLoadValue;
    }, [preLoadValue]),
  });

  const onEditorStateChange = (editorState) => {
    setValue("videoAlt", editorState);
  };
  const editorContent = watch("description");
  const submitNewsEditor = async (data) => {
    console.log(data);
    return;
    // let arrImg = [
    //   data.image1[0],
    //   data.image2[0],
    //   data.image3[0],
    //   data.image4[0],
    //   data.image5[0],
    // ];
    // let swiper = await Promise.all(
    //   arrImg.map(async (img, index) => {
    //     try {
    //       let downloadURL;
    //       if (img.name === undefined) {
    //         throw new Error("No file selected");
    //       }
    //       const id = new Date().getTime();
    //       const sotrageRef = ref(storage, `web/${img.name}${id}}`);
    //       const uploadTask = uploadBytesResumable(sotrageRef, img);
    //       downloadURL = await new Promise((resolve, reject) => {
    //         uploadTask.on(
    //           "state_changed",
    //           () => {},
    //           (error) => console.log("err ", error),
    //           async () => {
    //             let url = await getDownloadURL(uploadTask.snapshot.ref);
    //             resolve(url);
    //           }
    //         );
    //       });
    //       return { image: downloadURL };
    //     } catch (error) {
    //       console.log(error);
    //       return { image: preLoadValue.swiper[index].image };
    //     }
    //   })
    // );

    try {
      if (data.mainImage[0].name !== undefined) {
        console.log("mainImage", data.mainImage[0]);
        const sotrageRef = ref(storage, `web/${data.mainImage[0].name}`);
        const uploadTask = uploadBytesResumable(sotrageRef, data.mainImage[0]);
        data.mainImage = await new Promise((resolve, reject) => {
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
      }
    } catch (error) {
      console.log("error", error);
    }

    try {
      if (data.content1Image[0].name !== undefined) {
        const sotrageRef = ref(storage, `web/${data.content1Image[0].name}`);
        const uploadTask = uploadBytesResumable(
          sotrageRef,
          data.content1Image[0]
        );
        data.content1Image = await new Promise((resolve, reject) => {
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
      }
    } catch (error) {
      data.content1Image = preLoadValue.listContent[0].image;
      console.log("error", error);
    }
    try {
      if (data.content2Image && data.content2Image[0].name !== undefined) {
        const sotrageRef = ref(storage, `web/${data.content2Image[0].name}`);
        const uploadTask = uploadBytesResumable(
          sotrageRef,
          data.content2Image[0]
        );
        data.content2Image = await new Promise((resolve, reject) => {
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
      }
    } catch (error) {
      data.content2Image = preLoadValue.listContent[1].image;
      console.log("error", error);
    }

    let submitData = {
      mainImage: data.mainImage,
      mainImageAlt: "data.mainImageAlt",
      title: data.title.trim(),
      category: data.category,
      video: data.video,
      videoAlt: data.videoAlt,
      swiper: swiper,
      listContent: [
        { title: data.content1Title, image: data.content1Image },
        { title: "data.content2Title", image: " data.content2Image" },
      ],
      id: data._id,
      isCategory: data.isCategory,
    };

    console.log(submitData);

    if (isAddNews) {
      setNewNewsHeadContent(submitData);
      setDidNotSubmitHeadForm2(false);
    } else {
      setNewsHeadContent(submitData);
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
    register("videoAlt", { required: true });
  }, [register]);
  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const [img1, setImg1] = useState(preLoadValue.image1);
  const [img2, setImg2] = useState(preLoadValue.image2);
  const [img3, setImg3] = useState(preLoadValue.image3);
  const [img4, setImg4] = useState(preLoadValue.image4);
  const [img5, setImg5] = useState(preLoadValue.image5);
  const [img6, setImg6] = useState(preLoadValue.image5);
  const [img7, setImg7] = useState(preLoadValue.image5);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeFile = (e, setImgSrc) => {
    let file = e.target.files[0];
    if (
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png" ||
      file.type === "image/jpeg"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
    }
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
          <div className={styles.bannerBanner}> THUMBNAIL :</div>
          <div className={styles.row1}>
            <div className={styles.titleEdit}>
              <h3>Image : </h3>
              <input
                type="file"
                accept="image/*"
                className={styles.inputField}
                name="mainImage"
                {...register("mainImage")}
                onChange={() => {
                  console.log("change");
                  setDidNotSubmitHeadForm2(true);
                  setDidNotSubmitHeadForm(true);
                }}
              />
              <p>{errors.mainImage?.message}</p>
            </div>
          </div>
        </div>
        {/* <div className={styles.content1Edit}>
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
        </div> */}

        <div className={styles.content1Edit}>
          <div className={styles.bannerBanner}> Description :</div>
          <div className={styles.row1}>
            <div className={styles.titleEdit}>
              <h3>Description : </h3>
              <ReactQuill
                theme="snow"
                value={editorContent}
                onChange={onEditorStateChange}
              />
              <p>{errors.videoAlt?.message}</p>
            </div>
          </div>
        </div>

        <div className={styles.content1Edit}>
          <div className={styles.bannerBanner}> CONTENT :</div>
          <>
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
                <h3>Choose images for content: </h3>
                <input
                  multiple
                  type="file"
                  accept="image/*"
                  className={styles.inputField}
                  name="content1Image"
                  {...register("content1Image")}
                  onChange={() => {
                    console.log("change");
                    setDidNotSubmitHeadForm(true);
                    setDidNotSubmitHeadForm2(true);
                  }}
                />
              </div>
            </div>
          </>
          <>
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
                <h3>Choose images for content: </h3>
                <input
                  multiple
                  type="file"
                  accept="image/*"
                  className={styles.inputField}
                  name="content2Image"
                  {...register("content2Image")}
                  onChange={() => {
                    console.log("change");
                    setDidNotSubmitHeadForm(true);
                    setDidNotSubmitHeadForm2(true);
                  }}
                />
              </div>
            </div>
          </>

          <div className={styles.row1}>
            <div
              className={styles.titleEdit}
              style={{ display: "flex", gap: "20px", alignItems: "center" }}
            >
              <h3>Is add category :</h3>
              <input
                type="checkbox"
                className={styles.checkBox}
                {...register("isCategory")}
                onChange={() => {
                  setDidNotSubmitHeadForm(true);
                  setDidNotSubmitHeadForm2(true);
                }}
              />
            </div>
          </div>
        </div>

        <Button variant="outlined" type="submit">
          submit
        </Button>
      </form>
      {isLoading && <Loading />}
    </div>
  );
};

export default NewsEditor;
