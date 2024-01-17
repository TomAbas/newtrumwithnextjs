import React from "react";
import styles from "../../styles/Admin.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AboutUsAddPartnerForm from "./AboutUsAddPartnerForm";
import AboutUsAddNumberForm from "./AboutUsAddNumberForm";
import AboutUsAddPeopleForm from "./AboutUsAddPeopleForm";
import { Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { updateAboutData } from "../../ApiUrl/about/aboutApi";
import { makeData } from "../../pages/admin/about-us";
import { uploadImg } from "../../config/firbase";
import { toast } from "react-toastify";
import { handleChangeFile } from "../../Utils/handleChangeFileImage";

import Loading from "../Loading/Loading";

const AboutUsForm = ({ aboutUsData, aboutUsNumber, aboutUsPartner }) => {
  const [loadingPage, setLoadingPage] = useState(false);
  const [aboutUs, setAboutUs] = useState();
  const [numberAboutUs, setNumberAboutUs] = useState([]);
  const [partnerAboutUs, setPartnerAboutUs] = useState([]);
  const [peopleAboutUs, setPeopleAboutUs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object().shape({
    about01Title: yup
      .string()
      .required("Please enter content")
      .typeError("Please enter content"),
    about01Description: yup
      .string()
      .required("Please enter content")
      .typeError("Please enter content"),
    about02Title: yup
      .string()
      .required("Please enter content")
      .typeError("Please enter content"),
    about02FirstDescription: yup
      .string()
      .required("Please enter content")
      .typeError("Please enter content"),
    about02SecondDescription: yup
      .string()
      .required("Please enter content")
      .typeError("Please enter content"),
    about02VideoUrl: yup
      .string()
      .required("Please enter content")
      .typeError("Please enter content"),
    about03Title: yup
      .string()
      .required("Please enter content")
      .typeError("Please enter content"),
    about04Title: yup
      .string()
      .required("Please enter content")
      .typeError("Please enter content"),
    aboutVideo: yup
      .mixed()
      .required("Please enter video")
      .typeError("Please enter video"),
  });
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleUpdateAboutUs() {
    setIsLoading(true);
    const arrMedia = [aboutUs.aboutVideo];

    async function uploadMedia() {
      arrMedia = await Promise.all(
        arrMedia.map(async (item) => {
          if (item.length === 0) return undefined;
          try {
            let url = await uploadImg(item[0]);
            return url;
          } catch (error) {
            console.log(error);
          }
        })
      );
    }

    await toast.promise(uploadMedia(), {
      pending: "Upload media",
      success: "Upload media success",
      error: "Upload media failed",
    });
    console.log(arrMedia);
    const data = {
      about01: {
        list: numberAboutUs,
        title: {
          title: aboutUs.about01Title,
          description: aboutUs.about01Description,
        },
      },
      about02: {
        title: aboutUs.about02Title,
        description: aboutUs.about02VideoUrl,
      },
      about03: {
        title: aboutUs.about03Title,
        listBrand: partnerAboutUs,
      },
      about04: {
        title: aboutUs.about04Title,
        people: peopleAboutUs,
      },
      description01: aboutUs.about02FirstDescription,
      description02: aboutUs.about02SecondDescription,
      video: arrMedia[0],
    };

    // console.log(data);
    async function uploadData() {
      try {
        await updateAboutData(data).then((res) => {
          console.log(res);
          const newData = makeData(res.data);
          reset(newData);
          setIsLoading(false);
        });
      } catch (error) {
        console.log(error);
        throw error;
      }
    }

    toast.promise(uploadData(), {
      pending: "loading",
      success: "success",
      error: "error",
    });
  }

  function handleSubmitFc(data) {
    console.log(data);
    setLoadingPage(true);

    setAboutUs(data);
    setLoadingPage(false);
  }

  useEffect(() => {
    if (aboutUsData) {
      reset(aboutUsData);
      setNumberAboutUs(aboutUsNumber);
      setPartnerAboutUs(aboutUsPartner);
    }
  }, [aboutUsData]);
  return (
    <div className={styles.landingpageformContainer}>
      <div className={styles.titleForm}>
        <h1>EDIT ABOUT US</h1>
      </div>
      <div className={styles.landingpageform}>
        <form onSubmit={handleSubmit(handleSubmitFc)}>
          <div className={styles.content3Edit}>
            <div className={styles.bannerBanner}>EDIT ABOUT 1 :</div>
            <div className={styles.row1}>
              <div className={styles.titleEdit}>
                <h3>About 01 : Title </h3>
                <textarea
                  type="text"
                  className={styles.inputField}
                  name="about01Title"
                  {...register("about01Title")}
                />
                <p>{errors.about01Title?.message}</p>
              </div>
            </div>
            <div className={styles.titleEdit}>
              <h3>About 01 : Description </h3>
              <textarea
                type="text"
                className={styles.inputField}
                name="about01Description"
                {...register("about01Description")}
              />
              <p>{errors.about01Description?.message}</p>
            </div>
          </div>
          <div className={styles.content3Edit}>
            <div className={styles.bannerBanner}>EDIT ABOUT 2 :</div>
            <div className={styles.row1}>
              <div className={styles.titleEdit}>
                <h3>About 02 : Title Service</h3>
                <textarea
                  type="text"
                  className={styles.inputField}
                  name="about02Title"
                  {...register("about02Title")}
                />
                <p>{errors.about02Title?.message}</p>
              </div>
              <div className={styles.titleEdit}>
                <h3>About 02 :Title video </h3>
                <textarea
                  type="text"
                  className={styles.inputField}
                  name="about02FirstDescription"
                  {...register("about02FirstDescription")}
                />
                <p>{errors.about02FirstDescription?.message}</p>
              </div>
              <div className={styles.titleEdit}>
                <h3>About 02 : Description video </h3>
                <textarea
                  type="text"
                  className={styles.inputField}
                  name="about02SecondDescription"
                  {...register("about02SecondDescription")}
                />
                <p>{errors.about02SecondDescription?.message}</p>
              </div>
              <div className={styles.titleEdit}>
                <h3>About 02 : Youtube video url </h3>
                <textarea
                  type="text"
                  className={styles.inputField}
                  name="about02VideoUrl"
                  {...register("about02VideoUrl")}
                />
                <p>{errors.about02VideoUrl?.message}</p>
              </div>
            </div>
          </div>
          <div className={styles.content3Edit}>
            <div className={styles.bannerBanner}>EDIT ABOUT 3 :</div>
            <div className={styles.row1}>
              <div className={styles.titleEdit}>
                <h3>About : Partner </h3>
                <textarea
                  type="text"
                  className={styles.inputField}
                  name="about03Title"
                  {...register("about03Title")}
                />
                <p>{errors.about03Title?.message}</p>
              </div>
              <div className={styles.titleEdit}>
                <h3>About : Our Team </h3>
                <textarea
                  type="text"
                  className={styles.inputField}
                  name="about03Title"
                  {...register("about04Title")}
                />
                <p>{errors.about04Title?.message}</p>
              </div>
            </div>
          </div>
          <div className={styles.content3Edit}>
            <div className={styles.bannerBanner}>About Media :</div>
            <div className={styles.row1}>
              {/* <div className={styles.titleEdit}>
                <h3>About 02 : Image 1 </h3>
                <input
                  type="file"
                  accept="image/*"
                  className={styles.inputField}
                  name="aboutImage1"
                  {...register("aboutImage1")}
                  onChange={(e) => {
                    handleChangeFile(e, setImg1);
                  }}
                />

                <p>{errors.aboutImage1?.message}</p>
              </div> */}
              {/* <div className={styles.titleEdit}>
                <h3>About 02 : Image 2 </h3>
                <input
                  type="file"
                  accept="image/*"
                  className={styles.inputField}
                  name="aboutImage2"
                  {...register("aboutImage2")}
                  onChange={(e) => {
                    handleChangeFile(e, setImg2);
                  }}
                />

                <p>{errors.aboutImage2?.message}</p>
              </div> */}
              <div className={styles.titleEdit}>
                <h3>About 02 : Video </h3>
                <input
                  type="file"
                  accept="video/*"
                  className={styles.inputField}
                  name="aboutVideo"
                  {...register("aboutVideo")}
                  onChange={(e) => {
                    handleChangeFile(e, setImg3);
                  }}
                />

                <p>{errors.aboutVideo?.message}</p>
              </div>
            </div>
          </div>
          <Button variant="outlined" type="submit">
            Update content
          </Button>
        </form>

        <div className={styles.content3Edit} style={{ margin: "50px 0px" }}>
          <div className={styles.bannerBanner}>ADD PARTNER :</div>
          <AboutUsAddPartnerForm
            partnerAboutUs={partnerAboutUs}
            setPartnerAboutUs={setPartnerAboutUs}
          />
        </div>

        <div className={styles.content3Edit} style={{ margin: "50px 0px" }}>
          <div className={styles.bannerBanner}>ADD ABOUT MEMBER :</div>
          <AboutUsAddPeopleForm
            peopleAboutUs={peopleAboutUs}
            setPeopleAboutUs={setPeopleAboutUs}
          />
        </div>

        <div className={styles.content3Edit} style={{ margin: "50px 0px" }}>
          <div className={styles.bannerBanner}>ADD ABOUT NUMBER :</div>
          <AboutUsAddNumberForm
            numberAboutUs={numberAboutUs}
            setNumberAboutUs={setNumberAboutUs}
          />
        </div>
      </div>

      <Button
        onClick={handleUpdateAboutUs}
        variant="contained"
        disabled={!aboutUs || isLoading ? true : false}
      >
        Submit Form Update About Content
      </Button>
      {loadingPage && <Loading />}
    </div>
  );
};

export default AboutUsForm;
