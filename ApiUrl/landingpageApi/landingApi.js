import axiosClient from "../axiosClient";

export async function getLandingPageData() {
  return axiosClient.get("homepage").then(({ data }) => data);
}

export async function editLandingPageData(body) {
  return axiosClient
    .put("homepage/update", body)
    .then(({ data }) => console.log(data));
}
