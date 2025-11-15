import React from "react";
import ProductDisplayPage from "./ProductDisplayPage";
import ProductDisplayTile from "./ProductDisplayTile";



const ProductDashboard: React.FC = (): React.ReactElement => {
    return (
        <ProductDisplayTile />
    );

}
export default React.memo(ProductDashboard);