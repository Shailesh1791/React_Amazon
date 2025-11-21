import serviceApi from "./ServiceConfig";
import { ENDPOINTS } from "../api/endPoints";

export const getProduct = async () => {
    console.log("getProduct service started...");
    let response;
    try {
        response = await serviceApi.get(ENDPOINTS.PRODUCTS.LIST);
        if (response.status) {
            console.log("response-",response.data);
        }
    } catch (e) {
        console.error(e);
    }
    console.log("getProduct service ended...");
    return response;
};

export const addProduct = async (payload: any) => {
    console.log("addProduct service started...");
    let response;
    try {
        response = await serviceApi.post(ENDPOINTS.PRODUCTS.SAVE, payload);
        if (response.status) {
            console.log("response-",response.data);
        }
    } catch (e) {
        console.error(e);
    }
    console.log("addProduct service ended...");
    return response;
};

export const updateProduct = async (productId: any, payload: any) => {
    console.log("updateProduct service started...");
    let response;
    try {
        response = await serviceApi.put(`${ENDPOINTS.PRODUCTS.UPDATE}/${productId}`,payload);
        if (response.status) {
           console.log("response-",response.data);
        }
    } catch (e) {
        console.error(e);
    }
     console.log("updateProduct service ended...");
    return response;
};

export const removeProduct = async (productId: any, payload: any) => {
    console.log("removeProduct service started...");
    let response;
    try {
        response = await serviceApi.delete(`${ENDPOINTS.PRODUCTS.DELETE}/${productId}`,payload);
        if (response.status) {
            console.log("response-",response.data);
        }
    } catch (e) {
        console.error(e);
    }
    console.log("removeProduct service ended...");
    return response;
};

export const getProductById = async (productId: any) => {
    console.log("getProductById service started...");
    let response;
    try {
        const response = await serviceApi.get(`${ENDPOINTS.PRODUCTS.LIST}/${productId}`);
        if (response.status) {
            console.log("response-",response.data);
        }
    } catch (e) {
        console.error(e);
    }
    console.log("getProductById service ended...");
    return response;
};