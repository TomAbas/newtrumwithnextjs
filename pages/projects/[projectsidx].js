import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { getDetailProjectData } from "../../ApiUrl/projectApi/projectApi";
import ProjectPage from "../../Views/ProjectPage";

export async function getServerSideProps({ params }) {
  let res;
  if (
    params.projectsidx !== "undefined" &&
    params.projectsidx !== "requestProvider.js.map"
  ) {
    let url = encodeURIComponent(params.projectsidx);
    res = await getDetailProjectData(url).then((res) => {
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
const Projectsidx0 = ({ res }) => {
  const router = useRouter();
  const { projectsidx } = router.query;

  return (
    <>
      {" "}
      <Head>
        <link rel="icon" href="/logo300px.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Inter:ital,wght@100;300;400;700&display=swap"
          rel="stylesheet"
        ></link>
        {/* metatag google  */}
        <meta name="description" content={res.listContent[0].description} />
        <meta
          name="keywords"
          content="Agency, Content,Marketing, KOL, Festival, Singer, Video, Art, Products"
        />
        <meta name="author" content="Trum Agency" />
        <link
          rel="canonical"
          href={`https://www.trumagency.com/projects/${res.title}`}
        />
        {/* metatag facebook */}
        <meta
          property="og:url"
          content={`https://www.trumagency.com/projects/${res.title}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={res.title} />
        <meta
          property="og:description"
          content={res.listContent[0].description}
        />
        <meta property="og:image" content={res.mainImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <title>{res.title}</title>
      </Head>
      <ProjectPage projectsidx={projectsidx} data={res} />
    </>
  );
};

export default Projectsidx0;
