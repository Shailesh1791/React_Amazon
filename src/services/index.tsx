import serviceApi from "./ServiceConfig";
import useDispatcher from "../hooks/dispatcher";
import { getOrder, addOrder, getOrderById, updateOrder, removeOrder } from "./OrderService";
import { getProduct, addProduct, getProductById, updateProduct, removeProduct } from "./ProductService";


export const dashboardMappingService = () => {

    const { dispatchOrderList, dispatchProductList, dispatchSelectedProductList } = useDispatcher();

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

    const addSelectProduct = async (payload: any) => {
        dispatchSelectedProductList(payload)
    }

    const addOrderdata = async (payload: any) => {
        const data = await addOrder(payload);
        console.log("save Order -", data);
        return data;
    }

    const removeOrderdata = async (orderId: any, payload: any) => {
        const data = await removeOrder(orderId, payload);
        console.log("remove Order -", data);
        return data;
    }

    const updateOrderdata = async (orderId: any, payload: any) => {
        const data = await updateOrder(orderId, payload);
        console.log("update Order -", data);
        return data;
    }

    const getOrderDataById = async (orderId: any) => {
        const data = await getOrderById(orderId);
        console.log(" Order By Id -", data);
        return data;
    }
    return {
        getOrderDataList,
        getProductDataList,
        getProductDropDown,
        getOrderDropDown,
        addSelectProduct,
        addOrderdata,
        getOrderDataById,
        removeOrderdata,
        updateOrderdata,
    };
}