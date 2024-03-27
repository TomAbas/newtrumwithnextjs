import React, { useState, useEffect, Suspense } from "react";
import ListJobPage0 from "../components/ListJobPage/ListJobPage";
import { getAllProject } from "../ApiUrl/projectApi/projectApi";
import LoadingHome from "../components/Loading/LoadingHome";

const ListJobPage = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [arrayListJob, setArrayListJob] = useState([]);
  const [amountJob, setAmountJob] = useState([]);
  const fetchListJob = () => {
    setLoading(true);
    let projects = data.filter((item) => !item.isCategory);
    let b = new Array(Math.ceil(projects.length / 2))
      .fill()
      .map(() => new Array(2).fill(2));

    for (let i = 0; i < projects.length; i++) {
      b[Math.floor(i / 2)][i % 2] = projects[i];
    }
    setArrayListJob(b);
    setLoading(false);
  };
  useEffect(() => {
    fetchListJob();
  }, []);

  if (loading) {
    return <LoadingHome />;
  }

  return (
    <Suspense fallback={<LoadingHome />}>
      <ListJobPage0 arrayListJob={arrayListJob} amountJob={amountJob} />
    </Suspense>
  );
};

export default ListJobPage;
