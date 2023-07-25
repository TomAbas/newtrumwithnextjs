import axios from "axios";

const axiosClient = axios.create({
  // baseURL: "https://pagesmanagementapi.com/",
  baseURL: "https://evalley-backend.herokuapp.com/",
  // baseURL: "http://localhost:5001",
  // baseURL: 'https://trum-api.onrender.com/',
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // Get token from LocalStorage and set to header
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.status === 401) {
      window.location.href = "/login";
      return;
    }
    return error;
  }
);

export default axiosClient;
