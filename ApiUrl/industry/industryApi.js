import axiosClient from '../axiosClient';

export async function getListIndustryData() {
  return axiosClient.get(`industry`).then(({ data }) => data);
}

export async function updateIndustryData(id, data) {
  return axiosClient.put(`industry/${id}`, data);
}

export async function addIndustryData(data) {
  return axiosClient.post(`industry`, data);
}

export async function deleteIndustryData(id) {
  return axiosClient.delete(`industry/${id}`);
}
