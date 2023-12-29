import React, { useEffect, useState } from 'react';
import ServiceForm from '../../../components/Admin/ServiceForm';
import { getServiceData } from '../../../ApiUrl/service/serviceApi';
import Loading from '../../../components/Loading/Loading';

const Index = () => {
  const [serviceData, setServiceData] = useState();
  const [serviceListData, setServiceListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  function getServiceDataFc() {
    setIsLoading(true)
    getServiceData().then((data) => {
      // console.log(data)
      const dataService = {
        title: data.title.content,
        subTitle: data.subTitle,
      };
      setServiceData(dataService);
      setServiceListData(data.listService);
    });
    setIsLoading(false)
  }
  useEffect(() => {
    getServiceDataFc();
  }, []);
  return (
    <div>
      <ServiceForm
        serviceData={serviceData}
        serviceListData={serviceListData}
      />
      {
        isLoading && <Loading />
      }
    </div>
  );
};

export default Index;
