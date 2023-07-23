import React, { useState, useEffect } from "react";
import styles from "../../styles/RecuitmentStyles.module.css";
import InputField from "../Form/InputField";
import { Button, Box, Typography } from "@mui/material";
import BtnSubmit from "../Form/BtnSubmit";
import { sendContact } from "../../ApiUrl/contact/contact";

const FormContact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    telephone: "",
    content: "",
    budget: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await sendContact(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className={styles.titleMd}>
        Start your
        <br /> music marketing here
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <InputField
          placeholder="Name"
          required={true}
          value={data.name}
          name="name"
          onChange={handleChange}
        />
        <InputField
          placeholder="Email"
          required={true}
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <InputField
          placeholder="Telephone"
          required={true}
          type="tel"
          name="telephone"
          value={data.telephone}
          onChange={handleChange}
        />
        <InputField
          placeholder="How can we help"
          required={true}
          name="content"
          value={data.content}
          onChange={handleChange}
        />
        <InputField
          placeholder="Bugget"
          required={true}
          name="budget"
          value={data.budget}
          onChange={handleChange}
        />
        <Box sx={{ my: "20px" }}>
          <BtnSubmit label="Submit" />
        </Box>
      </form>
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
