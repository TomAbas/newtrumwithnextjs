import React, { useEffect, useState } from "react";
import {
  getAllProject,
  getDetailProjectData,
} from "../../ApiUrl/projectApi/projectApi";
import Head from "next/head";
import ProjectPage from "../../Views/ProjectPage";
import SwiperListImage from "../../components/SwiperListImage/SwiperListImage";
import stylesService from "../../styles/ServicesPage.module.css";
import ServicesPage3 from "../../components/ServicesPage/ServicesPage3/ServicesPage3";
import { useRouter } from "next/router";
import BestProjects from "../../components/landingpage/LandingPage/BestProjects/BestProjects";
import { getServicesData } from "../../ApiUrl/servicesApi/servicesApi";
import { getCategoryFromListAllProject } from "../../services/projectApiSerivces";
import aniStyle from "../../styles/Animation.module.css";

export async function getServerSideProps({ params }) {
  let res;
  if (params.idx !== "undefined" && params.idx !== "requestProvider.js.map") {
    let url = encodeURIComponent(params.idx);
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

const ServiceDetail = ({ res }) => {
  const [listCategory, setListCategory] = useState([]);
  const [dataServices, setDataServices] = useState();
  const router = useRouter();
  const { projectsidx } = router.query;

  async function handleGetListCate() {
    let listAllProject = await getAllProject({ isCategory: 1 });
    setListCategory(getCategoryFromListAllProject(listAllProject));
  }

  async function handleGetDataService() {
    let servicesData = await getServicesData();
    setDataServices(servicesData);
  }

  useEffect(() => {
    handleGetListCate();
    handleGetDataService();
  }, []);

  return (
    <>
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

      <div className={stylesService.serviceHeader}>
        <h1 className={aniStyle.fadeInUp}>{res.title}</h1>
      </div>

      <ProjectPage projectsidx={projectsidx} data={res} />
      <div className={stylesService.swiperServiceDetail}>
        <SwiperListImage />
      </div>
      {dataServices && (
        <>
          <ServicesPage3
            dataServices={dataServices}
            listCategory={listCategory}
          />
        </>
      )}

      <div className={stylesService.bannerContainerServiceDetail}>
        <BestProjects isShowBanner={false} />
      </div>
    </>
  );
};

export default ServiceDetail;
