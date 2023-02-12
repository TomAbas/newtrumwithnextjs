import axios from "axios";

let BaseURL = "index";
let EditURL = "admin";
function getInfoLandingPage() {
  return axios
    .get(`${BaseURL}/web-info`)
    .then(({ data }) => data)
    .catch((error) => {
      console.log(error);
    });
}

function editInfoLandingPage(id, data) {
  return axios.post(`${EditURL}/web-info/${id}`, data).catch((error) => {
    console.log(error);
  });
}
export { getInfoLandingPage, editInfoLandingPage };
