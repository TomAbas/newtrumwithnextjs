import Head from "next/head";
import styles from "../styles/Home.module.css";
import LandingPage from "../Views/LandingPage";
import { getInfoLandingPage } from "../ApiUrl/infoApi/infoApi";
import axios from "axios";
import { urlAbout } from "../ApiUrl/Api";
export async function getServerSideProps() {
  // let res = await getInfoLandingPage();
  // console.log(res)
  let res = await axios.get(urlAbout).then(({data})=>{
    console.log(data)
    return data
  })
  if (!res) {
    return {
      notFound: true,
    };
  }
  // resNext.setHead(
  //   "Cache-Control",
  //   "public, s-maxage=10, stale-while-revalidate=59"
  // );
  return {
    props: { res }, // will be passed to the page component as props
  };
}

export default function Home({ res }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trum Agency</title>
        <link rel='icon' href='/logo300px.ico' />
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
