import Head from "next/head";
import React from "react";
import { getNewsDetail } from "../../ApiUrl/newsApi/newsApi";
import NewDetail from "../../components/News/NewDetail/NewDetail";
import NewPage1 from "../../components/News/NewPage1/NewPage1";
import listNewsStyles from "../../styles/DailyNewsStyles.module.css";
import styles from "../../styles/Home.module.css";

export async function getServerSideProps({ params }) {
  let res;
  if (params.idx !== "undefined" && params.idx !== "requestProvider.js.map") {
    console.log(params);
    let url = encodeURIComponent(params.idx);
    res = await getNewsDetail(url).then((res) => {
      console.log(res);
      return res;
    });
  }
  if (!res) {
    return {
      notFound: true,
    };
  }
  return {
    props: { res }, // will be passed to the page component as prop
  };
}

function DailyNewsDetail({ res }) {
  return (
    // <div className={styles.containerAbout}>
    <>
      <Head>
        <title>Trum Agency</title>
        <link rel="icon" href="/logo300px.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,500&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          // content={res.title.map((item) => item.content).join(' ')}
        />
        <meta
          name="keywords"
          content="Agency, Content,Marketing, KOL, Festival, Singer, Video, Art, Products"
        />
        <meta name="author" content="Trum Agency" />
        <link rel="canonical" href="https://www.trumagency.com/" />

        <meta property="og:url" content="https://www.trumagency.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Trum Agency" />
        <meta
          property="og:description"
          // content={res.title.map((item) => item.content).join(' ')}
        />
        <meta
          property="og:image"
          content="https://pagesmanagementapi.com/storage/logothumnail.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>

      <NewPage1 />

      <div className={listNewsStyles.newPageContainer}>
        <div className={listNewsStyles.newPageSubContainer}>
          <NewDetail data={res} listAllProject={res} />
        </div>
      </div>
    </>
    // </div>
  );
}

export default DailyNewsDetail;
