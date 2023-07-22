import React from 'react';
import styles from '../../styles/Admin.module.css';

//mui
import { Button } from '@mui/material';
//form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { updateRatingData } from '../../ApiUrl/rating/ratingApi';
const schema = yup.object().shape({
  title: yup.string().required('missing field'),
  description: yup.string().required('missing field'),
  rating: yup.number().required('missing field').typeError('invalid rating'),
  image: yup.string().required('missing field').typeError('invalid image'),
});

const CommentEditor = ({ newsIdx, preLoadValue, trigger, setTrigger }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitAddComment = async (data) => {
    console.log(data);
    if (data.image.length === 0) {
      setError('image', { message: 'missing field' });
      return;
    }
    const imgUrl = await uploadImg(data.image[0]);
    console.log(imgUrl);
    const body = {
      ...data,
      image: imgUrl,
    };
    try {
      await updateRatingData(newsIdx, body);
      toast.success('Edit Success');
      setTrigger(!trigger);
    } catch (error) {
      toast.error('Edit Failed');
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(preLoadValue);
    reset(preLoadValue);
  }, [preLoadValue]);

  return (
    <div className={`${styles.landingpageform} ${styles.formNews}`}>
      <form
        onSubmit={handleSubmit(submitAddComment)}
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
              <h3>Rating </h3>
              <input
                step='0.01'
                type='number'
                className={styles.inputField}
                name='rating'
                {...register('rating')}
              />
              <p>{errors.rating?.message}</p>
            </div>
            <div className={styles.titleEdit}>
              <h3>Logo </h3>
              <input
                type='file'
                accept='image/*'
                className={styles.inputField}
                name='image'
                {...register('image')}
              />
              <p>{errors.image?.message}</p>
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

export default CommentEditor;
