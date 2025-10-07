import { RootModel } from "../model/root";

export interface IAction{
    type : ActionType,
    data : RootModel | any
};

export enum ActionType {
    SET_AMAZON_STORE="SET_AMAZON_STORE",
    SET_ORDER_LIST="SET_ORDER_LIST",
    SET_PRODUCT_LIST="SET_PRODUCT_LIST",
}