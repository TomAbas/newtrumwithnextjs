import axiosClient from "../axiosClient";

export async function getRecuiterData() {
  return axiosClient.get("recruitment").then(({ data }) => data);
}

export async function editRecuiterData(body) {
  return axiosClient
    .put("recruitment/update", body)
    .then(({ data }) => console.log(data))
    .catch((err) => console.log(err));
}
