import React, { useState, useEffect } from 'react';
import ListJobPage0 from '../components/ListJobPage/ListJobPage';
import { getAllProject } from '../ApiUrl/projectApi/projectApi';

const ListJobPage = ({ data }) => {
  const [arrayListJob, setArrayListJob] = useState([]);
  const [amountJob, setAmountJob] = useState([]);
  const fetchListJob = async () => {
    let projects = data.filter((item) => !item.isCategory);
    let b = new Array(Math.ceil(projects.length / 2))
      .fill()
      .map(() => new Array(2).fill(2));
    console.log(b);
    for (let i = 0; i < projects.length; i++) {
      b[Math.floor(i / 2)][i % 2] = projects[i];
    }
    setArrayListJob(b);
  };
  useEffect(() => {
    fetchListJob();
  }, []);
  return (
    <>
      <ListJobPage0 arrayListJob={arrayListJob} amountJob={amountJob} />
    </>
  );
};

export default ListJobPage;
