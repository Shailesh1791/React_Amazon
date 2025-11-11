import axios from "axios";
import { API_CONFIG } from "../api/apiConfig";
import { error } from "ajv/dist/vocabularies/applicator/dependencies";

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

serviceApi.interceptors.response.use((response) => response, (error) => {
    if (error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }
    return Promise.reject(error);
});

export default serviceApi;