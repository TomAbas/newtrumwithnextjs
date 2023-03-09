import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getContactPageData } from "../ApiUrl/contact/contact";
import { getRecuiterData } from "../ApiUrl/recuiter/recuiter";

const useGetContact = () => {
  const [companyInfo, setCompanyInfo] = useState();
  const [listJob, setListJob] = useState([]);
  const fetchCompanyInfo = async () => {
    setCompanyInfo(await getContactPageData());
    setListJob(
      await getRecuiterData().then((data) => {
        console.log(data);
        return data;
      })
    );
  };
  useEffect(() => {
    fetchCompanyInfo();
  }, []);
  return { companyInfo, listJob };
};

export default useGetContact;
