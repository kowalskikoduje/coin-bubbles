import axios from "axios";
import { apiUrl, apiKey } from "../constants/api-config";

const http = axios.create({
  baseURL: apiUrl,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-access-token": apiKey,
  },
});

http.interceptors.request.use((config) => {
  config.params = { ...config.params, apiKey }; //add apiKey to each request
  return config;
});

export default http;
