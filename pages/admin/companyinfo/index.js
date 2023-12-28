import React, { useState } from "react";
import { useEffect } from "react";
import { getContactPageData } from "../../../ApiUrl/contact/contact";
import { getRecuiterData } from "../../../ApiUrl/recuiter/recuiter";
import CompanyInfo from "../../../components/Admin/CompanyInfo";
import Loading from "../../../components/Loading/Loading";

const Index = () => {
  const [defaultValuesCom, setDefaultValuesCom] = useState();
  const fetchCompanyInfo = async () => {
    try {
      let data = await getContactPageData();
      let data1 = await getRecuiterData();
      let preLoadValueCom = {
        title1: data.address,
        title2: data.phone,
        title3: data.email,
        content1Line1: data1.title,
        content1Line2: data1.description,
        content1Line3: data.instagram,
        content1Line4: data.facebook,
        content1Line5: data.twitter,
        content1Line6: data.linkedin,
      };
      setDefaultValuesCom(preLoadValueCom);
    } catch (error) {}
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
       <Loading/>
      )}
    </>
  );
};

export default Index;

// .then((data) => {
//   let preLoadValueCom = {
//     title1: data.address,
//     title2: data.phone,
//     title3: data.email,
//     content1Line1: "",
//     content1Line2: "",
//     content1Line3: data.instagram,
//     content1Line4: data.facebook,
//     content1Line5: data.twitter,
//     content1Line6: data.linkedin,
//   };
//   console.log(preLoadValueCom);
//   setDefaultValuesCom(preLoadValueCom);
// });
