import React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import styles from '../../styles/Admin.module.css';
//hook form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@mui/material';
import { useMemo } from 'react';
import { useEffect } from 'react';
const AboutUsAddNumberForm = ({ numberAboutUs, setNumberAboutUs }) => {
  const schema = yup.object().shape({
    number: yup
      .number()
      .required('Please enter number')
      .typeError('Please enter number'),
    title: yup
      .string()
      .required('Please enter title')
      .typeError('Please enter title'),
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
    console.log(data);
    setNumberAboutUs([...numberAboutUs, data]);
    reset({ number: '', title: '' });
  }
  function handDeleteNumber(idx) {
    const newNumberAboutUs = numberAboutUs.filter((item, index) => {
      return index !== idx;
    });
    setNumberAboutUs(newNumberAboutUs);
  }
  useEffect(() => {
    // console.log(errors);
  }, [errors]);
  return (
    <Fragment>
      <div className={styles.partnerDisplay}>
        {numberAboutUs?.map((item, idx) => {
          return (
            <div key={idx} className={styles.partnerDisplayBox}>
              <div>Number : {item.number}</div>
              <div>Description : {item.title}</div>
              <Button onClick={() => handDeleteNumber(idx)}>Xóa</Button>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit(handleSubmitFc)}>
        <div className={styles.row1}>
          <div className={styles.titleEdit}>
            <h3>About 04 : Number About </h3>
            <input
              type='number'
              className={styles.inputField}
              name='content3Line2'
              {...register('number')}
            />
            <p>{errors.number?.message}</p>
          </div>
          <div className={styles.titleEdit}>
            <h3>About 04 : Number Description </h3>
            <textarea
              type='text'
              className={styles.inputField}
              name='content3Line2'
              {...register('title')}
            />
            <p>{errors.title?.message}</p>
          </div>
        </div>
        <Button
          variant='outlined'
          type='submit'
          disabled={numberAboutUs.length === 5}
        >
          Add Number
        </Button>
      </form>
    </Fragment>
  );
};

export default AboutUsAddNumberForm;
