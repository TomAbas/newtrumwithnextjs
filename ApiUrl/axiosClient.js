import axios from "axios";

const axiosClient = axios.create({
  // baseURL: "https://pagesmanagementapi.com/",
  baseURL: "https://evalley-backend.herokuapp.com/",
  // baseURL: "http://localhost:5001",
  // baseURL: 'https://trum-api.onrender.com/',
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjg5ODcwMDA1fQ.zF27DDsuucQM-GvO9Q-rsmRKqYHCmVhT21ziC3Xcxtk`,
  },
  timeout: 30000,
});

axiosClient.interceptors.request.use(
  (config) => {
    console.log("🚀 ~ file: axiosClient.js:17 ~ config:", config)
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('Authorization');
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
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
    const token = localStorage.getItem('Authorization');
    if (token) {
      response.config.headers = {
        ...response.config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // Handle 401
    if (error.status === 401) {
      // Redirect to login page
      window.location.href = "/login";
      console.log("401");
    }
    return error;
  }
);

export default axiosClient;
