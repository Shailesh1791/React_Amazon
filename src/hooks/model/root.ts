
export interface ComponentPropsDefault {
    children?: React.ReactNode
};

export interface ErrorState {
    hasError: boolean,
    error?: Error | any
};

export interface StoreProcess {
    orderList?: [] | any,
    productList?: [] | any,
    amazonStore?: [] | any,
    storeOptions?: [] | any,
    selectProductList?: [] | any,
};

export interface RootModel {
    storeProcess?: StoreProcess
};

export interface ProviderPropsDefault extends ComponentPropsDefault {
    data?: RootModel;
}

export const initialData: RootModel = {
    storeProcess: {
        orderList: [],
        productList: [],
        amazonStore: [],
        storeOptions: [],
        selectProductList: [],
    },
};