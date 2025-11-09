import axios from "axios";
import { API_CONFIG } from "../api/apiConfig";

const serviceApi = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

serviceApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers = config.headers || {};
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},
    (error) => Promise.reject(error)
);

export default serviceApi;