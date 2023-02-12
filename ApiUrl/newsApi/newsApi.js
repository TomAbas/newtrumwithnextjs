import axios from "axios";

let BaseURL = "index";
let EditURL = "admin";
function getAllPosts() {
  return axios
    .get(`${BaseURL}/post`)
    .then(({ data }) => data)
    .catch((error) => {
      console.log(error);
    });
}

function getPost(id) {
  return axios
    .get(`read/post/${id}`)
    .then(({ data }) => data)
    .catch((error) => {
      console.log(error);
    });
}

function editPost(id, data) {
  return axios.post(`${EditURL}/update/post/${id}`, data).catch((error) => {
    console.log(error);
  });
}
export { getAllPosts, getPost };
