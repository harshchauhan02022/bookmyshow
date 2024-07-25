import axios from "axios";

const api = axios.create({
 baseURL: "http://localhost:9000/", // Ensure this matches your server's URL
 headers: {
  Accept: "application/json",
  "Content-Type": "application/json",
 },
});

// Include the token in headers if available
api.interceptors.request.use(
 async (config) => {
  const token = localStorage.getItem("token");
  if (token) {
   config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
 },
 (error) => {
  return Promise.reject(error);
 }
);

export default api;
