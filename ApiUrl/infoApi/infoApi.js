import axios from "axios";
import axiosClient from "../axiosClient";
let BaseURL = "index";
let EditURL = "admin";
function getInfoLandingPage() {
  return axiosClient
    .get(`${BaseURL}/web-info`)
    .then(({ data }) =>{
      console.log(data)
    return  data
    })
    .catch((error) => {
      console.log(error);
    });
}

function editInfoLandingPage(id, data) {
  return axiosClient.post(`${EditURL}/web-info/${id}`, data).catch((error) => {
    console.log(error);
  });
}
export { getInfoLandingPage, editInfoLandingPage };
