import axiosClient from "../axiosClient";

export async function getDetailProjectData(title) {
  return axiosClient
    .get(`project/get-by-title/${title}`)
    .then(({ data }) => data);
}

export async function getAllProject() {
  return axiosClient.get("project").then(({ data }) => data);
}
export async function deleteProject(id) {
  return axiosClient.delete(`project/delete/${id}`).then(({ data }) => data);
}
export async function updateProjectData(data) {
  return axiosClient
    .put(`project/update/${data.id}`, data)
    .then(({ data }) => data);
}
