import axiosClient from "../axiosClient";

export async function getLandingPageData() {
  return axiosClient.get("homepage").then(({ data }) => data);
}
