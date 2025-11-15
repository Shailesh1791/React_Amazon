import { useContext } from "../provider";
import { ActionType } from "../provider/ActionType";

const useDispatcher=()=>{
    const [store, dispatch]=useContext();
    console.log(store);
    const dispatchOrderList=(orderData: any)=>{
        dispatch({
            type: ActionType.SET_ORDER_LIST,
            data: orderData
        });
    }

    const dispatchProductList=(productData: any)=>{
        dispatch({
            type: ActionType.SET_PRODUCT_LIST,
            data: productData
        });
    }

    const dispatchSelectedProductList=(productData: any)=>{
        dispatch({
            type: ActionType.SET_SELECTED_PRODUCT,
            data: productData
        });
    }
    return {
        dispatchOrderList,
        dispatchProductList,
        dispatchSelectedProductList
    }
};

export default useDispatcher;