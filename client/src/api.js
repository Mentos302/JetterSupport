import axios from "axios";

const api = axios.create({
  baseURL: "http://service.tabulasense.ru/api",
  responseType: "json",
  withCredentials: true,
});

// api.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

//   return config;
// });

export default api;
