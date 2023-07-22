import React from 'react';
import styles from '../../styles/Admin.module.css';

//mui
import { Button } from '@mui/material';
//form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
//editor
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { urlAddContributor } from '../../ApiUrl/Api';
import { addRecuiterData } from '../../ApiUrl/recuiter/recuiter';
import { toast } from 'react-toastify';
import { addIndustryData } from '../../ApiUrl/industry/industryApi';
const schema = yup.object().shape({
  title: yup.string().required('missing field'),
  description: yup.string().required('missing field'),
  date: yup.date().required('missing field').typeError('invalid date'),
});

const AddIndustry = ({ setTrigger, trigger }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitAddNewsJob = async (data) => {
    console.log(data);

    await addIndustryData(data)
      .then((res) => {
        setTrigger(!trigger);
        toast.success('Add Success');
        reset({})
      })
      .catch((err) => {
        toast.error('Add Failed');
        console.log(err);
      });
  };

  return (
    <div className={`${styles.landingpageform} ${styles.formNews}`}>
      <form
        onSubmit={handleSubmit(submitAddNewsJob)}
        className={styles.formNewsSubmit}
      >
        <div className={styles.bannerEdit}>
          <div className={styles.bannerBanner}>Add Industry Recognition</div>
          <div className={styles.row1}>
            <div className={styles.titleEdit}>
              <h3>Title </h3>
              <textarea
                type='text'
                className={styles.inputField}
                name='title'
                {...register('title')}
              />
              <p>{errors.title?.message}</p>
            </div>

            <div className={styles.titleEdit}>
              <h3>Description </h3>
              <textarea
                type='text'
                className={styles.inputField}
                name='description'
                {...register('description')}
              />
              <p>{errors.description?.message}</p>
            </div>
            <div className={styles.titleEdit}>
              <h3>Date </h3>
              <input
                type='date'
                className={styles.inputField}
                name='date'
                {...register('date')}
              />
              <p>{errors.date?.message}</p>
            </div>
          </div>
        </div>
        <Button variant='outlined' type='submit'>
          submit
        </Button>
      </form>
    </div>
  );
};

export default AddIndustry;
