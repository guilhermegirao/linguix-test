import axios, { AxiosRequestConfig } from "axios";
import { AUTH_USER_STORAGE } from "./constants";

const api = axios.create({
  baseURL: "https://api.linguix.com.br/v2/",
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem(AUTH_USER_STORAGE);

  config.headers = {
    Authorization: token ? `Bearer ${token}` : "",
  };

  return config;
});

export default api;
