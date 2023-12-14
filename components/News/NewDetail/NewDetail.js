import React, { useEffect, useState } from 'react';
import NewPageDetail2 from "./NewPageDetail2/NewPageDetail2";
import NewPageDetailSwiper from "./NewPageDetailSwiper/NewPageDetailSwiper";
import NewPageDetail3 from './NewPageDetail3/NewPageDetail3';
import { getListRatingData } from '../../../ApiUrl/rating/ratingApi';
import { getCategoryFromListAllProject } from '../../../services/projectApiSerivces';
import Page02Swiper from '../../landingpage/LandingPage/Page-02/Page02Swiper';
import NewPage2 from '../NewPage2/NewPage2';
import NewPage3 from '../NewPage3/NewPage3';

function NewDetail({ data, listAllProject }) {
    const [imgArr, setImgArr] = useState([{
        img: "https://firebasestorage.googleapis.com/v0/b/trum-project.appspot.com/o/web%2Fimage%202.webp?alt=media&token=3bf72a2e-75bd-424c-a8eb-3ee4af04efa2",
        postId: "Music Marketing",
        title: "Music Marketing",
    }, {
        img: "https://firebasestorage.googleapis.com/v0/b/trum-project.appspot.com/o/web%2Fimage%202.webp?alt=media&token=3bf72a2e-75bd-424c-a8eb-3ee4af04efa2",
        postId: "Music Marketing",
        title: "Music Marketing",
    }, {
        img: "https://firebasestorage.googleapis.com/v0/b/trum-project.appspot.com/o/web%2Fimage%202.webp?alt=media&token=3bf72a2e-75bd-424c-a8eb-3ee4af04efa2",
        postId: "Music Marketing",
        title: "Music Marketing",
    }])
    const [listCardIndustry, setListCardIndustry] = useState(null || []);

    const [dataServices, setDataServices] = useState(
        null || {
            listService: [],
            subTitle: "",
            title: {},
        }
    );
    const [listCategory, setListCategory] = useState([]);
    useEffect(() => {
        getListRatingData().then((res) => {
            setListCardIndustry(res);
        });
        setListCategory(getCategoryFromListAllProject(listAllProject));
    }, []);
    useEffect(() => {
        if (data) {
            setDataServices(data);
        }
    }, [data]);
    return (<>
        {/*<NewPageDetail2 />*/}
        {/*<NewPageDetailSwiper isLandingPage={true} imgArr={imgArr} />*/}
        {/*<NewPageDetail3 dataServices={dataServices} listCategory={listCategory} />*/}

        <NewPage2 />
        <NewPage3/>

    </>);
}

export default NewDetail;