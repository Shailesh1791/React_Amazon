import axios from "axios";

const serviceApi = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});

serviceApi.interceptors.request.use((config) => {
    //const token = localStorage.getItem('token');
    const token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc2MTc0MDU5NywiZXhwIjoxNzYxNzQwNjU3fQ.XbNsex9jRldvK-6WPQZOnQoRzGcr9roSxS0KsaJJp4k";
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},
    (error) => Promise.reject(error)
);

export default serviceApi;