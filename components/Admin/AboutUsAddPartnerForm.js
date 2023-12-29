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
const AboutUsAddPartnerForm = ({ partnerAboutUs, setPartnerAboutUs }) => {
  const [partnerLogo, setPartnerLogo] = useState();

  const schema = yup.object().shape({
    title: yup
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
    console.log(data);
    // setBrandLogo([...brandLogo, data]);
    const imgUrl = await uploadImg(data.image[0]);
    console.log(imgUrl);
    setPartnerAboutUs([
      ...partnerAboutUs,
      { title: data.title, image: imgUrl },
    ]);
    reset({ title: "", image: "" });
  }
  function handleDeletePartner(idx) {
    const newPartnerAboutUs = partnerAboutUs.filter((item, index) => {
      return index !== idx;
    });
    setPartnerAboutUs(newPartnerAboutUs);
  }
  useEffect(() => {
    // console.log(errors);
  }, [errors]);
  return (
    <Fragment>
      <div className={styles.partnerDisplay}>
        {partnerAboutUs?.map((item, idx) => {
          return (
            <div style={{ display: "flex" }} key={idx}>
              <div>
                <BrandAdmin item={item} />
              </div>
              <Button onClick={() => handleDeletePartner(idx)}>Xóa</Button>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit(handleSubmitFc)}>
        <div className={styles.row1}>
          <div className={styles.titleEdit}>
            <h3>About 04 : Partner Name </h3>
            <textarea
              type="text"
              className={styles.inputField}
              name="content3Line2"
              {...register("title")}
            />
            <p>{errors.content3Line2?.message}</p>
          </div>
          <div className={styles.titleEdit}>
            <h3>About 04 : Partner Logo </h3>
            <input
              type="file"
              accept="image/*"
              className={styles.inputField}
              name="image3"
              {...register("image")}
              onChange={(e) => {
                handleChangeFile(e, setPartnerLogo);
              }}
            />
            <Image alt={""} src={partnerLogo} height={150} width={150} />
            <p>{errors.content3Line2?.message}</p>
          </div>
        </div>
        <Button
          variant="outlined"
          type="submit"
          //   disabled={numberAbout.length === 5}
        >
          submit partner
        </Button>
      </form>
    </Fragment>
  );
};

export default AboutUsAddPartnerForm;
