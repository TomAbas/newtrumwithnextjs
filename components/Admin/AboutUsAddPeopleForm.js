import React from "react";
import styles from "../../styles/Admin.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Fragment } from "react";
import { Brand, BrandAdmin } from "../About/AboutPage/About-03/About03";
import { useState } from "react";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../config/firbase";
import { handleChangeFile } from "../../Utils/handleChangeFileImage";
import Image from "next/image";
const AboutUsAddPeopleForm = ({ peopleAboutUs, setPeopleAboutUs }) => {
  const [partnerLogo, setPartnerLogo] = useState();

  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Please enter brand name")
      .typeError("Please enter brand name"),
    name: yup
      .string()
      .required("Please enter brand name")
      .typeError("Please enter brand name"),
    image: yup
      .mixed()
      .required("Please enter image")
      .typeError("Please enter image"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  async function uploadImg(img) {
    let downloadURL;
    try {
      const sotrageRef = ref(storage, `web/${img.name}`);
      if (img.name === undefined) {
        throw new Error("No file selected");
      }
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
  }
  async function handleSubmitFc(data) {
    const imgUrl = await uploadImg(data.image[0]);
    setPeopleAboutUs([
      ...peopleAboutUs,
      { title: data.title, name: data.name, image: imgUrl },
    ]);
    reset({ title: "", image: "", name: "" });
  }

  function handleDeletePartner(idx) {
    const newpeopleAboutUs = peopleAboutUs.filter((item, index) => {
      return index !== idx;
    });
    setPeopleAboutUs(newpeopleAboutUs);
  }
  useEffect(() => {
    // console.log(errors);
  }, [errors]);
  return (
    <Fragment>
      <div className={styles.partnerDisplay}>
        {peopleAboutUs?.map((item, idx) => {
          return (
            <div style={{ display: "flex" }} key={idx}>
              <div>
                <Image
                  layout="responsive"
                  width={100}
                  height={100}
                  src={item.image}
                  alt="logo"
                />
              </div>
              <Button onClick={() => handleDeletePartner(idx)}>Xóa</Button>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit(handleSubmitFc)}>
        <div className={styles.row1}>
          <div className={styles.titleEdit}>
            <h3>Member Name </h3>
            <textarea
              type="text"
              className={styles.inputField}
              name="name"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>
          </div>
          <div className={styles.titleEdit}>
            <h3>Member Title </h3>
            <textarea
              type="text"
              className={styles.inputField}
              name="title"
              {...register("title")}
            />
            <p>{errors.title?.message}</p>
          </div>
          <div className={styles.titleEdit}>
            <h3> Member Image </h3>
            <input
              type="file"
              accept="image/*"
              className={styles.inputField}
              name="image"
              {...register("image")}
              onChange={(e) => {
                handleChangeFile(e, setPartnerLogo);
              }}
            />
            <p style={{ marginTop: "15px" }}>Preview image</p>
            <Image alt={""} src={partnerLogo} height={150} width={150} />
            <p>{errors.image?.message}</p>
          </div>
        </div>
        <Button variant="outlined" type="submit">
          submit member
        </Button>
      </form>
    </Fragment>
  );
};

export default AboutUsAddPeopleForm;
