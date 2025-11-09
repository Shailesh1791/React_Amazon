import { API_CONFIG } from "./apiConfig";

export const ENDPOINTS={
    AUTH:{
        LOGIN: `${API_CONFIG.BASE_URL}/auth/login`,
        REGISTER: `${API_CONFIG.BASE_URL}/auth/register`,
        LOGOUT: `${API_CONFIG.BASE_URL}/auth/logout`,
    },
    ORDERS:{
        LIST:`${API_CONFIG.BASE_URL}/orders`,
        SAVE:`${API_CONFIG.BASE_URL}/orders`,
        UPDATE:`${API_CONFIG.BASE_URL}/orders`,
        DELETE:`${API_CONFIG.BASE_URL}/orders`,
    },
    PRODUCTS:{
        LIST:`${API_CONFIG.BASE_URL}/products`,
        SAVE:`${API_CONFIG.BASE_URL}/products`,
        UPDATE:`${API_CONFIG.BASE_URL}/products`,
        DELETE:`${API_CONFIG.BASE_URL}/products`,
    }
};