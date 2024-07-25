import axios from "axios";

const api = axios.create({
 baseURL: "http://localhost:9000/", // Base URL of your API server
 headers: {
  Accept: "application/json",
  "Content-Type": "application/json",
 },
});

// Add token to headers if available
api.interceptors.request.use(
 async (config) => {
  const token = localStorage.getItem("token");
  if (token) {
   config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
 },
 (error) => Promise.reject(error)
);

export default api;
