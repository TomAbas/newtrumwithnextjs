import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LandingPage from "../Views/LandingPage";
import { urlAbout } from "../ApiUrl/Api";
import axios from "axios";
export async function getServerSideProps() {
  let res;

  res = await axios
    .get(`${urlAbout}`)
    .then(({ data }) => {
      // console.log(data[0]);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });

  if (!res) {
    return {
      notFound: true,
    };
  }
  return {
    props: { res }, // will be passed to the page component as props
  };
}

export default function Home({ res }) {
  console.log(res);
  return (
    <div className={styles.container}>
      <Head>
        <title>Trum Agency</title>
        <link rel='icon' href='/logo.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat'
          rel='stylesheet'
        />
        {/* metatag google  */}
        <meta
          name='description'
          content={
            res[0].firstLine + " " + res[0].secondLine + " " + res[0].thirdLine
          }
        />
        <meta
          name='keywords'
          content='Agency, Content,Marketing, KOL, Festival, Singer, Video, Art, Products'
        />
        <meta name='author' content='Trum Agency' />
        <link rel='canonical' href='/' />
        {/* metatag facebook */}
        <meta property='og:url' content='https://www.trumagency.com' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='Trum Agency' />
        <meta
          property='og:description'
          content={
            res[0].firstLine + " " + res[0].secondLine + " " + res[0].thirdLine
          }
        />
        <meta
          property='og:image'
          content='https://pagesmanagementapi.com/storage/logothumnail.png'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </Head>
      <LandingPage data={res} />
    </div>
  );
}
