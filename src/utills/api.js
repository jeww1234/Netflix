import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    Authorization: `${API_KEY}`,
  },
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    // 요청 전에 작업 수행
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
