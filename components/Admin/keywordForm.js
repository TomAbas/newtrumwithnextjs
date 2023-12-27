import React, { Fragment } from "react";
import styles from "../../styles/Admin.module.css";
//hook form
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const KeywordForm = ({ serviceList, setServiceList }) => {
  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Please enter keyword")
      .typeError("Please enter keyword"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSubmitFc(data) {
    setServiceList([...serviceList, data]);
    reset({ title: "" });
  }
  function handDeleteService(idx) {
    const newServiceList = serviceList.filter((item, index) => {
      return index !== idx;
    });
    setServiceList(newServiceList);
  }

  return (
    <Fragment>
      <div className={styles.partnerDisplay}>
        {serviceList?.map((item, idx) => {
          return (
            <div key={idx} className={styles.partnerDisplayBox}>
              <div>
                <div>
                  {" "}
                  <strong>Keyword</strong> : {item.title}
                </div>
              </div>

              <Button onClick={() => handDeleteService(idx)}>Xóa</Button>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit(handleSubmitFc)}>
        <div className={styles.row1}>
          <div className={styles.titleEdit}>
            <h3> Title </h3>
            <textarea
              type="text"
              className={styles.inputField}
              name="title"
              {...register("title")}
            />
            <p>{errors.title?.message}</p>
          </div>
        </div>
        <Button variant="outlined" type="submit">
          Add keyword
        </Button>
      </form>
    </Fragment>
  );
};

export default KeywordForm;
