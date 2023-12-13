import axiosClient from "../axiosClient";

export async function getContactPageData() {
  return axiosClient.get("contact").then(({ data }) => data);
}

export async function editContactPageData(body) {
  return axiosClient
    .put("contact/update", body)
    .then(({ data }) => console.log(data))
    .catch((err) => console.log(err));
}

export async function sendContact(body) {
  return axiosClient
    .post("contact/send", body)
    .then(({ data }) => console.log(data))
    .catch((err) => console.log(err));
}
  