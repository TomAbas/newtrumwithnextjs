import axiosClient from '../axiosClient';

export async function getServiceData() {
  return axiosClient.get(`service`).then(({ data }) => data);
}

export async function updateServiceData(data) {
  return axiosClient.put(`service`, data);
}
