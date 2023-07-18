import React, { useState, useEffect } from "react";
import styles from "../../styles/RecuitmentStyles.module.css";
import { Button } from "@mui/material";

const stylesBtnSubmit = {
  textTransform: "uppercase",
  color: "#212121",
  backgroundColor: "#F1F1F1",
  fontWeight: "bold",
  fontSize: "16px",
  padding: "10px 20px",
  borderRadius: "10px",
};

const BtnSubmit = ({
  label = "",
  type = "submit",
  onClick = null,
  disabled = false,
  style = {},
  icon = null,
  sx = {},
}) => {
  return (
    <Button
      className={styles.btnSubmit}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ ...stylesBtnSubmit, ...style }}
      sx={{ ...sx }}
    >
      {label}
    </Button>
  );
};

export default BtnSubmit;
