import axios from "axios";
import { ENDPOINTS } from "../api/endPoints";

export const userLogin = async (payload: any) => {
    console.log("userLogin service started...");
    let result = "";
    try {
        const response = await axios.post(ENDPOINTS.AUTH.LOGIN, payload);
        if (response.status) {
            console.log(response.data);
            result = response.data.token;
        }
    } catch (e) {
        console.error(e);
    }
    console.log("userLogin service ended...");
    return result;
};

export const userRegister = async (payload: any) => {
    console.log("userRegister service started...");
    let result = "";
    try {
        const response = await axios.post(ENDPOINTS.AUTH.REGISTER);
        if (response.status) {
            console.log(response.data);
            result = response.data;
        }
    } catch (e) {
        console.error(e);
    }
    console.log("userRegister service ended...");
    return result;
};

export const userLogout = async (payload: any) => {
    console.log("userLogout service started...");
    let result = "";
    try {
        const response = await axios.post(ENDPOINTS.AUTH.LOGOUT);
        if (response.status) {
            console.log(response.data);
            result = response.data;
        }
    } catch (e) {
        console.error(e);
    }
    console.log("userLogout service ended...");
    return result;
};