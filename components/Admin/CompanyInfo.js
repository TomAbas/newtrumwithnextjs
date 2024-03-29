import React, { useState, useMemo, useRef } from "react";
import styles from "../../styles/Admin.module.css";

//hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import { urlEditCompanyInfo } from "../../ApiUrl/Api";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { editContactPageData } from "../../ApiUrl/contact/contact";
import { editTitleRecuiterData } from "../../ApiUrl/recuiter/recuiter";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
const schema = yup.object().shape({
  title1: yup.string().required("missing field"),
  title2: yup.string().required("missing field"),
  title3: yup.string().required("missing field"),
  content1Line1: yup.string().required("missing field"),
  content1Line2: yup.string().required("missing field"),
  content1Line3: yup.string().required("missing field"),
  content1Line4: yup.string().required("missing field"),
  content1Line5: yup.string().required("missing field"),
  content1Line6: yup.string().required("missing field"),
});
const CompanyInfo = ({ defaultValuesCom }) => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: useMemo(() => {
      return defaultValuesCom;
    }, [defaultValuesCom]),
  });
  // const editorRef = useRef();
  // const [editorLoaded, setEditorLoaded] = useState(false);
  // const { CKEditor, ClassicEditor } = editorRef.current || {};
  const submitCompanyInfoEditor = async (data) => {
    setIsLoading(true)
    const submitData = {
      address: data.title1,
      phone: data.title2,
      email: data.title3,
      instagram: data.content1Line3,
      facebook: data.content1Line4,
      twitter: data.content1Line5,
      linkedin: data.content1Line6,
    };
    const submitData1 = {
      title: data.content1Line1,
      description: data.content1Line2,
    };
    try {
      await editContactPageData(submitData);
      await editTitleRecuiterData(submitData1);
      toast.success("Successfully edited company info");
    } catch (error) {
      console.log(error);
      toast.error("Failed to edit, please try again");
    }
    setIsLoading(false)
  };

  useEffect(() => {
    reset(defaultValuesCom);
  }, [defaultValuesCom]);
  return (
    <>
      <div className={styles.landingpageformContainer}>
        <div className={styles.titleForm}>
          <h1>EDIT COMPANY INFO</h1>
        </div>
        <div className={styles.landingpageform}>
          <form onSubmit={handleSubmit(submitCompanyInfoEditor)}>
            <div className={styles.bannerEdit}>
              <div className={styles.bannerBanner}>EDIT COMPANY INFO :</div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Address : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='title1'
                    {...register("title1")}
                  />

                  <p>{errors.title1?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Phone Number : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='title2'
                    {...register("title2")}
                  />
                  <p>{errors.title2?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Email : </h3>
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
            <div className={styles.bannerEdit}>
              <div className={styles.bannerBanner}>EDIT RECUITMENT INFO :</div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Title : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content1Line1'
                    {...register("content1Line1")}
                  />

                  <p>{errors.content1Line1?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Slogan : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content1Line2'
                    {...register("content1Line2")}
                  />
                  <p>{errors.content1Line2?.message}</p>
                </div>
              </div>
            </div>
            <div className={styles.content1Edit}>
              <div className={styles.bannerBanner}>EDIT SOCIAL LINK :</div>
              <div className={styles.row1}>
                <div className={styles.titleEdit}>
                  <h3>Link Instagram : </h3>
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
                  <h3>Link Facebook : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content1Line4'
                    {...register("content1Line4")}
                  />
                  <p>{errors.content1Line4?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Link Twitter : </h3>
                  <textarea
                    type='text'
                    className={styles.inputField}
                    name='content1Line5'
                    {...register("content1Line5")}
                  />
                  <p>{errors.content1Line5?.message}</p>
                </div>
                <div className={styles.titleEdit}>
                  <h3>Link Linkedin: </h3>
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

            <Button variant='outlined' type='submit'>
              submit
            </Button>
          </form>
        </div>
      </div>
      {
        isLoading && <Loading />
      }
    </>
  );
};

export default CompanyInfo;
// useEffect(() => {
//   editorRef.current = {
//     CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, //Added .CKEditor
//     ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
//   };
//   setEditorLoaded(true);
// }, []);
