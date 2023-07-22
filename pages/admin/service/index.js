import React, { useEffect, useState } from 'react';
import ServiceForm from '../../../components/Admin/ServiceForm';
import { getServiceData } from '../../../ApiUrl/service/serviceApi';

const Index = () => {
  const [serviceData, setServiceData] = useState();
  const [serviceListData, setServiceListData] = useState([]);
  function getServiceDataFc() {
    getServiceData().then((data) => {
      console.log(data)
      // // const dataService = {
      // //   title: data.title.content,
      // //   subTitle: data.content,
      // // };
      // setServiceData(dataService);
      // setServiceListData(data.listService);
    });
  }
  useEffect(() => {
    getServiceDataFc();
  }, []);
  return (
    <div>
      <ServiceForm serviceData={serviceData} serviceListData={serviceListData} />
    </div>
  );
};

export default Index;
