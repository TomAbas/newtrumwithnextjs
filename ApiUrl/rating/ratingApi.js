import axiosClient from '../axiosClient';

export async function getListRatingData() {
  return axiosClient.get(`rating`).then(({ data }) => data);
}

export async function updateRatingData(id, data) {
  return axiosClient.put(`rating/${id}`, data);
}

export async function addRatingData(data) {
  return axiosClient.post(`rating`, data);
}

export async function deleteRatingData(id) {
  return axiosClient.delete(`rating/${id}`);
}
