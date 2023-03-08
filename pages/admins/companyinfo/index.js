import React, { useState } from "react";
import { useEffect } from "react";
import { getContactPageData } from "../../../ApiUrl/contact/contact";
import CompanyInfo from "../../../components/Admin/CompanyInfo";

const Index = () => {
  const [defaultValuesCom, setDefaultValuesCom] = useState();
  const fetchCompanyInfo = async () => {
    await getContactPageData()
      .then((data) => {
        let preLoadValueCom = {
          title1: data.address,
          title2: data.phone,
          title3: data.email,
          content1Line3: data.instagram,
          content1Line4: data.facebook,
          content1Line5: data.twitter,
          content1Line6: data.linkedin,
        };
        console.log(preLoadValueCom);
        setDefaultValuesCom(preLoadValueCom);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchCompanyInfo();
  }, []);
  return (
    <>
      {" "}
      {defaultValuesCom ? (
        <CompanyInfo defaultValuesCom={defaultValuesCom} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Index;
