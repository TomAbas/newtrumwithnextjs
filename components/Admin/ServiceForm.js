import React from 'react';
import styles from '../../styles/Admin.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import ServiceAddServiceForm from './ServiceAddServiceForm';
import { updateServiceData } from '../../ApiUrl/service/serviceApi';
import Loading from '../Loading/Loading';
const ServiceForm = ({ serviceData, serviceListData }) => {
  const [isLoading,setIsLoading] = useState(false)
  const [service, setService] = useState();
  const [serviceList, setServiceList] = useState([]);
  const schema = yup.object().shape({
    title: yup.string().required('missing field').typeError('missing field'),
    subTitle: yup.string().required('missing field').typeError('missing field'),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  async function handleService() {
    const data = {
      title: {
        content: service.title,
        effect: [4, 7, 11, 13, 15, 17],
      },
      subTitle: service.subTitle,
      listService: serviceList,
    };
    await updateServiceData(data).then((res) => {
      console.log(res);
      const newData = {};
      reset(newData);
    });
  }
  function handleSubmitFc(data) {
    setIsLoading(true)
    console.log(data);
    setService(data);
    reset({});
    setIsLoading(false)
  }
  useEffect(() => {
    if (serviceData) {
      setServiceList(serviceListData);
      console.log(serviceData);
      reset(serviceData);
    }
  }, [serviceData]);
  return (
    <div className={styles.landingpageformContainer}>
      <div className={styles.titleForm}>
        <h1>EDIT SERVICE</h1>
      </div>
      <div className={styles.landingpageform}>
        <form onSubmit={handleSubmit(handleSubmitFc)}>
          <div className={styles.content3Edit}>
            <div className={styles.bannerBanner}>EDIT BANNER :</div>
            <div className={styles.row1}>
              <div className={styles.titleEdit}>
                <h3>BANNER SERVICE </h3>
                <textarea
                  type='text'
                  className={styles.inputField}
                  name='title'
                  {...register('title')}
                />
                <p>{errors.title?.message}</p>
              </div>
            </div>
            <div className={styles.titleEdit}>
              <h3>Check Box Effect</h3>
              <textarea type='text' className={styles.inputField} />
            </div>
          </div>
          <div className={styles.content3Edit}>
            <div className={styles.bannerBanner}>EDIT SERVICE :</div>
            <div className={styles.row1}>
              <div className={styles.titleEdit}>
                <h3>SERVICE : Title</h3>
                <textarea
                  type='text'
                  className={styles.inputField}
                  name='subTitle'
                  {...register('subTitle')}
                />
                <p>{errors.subTitle?.message}</p>
              </div>
            </div>
          </div>
          <Button variant='outlined' type='submit'>
            Update content
          </Button>
        </form>
        <div className={styles.content3Edit}>
          {/* ADD SERVICE */}
          <div className={styles.bannerBanner}>ADD SERVICE :</div>
          <ServiceAddServiceForm
            serviceList={serviceList}
            setServiceList={setServiceList}
          />
        </div>
      </div>
      <Button
        onClick={handleService}
        variant='contained'
        disabled={!service ? true : false}
      >
        Submit Form Update SERVICE Content
      </Button>
      {
        isLoading && <Loading />
      }
    </div>
  );
};

export default ServiceForm;
