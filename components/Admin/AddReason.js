import React from 'react';
import styles from '../../styles/Admin.module.css';
//mui
import { Button } from '@mui/material';
//form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
//editor
import { toast } from 'react-toastify';
import { addReasonData } from '../../ApiUrl/reason/reasonApi';

const schema = yup.object().shape({
  title: yup.string().required('missing field').typeError('invalid title'),
});

const AddReason = ({ setTrigger, trigger }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitAddComment = async (data) => {
    await addReasonData(data)
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

  return (
    <div className={`${styles.landingpageform} ${styles.formNews}`}>
      <form
        onSubmit={handleSubmit(submitAddComment)}
        className={styles.formNewsSubmit}
      >
        <div className={styles.bannerEdit}>
          <div className={styles.bannerBanner}>Add New Reason</div>
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

export default AddReason;
