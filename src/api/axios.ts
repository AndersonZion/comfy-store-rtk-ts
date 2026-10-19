import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "https://course-api.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error("API error:", error.response.status, error.response.data);
      } else if (error.request) {
        console.error("API unavailable:", error.message);
      } else {
        console.error("Request error:", error.message);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
