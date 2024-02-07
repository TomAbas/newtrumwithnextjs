import React from "react";
import styles from "../../styles/Admin.module.css";

//mui
import { Button } from "@mui/material";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import IconButton from "@mui/material/IconButton";
//form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//editor
// import Editor from "ckeditor5-custom-build/build/ckeditor";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { urlAddJob, urlDeleteContributor } from "../../ApiUrl/Api";
import { urlAddContributor } from "../../ApiUrl/Api";
import { addRecuiterData } from "../../ApiUrl/recuiter/recuiter";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const schema = yup.object().shape({
  title1: yup.string().required("missing field"),
  title2: yup.string().required("missing field"),
});

const AddHiring = ({ newsIdx, preLoadValue, setTrigger, trigger }) => {
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
  const editorContent = watch("title2");
  const onEditorStateChange = (editorState) => {
    setValue("title2", editorState);
  };
  const submitAddNewsJob = async (data) => {
    console.log(data);
    const dataSubmit = { title: data.title1, description: data.title2 };

    await addRecuiterData(dataSubmit)
      .then((res) => {
        setTrigger(!trigger);
        toast.success("Add Success");
      })
      .catch((err) => {
        toast.error("Add Failed");
        console.log(err);
      });
  };

  useEffect(() => {
    reset(preLoadValue);
  }, [preLoadValue]);

  return (
    <div className={`${styles.landingpageform} ${styles.formNews}`}>
      <form
        onSubmit={handleSubmit(submitAddNewsJob)}
        className={styles.formNewsSubmit}
      >
        <div className={styles.bannerEdit}>
          <div className={styles.bannerBanner}>Hiring</div>
          <div className={styles.row1}>
            <div className={styles.titleEdit}>
              <h3>Position </h3>
              <textarea
                type="text"
                // defaultValue={preLoadValue.title1}
                className={styles.inputField}
                name="title1"
                {...register("title1")}
              />
              <p>{errors.title1?.message}</p>
            </div>

            <div className={styles.titleEdit}>
              <h3>Description </h3>
              <ReactQuill
                theme="snow"
                value={editorContent}
                onChange={onEditorStateChange}
              />

              <p>{errors.title2?.message}</p>
            </div>
          </div>
        </div>
        <Button variant="outlined" type="submit">
          submit
        </Button>
      </form>
    </div>
  );
};

export default AddHiring;
