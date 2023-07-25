import axios from "../axiosClient";

const authLogin = (username, password) => {
  return axios.post("/login", { username, password });
};

export { authLogin };
