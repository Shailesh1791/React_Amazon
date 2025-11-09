import serviceApi from "./ServiceConfig";
import { ENDPOINTS } from "../api/endPoints";

export const getOrder = async () => {
    console.log("getOrder service started...");
    let result = [];
    try {
        const response = await serviceApi.get(ENDPOINTS.ORDERS.LIST);
        if (response.status) {
            console.log(response.data);
            result = response.data;
        }
    } catch (e) {
        console.error(e);
    }
    console.log("getOrder service ended...");
    return result;
};

export const addOrder = async (payload: any) => {
    console.log("addOrder service started...");
    let result = [];
    try {
        const response = await serviceApi.post(ENDPOINTS.ORDERS.SAVE, payload);
        if (response.status) {
            console.log(response.data);
            result = response.data;
        }
    } catch (e) {
        console.error(e);
    }
    console.log("addOrder service ended...");
    return result;
};

export const updateOrder = async (orderId: any, payload: any) => {
    console.log("updateOrder service started...");
    let result = [];
    try {
        const response = await serviceApi.put(`${ENDPOINTS.ORDERS.UPDATE}/${orderId}`, payload);
        if (response.status) {
            console.log(response.data);
            result = response.data;
        }
    } catch (e) {
        console.error(e);
    }
    console.log("updateOrder service ended...");
    return result;
};

export const removeOrder = async (orderId: any, payload: any) => {
    console.log("removeOrder service started...");
    let result = [];
    try {
        const response = await serviceApi.delete(`${ENDPOINTS.ORDERS.DELETE}/${orderId}`, payload);
        if (response.status) {
            console.log(response.data);
            result = response.data;
        }
    } catch (e) {
        console.error(e);
    }
    console.log("removeOrder service ended...");
    return result;
};

export const getOrderById = async (orderId: any) => {
    console.log("getOrderById service started...");
    let result = [];
    try {
        const response = await serviceApi.get(`${ENDPOINTS.ORDERS.LIST}/${orderId}`);
        if (response.status) {
            console.log(response.data);
            result = response.data;
        }
    } catch (e) {
        console.error(e);
    }
    console.log("getOrderById service ended...");
    return result;
};