import React, {ReactElement} from "react";
import { RootModel,  ProviderPropsDefault, initialData } from "../model/root";
import { reducers } from "../reducer";
import { IAction } from "./ActionType";

const AppContext= React.createContext<[RootModel, React.Dispatch<IAction>]>([
    initialData,
    ()=>{},
]);

export const useContext=() : [RootModel, React.Dispatch<IAction>] => React.useContext(AppContext);

const Provider: React.FC<ProviderPropsDefault>=(
    props:ProviderPropsDefault
): ReactElement =>{
    const [store, dispatch]=React.useReducer(reducers,{
        ...initialData, 
        ...props.data,
    });
    return(
        <AppContext.Provider value={[store, dispatch]}>
            {props.children}
        </AppContext.Provider>
    );
};

export default Provider;
