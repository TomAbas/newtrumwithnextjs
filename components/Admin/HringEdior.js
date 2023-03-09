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
import IconButton from "@mui/material/IconButton";
//form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";

import { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { urlDeleteContributor, urlEditJob } from "../../ApiUrl/Api";
import { urlAddContributor } from "../../ApiUrl/Api";
import { editRecuiterData } from "../../ApiUrl/recuiter/recuiter";
import { toast } from "react-toastify";
const schema = yup.object().shape({
  title1: yup.string().required("missing field"),
  title2: yup.string().required("missing field"),
});

const HiringEditor = ({ newsIdx, preLoadValue, trigger, setTrigger }) => {
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
  const submitNewsEditor = async (data) => {
    console.log(data);
    const dataSubmit = { title: data.title1, description: data.title2 };
    try {
      await editRecuiterData(dataSubmit, newsIdx);
      toast.success("Edit Success");
      setTrigger(!trigger);
    } catch (error) {
      toast.error("Edit Failed");
      console.log(error);
    }
    // await axios
    //   .post(`${urlEditJob}/${newsIdx}`, dataSubmit)
    //   .then((res) => {
    //     // console.log(res);

    //     setTrigger(!trigger);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    reset(preLoadValue);
  }, [preLoadValue]);

  return (
    <div className={`${styles.landingpageform} ${styles.formNews}`}>
      <form
        onSubmit={handleSubmit(submitNewsEditor)}
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
              <textarea
                type="text"
                // defaultValue={preLoadValue.title2}
                className={styles.inputField}
                name="title2"
                {...register("title2")}
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

export default HiringEditor;
