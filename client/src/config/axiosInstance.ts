// axiosInstance.ts
import axios, { InternalAxiosRequestConfig, AxiosRequestHeaders } from "axios";

const api = axios.create();

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
