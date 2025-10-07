import React from "react";
import ProductDisplayPage from "./ProductDisplayPage";



const ProductDashboard: React.FC = (): React.ReactElement => {
    return (
        <ProductDisplayPage />
    );

}
export default React.memo(ProductDashboard);