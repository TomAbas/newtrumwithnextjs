import Head from "next/head";
import styles from "../styles/Home.module.css";
import LandingPage from "../Views/LandingPage";
import { getLandingPageData } from "../ApiUrl/landingpageApi/landingApi";
import { Suspense } from "react";
import LoadingHome from "../components/Loading/LoadingHome";

export async function getStaticProps() {
  let res = await getLandingPageData();

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
export default function Home({ res }) {
  return (
    <Suspense fallback={<LoadingHome />}>
      <div className={styles.container}>
        <Head>
          <title>Trum Agency</title>
          <link rel="icon" href="/logo300px.ico" />
          {/* <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,500&display=swap"
          rel="stylesheet"
        /> */}

          <link
            href="https://fonts.googleapis.com/css?family=Inter:ital,wght@100;300;400;700&display=swap"
            rel="stylesheet"
          ></link>
          <meta
            name="description"
            content={res.title.map((item) => item.content).join(" ")}
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
            content={res.title.map((item) => item.content).join(" ")}
          />
          <meta
            property="og:image"
            content="https://pagesmanagementapi.com/storage/logothumnail.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Head>
        <LandingPage data={res} />
      </div>
    </Suspense>
  );
}
