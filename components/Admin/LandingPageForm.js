import React, { useState, useMemo } from "react";
import styles from "../../styles/Admin.module.css";
//hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import { editAbout, urlAbout } from "../../ApiUrl/Api";
import { useEffect } from "react";
import { Button } from "@mui/material";
const schema = yup.object().shape({
  title1: yup.string(),
  title2: yup.string(),
  title3: yup.string(),
  content1Line1: yup.string(),
  content1Line2: yup.string(),
  content1Line3: yup.string(),
  content1Line4: yup.string(),
  content1Line5: yup.string(),
  content1Line6: yup.string(),
  content2Line1: yup.string(),
  content2Line2: yup.string(),
  content2Line3: yup.string(),
  content2Line4: yup.string(),
  content2Line5: yup.string(),
  content3Line1: yup.string(),
  content3Line2: yup.string(),
  content3Line3: yup.string(),
  content3Line4: yup.string(),
  content3Line5: yup.string(),
  content3Line6: yup.string(),
  content3Line7: yup.string(),
  content3Line8: yup.string(),
  content3Line9: yup.string(),
  content3Line10: yup.string(),
  content4Line1: yup.string(),
  content4Line2: yup.string(),
  content4Line3: yup.string(),
  content4Line4: yup.string(),
  content4Line5: yup.string(),
  content5Line1: yup.string(),
  content5Line2: yup.string(),
  content5Line3: yup.string(),
  image1: yup.mixed().required(),
  image2: yup.mixed().required(),
});
const LandingPageForm = ({ preLoadValue }) => {
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
    const newFormBanner = new FormData();
    newFormBanner.append("firstLine", data.title1);
    newFormBanner.append("secondLine", data.title2);
    newFormBanner.append("thirdLine", data.title3);
    newFormBanner.append("img", data.image1[0]);
    axios({
      url: `${editAbout}/1`,
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      data: newFormBanner,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    const objSection1 = {
      firstLine: data.content1Line1,
      secondLine: data.content1Line2,
      thirdLine: data.content1Line3,
      fourthLine: data.content1Line4,
      fifthLine: data.content1Line5,
      sixthLine: data.content1Line6,
    };
    axios.post(`${editAbout}/2`, objSection1);
    const objSection2 = {
      firstLine: data.content2Line1,
      secondLine: data.content2Line2,
      thirdLine: data.content2Line3,
      fourthLine: data.content2Line4,
      fifthLine: data.content2Line5,
    };
    axios.post(`${editAbout}/3`, objSection2);
    const newFormObjecSection3 = new FormData();
    newFormObjecSection3.append("firstLine", data.content3Line1);
    newFormObjecSection3.append("secondLine", data.content3Line2);
    newFormObjecSection3.append("thirdLine", data.content3Line3);
    newFormObjecSection3.append("fourthLine", data.content3Line4);
    newFormObjecSection3.append("fifthLine", data.content3Line5);
    newFormObjecSection3.append("sixthLine", data.content3Line6);
    newFormObjecSection3.append("seventhLine", data.content3Line7);
    newFormObjecSection3.append("eighthLine", data.content3Line8);
    newFormObjecSection3.append("ninthLine", data.content3Line9);
    newFormObjecSection3.append("tenthLine", data.content3Line10);
    newFormObjecSection3.append("img", data.image2[0]);
    axios({
      url: `${editAbout}/4`,
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      data: newFormObjecSection3,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    const objSection4 = {
      firstLine: data.content4Line1,
      secondLine: data.content4Line2,
      thirdLine: data.content4Line3,
      fourthLine: data.content4Line4,
      fifthLine: data.content4Line5,
    };
    axios.post(`${editAbout}/5`, objSection4);
    const objSection5 = {
      firstLine: data.content5Line1,
      secondLine: data.content5Line2,
      thirdLine: data.content5Line3,
    };
    axios.post(`${editAbout}/6`, objSection5);
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
                  <h3>Line 1 : </h3>
                  <textarea
                    type='text'
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
                    className={styles.inputField}
                    name='title2'
                    {...register("title2")}
                  />
                  <p>{errors.title2?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Line 3 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='title3'
                    {...register("title3")}
                  />
                  <p>{errors.title2?.message}</p>
                </div>
              </div>
            </div>
            <div className={styles.content1Edit}>
              <div className={styles.bannerBanner}>EDIT CONTENT 1 :</div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Content 1 - Line 1 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content1Line1'
                    {...register("content1Line1")}
                  />
                  <p>{errors.content1Line1?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 1 - Line 2 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content1Line2'
                    {...register("content1Line2")}
                  />
                  <p>{errors.content1Line2?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 1 - Line 3 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content1Line3'
                    {...register("content1Line3")}
                  />
                  <p>{errors.content1Line3?.message}</p>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Content 1 - Line 4 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content1Line4'
                    {...register("content1Line4")}
                  />
                  <p>{errors.content1Line4?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 1 - Line 5 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content1Line5'
                    {...register("content1Line5")}
                  />
                  <p>{errors.content1Line5?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 1 - Line 6 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content1Line6'
                    {...register("content1Line6")}
                  />
                  <p>{errors.content1Line6?.message}</p>
                </div>
              </div>
            </div>
            <div className={styles.content2Edit}>
              <div className={styles.bannerBanner}>EDIT CONTENT 2 :</div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Content 2 - Line 1 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content2Line1'
                    {...register("content2Line1")}
                  />
                  <p>{errors.content2Line1?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 2 - Line 2 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content2Line2'
                    {...register("content2Line2")}
                  />
                  <p>{errors.content2Line2?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 2 - Line 3 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content2Line3'
                    {...register("content2Line3")}
                  />
                  <p>{errors.content2Line3?.message}</p>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Content 2 - Line 4 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content2Line4'
                    {...register("content2Line4")}
                  />
                  <p>{errors.content2Line4?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 2 - Line 5 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content2Line5'
                    {...register("content2Line5")}
                  />
                  <p>{errors.content2Line5?.message}</p>
                </div>
              </div>
            </div>
            <div className={styles.content3Edit}>
              <div className={styles.bannerBanner}>EDIT CONTENT 3 :</div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Content 3 - Line 1 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content3Line1'
                    {...register("content3Line1")}
                  />
                  <p>{errors.content3Line1?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 3 - Line 2 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content3Line2'
                    {...register("content3Line2")}
                  />
                  <p>{errors.content3Line2?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 3 - Line 3 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content3Line3'
                    {...register("content3Line3")}
                  />
                  <p>{errors.content3Line3?.message}</p>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Content 3 - Line 4 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content3Line4'
                    {...register("content3Line4")}
                  />
                  <p>{errors.content3Line4?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 3 - Line 5 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content3Line5'
                    {...register("content3Line5")}
                  />
                  <p>{errors.content3Line5?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 3 - Line 6 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content3Line6'
                    {...register("content3Line6")}
                  />
                  <p>{errors.content3Line6?.message}</p>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Content 3 - Line 7 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content3Line7'
                    {...register("content3Line7")}
                  />
                  <p>{errors.content3Line7?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 3 - Line 8 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content3Line8'
                    {...register("content3Line8")}
                  />
                  <p>{errors.content3Line8?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 3 - Line 9 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content3Line9'
                    {...register("content3Line9")}
                  />
                  <p>{errors.content3Line9?.message}</p>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Content 3 - Line 10 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content3Line10'
                    {...register("content3Line10")}
                  />
                  <p>{errors.content3Line10?.message}</p>
                </div>
              </div>
            </div>
            <div className={styles.content4Edit}>
              <div className={styles.bannerBanner}>EDIT CONTENT 4 :</div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Content 4 - Line 1 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content4Line1'
                    {...register("content4Line1")}
                  />
                  <p>{errors.content4Line1?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 4 - Line 2 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content4Line2'
                    {...register("content4Line2")}
                  />
                  <p>{errors.content4Line2?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 4 - Line 3 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content4Line3'
                    {...register("content4Line3")}
                  />
                  <p>{errors.content4Line3?.message}</p>
                </div>
              </div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Content 4 - Line 4 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content4Line4'
                    {...register("content4Line4")}
                  />
                  <p>{errors.content4Line4?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 4 - Line 5 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content4Line5'
                    {...register("content4Line5")}
                  />
                  <p>{errors.content4Line5?.message}</p>
                </div>
              </div>
            </div>
            <div className={styles.content5Edit}>
              <div className={styles.bannerBanner}>EDIT CONTENT 5 :</div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Content 5 - Line 1 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content5Line1'
                    {...register("content5Line1")}
                  />
                  <p>{errors.content5Line1?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 5 - Line 2 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content5Line2'
                    {...register("content5Line2")}
                  />
                  <p>{errors.content5Line2?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Content 5 - Line 3 : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content5Line3'
                    {...register("content5Line3")}
                  />
                  <p>{errors.content5Line3?.message}</p>
                </div>
              </div>
            </div>
            <div className={styles.content5Edit}>
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
                  <h3>Choose a image for content : </h3>
                  <input
                    type='file'
                    accept='image/*'
                    className={styles.inputField}
                    name='image2'
                    {...register("image2")}
                  />
                </div>
              </div>
            </div>
            {/* <button className='btn-submit' type='submit'>
              submit
            </button> */}
            <Button variant='outlined' type='submit'>
              submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LandingPageForm;
