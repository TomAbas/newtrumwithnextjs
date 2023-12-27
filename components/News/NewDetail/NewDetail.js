import React from "react";
import NewPage2 from "../NewPage2/NewPage2";
import NewPage3 from "../NewPage3/NewPage3";

function NewDetail({ data }) {
  return (
    <>
      {" "}
      <NewPage2 data={data} />
      <NewPage3 data={data} />
    </>
  );
}

export default NewDetail;
