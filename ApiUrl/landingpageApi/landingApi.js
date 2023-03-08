import axiosClient from "../axiosClient";

export async function getLandingPageData() {
  return axiosClient.get("homepage").then(({ data }) => data);
}

export async function editLandingPageData(body) {
  return axiosClient
    .put("homepage/update", body, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(({ data }) => console.log(data))
    .catch((err) => console.log(err));
}
