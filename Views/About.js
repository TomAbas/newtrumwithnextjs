import React, { useEffect, useState } from 'react';
import About01 from '../components/About/AboutPage/About-01/About01';
import About02 from '../components/About/AboutPage/About-02/About02';
import Page04 from '../components/About/AboutPage/Page-04/Page04';
import About03 from '../components/About/AboutPage/About-03/About03';
import styles from '../styles/Home.module.css';

const About = ({ data }) => {
  const [aboutData, setAboutData] = useState(
    null || {
      about01: {},
      about02: {},
      about03: {},
      description01: '',
      description02: '',
      video: '',
      _id: '',
    }
  );

  useEffect(() => {
    if (data) {
      setAboutData(data);
    }
  }, [data]);

  return (
    <>
      <About01 aboutData={aboutData} />
      <About02 aboutData={aboutData} />
      <div className={styles.container}>
        <Page04 aboutData={aboutData} />
        <About03 aboutData={aboutData} />
      </div>
    </>
  );
};

export default About;
