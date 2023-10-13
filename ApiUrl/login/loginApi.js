import axiosClient from "../axiosClient";

export async function loginAdmin(user) {
  return axiosClient
    .post(`/login`, user)
    .then(({ data }) => {
      return data
    })
    .catch((error) => {
      console.log(error);
    });
}
