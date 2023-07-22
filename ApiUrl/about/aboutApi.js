import axiosClient from '../axiosClient';

export async function getAboutData() {
  return axiosClient.get(`about`).then(({ data }) => data);
}

export async function updateAboutData(data) {
  return axiosClient.put(`about`, data);
}
