import React, { useEffect } from "react";

const useGetData = (axios) => {
  const [data, setData] = React.useState([]);
  async function getData() {
    await setData(axios());
  }
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return [data, setData];
};

export default useGetData;
