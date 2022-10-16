import React, { useState, useEffect } from "react";
import ListJobPage0 from "../components/ListJobPage/ListJobPage";
import { urlNews } from "../ApiUrl/Api";
import axios from "axios";

const ListJobPage = () => {
  const [arrayListJob, setArrayListJob] = useState([]);
  const [amountJob, setAmountJob] = useState([]);
  const fetchListJob = async () => {
    await axios.get(urlNews).then(({ data }) => {
      // console.log(data);
      let a = data.filter((data) => {
        return data.deleted === "0";
      });
      setAmountJob(a);
      // console.log(a.length); 0 1 2 3 length = 4
      let b = [];
      for (let i = 0; i < a.length; i++) {
        let c;
        if (i === 0) {
          if (i < a.length - 1) {
            c = new Array(a[i], a[i + 1]);
            // console.log(c);
            b.push(c);
            // console.log(b)
          } else {
            c = new Array(a[i]);
            b.push(c);
            // console.log(b);
          }
        } else if (i > 0 && i < a.length - 1) {
          let count = i + 1;
          if (i < a.length - 2) {
            c = new Array(a[count], a[count + 1]);
            // console.log(b);
            b.push(c);
          } else {
            if (a.length % 2 === 0) {
            } else {
              c = new Array(a[count]);
              b.push(c);
            }
            // console.log(b);
          }
        }
      }
      // console.log(b);
      setArrayListJob(b);
    });
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
