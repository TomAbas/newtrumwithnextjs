import axiosClient from "../axiosClient";

export async function getDetailProjectData(title) {
  return axiosClient
    .get(`project/get-by-title/${title}`)
    .then(({ data }) => data);
}

export async function getAllProject() {
  return axiosClient.get("project").then(({ data }) => data);
}

export async function updateProjectData(data) {
  let id = data._id;
  delete data._id;
  return axiosClient
    .put(`project/update/${id}`, data)
    .then(({ data }) => data);
}