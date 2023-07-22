import React, { useState, useEffect } from "react";
import styles from "../../styles/RecuitmentStyles.module.css";
import InputField from "../Form/InputField";
import { Button, Box, Typography } from "@mui/material";
import BtnSubmit from "../Form/BtnSubmit";

const FormContact = () => {
  return (
    <div>
      <div className={styles.titleMd}>Start your<br /> music marketing here</div>
      <InputField placeholder="Name" required={true} />
      <InputField placeholder="Email" required={true} type="email" />
      <InputField placeholder="Telephone" required={true} type="tel" />
      <InputField placeholder="How can we help" required={true} />
      <InputField placeholder="Bugget" required={true} />
      <Box sx={{ my: "20px" }}>
        <BtnSubmit label="Submit" />
      </Box>
      <Typography
        variant="caption"
        sx={{ display: "block", fontWeight: "light" }}
      >
        Once you click 'Submit', wait till your submission is processed, it'll
        take 5 seconds.
      </Typography>
    </div>
  );
};

export default FormContact;
