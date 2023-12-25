import React from 'react'
import styles from '../../styles/NewsPage.module.css';
import NewPage1 from './NewPage1/NewPage1';
import NewPage2 from './NewPage2/NewPage2';
import NewPage3 from './NewPage3/NewPage3';
import NewPage4 from "./NewPage4/NewPage4";
import BestProjects from "../landingpage/LandingPage/BestProjects/BestProjects";
import SwiperListImage from "../SwiperListImage/SwiperListImage";

const NewPage = () => {
    const imgArr = [
        {
            image: 'https://picsum.photos/500/500'
        },
        {
            image: 'https://picsum.photos/500/500'
        },
        {
            image: 'https://picsum.photos/500/500'
        },
        {
            image: 'https://picsum.photos/500/500'
        },
        {
            image: 'https://picsum.photos/500/500'
        },
        {
            image: 'https://picsum.photos/500/500'
        },

    ]
    return (
        <div className={styles.newPageContainer}>
            {/*<NewPage1/>*/}
            <div className={styles.newPageSubContainer}>
                {/*<NewPage2/>*/}
                {/*<NewPage3/>*/}
                <NewPage4/>
                <BestProjects isShowButton={false}/>
                <SwiperListImage imgArr={imgArr}/>
            </div>
        </div>
    )
}

export default NewPage