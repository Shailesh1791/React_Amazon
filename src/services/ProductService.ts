import serviceApi from "./ServiceConfig";
import { ENDPOINTS } from "../api/endPoints";

export const getProduct = async () => {
    console.log("getProduct service started...");
    let result = [];
    try {
        const response = await serviceApi.get(ENDPOINTS.PRODUCTS.LIST);
        if (response.status) {
            console.log("response-",response.data);
            result = response.data;
        }
    } catch (e) {
        console.error(e);
    }
    console.log("getProduct service ended...");
    return result;
};

export const addProduct = async (payload: any) => {
    console.log("addProduct service started...");
    let result = [];
    try {
        const response = await serviceApi.post(ENDPOINTS.PRODUCTS.SAVE, payload);
        if (response.status) {
            console.log("response-",response.data);
            result = response.data;
        }
    } catch (e) {
        console.error(e);
    }
    console.log("addProduct service ended...");
    return result;
};

export const updateProduct = async (productId: any, payload: any) => {
    console.log("updateProduct service started...");
    let result = [];
    try {
        const response = await serviceApi.put(`${ENDPOINTS.PRODUCTS.UPDATE}/${productId}`,payload);
        if (response.status) {
           console.log("response-",response.data);
            result = response.data;
        }
    } catch (e) {
        console.error(e);
    }
     console.log("updateProduct service ended...");
    return result;
};

export const removeProduct = async (productId: any, payload: any) => {
    console.log("removeProduct service started...");
    let result = [];
    try {
        const response = await serviceApi.delete(`${ENDPOINTS.PRODUCTS.DELETE}/${productId}`,payload);
        if (response.status) {
            console.log("response-",response.data);
            result = response.data;
        }
    } catch (e) {
        console.error(e);
    }
    console.log("removeProduct service ended...");
    return result;
};

export const getProductById = async (productId: any) => {
    console.log("getProductById service started...");
    let result = [];
    try {
        const response = await serviceApi.get(`${ENDPOINTS.PRODUCTS.LIST}/${productId}`);
        if (response.status) {
            console.log("response-",response.data);
            result = response.data;
        }
    } catch (e) {
        console.error(e);
    }
    console.log("getProductById service ended...");
    return result;
};