import React from 'react';
import styles from '../../styles/Admin.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AboutUsAddPartnerForm from './AboutUsAddPartnerForm';
import AboutUsAddNumberForm from './AboutUsAddNumberForm';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { updateAboutData } from '../../ApiUrl/about/aboutApi';
import { makeData } from '../../pages/admin/about-us';
const AboutUsForm = ({ aboutUsData, aboutUsNumber, aboutUsPartner }) => {
  const [aboutUs, setAboutUs] = useState();
  const [numberAboutUs, setNumberAboutUs] = useState([]);
  const [partnerAboutUs, setPartnerAboutUs] = useState([]);
  const schema = yup.object().shape({
    about01FirstDescription: yup
      .string()
      .required('Please enter content')
      .typeError('Please enter content'),
    about01SecondDescription: yup
      .string()
      .required('Please enter content')
      .typeError('Please enter content'),
    about02Title: yup
      .string()
      .required('Please enter content')
      .typeError('Please enter content'),
    about02FirstDescription: yup
      .string()
      .required('Please enter content')
      .typeError('Please enter content'),
    about02SecondDescription: yup
      .string()
      .required('Please enter content')
      .typeError('Please enter content'),
    about03Title: yup
      .string()
      .required('Please enter content')
      .typeError('Please enter content'),
    aboutImage1: yup
      .mixed()
      .required('Please enter image')
      .typeError('Please enter image'),
    aboutImage2: yup
      .mixed()
      .required('Please enter image')
      .typeError('Please enter image'),
    aboutVideo: yup
      .mixed()
      .required('Please enter video')
      .typeError('Please enter video'),
  });
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  async function handleUpdateAboutUs() {
    const data = {
      about01: {
        // image: aboutUs.aboutImage1,
        image: 'string',
        list: numberAboutUs,
        description: aboutUs.about01FirstDescription,
      },
      about02: {
        // image: aboutUs.aboutImage2,
        image: 'string',
        title: aboutUs.about02Title,
        description: aboutUs.about02FirstDescription,
      },
      about03: {
        title: aboutUs.about03Title,
        listBrand: partnerAboutUs,
      },
      description01: aboutUs.about01SecondDescription,
      description02: aboutUs.about02SecondDescription,
      // video: aboutUs.aboutVideo,
      video: 'string',
    };
    // console.log(data);
    await updateAboutData(data).then((res) => {
      console.log(res);
      const newData = makeData(res.data);
      // reset data about number, about brand
      reset(newData);
    });
  }
  function handleSubmitFc(data) {
    console.log(data);
    if (data.aboutImage1.length === 0) {
    }
    if (data.aboutImage2.length === 0) {
    }
    if (data.aboutVideo.length === 0) {
    }
    setAboutUs(data);
  }
  useEffect(() => {
    if (aboutUsData) {
      reset(aboutUsData);
      setNumberAboutUs(aboutUsNumber);
      setPartnerAboutUs(aboutUsPartner);
    }
  }, [aboutUsData]);
  return (
    <div className={styles.landingpageformContainer}>
      <div className={styles.titleForm}>
        <h1>EDIT ABOUT US</h1>
      </div>
      <div className={styles.landingpageform}>
        <form onSubmit={handleSubmit(handleSubmitFc)}>
          <div className={styles.content3Edit}>
            <div className={styles.bannerBanner}>EDIT ABOUT 1 :</div>
            <div className={styles.row1}>
              <div className={styles.titleEdit}>
                <h3>About 01 : First Description </h3>
                <textarea
                  type='text'
                  className={styles.inputField}
                  name='about01FirstDescription'
                  {...register('about01FirstDescription')}
                />
                <p>{errors.about01FirstDescription?.message}</p>
              </div>
            </div>
            <div className={styles.titleEdit}>
              <h3>About 01 : Second Description </h3>
              <textarea
                type='text'
                className={styles.inputField}
                name='about01SecondDescription'
                {...register('about01SecondDescription')}
              />
              <p>{errors.about01SecondDescription?.message}</p>
            </div>
          </div>
          <div className={styles.content3Edit}>
            <div className={styles.bannerBanner}>EDIT ABOUT 2 :</div>
            <div className={styles.row1}>
              <div className={styles.titleEdit}>
                <h3>About 02 : Title</h3>
                <textarea
                  type='text'
                  className={styles.inputField}
                  name='about02Title'
                  {...register('about02Title')}
                />
                <p>{errors.about02Title?.message}</p>
              </div>
              <div className={styles.titleEdit}>
                <h3>About 02 :First Description </h3>
                <textarea
                  type='text'
                  className={styles.inputField}
                  name='about02FirstDescription'
                  {...register('about02FirstDescription')}
                />
                <p>{errors.about02FirstDescription?.message}</p>
              </div>
              <div className={styles.titleEdit}>
                <h3>About 02 :Second Description </h3>
                <textarea
                  type='text'
                  className={styles.inputField}
                  name='about02SecondDescription'
                  {...register('about02SecondDescription')}
                />
                <p>{errors.about02SecondDescription?.message}</p>
              </div>
            </div>
          </div>
          <div className={styles.content3Edit}>
            <div className={styles.bannerBanner}>EDIT ABOUT 3 :</div>
            <div className={styles.row1}>
              <div className={styles.titleEdit}>
                <h3>About 03 : Title </h3>
                <textarea
                  type='text'
                  className={styles.inputField}
                  name='about03Title'
                  {...register('about03Title')}
                />
                <p>{errors.about03Title?.message}</p>
              </div>
            </div>
          </div>
          <div className={styles.content3Edit}>
            <div className={styles.bannerBanner}>About Media :</div>
            <div className={styles.row1}>
              <div className={styles.titleEdit}>
                <h3>About 02 : Image 1 </h3>
                <input
                  type='file'
                  accept='image/*'
                  className={styles.inputField}
                  name='aboutImage1'
                  {...register('aboutImage1')}
                />
                <p>{errors.aboutImage1?.message}</p>
              </div>
              <div className={styles.titleEdit}>
                <h3>About 02 : Image 2 </h3>
                <input
                  type='file'
                  accept='image/*'
                  className={styles.inputField}
                  name='aboutImage2'
                  {...register('aboutImage2')}
                />
                <p>{errors.aboutImage2?.message}</p>
              </div>
              <div className={styles.titleEdit}>
                <h3>About 02 : Video </h3>
                <input
                  type='file'
                  accept='image/*'
                  className={styles.inputField}
                  name='aboutVideo'
                  {...register('aboutVideo')}
                />
                <p>{errors.aboutVideo?.message}</p>
              </div>
            </div>
          </div>
          <Button variant='outlined' type='submit'>
            Update content
          </Button>
        </form>
        <div className={styles.content3Edit}>
          {/* about01 */}
          <div className={styles.bannerBanner}>ADD PARTNER :</div>
          <AboutUsAddPartnerForm
            partnerAboutUs={partnerAboutUs}
            setPartnerAboutUs={setPartnerAboutUs}
          />
        </div>
        <div className={styles.content3Edit}>
          {/* about03 */}
          <div className={styles.bannerBanner}>ADD ABOUT NUMBER :</div>
          <AboutUsAddNumberForm
            numberAboutUs={numberAboutUs}
            setNumberAboutUs={setNumberAboutUs}
          />
        </div>
      </div>
      <Button
        onClick={handleUpdateAboutUs}
        variant='contained'
        disabled={!aboutUs ? true : false}
      >
        Submit Form Update About Content
      </Button>
    </div>
  );
};

export default AboutUsForm;
