import React from 'react';
import Head from 'next/head';
import ProjectPage from '../../Views/ProjectPage';
import { useRouter } from 'next/router';
import {
  getAllProject,
  getDetailProjectData,
} from '../../ApiUrl/projectApi/projectApi';

export async function getStaticPaths() {
  const res = await getAllProject().then((data) => {
    let projects = data.filter((item) => !item.isCategory);
    return projects;
  });

  const paths = res.map((item) => ({
    params: { projectsidx: decodeURI(item.title) },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let res;
  if (
    params.projectsidx !== 'undefined' &&
    params.projectsidx !== 'requestProvider.js.map'
  ) {
    console.log(params);
    res = await getDetailProjectData(encodeURI(params.projectsidx)).then(
      (res) => {
        console.log(res);
        return res;
      }
    );
  }
  if (!res) {
    return {
      notFound: true,
    };
  }
  return {
    props: { res }, // will be passed to the page component as props
  };
}
const Projectsidx0 = ({ res }) => {
  // console.log(res);
  const router = useRouter();
  const { projectsidx } = router.query;
  // console.log(projectsidx);
  return (
    <>
      {' '}
      <Head>
        <link rel='icon' href='/logo300px.ico' />

        {/* metatag google  */}
        <meta name='description' content={res.listContent[0].description} />
        <meta
          name='keywords'
          content='Agency, Content,Marketing, KOL, Festival, Singer, Video, Art, Products'
        />
        <meta name='author' content='Trum Agency' />
        <link rel='canonical' href={`https://www.trumagency.com/projects/${res.title}`} />
        {/* metatag facebook */}
        <meta
          property='og:url'
          content={`https://www.trumagency.com/projects/${res.title}`}
        />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={res.title} />
        <meta
          property='og:description'
          content={res.listContent[0].description}
        />
        <meta property='og:image' content={res.mainImage} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <title>{res.title}</title>
      </Head>
      <ProjectPage projectsidx={projectsidx} data={res} />
    </>
  );
};

export default Projectsidx0;
