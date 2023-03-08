import React, { useState, useMemo } from "react";
import styles from "../../styles/Admin.module.css";
//firebase
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../config/firbase";
//hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { Button } from "@mui/material";
import CheckboxEffect from "./CheckboxEffect";
import { editLandingPageData } from "../../ApiUrl/landingpageApi/landingApi";
const schema = yup.object().shape({
  title1: yup.string(),
  content1Line1: yup.string(),
  content2Line1: yup.string(),
  content3Line1: yup.string(),
  content3Line2: yup.string(),
  content4Line1: yup.string(),
  content4Line2: yup.string(),
  content5Line1: yup.string(),
  content5Line2: yup.string(),
  image1: yup.mixed().required(),
  image2: yup.mixed().required(),
  image3: yup.mixed().required(),
});
const LandingPageForm = ({ preLoadValue, fullData }) => {
  const [dadEffectArr, setDadEffectArr] = useState(() => {
    let obj = {};
    fullData.title.forEach((item, idx) => {
      obj[idx] = item.effect;
    });
    return obj;
  });
  const [dadEffectArr1, setDadEffectArr1] = useState(() => {
    let obj = {};
    fullData.subTitle.forEach((item, idx) => {
      obj[idx] = item.effect;
    });
    return obj;
  });
  const [trigger, setTrigger] = useState(false);
  const [trigger1, setTrigger1] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: useMemo(() => {
      return preLoadValue;
    }, [preLoadValue]),
  });

  const submitNewsEditor = async (data) => {
    let arrImg = [data.image1[0], data.image2[0], data.image3[0]];
    arrImg = await Promise.all(
      arrImg.map(async (item, index) => {
        try {
          let downloadURL;
          const sotrageRef = ref(storage, `web/${item.name}`);
          if (item.name === undefined) {
            throw new Error("No file selected");
          }
          const uploadTask = uploadBytesResumable(sotrageRef, item);
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
          return preLoadValue[`image${index + 1}`];
        }
      })
    );
    console.log(arrImg);
    let bodyTitle = data.title1.split("\n").map((item, idx) => {
      return { content: item, effect: dadEffectArr[idx] };
    });
    let bodyDescription = data.content1Line1.split("\n").map((item, idx) => {
      return { content: item };
    });
    let bodySubTitle = data.content2Line1.split("\n").map((item, idx) => {
      return { content: item, effect: dadEffectArr1[idx] };
    });
    let bodyListContent = [
      {
        content: data.content3Line1,
        description: data.content3Line2,
        image: arrImg[1],
      },
      {
        content: data.content4Line1,
        description: data.content4Line2,
        image: arrImg[2],
      },
      { content: data.content5Line1, description: data.content5Line2 },
    ];
    let body = {
      title: bodyTitle,
      description: bodyDescription,
      subTitle: bodySubTitle,
      listContent: bodyListContent,
      mainImage: arrImg[0],
    };
    console.log(body);
    editLandingPageData(body);
  };
  useEffect(() => {
    reset(preLoadValue);
  }, [preLoadValue]);
  return (
    <>
      <div className={styles.landingpageformContainer}>
        <div className={styles.titleForm}>
          <h1>EDIT LANDING PAGE</h1>
        </div>
        <div className={styles.landingpageform}>
          <form onSubmit={handleSubmit(submitNewsEditor)}>
            <div className={styles.bannerEdit}>
              <div className={styles.bannerBanner}>EDIT BANNER :</div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Banner</h3>
                  <textarea
                    type="text"
                    className={styles.inputField}
                    name="title1"
                    {...register("title1")}
                    onChange={(e) => {
                      setValue("title1", e.target.value);
                      setTrigger(!trigger);
                      if (e.target.value === "") {
                        setDadEffectArr({});
                        setTrigger1(!trigger1);
                      }
                    }}
                  />
                  <p>{errors.title1?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Check Box Effect</h3>
                  <div>
                    {getValues("title1")
                      .split("\n")
                      .map((row, idx) => {
                        if (row.trim().length > 0)
                          return (
                            <CheckboxEffect
                              charArr={row.split(" ")}
                              key={idx}
                              idxOfLine={idx}
                              setDadEffectArr={setDadEffectArr}
                              arrEffectData={
                                dadEffectArr[idx] ? dadEffectArr[idx] : []
                              }
                              trigger1={trigger1}
                            />
                          );
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content1Edit}>
              <div className={styles.bannerBanner}>EDIT CONTENT 1 :</div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Content 1 </h3>
                  <textarea
                    type="text"
                    className={styles.inputField}
                    name="content1Line1"
                    {...register("content1Line1")}
                  />
                  <p>{errors.content1Line1?.message}</p>
                </div>
              </div>
            </div>
            <div className={styles.content2Edit}>
              <div className={styles.bannerBanner}>EDIT CONTENT 2 :</div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Content 2 </h3>
                  <textarea
                    type="text"
                    className={styles.inputField}
                    name="content2Line1"
                    {...register("content2Line1")}
                    onChange={(e) => {
                      setValue("content2Line1", e.target.value);
                      setTrigger(!trigger);
                      if (e.target.value === "") {
                        setDadEffectArr1({});
                        setTrigger1(!trigger1);
                      }
                    }}
                  />
                  <p>{errors.content2Line1?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Check Box Effect</h3>
                  <div>
                    {getValues("content2Line1")
                      .split("\n")
                      .map((row, idx) => {
                        if (row.trim().length > 0)
                          return (
                            <CheckboxEffect
                              charArr={row.split(" ")}
                              key={idx}
                              idxOfLine={idx}
                              setDadEffectArr={setDadEffectArr1}
                              arrEffectData={
                                dadEffectArr1[idx] ? dadEffectArr1[idx] : []
                              }
                              trigger1={trigger1}
                            />
                          );
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content3Edit}>
              <div className={styles.bannerBanner}>EDIT CONTENT 3 :</div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Content 3 : Content</h3>
                  <textarea
                    type="text"
                    className={styles.inputField}
                    name="content3Line1"
                    {...register("content3Line1")}
                  />
                  <p>{errors.content3Line1?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 3 : Description </h3>
                  <textarea
                    type="text"
                    className={styles.inputField}
                    name="content3Line2"
                    {...register("content3Line2")}
                  />
                  <p>{errors.content3Line2?.message}</p>
                </div>
              </div>
            </div>
            <div className={styles.content4Edit}>
              <div className={styles.bannerBanner}>EDIT CONTENT 4 :</div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Content 4 : Content</h3>
                  <textarea
                    type="text"
                    className={styles.inputField}
                    name="content4Line1"
                    {...register("content4Line1")}
                  />
                  <p>{errors.content4Line1?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 4 : Description </h3>
                  <textarea
                    type="text"
                    className={styles.inputField}
                    name="content4Line2"
                    {...register("content4Line2")}
                  />
                  <p>{errors.content4Line2?.message}</p>
                </div>
              </div>
            </div>
            <div className={styles.content5Edit}>
              <div className={styles.bannerBanner}>EDIT CONTENT 5 :</div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Content 5 : Content</h3>
                  <textarea
                    type="text"
                    className={styles.inputField}
                    name="content5Line1"
                    {...register("content5Line1")}
                  />
                  <p>{errors.content5Line1?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 5 : Description</h3>
                  <textarea
                    type="text"
                    className={styles.inputField}
                    name="content5Line2"
                    {...register("content5Line2")}
                  />
                  <p>{errors.content5Line2?.message}</p>
                </div>
              </div>
            </div>
            <div className={styles.content5Edit}>
              <div className={styles.bannerBanner}>IMAGES :</div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Choose a image for banner : </h3>
                  <input
                    type="file"
                    accept="image/*"
                    className={styles.inputField}
                    name="image1"
                    {...register("image1")}
                  />
                </div>
                <div className={styles.titleEdit}>
                  <h3>Choose first image for content : </h3>
                  <input
                    type="file"
                    accept="image/*"
                    className={styles.inputField}
                    name="image2"
                    {...register("image2")}
                  />
                </div>
                <div className={styles.titleEdit}>
                  <h3>Choose second image for content : </h3>
                  <input
                    type="file"
                    accept="image/*"
                    className={styles.inputField}
                    name="image3"
                    {...register("image3")}
                  />
                </div>
              </div>
            </div>
            {/* <button className='btn-submit' type='submit'>
              submit
            </button> */}
            <Button variant="outlined" type="submit">
              submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LandingPageForm;

// const submitNewsEditor = (data) => {
//   let titleArr = data.title1.split("\n");
//   const newFormBanner = new FormData();
//   newFormBanner.append("firstLine", titleArr[0]);
//   newFormBanner.append("secondLine", titleArr[1]);
//   newFormBanner.append("thirdLine", titleArr[2]);
//   newFormBanner.append("img", data.image1[0]);
//   console.log(newFormBanner);
//   //if not success add to headers: { "Content-Type": "multipart/form-data" },
//   editInfoLandingPage(1, newFormBanner);

//   const section1Arr = data.content1Line1.split("\n");
//   const objSection1 = {
//     firstLine: section1Arr[0],
//     secondLine: section1Arr[1],
//     thirdLine: section1Arr[2],
//     fourthLine: section1Arr[3],
//     fifthLine: section1Arr[4],
//     sixthLine: section1Arr[5],
//   };
//   // console.log(objSection1);
//   editInfoLandingPage(2, objSection1);

//   const section2Arr = data.content2Line1.split("\n");
//   const objSection2 = {
//     firstLine: section2Arr[0],
//     secondLine: section2Arr[1],
//     thirdLine: section2Arr[2],
//     fourthLine: section2Arr[3],
//     fifthLine: section2Arr[4],
//   };
//   editInfoLandingPage(3, objSection2);

//   const section3Arr = data.content3Line1.split("\n");
//   const newFormObjecSection3 = new FormData();
//   newFormObjecSection3.append("firstLine", section3Arr[0]);
//   newFormObjecSection3.append("secondLine", section3Arr[1]);
//   newFormObjecSection3.append("thirdLine", section3Arr[2]);
//   newFormObjecSection3.append("fourthLine", section3Arr[3]);
//   newFormObjecSection3.append("fifthLine", section3Arr[4]);
//   newFormObjecSection3.append("sixthLine", section3Arr[5]);
//   newFormObjecSection3.append("seventhLine", section3Arr[6]);
//   newFormObjecSection3.append("eighthLine", section3Arr[7]);
//   newFormObjecSection3.append("ninthLine", section3Arr[8]);
//   newFormObjecSection3.append("tenthLine", section3Arr[9]);
//   newFormObjecSection3.append("img", data.image2[0]);
//   editInfoLandingPage(4, newFormObjecSection3);

//   const section4Arr = data.content4Line1.split("\n");
//   const objSection4 = {
//     firstLine: section4Arr[0],
//     secondLine: section4Arr[1],
//     thirdLine: section4Arr[2],
//     fourthLine: section4Arr[3],
//     fifthLine: section4Arr[4],
//   };
//   editInfoLandingPage(5, objSection4);

//   const section5Arr = data.content5Line1.split("\n");
//   const objSection5 = {
//     firstLine: section5Arr[0],
//     secondLine: section5Arr[1],
//     thirdLine: section5Arr[2],
//   };
//   editInfoLandingPage(6, objSection5);
// };
