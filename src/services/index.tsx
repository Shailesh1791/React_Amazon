import serviceApi from "./ServiceConfig";
import useDispatcher from "../hooks/dispatcher";


export const dashboardMappingService = () => {

    const { dispatchOrderList } = useDispatcher();
    const { dispatchProductList } = useDispatcher();

    const getOrderDataList = async () => {
        const response = await serviceApi.get("/orders");
        const data = response.data;
        dispatchOrderList(data);
        console.log("Orders Response -", data);
        return data;
    };

    const getProductDataList = async () => {
        const response = await serviceApi.get("/products");
        const data = response.data;
        dispatchProductList(data);
        console.log("Products Response -", data);
        return data;
    };
    const getProductDropDown = async () => {
        const response = await serviceApi.get("/products");
        const data = response.data;
        dispatchProductList(data);
        console.log("Products Response -", data);
        return data;
    };
    const getOrderDropDown = async () => {
        const response = await serviceApi.get("/products");
        const data = response.data;
        dispatchProductList(data);
        console.log("Products Response -", data);
        return data;
    };
    return {
        getOrderDataList,
        getProductDataList,
        getProductDropDown,
        getOrderDropDown
    };
}