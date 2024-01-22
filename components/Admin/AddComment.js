import React from "react";
import styles from "../../styles/Admin.module.css";

//mui
import { Button } from "@mui/material";
//form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//editor
import { toast } from "react-toastify";
import { addRatingData } from "../../ApiUrl/rating/ratingApi";
import { uploadImg } from "../../config/firbase";

const schema = yup.object().shape({
  title: yup.string().required("missing field"),
  description: yup.string().required("missing field"),
  rating: yup.number().required("missing field").typeError("invalid rating"),
  image: yup.mixed().required("missing field").typeError("invalid image"),
});

const AddComment = ({ setTrigger, trigger }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitAddComment = async (data) => {
    if (data.image.length === 0) {
      setError("image", { message: "missing field" });
      return;
    }
    const imgUrl = await uploadImg(data.image[0]);

    const body = {
      ...data,
      image: imgUrl,
    };
    await addRatingData(body)
      .then((res) => {
        setTrigger(!trigger);
        toast.success("Add Success");
        reset({});
      })
      .catch((err) => {
        toast.error("Add Failed");
        console.log(err);
      });
  };

  return (
    <div className={`${styles.landingpageform} ${styles.formNews}`}>
      <form
        onSubmit={handleSubmit(submitAddComment)}
        className={styles.formNewsSubmit}
      >
        <div className={styles.bannerEdit}>
          <div className={styles.bannerBanner}>Add New Rating</div>
          <div className={styles.row1}>
            <div className={styles.titleEdit}>
              <h3>Title </h3>
              <textarea
                type="text"
                className={styles.inputField}
                name="title"
                {...register("title")}
              />
              <p>{errors.title?.message}</p>
            </div>
            <div className={styles.titleEdit}>
              <h3>Description </h3>
              <textarea
                type="text"
                className={styles.inputField}
                name="description"
                {...register("description")}
              />
              <p>{errors.description?.message}</p>
            </div>
            <div className={styles.titleEdit}>
              <h3>Rating </h3>
              <input
                type="number"
                max={5}
                className={styles.inputField}
                name="rating"
                {...register("rating")}
              />
              <p>{errors.rating?.message}</p>
            </div>
            <div className={styles.titleEdit}>
              <h3>image </h3>
              <input
                type="file"
                accept="image/*"
                className={styles.inputField}
                name="image"
                {...register("image")}
              />
              <p>{errors.image?.message}</p>
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

export default AddComment;
