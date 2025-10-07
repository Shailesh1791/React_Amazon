import { RootModel } from "../model/root";
import { IAction } from "../provider/ActionType";
import masterReducer from "./master.reducers";
import { getHooks } from "../Hooks";

export const reducers=(state : RootModel, action: IAction): RootModel=>{
    Object.freeze(state);
    const hooks=getHooks();
    let store : RootModel={...hooks.store, ...state};
    store=masterReducer(store,action);
    hooks.setStore({...hooks.store, ...store});
    return store;
}