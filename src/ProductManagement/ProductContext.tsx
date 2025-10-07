import React, { createContext, ReactNode, useState } from "react";

type Product = {
    productId: String,
    name: String,
    description: String,
    price: String
};

type ProductContextType = {
    products: Product[],
    addProduct: (prd: Product) => void,
    removeProduct: (prd: Product) => void
};

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

type ProductProviderType = {
    children: ReactNode
}

export const ProductProvider: React.FC<ProductProviderType> = ({ children }) => {

    const [products, setProducts] = useState<Product[]>([{
        "productId": "0",
        "name": "Pulsar Bike",
        "description": "Pulsar Bike for office purpose",
        "price": "250000"
    }]);

    const addProduct = (prd: Product) => {
        setProducts(prds => [...prds, prd]);
    }

    const removeProduct = (prd: Product) => {
        setProducts(prds => [...prds, prd]);
    }

    return (
        <ProductContext.Provider value={{ products, addProduct, removeProduct }}>
            {children}
        </ProductContext.Provider>
    );
}