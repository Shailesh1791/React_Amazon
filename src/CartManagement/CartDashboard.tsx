import React from "react";
import CartDisplayPage from "./CartDisplayPage";



const CartDashboard: React.FC = (): React.ReactElement => {
    return (
        <CartDisplayPage />
    );

}
export default React.memo(CartDashboard);