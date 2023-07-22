import axiosClient from '../axiosClient';

export async function getListReasonData() {
  return axiosClient.get(`reason`).then(({ data }) => data);
}

export async function updateReasonData(id, data) {
  return axiosClient.put(`reason/${id}`, data);
}

export async function addReasonData(data) {
  return axiosClient.post(`reason`, data);
}

export async function deleteReasonData(id) {
  return axiosClient.delete(`reason/${id}`);
}
