import axiosClient from "../axiosClient";

export async function getRecuiterData() {
  return axiosClient.get("recruitment").then(({ data }) => data.listJob);
}

export async function editRecuiterData(body, id) {
  return axiosClient
    .put(`recruitment/update-hiring/${id}`, body)
    .then(({ data }) => console.log(data))
    .catch((err) => console.log(err));
}

export async function addRecuiterData(body) {
  return axiosClient
    .post("recruitment/add-hiring", body)
    .then(({ data }) => console.log(data))
    .catch((err) => console.log(err));
}

export async function deleteRecuiterData(id) {
  return axiosClient
    .delete(`recruitment/delete-hiring/${id}`)
    .then(({ data }) => console.log(data))
    .catch((err) => console.log(err));
}
