import axios from "axios";

const api = axios.create({
  baseURL: "http://support.jetterhover.com/api",
  responseType: "json",
});

// api.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

//   return config;
// });

export default api;
