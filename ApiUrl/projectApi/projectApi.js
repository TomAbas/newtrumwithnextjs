import axiosClient from "../axiosClient";

export async function getDetailProjectData(title) {
  return axiosClient
    .get(`project/get-by-title/${title}`)
    .then(({ data }) => data);
}

export async function getAllProject(params) {
  return axiosClient.get("project", { params }).then(({ data }) => data);
}
export async function deleteProject(id) {
  return axiosClient.delete(`project/delete/${id}`).then(({ data }) => data);
}
export async function updateProjectData(data) {
  return axiosClient
    .put(`project/update/${data.id}`, data)
    .then(({ data }) => data);
}
export async function createProjectData(data) {
  return axiosClient.post(`project/add`, data).then(({ data }) => data);
}
