import React from 'react';
import styles from '../../styles/Admin.module.css';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AboutUsAddPartnerForm from './AboutUsAddPartnerForm';
import AboutUsAddNumberForm from './AboutUsAddNumberForm';
import {Button} from '@mui/material';
import {useState} from 'react';
import {useEffect} from 'react';
import {updateAboutData} from '../../ApiUrl/about/aboutApi';
import {makeData} from '../../pages/admin/about-us';
import {uploadImg} from '../../config/firbase';
import {toast} from 'react-toastify';
import {handleChangeFile} from "../../Utils/handleChangeFileImage";
import Image from "next/image";

const AboutUsForm = ({aboutUsDataImage, aboutUsData, aboutUsNumber, aboutUsPartner}) => {
    const [aboutUs, setAboutUs] = useState();
    const [numberAboutUs, setNumberAboutUs] = useState([]);
    const [partnerAboutUs, setPartnerAboutUs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [img1, setImg1] = useState(aboutUsDataImage?.about01?.image);
    const [img2, setImg2] = useState(aboutUsDataImage?.about02?.image);
    const [img3, setImg3] = useState(aboutUsDataImage?.video);
    useEffect(() => {
        setImg2(aboutUsDataImage?.about02?.image)
        setImg1(aboutUsDataImage?.about01?.image)
        setImg3(aboutUsDataImage?.video)
    },[aboutUsDataImage])
    const schema = yup.object().shape({
        about01FirstDescription: yup
            .string()
            .required('Please enter content')
            .typeError('Please enter content'), about01SecondDescription: yup
            .string()
            .required('Please enter content')
            .typeError('Please enter content'), about02Title: yup
            .string()
            .required('Please enter content')
            .typeError('Please enter content'), about02FirstDescription: yup
            .string()
            .required('Please enter content')
            .typeError('Please enter content'), about02SecondDescription: yup
            .string()
            .required('Please enter content')
            .typeError('Please enter content'), about03Title: yup
            .string()
            .required('Please enter content')
            .typeError('Please enter content'), aboutImage1: yup
            .mixed()
            .required('Please enter image')
            .typeError('Please enter image'), aboutImage2: yup
            .mixed()
            .required('Please enter image')
            .typeError('Please enter image'), aboutVideo: yup
            .mixed()
            .required('Please enter video')
            .typeError('Please enter video'),
    });
    const {
        register, handleSubmit, reset, setError, formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });

    async function handleUpdateAboutUs() {
        setIsLoading(true);
        const arrMedia = [aboutUs.aboutImage1, aboutUs.aboutImage2, aboutUs.aboutVideo,];
        // arrMedia = await Promise.all(
        //   arrMedia.map(async (item) => {
        //     if (item.length === 0) return undefined;
        //     try {
        //       let url = await uploadImg(item[0]);
        //       return url;
        //     } catch (error) {
        //       console.log(error);
        //     }
        //   })
        // );
        async function uploadMedia() {
            arrMedia = await Promise.all(arrMedia.map(async (item) => {
                if (item.length === 0) return undefined;
                try {
                    let url = await uploadImg(item[0]);
                    return url;
                } catch (error) {
                    console.log(error);
                }
            }));
        }

        await toast.promise(uploadMedia(), {
            pending: 'Upload media', success: 'Upload media success', error: 'Upload media failed',
        });
        console.log(arrMedia);
        const data = {
            about01: {
                image: arrMedia[0], list: numberAboutUs, description: aboutUs.about01FirstDescription,
            },
            about02: {
                image: arrMedia[1], title: aboutUs.about02Title, description: aboutUs.about02FirstDescription,
            },
            about03: {
                title: aboutUs.about03Title, listBrand: partnerAboutUs,
            },
            description01: aboutUs.about01SecondDescription,
            description02: aboutUs.about02SecondDescription,
            video: arrMedia[2],
        };

        // console.log(data);
        async function uploadData() {
            try {
                await updateAboutData(data).then((res) => {
                    console.log(res);
                    const newData = makeData(res.data);
                    reset(newData);
                    setIsLoading(false);
                });
            } catch (error) {
                console.log(error);
                throw error;
            }
        }

        toast.promise(uploadData(), {
            pending: 'loading', success: 'success', error: 'error',
        });
    }

    function handleSubmitFc(data) {
        console.log(data);

        setAboutUs(data);
    }

    useEffect(() => {
        if (aboutUsData) {
            reset(aboutUsData);
            setNumberAboutUs(aboutUsNumber);
            setPartnerAboutUs(aboutUsPartner);
        }
    }, [aboutUsData]);
    return (<div className={styles.landingpageformContainer}>
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
                                onChange={(e) => {
                                    handleChangeFile(e, setImg1)
                                }}
                            />
                            <Image src={img1} alt="Picture of the author" width={150} height={150}/>

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
                                onChange={(e) => {
                                    handleChangeFile(e, setImg2)
                                }}
                            />
                            <Image src={img2} alt="Picture of the author" width={150} height={150}/>
                            <p>{errors.aboutImage2?.message}</p>
                        </div>
                        <div className={styles.titleEdit}>
                            <h3>About 02 : Video </h3>
                            <input
                                type='file'
                                accept='video/*'
                                className={styles.inputField}
                                name='aboutVideo'
                                {...register('aboutVideo')}
                                onChange={(e) => {
                                    handleChangeFile(e, setImg3)
                                }}
                            />
                            <video src={img3} alt="Video of the author" width={150} height={150}/>
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
            disabled={!aboutUs || isLoading ? true : false}
        >
            Submit Form Update About Content
        </Button>
    </div>);
};

export default AboutUsForm;
