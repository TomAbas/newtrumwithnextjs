import React, { useState } from 'react';
import styles from '../../styles/Admin.module.css';

//mui
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
//form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { updateIndustryData } from '../../ApiUrl/industry/industryApi';
import Loading from '../Loading/Loading';
const schema = yup.object().shape({
  title: yup.string().required('missing field'),
  description: yup.string().required('missing field'),
  date: yup.date().required('missing field').typeError('invalid date'),
});

const IndustryEditor = ({ newsIdx, preLoadValue, trigger, setTrigger }) => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitNewsEditor = async (data) => {
    setIsLoading(true)
    console.log(data);
    try {
      await updateIndustryData(newsIdx, data);
      toast.success('Edit Success');
      setTrigger(!trigger);
    } catch (error) {
      toast.error('Edit Failed');
      console.log(error);
    }
    setIsLoading(false)
  };

  useEffect(() => {
    console.log(preLoadValue);
    reset(preLoadValue);
  }, [preLoadValue]);

  return (
    <div className={`${styles.landingpageform} ${styles.formNews}`}>
      <form
        onSubmit={handleSubmit(submitNewsEditor)}
        className={styles.formNewsSubmit}
      >
        <div className={styles.bannerEdit}>
          <div className={styles.bannerBanner}>Edit Industry Recognition</div>
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
      {
        isLoading && <Loading />
      }
    </div>
  );
};

export default IndustryEditor;
