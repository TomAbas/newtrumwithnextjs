import React, { useEffect, useState } from "react";
import { getInfoLandingPage } from "../../../ApiUrl/infoApi/infoApi";
import LandingPageForm from "../../../components/Admin/LandingPageForm";

const Index = () => {
  const [defaultValues, setDefaultValues] = useState();
  const fetchLandingPageData = async () => {
    await getInfoLandingPage().then((data) => {
      // console.log(data);
      let preLoadValue = {
        title1: data[0].firstLine,
        title2: data[0].secondLine,
        title3: data[0].thirdLine,
        content1Line1: data[1].firstLine,
        content1Line2: data[1].secondLine,
        content1Line3: data[1].thirdLine,
        content1Line4: data[1].fourthLine,
        content1Line5: data[1].fifthLine,
        content1Line6: data[1].sixthLine,
        content2Line1: data[2].firstLine,
        content2Line2: data[2].secondLine,
        content2Line3: data[2].thirdLine,
        content2Line4: data[2].fourthLine,
        content2Line5: data[2].fifthLine,
        content3Line1: data[3].firstLine,
        content3Line2: data[3].secondLine,
        content3Line3: data[3].thirdLine,
        content3Line4: data[3].fourthLine,
        content3Line5: data[3].fifthLine,
        content3Line6: data[3].sixthLine,
        content3Line7: data[3].seventhLine,
        content3Line8: data[3].eighthLine,
        content3Line9: data[3].ninthLine,
        content3Line10: data[3].tenthLine,
        content4Line1: data[4].firstLine,
        content4Line2: data[4].secondLine,
        content4Line3: data[4].thirdLine,
        content4Line4: data[4].fourthLine,
        content4Line5: data[4].fifthLine,
        content5Line1: data[5].firstLine,
        content5Line2: data[5].secondLine,
        content5Line3: data[5].thirdLine,
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
