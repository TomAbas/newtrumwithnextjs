import React, { useEffect, useState } from 'react';
import ServicesPage1 from './ServicesPage1/ServicesPage1';
import ServicesPage2 from './ServicesPage2/ServicesPage2';
import ServicesPage3 from './ServicesPage3/ServicesPage3';
import ServicesPage4 from './ServicesPage4/ServicesPage4';
import styles from '../../styles/ServicesPage.module.css';
import ServicesPage5 from './ServicesPage5/ServicesPage5';
import { getListRatingData } from '../../ApiUrl/rating/ratingApi';
import Industry from './ServicesPage6/Industry';

const ServicesPage = ({ data }) => {
  const [listCardIndustry, setListCardIndustry] = useState(null || []);
  const [dataServices, setDataServices] = useState(
    null || {
      listService: [],
      subTitle: '',
      title: {},
    }
  );
  useEffect(() => {
    getListRatingData().then((res) => {
      setListCardIndustry(res);
    });
  }, []);
  useEffect(() => {
    if (data) {
      setDataServices(data);
    }
  }, [data]);
  return (
    <div className={styles.serviceContainer}>
      <ServicesPage1 />
      <ServicesPage2 dataServices={dataServices} />
      <ServicesPage3 dataServices={dataServices} />
      <Industry />
      <ServicesPage4 listCardIndustry={listCardIndustry} />
      <ServicesPage5 />
    </div>
  );
};

export default ServicesPage;
