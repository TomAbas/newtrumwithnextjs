import React, {useEffect} from 'react';
import styles from '../../styles/Admin.module.css';
import {Button} from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {addPost} from "../../ApiUrl/newsApi/newsApi";

const News = () => {
    const schema = yup.object().shape({
        mainTitle: yup.string().required('missing field').typeError('missing field'),
        secondTitle: yup.string().required('missing field').typeError('missing field'),
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });
    useEffect(() => {
        errors && console.log(errors);
    }, [errors]);

    const handleOnSubmit = (data) => {
        const processedData = {
            title: {
                mainTitle: data.mainTitle,
                secondTitle: data.secondTitle,
                desc1: data.desc1,
                desc2: data.desc2,
                desc3: data.desc3
            },
            category: data.category,
            description: data.description,
            mainImage: data.mainImage,
            sliderImage: data.sliderImage,
            mainTitle: data.mainTitle
        };

        const formData = new FormData();
        for (let key in processedData) {
            formData.append(key, processedData[key]);
        }
        addPost(formData);
    }
    return (<>
        <div className={styles.landingpageformContainer}>
            <div className={styles.titleForm}>
                <h1>News</h1>
            </div>
            <div className={styles.landingpageform}>
                <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <div className={styles.content3Edit}>
                        <div className={styles.bannerBanner}>EDIT NEWS :</div>
                        <div className={styles.titleEdit}>
                            <h3>Title</h3>
                            <textarea
                                type='text'
                                className={styles.inputField}
                                name='mainTitle'
                                {...register('mainTitle')}

                            />
                        </div>
                        <div className={styles.titleEdit}>
                            <h3>Second Title</h3>
                            <textarea
                                type='text'
                                className={styles.inputField}
                                name='secondTitle'
                                {...register('secondTitle')}
                            />
                        </div>
                        <div className={styles.titleEdit}>
                            <h3>Description 1</h3>
                            <textarea
                                type='text'
                                className={styles.inputField}
                                name='desc1'
                                {...register('desc1')}
                            />
                        </div>
                        <div className={styles.titleEdit}>
                            <h3>Description 2</h3>
                            <textarea
                                type='text'
                                className={styles.inputField}
                                name='desc2'
                                {...register('desc2')}
                            />
                        </div>
                        <div className={styles.titleEdit}>
                            <h3>Description 3</h3>
                            <textarea
                                type='text'
                                className={styles.inputField}
                                name='desc3'
                                {...register('desc3')}
                            />
                        </div>
                        <div className={styles.titleEdit}>
                            <h3>Category</h3>
                            <textarea
                                type='text'
                                className={styles.inputField}
                                name='category'
                                {...register('category')}
                            />
                        </div>
                        <div className={styles.titleEdit}>
                            <h3>Description</h3>
                            <textarea
                                type='text'
                                className={styles.inputField}
                                name='description'
                                {...register('description')}
                            />
                        </div>
                        <div className={styles.titleEdit}>
                            <h3>Main Image</h3>
                            <input
                                className={styles.inputField}
                                type={"file"}
                                {...register('mainImage')}
                            />
                        </div>
                        <div className={styles.titleEdit}>
                            <h3>Slider Image</h3>
                            <input
                                className={styles.inputField}
                                type={"file"}
                                name="sliderImage"
                                multiple
                                {...register('sliderImage')}
                            />
                        </div>
                    </div>
                    <Button variant='outlined' type='submit'>
                        Update content
                    </Button>
                </form>
            </div>
        </div>
    </>);
};

export default News;
