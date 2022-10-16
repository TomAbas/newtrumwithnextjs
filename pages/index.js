import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LandingPage from "../Views/LandingPage";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trum Agency</title>
        <link rel='icon' href='/favicon.ico' />
        {/* <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel='stylesheet'
        /> */}
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
        <link rel='canonical' href='/' />
        {/* metatag facebook */}
        <meta property='og:url' content='https://www.trumagency.com' />
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
      <LandingPage />
    </div>
  );
}
