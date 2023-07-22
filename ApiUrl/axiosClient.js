import axios from 'axios';

const axiosClient = axios.create({
  // baseURL: "https://pagesmanagementapi.com/",
  // baseURL: 'https://evalley-backend.herokuapp.com/',
  // baseURL: "http://localhost:3001",
  baseURL: 'https://trum-api.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjg5ODcwMDA1fQ.zF27DDsuucQM-GvO9Q-rsmRKqYHCmVhT21ziC3Xcxtk`,
  },
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
