import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 60000,
});

api.interceptors.response.use(
  (config) => config,
  (error) => {
    return Promise.reject(error.response);
  }
);

export default api;
