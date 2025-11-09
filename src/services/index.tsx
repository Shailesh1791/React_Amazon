import serviceApi from "./ServiceConfig";
import useDispatcher from "../hooks/dispatcher";
import { getOrder, addOrder, getOrderById, updateOrder, removeOrder } from "./OrderService";
import { getProduct, addProduct, getProductById, updateProduct, removeProduct } from "./ProductService";


export const dashboardMappingService = () => {

    const { dispatchOrderList } = useDispatcher();
    const { dispatchProductList } = useDispatcher();

    const getOrderDataList = async () => {
        const data = await getOrder();
        dispatchOrderList(data);
        console.log("Orders Response -", data);
        return data;
    };

    const getProductDataList = async () => {
        const data = await getProduct();
        dispatchProductList(data);
        console.log("Products Response -", data);
        return data;
    };
    const getProductDropDown = async () => {
        const data = await getProduct();
        dispatchProductList(data);
        console.log("Products Response -", data);
        return data;
    };
    const getOrderDropDown = async () => {
        const data = await getProduct();
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