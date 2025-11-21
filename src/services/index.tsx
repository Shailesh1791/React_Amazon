import serviceApi from "./ServiceConfig";
import useDispatcher from "../hooks/dispatcher";
import { getOrder, addOrder, getOrderById, updateOrder, removeOrder } from "./OrderService";
import { getProduct, addProduct, getProductById, updateProduct, removeProduct } from "./ProductService";


export const dashboardMappingService = () => {

    const { dispatchOrderList, dispatchProductList, dispatchSelectedProductList } = useDispatcher();

    const getOrderDataList = async () => {
        const response = await getOrder();
        dispatchOrderList(response?.data);
        console.log("Orders Response -", response);
        return response;
    };

    const getProductDataList = async () => {
        const response = await getProduct();
        dispatchProductList(response?.data);
        console.log("Products Response -", response);
        return response;
    };
    const getProductDropDown = async () => {
        const response = await getProduct();
        dispatchProductList(response?.data);
        console.log("Products Response -", response);
        return response;
    };
    const getOrderDropDown = async () => {
        const response = await getProduct();
        dispatchProductList(response?.data);
        console.log("Products Response -", response);
        return response;
    };

    const addSelectProduct = async (payload: any) => {
        dispatchSelectedProductList(payload)
    }

    const addProductdata = async (payload: any) => {
        const response = await addProduct(payload);
        console.log("save Product -", response);
        return response;
    }

    const removeProductdata = async (productId: any, payload: any) => {
        const response = await removeProduct(productId, payload);
        console.log("remove Product -", response);
        return response;
    }

    const updateProductdata = async (productId: any, payload: any) => {
        const response = await updateProduct(productId, payload);
        console.log("update Product -", response);
        return response;
    }

    const getProductDataById = async (productId: any) => {
        const response = await getProductById(productId);
        console.log(" Product By Id -", response);
        return response;
    }

    const addOrderdata = async (payload: any) => {
        const response = await addOrder(payload);
        console.log("save Order -", response);
        return response;
    }

    const removeOrderdata = async (orderId: any, payload: any) => {
        const response = await removeOrder(orderId, payload);
        console.log("remove Order -", response);
        return response;
    }

    const updateOrderdata = async (orderId: any, payload: any) => {
        const response = await updateOrder(orderId, payload);
        console.log("update Order -", response);
        return response;
    }

    const getOrderDataById = async (orderId: any) => {
        const response = await getOrderById(orderId);
        console.log(" Order By Id -", response);
        return response;
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
        addProductdata,
        updateProductdata,
        removeProductdata,
    };
}