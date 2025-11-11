import React from "react";
import InventoryDisplayPage from "./InventoryDisplayPage";



const InventoryDashboard: React.FC = (): React.ReactElement => {
    return (
        <InventoryDisplayPage />
    );

}
export default React.memo(InventoryDashboard);