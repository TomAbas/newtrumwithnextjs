import React from "react";
import Head from "next/head";
import ProjectPage from "../../Views/ProjectPage";
import { useRouter } from "next/router";
import axios from "axios";
import { urlNewsId } from "../../ApiUrl/Api";

export async function getServerSideProps ({params}){
  let res
  if(params.projectsidx !== 'undefined' && params.projectsidx !== 'requestProvider.js.map'){
     res = await axios.get(`${urlNewsId}/${params.projectsidx}`).then(({ data }) => {
      // console.log(data[0])
      return data[0]
    })
    .catch((error) => {
      console.log(error);
    });

  }
  if (!res) {
    return {
      notFound: true,
    }
  }
  return {
    props: { res }, // will be passed to the page component as props
  }

}
const Projectsidx0 = ({res}) => {
  console.log(res)
  const router = useRouter();
  const { projectsidx } = router.query;
  // console.log(projectsidx);
  return (
    <>
      {" "}
      <Head>

        <link rel='icon' href='/logo300px.ico' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Montserrat'
        />
         {/* metatag google  */}
         <meta
          name='description'
          content={res.tagline21}
        />
        <meta
          name='keywords'
          content='Agency, Content,Marketing, KOL, Festival, Singer, Video, Art, Products'
        />
        <meta name='author' content='Trum Agency' />
        <link rel='canonical' href={`/${res.postId}`} />
        {/* metatag facebook */}
        <meta property='og:url' content={`https://www.trumagency.com/projects/${res.postId}`} />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={res.title + " " + res.title2} />
        <meta
          property='og:description'
          content={res.tagline21}
        />
        <meta
          property='og:image'
          content={res.thumbnail}
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <title>{res.title + " " + res.title2}</title>
      </Head>
      <ProjectPage projectsidx={projectsidx} data={res}/>
    </>
  );
};

export default Projectsidx0;
