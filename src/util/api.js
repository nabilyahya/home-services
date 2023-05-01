import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // Replace with your Laravel API URL
  withCredentials: true,
});

export default api;
