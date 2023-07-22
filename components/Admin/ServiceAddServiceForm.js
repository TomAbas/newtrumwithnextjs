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
const ServiceAddServiceForm = ({ serviceList, setServiceList }) => {
  const schema = yup.object().shape({
    title: yup
      .string()
      .required('Please enter title')
      .typeError('Please enter title'),
    description: yup
      .string()
      .required('Please enter description')
      .typeError('Please enter description'),
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
    setServiceList([...serviceList, data]);
    reset({ description: '', title: '' });
  }
  function handDeleteService(idx) {
    const newServiceList = serviceList.filter((item, index) => {
      return index !== idx;
    });
    setServiceList(newServiceList);
  }
  useEffect(() => {
    // console.log(errors);
  }, [errors]);
  return (
    <Fragment>
      <div className={styles.partnerDisplay}>
        {serviceList?.map((item, idx) => {
          return (
            <div key={idx} className={styles.partnerDisplayBox}>
              <div>Service Name : {item.number}</div>
              <div>Service Description : {item.title}</div>
              <Button onClick={() => handDeleteService(idx)}>Xóa</Button>
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit(handleSubmitFc)}>
        <div className={styles.row1}>
          <div className={styles.titleEdit}>
            <h3>Service Title </h3>
            <textarea
              type='text'
              className={styles.inputField}
              name='title'
              {...register('title')}
            />
            <p>{errors.title?.message}</p>
          </div>
          <div className={styles.titleEdit}>
            <h3>Service Description </h3>
            <textarea
              type='text'
              className={styles.inputField}
              name='description'
              {...register('description')}
            />
            <p>{errors.description?.message}</p>
          </div>
        </div>
        <Button variant='outlined' type='submit'>
          Add Service
        </Button>
      </form>
    </Fragment>
  );
};

export default ServiceAddServiceForm;
