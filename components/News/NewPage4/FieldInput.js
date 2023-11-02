import { Divider, IconButton } from "@mui/material";
import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import EastIcon from "@mui/icons-material/East";
import styles from "../../../styles/FieldInputNewPage4.module.css";

const FieldInput = () => {
  const InputRef = useRef(null);

  const handleInput = (e) => {
    if (InputRef.current) {
      clearTimeout(InputRef.current);
    }
    InputRef.current = setTimeout(() => {
      console.log(e.target.value);
    }, 300);
  };

  return (
    <div className={styles.FindGroup}>
      <IconButton
        className={styles.IconFind}
        type="button"
        sx={{ p: "10px", color: "#fff" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <input
        onChange={(e) => {
          handleInput(e);
        }}
        placeholder="Tìm kiếm"
      />
      <div className={styles.WrapIconRight}>
        <Divider sx={{ height: 40, bgcolor: "#fff" }} orientation="vertical" />
        <IconButton
          className={styles.ArrowRight}
          type="button"
          sx={{ p: "10px", color: "#fff" }}
          aria-label="search"
          disableRipple
        >
          <EastIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default FieldInput;
