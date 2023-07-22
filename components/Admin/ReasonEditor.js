import React, { useEffect } from 'react';
import styles from '../../styles/Admin.module.css';
//mui
import { Button } from '@mui/material';
//form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
//editor
import { toast } from 'react-toastify';
import { updateReasonData } from '../../ApiUrl/reason/reasonApi';

const schema = yup.object().shape({
  title: yup.string().required('missing field').typeError('invalid title'),
});

const ReasonEditor = ({ newsIdx, preLoadValue, setTrigger, trigger }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitEditReason = async (data) => {
    await updateReasonData(newsIdx, data)
      .then((res) => {
        setTrigger(!trigger);
        toast.success('Add Success');
        reset({});
      })
      .catch((err) => {
        toast.error('Add Failed');
        console.log(err);
      });
  };
  useEffect(() => {
    console.log(preLoadValue);
    reset(preLoadValue);
  }, [preLoadValue]);
  return (
    <div className={`${styles.landingpageform} ${styles.formNews}`}>
      <form
        onSubmit={handleSubmit(submitEditReason)}
        className={styles.formNewsSubmit}
      >
        <div className={styles.bannerEdit}>
          <div className={styles.bannerBanner}>Edit Reason</div>
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
          </div>
        </div>
        <Button variant='outlined' type='submit'>
          submit
        </Button>
      </form>
    </div>
  );
};

export default ReasonEditor;
