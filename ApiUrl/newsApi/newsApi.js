import axios from "../axiosClient";

function getAllPosts() {
  return axios
    .get(`project`)
    .then(({ data }) => data)
    .catch((error) => {
      console.log(error);
    });
}

function getPost(id) {
  return axios
    .get(`project/get-by-title/${id}`)
    .then(({ data }) => data)
    .catch((error) => {
      console.log(error);
    });
}

export { getAllPosts, getPost };
