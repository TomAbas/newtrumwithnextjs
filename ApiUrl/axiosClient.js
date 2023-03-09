import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://hoangnt-trum-api.herokuapp.com/",
  // baseURL: "http://192.168.0.185:3000",
  // baseURL: "http://localhost:3001",

});

axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
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
    return error;
  }
);

export default axiosClient;
