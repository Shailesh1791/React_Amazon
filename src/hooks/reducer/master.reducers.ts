import { RootModel } from "../model/root";
import { ActionType, IAction } from "../provider/ActionType";

const masterReducer=(store : RootModel, action : IAction) : RootModel=>{
    switch(action.type){
        case ActionType.SET_AMAZON_STORE:
            store!.storeProcess!.amazonStore=action.data as any;
            break;
        case ActionType.SET_ORDER_LIST:
            store!.storeProcess!.orderList= action.data as any;
            break;
        case ActionType.SET_PRODUCT_LIST:
            store!.storeProcess!.productList =action.data as any;
            break;
    }
    return store;
}

export default masterReducer;