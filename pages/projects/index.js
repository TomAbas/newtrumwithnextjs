import React from 'react';
import ListJobPage from '../../Views/ListJobPage';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import { getAllProject } from '../../ApiUrl/projectApi/projectApi';

export async function getStaticProps() {
  let res = await getAllProject().then((data) =>
    data.filter((item) => !item.isCategory)
  );

  // console.log(res);

  if (!res) {
    return {
      notFound: true,
    };
  }
  return {
    props: { res }, // will be passed to the page component as props
    revalidate: 30,
  };
}
const index = ({ res }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trum's Projects</title>
        <link rel='icon' href='/logo300px.ico' />{' '}
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,500&display=swap'
          rel='stylesheet'
        />
        {/* metatag google  */}
        <meta
          name='description'
          content='We are expert in turning your brand into the catchy icon'
        />
        <meta
          name='keywords'
          content='Agency, Content,Marketing, KOL, Festival, Singer, Video, Art, Products'
        />
        <meta name='author' content='Trum Agency' />
        <link rel='canonical' href='https://www.trumagency.com/projects' />
        {/* metatag facebook */}
        <meta property='og:url' content='https://www.trumagency.com/projects' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='Trum Agency' />
        <meta
          property='og:description'
          content='We are expert in turning your brand into the catchy icon'
        />
        <meta
          property='og:image'
          content='https://pagesmanagementapi.com/storage/logothumnail.png'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </Head>
      <ListJobPage data={res} />
    </div>
  );
};

export default index;
