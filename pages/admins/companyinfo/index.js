import React, { useState } from "react";
import CompanyInfo from "../../../components/Admin/CompanyInfo";

const index = () => {
  const [defaultValuesCom, setDefaultValuesCom] = useState();
  const fetchCompanyInfo = async () => {
    await axios
      .get(urlCompanyInfo)
      .then(({ data }) => {
        // console.log(data);
        let preLoadValueCom = {
          title1: data[0].address,
          title2: data[0].phoneNumber,
          title3: data[0].email,
          content1Line1: data[0].title,
          content1Line2: data[0].content,
          content1Line3: data[0].instagram,
          content1Line4: data[0].facebook,
          content1Line5: data[0].twitter,
          content1Line6: data[0].linkedin,
        };
        setDefaultValuesCom(preLoadValueCom);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {" "}
      {true ? (
        <CompanyInfo defaultValuesCom={defaultValuesCom} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default index;
