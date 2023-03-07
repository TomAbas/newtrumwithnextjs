import React, { useEffect, useState } from "react";
import { getLandingPageData } from "../../../ApiUrl/landingpageApi/landingApi";
import LandingPageForm from "../../../components/Admin/LandingPageForm";

const Index = () => {
  const [defaultValues, setDefaultValues] = useState();
  const fetchLandingPageData = async () => {
    await getLandingPageData().then((data) => {
      let title = data.title.map((item) => item.content).join("\n");
      let content1Line1 = data.description
        .map((item) => item.content)
        .join("\n");
      let content2Line1 = data.subTitle.map((item) => item.content).join("\n");
      let content3Line1 = data.listContent[0].content;
      let content3Line2 = data.listContent[0].description;
      let content4Line1 = data.listContent[1].content;
      let content4Line2 = data.listContent[1].description;
      let content5Line1 = data.listContent[2].content;
      let content5Line2 = data.listContent[2].description;
      let preLoadValue = {
        title1: title,
        content1Line1: content1Line1,
        content2Line1: content2Line1,
        content3Line1: content3Line1,
        content3Line2: content3Line2,
        content4Line1: content4Line1,
        content4Line2: content4Line2,
        content5Line1: content5Line1,
        content5Line2: content5Line2,
      };
      // console.log(preLoadValue);
      setDefaultValues(preLoadValue);
    });
  };
  useEffect(() => {
    fetchLandingPageData();
  }, []);
  return (
    <>
      {defaultValues ? (
        <LandingPageForm preLoadValue={defaultValues} />
      ) : (
        // <NewsForm />
        <div>Loading...</div>
      )}
    </>
  );
};

export default Index;
