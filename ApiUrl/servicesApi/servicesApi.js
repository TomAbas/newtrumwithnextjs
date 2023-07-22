import axiosClient from "../axiosClient";

export async function getServicesData() {
  return axiosClient.get(`service`).then(({ data }) => data);
}

export async function getListCardIndustryData() {
  return axiosClient.get(`industry`).then(({ data }) => data);
}

