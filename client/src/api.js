import axios from "axios";

const api = axios.create({
  baseURL: "http://5.63.159.40:3001/api",
  responseType: "json",
});

// api.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

//   return config;
// });

export default api;
