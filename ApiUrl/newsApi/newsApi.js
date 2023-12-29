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

function addPostNews(data) {
  return axios
    .post(`news/add`, data)
    .then(({ data }) => data)
    .catch((error) => {
      console.log(error);
    });
}

function getAllPostNews(params) {
  return axios
    .get(`news`, { params })
    .then(({ data }) => data)
    .catch((error) => {
      console.log(error);
    });
}

function getNewsDetail(newsTitle) {
  return axios
    .get(`news/get-by-title/${newsTitle}`)
    .then(({ data }) => data)
    .catch((error) => {
      console.log(error);
    });
}

function deleteNews(id) {
  return axios
    .delete(`news/delete/${id}`)
    .then(({ data }) => data)
    .catch((error) => {
      console.log(error);
    });
}

function updateNews(id, body) {
  return axios
    .put(`news/update/${id}`, body)
    .then(({ data }) => data)
    .catch((error) => {
      console.log(error);
    });
}

export {
  getAllPosts,
  getPost,
  addPostNews,
  getAllPostNews,
  getNewsDetail,
  deleteNews,
  updateNews,
};
