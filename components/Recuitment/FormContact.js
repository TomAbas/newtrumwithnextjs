import React, { useState, useEffect } from "react";
import styles from "../../styles/RecuitmentStyles.module.css";
import InputField from "../Form/InputField";
import { Button, Box } from "@mui/material";
import BtnSubmit from "../Form/BtnSubmit";

const FormContact = () => {
  return (
    <div>
      <div className={styles.titleMd}>Start your music marketing here</div>
      <InputField placeholder="Name" required={true} />
      <InputField placeholder="Email" required={true} type="email" />
      <InputField placeholder="Telephone" required={true} type="tel" />
      <InputField placeholder="How can we help" required={true} />
      <InputField placeholder="Bugget" required={true} />
      <Box sx={{ my: "20px" }}>
        <BtnSubmit label="Submit" />
      </Box>
      <p style={{ width: "100vw" }}>
        Once you click 'Submit', wait till your submission is processed, it'll
        take 5 seconds.
      </p>
    </div>
  );
};

export default FormContact;
